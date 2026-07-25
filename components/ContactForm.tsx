"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import { site } from "@/data/site";
import { products } from "@/data/products";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", company: "", phone: "", email: "", product: products[0].name, qty: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  const buildText = () => {
    const lines = [
      "*Quote Request — VKK Products*",
      f.name && `Name: ${f.name}`,
      f.company && `Company: ${f.company}`,
      f.phone && `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      `Product: ${f.product}`,
      f.qty && `Quantity: ${f.qty}`,
      f.message && `\nDetails: ${f.message}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildText())}`, "_blank");
    setSent(true);
  };
  const sendEmail = () => {
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote Request — " + (f.company || f.name || "Website"))}&body=${encodeURIComponent(buildText())}`;
    setSent(true);
  };

  const input = "w-full px-4 py-3 rounded-xl border border-line2 text-[14.5px] outline-none focus:border-orange transition-colors";

  return (
    <div className="card p-6 md:p-8">
      <h3 className="text-[20px]">Request a quote</h3>
      <p className="text-[13.5px] text-ink2 mt-1">Fill this in and send it straight to us on WhatsApp or email.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-3.5">
        <input className={input} placeholder="Your name *" value={f.name} onChange={(e) => set("name", e.target.value)} />
        <input className={input} placeholder="Company" value={f.company} onChange={(e) => set("company", e.target.value)} />
        <input className={input} placeholder="Phone / WhatsApp *" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
        <input className={input} placeholder="Email" value={f.email} onChange={(e) => set("email", e.target.value)} />
        <select className={input} value={f.product} onChange={(e) => set("product", e.target.value)}>
          {products.map((p) => <option key={p.slug}>{p.name}</option>)}
        </select>
        <input className={input} placeholder="Quantity (e.g. 2000 boxes)" value={f.qty} onChange={(e) => set("qty", e.target.value)} />
      </div>
      <textarea
        className={`${input} mt-3.5 resize-none`}
        rows={4}
        placeholder="Sizes, ply, printing, delivery location, any details…"
        value={f.message}
        onChange={(e) => set("message", e.target.value)}
      />

      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        <button onClick={sendWhatsApp} className="btn btn-primary w-full">
          <Icon name="whatsapp" className="w-5 h-5" /> Send on WhatsApp
        </button>
        <button onClick={sendEmail} className="btn btn-ghost w-full">
          <Icon name="mail" className="w-5 h-5" /> Send by Email
        </button>
      </div>
      {sent && <p className="text-center text-[13px] text-ok font-bold mt-3">Opening your app — we'll respond shortly. Thank you!</p>}
      <p className="text-[11.5px] text-ink3 mt-3 text-center">We typically reply within one business day.</p>
    </div>
  );
}
