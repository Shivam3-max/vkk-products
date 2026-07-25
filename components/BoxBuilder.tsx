"use client";

import React, { useMemo, useState } from "react";
import Icon from "./Icon";
import BoxCSS from "./BoxCSS";
import { boxStyles, plyTypes, flutes } from "@/data/specs";
import { useRFQ } from "./RFQContext";

const plyOptions = plyTypes.filter((p) => p.ply !== "2");

export default function BoxBuilder() {
  const { add } = useRFQ();
  const [l, setL] = useState(300);
  const [w, setW] = useState(200);
  const [h, setH] = useState(200);
  const [style, setStyle] = useState(boxStyles[0].code);
  const [ply, setPly] = useState("3");
  const [flute, setFlute] = useState("C");
  const [qty, setQty] = useState(500);
  const [print, setPrint] = useState(false);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  // Board area per box (m²) — a useful spec to show, not a price.
  const boardArea = useMemo(() => {
    const area = (2 * (l * w + w * h + l * h)) / 1_000_000; // m² incl. flaps approx
    return area;
  }, [l, w, h]);

  const configLine = `${boxStyles.find((b) => b.code === style)?.name} · ${l}×${w}×${h} mm · ${ply}-ply · ${flute}-flute · ${print ? "printed · " : ""}Qty ${qty}`;

  const chosenPly = plyTypes.find((p) => p.ply === ply)!;

  return (
    <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 items-stretch">
      {/* LEFT — 3D + live summary */}
      <div className="rounded-[22px] bg-navy relative overflow-hidden flex flex-col min-h-[480px]">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-orange/15 blur-3xl" />
        <div className="relative flex-1 min-h-[340px] grid place-items-center">
          <BoxCSS l={l} w={w} h={h} open={open} spin base={210} className="w-full h-full min-h-[340px]" />
        </div>
        <div className="relative px-5 pb-5 pt-2">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-white/85 text-[13px] font-bold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15"
            >
              <Icon name="box" className="w-4 h-4" /> {open ? "Close flaps" : "Open flaps"}
            </button>
            <span className="text-white/50 text-[12px]">Drag numbers · auto-rotating</span>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/10 p-4">
            <div className="text-white/55 text-[11px] font-bold uppercase tracking-widest mb-1">Your configuration</div>
            <div className="text-white font-semibold text-[14px] leading-snug">{configLine}</div>
          </div>
        </div>
      </div>

      {/* RIGHT — controls */}
      <div className="rounded-[22px] border border-line bg-white p-6 md:p-7 shadow-[var(--shadow-md)]">
        {/* dimensions */}
        <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-3">Dimensions (mm)</label>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {([["Length", l, setL, 50, 1200], ["Width", w, setW, 50, 1000], ["Height", h, setH, 30, 1000]] as const).map(
            ([lbl, val, setter, min, mx]) => (
              <div key={lbl}>
                <div className="text-[12px] text-ink3 font-semibold mb-1">{lbl}</div>
                <input
                  type="number"
                  value={val}
                  min={min}
                  max={mx}
                  onChange={(e) => setter(Math.min(mx, Math.max(min, Number(e.target.value) || min)))}
                  className="w-full px-3 py-2.5 rounded-lg border border-line2 font-bold text-navy outline-none focus:border-orange"
                />
                <input type="range" min={min} max={mx} value={val} onChange={(e) => setter(Number(e.target.value))} className="mt-2" />
              </div>
            )
          )}
        </div>

        {/* style */}
        <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Box style</label>
        <div className="flex flex-wrap gap-2 mb-5">
          {boxStyles.map((b) => (
            <button
              key={b.code}
              onClick={() => setStyle(b.code)}
              title={b.desc}
              className={`px-3 py-1.5 rounded-full text-[13px] font-bold border transition-colors ${
                style === b.code ? "bg-navy text-white border-navy" : "bg-white text-ink2 border-line2 hover:border-navy"
              }`}
            >
              {b.code}
            </button>
          ))}
        </div>

        {/* ply + flute */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Ply</label>
            <div className="flex gap-2">
              {plyOptions.map((p) => (
                <button
                  key={p.ply}
                  onClick={() => setPly(p.ply)}
                  className={`flex-1 py-2 rounded-lg text-[13px] font-extrabold border transition-colors ${
                    ply === p.ply ? "bg-orange text-white border-orange" : "bg-white text-ink2 border-line2 hover:border-orange"
                  }`}
                >
                  {p.ply}-ply
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Flute</label>
            <select
              value={flute}
              onChange={(e) => setFlute(e.target.value)}
              className="w-full py-2.5 px-3 rounded-lg border border-line2 font-bold text-navy outline-none focus:border-orange"
            >
              {flutes.map((f) => (
                <option key={f.code} value={f.code}>
                  {f.name} — {f.props.split(",")[0]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* qty + print */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Quantity</label>
            <input
              type="number"
              min={100}
              step={100}
              value={qty}
              onChange={(e) => setQty(Math.max(100, Number(e.target.value) || 100))}
              className="w-full px-3 py-2.5 rounded-lg border border-line2 font-bold text-navy outline-none focus:border-orange"
            />
          </div>
          <div>
            <label className="block text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Printing</label>
            <button
              onClick={() => setPrint((v) => !v)}
              className={`w-full py-2.5 rounded-lg text-[13px] font-extrabold border transition-colors ${
                print ? "bg-navy text-white border-navy" : "bg-white text-ink2 border-line2"
              }`}
            >
              {print ? "Branded print: On" : "Plain kraft"}
            </button>
          </div>
        </div>

        {/* estimate */}
        <div className="rounded-xl bg-paper2 border border-line p-4">
          <div className="text-[11px] font-bold text-ink3 uppercase tracking-widest mb-2.5">Your spec summary</div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="font-display font-extrabold text-navy text-[18px] leading-none">{ply}-ply</div>
              <div className="text-[11px] text-ink3 mt-1">{chosenPly.name.split("(")[1]?.replace(")", "") || "wall"}</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-navy text-[18px] leading-none">{flute}</div>
              <div className="text-[11px] text-ink3 mt-1">flute</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-navy text-[18px] leading-none">{boardArea.toFixed(2)}</div>
              <div className="text-[11px] text-ink3 mt-1">m² board/box</div>
            </div>
          </div>
        </div>
        <p className="text-[11.5px] text-ink3 mt-2">
          Add your box to the enquiry and we'll come back with a firm, competitive per-box price and lead time.
        </p>

        <button
          onClick={() => {
            add({ id: `box-${Date.now()}`, name: "Configured Box", detail: configLine });
            setAdded(true);
          }}
          className="btn btn-primary w-full mt-4"
        >
          <Icon name={added ? "check" : "plus"} className="w-5 h-5" />
          {added ? "Added — configure another" : "Add to Enquiry & get a price"}
        </button>
      </div>
    </div>
  );
}
