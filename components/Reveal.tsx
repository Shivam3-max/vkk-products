"use client";

import React, { useEffect, useRef, useState } from "react";

// Scroll-reveal wrapper. After the entrance finishes it de-promotes to a plain
// element (no transition / transform / opacity) so it never lingers as a
// composited layer — reliable paint on every renderer.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"hidden" | "in" | "settled">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setState("in");
            io.unobserve(e.target);
            window.setTimeout(() => setState("settled"), delay + 850);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  if (state === "settled") {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={`reveal ${state === "in" ? "in" : ""} ${className}`}
      style={{ transitionDelay: state === "in" ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
