import { For } from "solid-js";
import {
    currentPass,
    PASSES,
    PASS_ORDER,
    type PassName,
} from "../lib/passStore";

const SECTION_ID: Record<PassName, string> = {
  about_me: "about",
  projects: "projects",
  talks: "talks",
};

export default function SiteHeader() {
    return (
        <header>
            <div class="logo">
                <span class="dot" />
                Alex Andreba
            </div>

            <nav class="pass-nav mono" aria-label="Render pass navigation">
                <For each={PASS_ORDER}>
                    {(pass) => (
                        <button
                            classList={{ active: currentPass() === pass }}
                            onClick={() => {
                                document.getElementById(SECTION_ID[pass])?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            {PASSES[pass].label}
                        </button>
                    )}
                </For>
            </nav>

            <div class="header-links">
                <a
                    href="https://github.com/Aandreba"
                    target="_blank"
                    rel="noopener"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/alex-andreba/"
                    target="_blank"
                    rel="noopener"
                >
                    LinkedIn
                </a>
                <a href="mailto:aandreba@gmail.com">Email me</a>
            </div>
        </header>
    );
}
