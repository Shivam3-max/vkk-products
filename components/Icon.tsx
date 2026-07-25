import React from "react";

type Props = { name: string; className?: string; strokeWidth?: number };

// Minimal, consistent line-icon set (stroke = currentColor).
const paths: Record<string, React.ReactNode> = {
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  boxes: (
    <>
      <path d="M3 9v6l5 3 4-2.5V9L7 6 3 9Z" />
      <path d="m3 9 4 2.5M7 11.5V18M12 9l5-3 4 3v6l-5 3-4-2.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" opacity=".55" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4a6 6 0 0 0-8.5 0L4 11.5V20h8.5L20 12.5A6 6 0 0 0 20 4Z" />
      <path d="M16 8 4 20M14 10H9M14 10v5" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20C5 20 4 12 5 6c6-1 14 0 14 6 0 5-4 8-8 8Z" />
      <path d="M5 20c3-6 7-9 11-10" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-2 8 5-3 5 3-2-8" />
      <path d="m11 8 1 2 1-2" opacity=".6" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V6l3-2v17H3Z" />
      <path d="M7 17h2M13 17h2" />
    </>
  ),
  "cog-box": (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" opacity=".5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 8.5V7M12 17v-1.5M15.5 12H17M7 12h1.5" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 8h6M9 11h6M9 8c3 0 4 3 1 3H9l4 5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2ZM20 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2ZM20 17v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11 12 16l-1.8-5L5.5 9.5 10.2 7.7 12 3Z" />
      <path d="M19 14l.8 2 2 .8-2 .8L19 20l-.8-2-2-.8 2-.8L19 14Z" opacity=".7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
      <path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5" />
    </>
  ),
  ruler: (
    <>
      <path d="M4 16 16 4l4 4L8 20 4 16Z" />
      <path d="M8 8l1.5 1.5M11 5l1.5 1.5M11 11l1.5 1.5M14 8l1.5 1.5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l3-1L19 7l-3-3L4 16l0 4Z" />
      <path d="M14 6l3 3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  tape: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" opacity=".5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.3 12.3c-.2.5-1.1 1-1.5 1-.4 0-.9.2-2.8-.6-2.4-1-3.9-3.4-4-3.6-.1-.2-1-1.3-1-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.2 1.7 2 1.1.9 1.4 1 1.7 1.1.2 0 .4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3.1.2.1.6-.1 1.1Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-down": <path d="M12 5v14M6 13l6 6 6-6" />,
  scissors: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M8 8l12 8M8 16l12-8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-4" />
      <circle cx="12" cy="15" r="1" />
    </>
  ),
  cogs: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M9 4v1.5M9 12.5V14M4 9h1.5M12.5 9H14M5.8 5.8l1 1M11.2 11.2l1 1M12.2 5.8l-1 1M5.8 12.2l1-1" />
      <circle cx="16" cy="16" r="2" opacity=".6" />
    </>
  ),
  hands: (
    <>
      <path d="M4 12l3-3 4 3 3-3 3 3 3-2v6l-6 4-8-3-5-2v-3Z" />
    </>
  ),
  pill: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
      <path d="M9 9l6 6" />
    </>
  ),
  cart: (
    <>
      <path d="M4 5h2l2 10h9l2-7H7" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </>
  ),
  package: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5M12 13v8M7.5 5.5l9 5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M5.6 18.4l1.8-1.8" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="8" width="14" height="8" rx="1" />
      <path d="M17 12h3M6 8V6M10 8V6M14 8V6" />
    </>
  ),
  roll: (
    <>
      <ellipse cx="8" cy="12" rx="3" ry="8" />
      <path d="M8 4h8a3 8 0 0 1 0 16H8" />
    </>
  ),
  glue: (
    <>
      <path d="M9 3h6v4l2 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l2-3V3Z" />
      <path d="M7 13h10" />
    </>
  ),
  blade: (
    <>
      <path d="M4 18 18 4l2 2L6 20l-2-2Z" />
      <path d="M14 6l4 4" />
    </>
  ),
  printer: (
    <>
      <rect x="6" y="3" width="12" height="6" />
      <path d="M6 17H4v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2" />
      <rect x="7" y="15" width="10" height="6" />
    </>
  ),
  die: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeDasharray="3 2.5" />
      <path d="M9 9h6v6H9z" />
    </>
  ),
  stitch: (
    <>
      <path d="M4 12h16" strokeDasharray="3 3" />
      <path d="M7 8v8M12 8v8M17 8v8" />
    </>
  ),
  mixer: (
    <>
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
      <path d="M12 14v6M9 20h6" />
    </>
  ),
  strap: (
    <>
      <rect x="4" y="7" width="16" height="10" rx="1" />
      <path d="M10 5v14M14 5v14" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  ship: (
    <>
      <path d="M4 14h16l-2 6H6l-2-6ZM12 4v10M8 8h8" />
    </>
  ),
  plane: (
    <>
      <path d="M12 3l2 8 6 3-6 1-2 5-2-5-6-1 6-3 2-8Z" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 8 5 12l3 1M12 5l2 3-3 1M17 16l-1-4-3 1" />
      <path d="M5 12l-1 4h5M14 8l3-1 2 4M11 20h5l-2-3" opacity=".6" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.8 }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.box}
    </svg>
  );
}
