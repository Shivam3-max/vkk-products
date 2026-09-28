"use client";

import React, { useMemo, useState } from "react";
import Icon from "./Icon";
import { recommendBoard } from "@/data/specs";
import { useRFQ } from "./RFQContext";

export default function StrengthAdvisor() {
  const { add } = useRFQ();
  const [weight, setWeight] = useState(8);
  const [fragile, setFragile] = useState(false);
  const [isExport, setIsExport] = useState(false);
  const [added, setAdded] = useState(false);

  const rec = useMemo(() => recommendBoard(weight, fragile, isExport), [weight, fragile, isExport]);

  const detail = `Approx ${weight}kg${fragile ? " · fragile" : ""}${isExport ? " · export" : ""} → ${rec.ply}, ${rec.flute}, ${rec.gsm}`;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* inputs */}
      <div className="rounded-[22px] border border-line bg-white p-6 md:p-7 shadow-[var(--shadow-sm)]">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-xl bg-navy text-orange grid place-items-center">
            <Icon name="shield" className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-navy text-lg">Box Strength Advisor</h3>
            <p className="text-[13px] text-ink2">Tell us your product — get a board recommendation.</p>
          </div>
        </div>

        <label className="flex items-center justify-between text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">
          <span>Product weight</span>
          <span className="text-orange3 text-[16px]">{weight} kg</span>
        </label>
        <input type="range" min={1} max={60} value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        <div className="flex justify-between text-[11px] text-ink3 font-semibold mt-1 mb-6">
          <span>1 kg</span><span>30 kg</span><span>60 kg+</span>
        </div>

        <div className="space-y-3">
          <Toggle label="Fragile / delicate contents" desc="Glass, ceramics, electronics" on={fragile} set={setFragile} icon="chip" />
          <Toggle label="Export / long transit" desc="Sea, air or long-haul freight" on={isExport} set={setIsExport} icon="globe" />
        </div>
      </div>

      {/* result */}
      <div className="rounded-[22px] bg-navy text-white p-6 md:p-7 relative overflow-hidden flex flex-col">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-orange/15 blur-3xl" />
        <div className="relative">
          <span className="chip chip-dark">Recommended board</span>
          <div className="mt-4 font-display font-extrabold text-[26px] leading-tight">{rec.ply}</div>
          <p className="text-white/70 text-[14px] mt-2 leading-relaxed">{rec.note}</p>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              ["Flute", rec.flute],
              ["Kraft GSM", rec.gsm],
              ["Burst strength", rec.burst],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/8 border border-white/10 p-3">
                <div className="text-[10.5px] uppercase tracking-widest text-white/50 font-bold">{k}</div>
                <div className="text-white font-bold text-[14px] mt-1 leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-auto pt-6 flex flex-wrap gap-2.5">
          <button
            onClick={() => {
              add({ id: `advice-${Date.now()}`, name: "Board recommendation", detail });
              setAdded(true);
            }}
            className="btn btn-primary flex-1"
          >
            <Icon name={added ? "check" : "plus"} className="w-5 h-5" /> {added ? "Added" : "Add to Enquiry"}
          </button>
        </div>
        <p className="relative text-[11px] text-white/45 mt-3">
          Guidance based on typical handling. We confirm the exact spec with burst & compression testing.
        </p>
      </div>
    </div>
  );
}

function Toggle({
  label,
  desc,
  on,
  set,
  icon,
}: {
  label: string;
  desc: string;
  on: boolean;
  set: (v: boolean) => void;
  icon: string;
}) {
  return (
    <button
      onClick={() => set(!on)}
      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-colors ${
        on ? "border-orange bg-orange/5" : "border-line2 hover:border-navy"
      }`}
    >
      <span className={`w-10 h-10 rounded-lg grid place-items-center shrink-0 ${on ? "bg-orange text-white" : "bg-paper2 text-ink3"}`}>
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <span className="flex-1">
        <span className="block font-bold text-navy text-[14px]">{label}</span>
        <span className="block text-[12px] text-ink3">{desc}</span>
      </span>
      <span className={`w-11 h-6 rounded-full relative transition-colors ${on ? "bg-orange" : "bg-line2"}`}>
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </span>
    </button>
  );
}
