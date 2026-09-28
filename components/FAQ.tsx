"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3.5">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`card overflow-hidden transition-colors ${isOpen ? "border-kraft2" : ""}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
            >
              <span className="font-extrabold text-navy text-[16px] md:text-[17px] leading-snug">{f.q}</span>
              <span
                className={`shrink-0 w-9 h-9 grid place-items-center rounded-full transition-all ${
                  isOpen ? "bg-orange text-white rotate-45" : "bg-paper2 text-navy"
                }`}
              >
                <Icon name="plus" className="w-5 h-5" />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] text-ink2 leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
