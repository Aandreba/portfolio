import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// Astro pages are static (built once and served from GitHub Pages), so
// "checking once a day" means: don't hit the GitHub API on every build —
// only once per real day, cached to disk in between.
const CACHE_FILE = path.resolve(".cache/github-stars.json");
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export type RepoStats = { stars: number; forks: number };

type CacheEntry = { fetchedAt: number; stats: RepoStats };
type Cache = Record<string, CacheEntry>;

let cachePromise: Promise<Cache> | null = null;

async function readCache(): Promise<Cache> {
  try {
    return JSON.parse(await readFile(CACHE_FILE, "utf-8"));
  } catch {
    return {};
  }
}

async function writeCache(cache: Cache): Promise<void> {
  await mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function fetchRepoStats(owner: string, repo: string): Promise<RepoStats> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${owner}-portfolio-site`,
  };
  // GitHub Actions provides this automatically; without it the API is
  // limited to 60 req/hour per IP, which is easy to hit in CI.
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error for ${owner}/${repo}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return { stars: data.stargazers_count, forks: data.forks_count };
}

/**
 * Returns star/fork counts for a GitHub repo, fetched at most once per day.
 * Falls back to the last cached value (however old) if the API call fails,
 * and to `null` if there's no cache to fall back to.
 */
export async function getRepoStats(owner: string, repo: string): Promise<RepoStats | null> {
  // Share one cache load/save across all repos requested during a single build.
  cachePromise ??= readCache();
  const cache = await cachePromise;

  const key = `${owner}/${repo}`;
  const cached = cache[key];
  if (cached && Date.now() - cached.fetchedAt < ONE_DAY_MS) {
    return cached.stats;
  }

  try {
    const stats = await fetchRepoStats(owner, repo);
    cache[key] = { fetchedAt: Date.now(), stats };
    await writeCache(cache);
    return stats;
  } catch (err) {
    console.warn(`[github-stars] Failed to fetch ${key}, falling back to cache.`, err);
    return cached?.stats ?? null;
  }
}
