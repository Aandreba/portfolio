export type Project = {
    name: string;
    badge?: { text: string; flagship?: boolean };
    description: string;
    tags: string[];
    href?: string;
};

export const projects: Project[] = [
    {
        name: "Portal Ray Tracer",
        badge: { text: "FLAGSHIP · IN PROGRESS", flagship: true },
        description:
            "A real-time ray tracing renderer built on Vulkan and wgpu, supporting recursive traversal through portals.",
        tags: ["Rust", "wgpu", "WGSL", "Ray Tracing"],
    },
    {
        name: "vgi",
        description:
            "A C++20 library and engine framework for Vulkan applications — device setup, windowing, and an extensible system/layer architecture for the main loop.",
        tags: ["C++", "Vulkan", "Engine"],
        href: "https://github.com/Aandreba/vgi",
    },
    {
        name: "zigrc",
        description:
            "Reference-counted pointers for Zig, inspired by Rust's Rc and Arc.",
        tags: ["Zig", "Memory management"],
        href: "https://github.com/Aandreba/zigrc",
    },
    {
        name: "wasm2spirv",
        description:
            "Compiles WebAssembly programs directly into SPIR-V shaders, bridging Wasm toolchains and GPU shader pipelines.",
        tags: ["Rust", "WebAssembly", "SPIR-V"],
        href: "https://github.com/Aandreba/wasm2spirv",
    },
    {
        name: "blaze",
        description:
            "A Rustified OpenCL experience — safe, ergonomic bindings for compute on the GPU.",
        tags: ["Rust", "OpenCL", "GPGPU"],
        href: "https://github.com/Aandreba/blaze",
    },
    {
        name: "nesmu",
        badge: { text: "FOSDEM 2026 TALK" },
        description:
            "A toy NES dynamic recompiler — translates 6502 game code into host machine code in real time. The subject of the FOSDEM 2026 talk below.",
        tags: ["C++", "Emulation", "Dynamic recompilation"],
        href: "https://github.com/Aandreba/nesmu",
    },
];
