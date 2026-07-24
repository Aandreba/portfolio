export type Talk = {
  date: string;
  place: string;
  title: string;
  venue: string;
  description: string;
  links: { label: string; href: string }[];
};

export const talks: Talk[] = [
  {
    date: "MAY 2024",
    place: "ZAGREB, CROATIA",
    title: "The beauty of hardware translation",
    venue: "DORS/CLUC 2024",
    description:
      "A journey through emulators and hardware translation: building a program that compiles 6502 binary code into host-executable code, and exploring the architecture, strengths and limitations of the 6502 processor.",
    links: [
      {
        label: "Talk announcement",
        href: "https://www.dorscluc.org/2024/05/talk-announcement-the-beauty-of-hardware-translation-by-alex-andreba/",
      },
    ],
  },
  {
    date: "JUNE 2024",
    place: "MÁLAGA, SPAIN",
    title: "The beauty of hardware translation",
    venue: "OpenSouthCode 2024",
    description:
      "A second run of the DORS/CLUC talk for OpenSouthCode's audience — taking attendees through emulating the 6502 system on modern architectures.",
    links: [
      {
        label: "LinkedIn recap",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7333250214566297600/",
      },
    ],
  },
  {
    date: "JANUARY 2026",
    place: "BRUSSELS, BELGIUM",
    title: "The joys and horrors of NES dynamic recompilation",
    venue: "FOSDEM 2026 — Retrocomputing devroom, Room H.1302",
    description:
      "Building a dynamic recompiler for NES games together with the audience: translating code written for the console in real time into machine code directly executable on the host computer.",
    links: [
      {
        label: "Watch the recording",
        href: "https://ftp.belnet.be/mirror/FOSDEM/video/2026/h1302/ETLVUA-the_joys_and_horrors_of_nes_dynamic_recompilation.av1.webm",
      },
      {
        label: "LinkedIn recap",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7439036003501191169/",
      },
    ],
  },
];
