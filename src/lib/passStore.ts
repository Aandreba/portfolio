import { createSignal } from "solid-js";

export const PASS_ORDER = ["about_me", "projects", "talks"] as const;
export type PassName = (typeof PASS_ORDER)[number];

export const PASSES: Record<PassName, { label: string; caption: string }> = {
    about_me: { label: "ABOUT ME", caption: "// base color, no lighting" },
    projects: { label: "PROJECTS", caption: "// distance from camera" },
    talks: { label: "TALKS", caption: "// final shaded output" },
};

// Module-scope signal: every island that imports this file shares the same
// instance (the browser only ever evaluates an ES module once), so the
// header nav, the hero viewport, and the scroll-sync observer all stay
// in lockstep without any prop drilling between separate Astro islands.
const [currentPass, setCurrentPassRaw] = createSignal<PassName>("about_me");

export { currentPass };

export function setCurrentPass(pass: PassName) {
    setCurrentPassRaw(pass);
    if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
            "--pass-color",
            `var(--${pass})`,
        );
        document.documentElement.style.setProperty(
            "--pass-soft",
            `var(--${pass}-soft)`,
        );
        document.documentElement.dataset.pass = pass;
    }
}
