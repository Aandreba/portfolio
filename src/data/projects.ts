export type Project = {
  name: string;
  badge?: { text: string; flagship?: boolean };
  description: string;
  tags: string[];
  stats: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Portal Ray Tracer",
    badge: { text: "FLAGSHIP · IN PROGRESS", flagship: true },
    description:
      "A real-time ray tracing renderer built on Vulkan and wgpu, supporting recursive traversal through portals. Uses virtual point lights (VPLs) for cross-portal shadow testing and a canonical-space shadow mapping technique that stores accumulated portal transforms per G-buffer pixel — avoiding a separate shadow map per portal depth under deferred rendering.",
    tags: ["Rust", "Vulkan", "wgpu", "WGSL", "Ray Queries"],
    stats: "In development",
  },
  {
    name: "zigrc",
    description:
      "Reference-counted pointers for Zig, inspired by Rust's Rc and Arc.",
    tags: ["Zig", "Memory management"],
    stats: "★ 91 · 4 forks",
    href: "https://github.com/Aandreba/zigrc",
  },
  {
    name: "wasm2spirv",
    description:
      "Compiles WebAssembly programs directly into SPIR-V shaders, bridging Wasm toolchains and GPU shader pipelines.",
    tags: ["Rust", "WebAssembly", "SPIR-V"],
    stats: "★ 59 · 1 fork",
    href: "https://github.com/Aandreba/wasm2spirv",
  },
  {
    name: "blaze",
    description: "A Rustified OpenCL experience — safe, ergonomic bindings for compute on the GPU.",
    tags: ["Rust", "OpenCL", "GPGPU"],
    stats: "★ 46 · 1 fork",
    href: "https://github.com/Aandreba/blaze",
  },
  {
    name: "nesmu",
    badge: { text: "FOSDEM 2026 TALK" },
    description:
      "A toy NES dynamic recompiler — translates 6502 game code into host machine code in real time. The subject of the FOSDEM 2026 talk below.",
    tags: ["C++", "Emulation", "Dynamic recompilation"],
    stats: "",
    href: "https://github.com/Aandreba/nesmu",
  },
];
