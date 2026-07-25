"use client";

import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/data/site";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const msg = encodeURIComponent("Hi VKK Products, I'd like a quote for corrugated packaging.");

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 bottom-5 right-5 flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-500 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <Icon name="whatsapp" className="w-6 h-6" />
      <span className="hidden sm:inline text-[14px]">Chat with us</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-orange border-2 border-white" />
    </a>
  );
}
