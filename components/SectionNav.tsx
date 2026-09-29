"use client";

import React, { useEffect, useState } from "react";

const items = [
  { id: "top", label: "Home" },
  { id: "products", label: "Products" },
  { id: "tools", label: "Box Tools" },
  { id: "industries", label: "Industries" },
  { id: "plant", label: "Our Plant" },
  { id: "why", label: "Why VKK" },
  { id: "leadership", label: "Leadership" },
  { id: "process", label: "How We Work" },
  { id: "faq", label: "FAQ" },
];

export default function SectionNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry nearest the top that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="flex flex-col gap-0.5 sm:gap-1 fixed left-0.5 sm:left-3 xl:left-5 top-1/2 -translate-y-1/2 z-40"
    >
      {items.map((it) => {
        const on = active === it.id;
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className="group relative flex items-center gap-3 py-1 sm:py-1.5"
            aria-current={on ? "true" : undefined}
            title={it.label}
          >
            <span className="relative grid place-items-center w-3.5 h-3.5">
              <span
                className={`rounded-full transition-all duration-300 ${
                  on
                    ? "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-orange shadow-[0_0_0_4px_rgba(242,146,29,0.18)]"
                    : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-navy/30 group-hover:bg-navy/60"
                }`}
              />
            </span>
            {/* labels only where there's room (xl+) */}
            <span
              className={`hidden xl:block whitespace-nowrap text-[12.5px] font-bold rounded-full px-2.5 py-1 transition-all duration-200 ${
                on
                  ? "opacity-100 translate-x-0 bg-navy text-white shadow-[var(--shadow-md)]"
                  : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 bg-white text-navy border border-line shadow-[var(--shadow-sm)]"
              }`}
            >
              {it.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
