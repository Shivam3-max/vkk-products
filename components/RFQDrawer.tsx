"use client";

import React, { useState } from "react";
import Icon from "./Icon";
import { useRFQ } from "./RFQContext";
import { site } from "@/data/site";

export default function RFQDrawer() {
  const { items, remove, clear, open, setOpen } = useRFQ();
  const [form, setForm] = useState({ name: "", company: "", phone: "", note: "" });
  const [sent, setSent] = useState(false);

  const buildWhatsApp = () => {
    const lines = [
      `*New Enquiry — VKK Products*`,
      form.name && `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      "",
      "*Items:*",
      ...items.map((i, n) => `${n + 1}. ${i.name}${i.detail ? ` — ${i.detail}` : ""}`),
      form.note && `\nNote: ${form.note}`,
    ].filter(Boolean);
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const submit = () => {
    window.open(buildWhatsApp(), "_blank");
    setSent(true);
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-navy3/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[61] h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-line bg-navy text-white">
          <span className="font-display font-extrabold text-lg inline-flex items-center gap-2">
            <Icon name="boxes" className="w-5 h-5 text-orange" /> Your Enquiry
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close" className="w-9 h-9 grid place-items-center rounded-lg hover:bg-white/10">
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-paper2 grid place-items-center text-ink3 mb-4">
                <Icon name="box" className="w-8 h-8" />
              </div>
              <p className="font-bold text-navy">Your enquiry list is empty</p>
              <p className="text-sm text-ink2 mt-1">
                Add products, specs or a configured box and send us one combined request.
              </p>
            </div>
          ) : (
            <ul className="space-y-2.5">
              {items.map((i) => (
                <li key={i.id} className="flex items-start gap-3 p-3 rounded-xl border border-line bg-paper">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-navy text-orange grid place-items-center">
                    <Icon name="box" className="w-5 h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-navy text-sm">{i.name}</span>
                    {i.detail && <span className="block text-[12.5px] text-ink2 mt-0.5">{i.detail}</span>}
                  </span>
                  <button onClick={() => remove(i.id)} className="text-ink3 hover:text-orange3 p-1" aria-label="Remove">
                    <Icon name="close" className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="mt-5 space-y-3">
              <button onClick={clear} className="text-[13px] font-bold text-ink3 hover:text-orange3">
                Clear all
              </button>
              <div className="grid gap-2.5 pt-1">
                <input
                  className="w-full px-3.5 py-2.5 rounded-lg border border-line2 text-sm outline-none focus:border-orange"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="w-full px-3.5 py-2.5 rounded-lg border border-line2 text-sm outline-none focus:border-orange"
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <input
                  className="w-full px-3.5 py-2.5 rounded-lg border border-line2 text-sm outline-none focus:border-orange"
                  placeholder="Phone / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <textarea
                  className="w-full px-3.5 py-2.5 rounded-lg border border-line2 text-sm outline-none focus:border-orange resize-none"
                  rows={2}
                  placeholder="Quantity, sizes, any notes…"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line p-4 space-y-2">
            <button onClick={submit} className="btn btn-primary w-full">
              <Icon name="whatsapp" className="w-5 h-5" /> Send Enquiry on WhatsApp
            </button>
            <a href={`tel:${site.phone}`} className="btn btn-ghost w-full">
              <Icon name="phone" className="w-4 h-4" /> Or call {site.phoneDisplay}
            </a>
            {sent && <p className="text-center text-[12.5px] text-ok font-bold pt-1">Opening WhatsApp… we'll reply shortly.</p>}
          </div>
        )}
      </aside>
    </>
  );
}
