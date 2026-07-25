"use client";

import React from "react";
import BoxCSS from "./BoxCSS";
import SheetsCSS from "./SheetsCSS";
import TapeCSS from "./TapeCSS";

/* Distinct hero visual per product — CSS only. */
export default function ProductVisual({
  slug,
  className = "",
  spin = true,
  base = 200,
}: {
  slug: string;
  className?: string;
  spin?: boolean;
  base?: number;
}) {
  switch (slug) {
    case "corrugated-sheets":
      return <SheetsCSS className={className} spin={spin} />;

    case "packaging-tapes":
      return <TapeCSS className={className} spin={spin} />;

    case "customized-packaging":
      return <BoxCSS l={300} w={230} h={220} brand spin={spin} base={base} className={className} />;

    case "export-packaging":
      return <BoxCSS l={330} w={250} h={230} bands spin={spin} base={base} className={className} />;

    case "industrial-packaging":
      return <BoxCSS l={300} w={260} h={240} palette="wood" bands spin={spin} base={base} className={className} />;

    case "corrugated-boxes":
    default:
      return <BoxCSS l={320} w={230} h={220} spin={spin} base={base} className={className} />;
  }
}
