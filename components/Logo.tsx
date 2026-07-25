import React from "react";

// VKK Products wordmark + box mark, drawn in brand colours.
export default function Logo({
  className = "",
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "white";
}) {
  const primary = variant === "white" ? "#ffffff" : "var(--navy)";
  const accent = "var(--orange)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle cx="22" cy="22" r="21" stroke={accent} strokeWidth="1.6" />
        {/* box mark */}
        <path d="M22 9 12 14v10l10 5 10-5V14L22 9Z" fill="none" stroke={primary} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m12 14 10 5 10-5M22 19v10" stroke={primary} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 9 12 14l10 5 10-5L22 9Z" fill={accent} opacity="0.9" />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display font-extrabold tracking-tight text-[19px]"
          style={{ color: primary }}
        >
          VKK<span style={{ color: accent }}> Products</span>
        </span>
        <span
          className="block text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5"
          style={{ color: variant === "white" ? "rgba(255,255,255,.7)" : "var(--ink3)" }}
        >
          Packaging Solutions
        </span>
      </span>
    </span>
  );
}
