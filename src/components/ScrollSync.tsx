import { onCleanup, onMount } from "solid-js";
import { setCurrentPass, type PassName } from "../lib/passStore";

const SECTION_PASS: Record<string, PassName> = {
  about: "about_me",
  projects: "projects",
  talks: "talks",
};

/**
 * Renders nothing — this island's only job is to keep the shared pass
 * signal in sync with scroll position, so the header nav and the hero
 * viewport update as you read down the page.
 */
export default function ScrollSync() {
  let observer: IntersectionObserver | undefined;

  onMount(() => {
    const sections = Object.keys(SECTION_PASS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentPass(SECTION_PASS[entry.target.id]);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer!.observe(section));
  });

  onCleanup(() => observer?.disconnect());

  return null;
}
