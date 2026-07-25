"use client";

import React from "react";

type Palette = {
  front: string;
  back: string;
  side: string;
  top: string;
  bottom: string;
  border: string;
  texture: string;
};

const PALETTES: Record<string, Palette> = {
  kraft: {
    front: "#d29a5c",
    back: "#cf9457",
    side: "#b8823f",
    top: "#dca768",
    bottom: "#a4702f",
    border: "#a86e33",
    texture:
      "repeating-linear-gradient(0deg, rgba(0,0,0,0.045) 0 1px, transparent 1px 7px), linear-gradient(135deg, rgba(255,255,255,0.14), rgba(120,70,20,0.12))",
  },
  wood: {
    front: "#dcb47f",
    back: "#d3a970",
    side: "#c0954f",
    top: "#e6c896",
    bottom: "#b0863f",
    border: "#8f6a30",
    texture:
      "repeating-linear-gradient(90deg, rgba(90,55,15,0.16) 0 1px, transparent 1px 26px), linear-gradient(160deg, rgba(255,255,255,0.12), rgba(120,80,25,0.14))",
  },
};

/* Pure-CSS 3D corrugated box that resizes live to L×W×H (mm).
   Zero WebGL — reliable on every device. front/back = L×H, sides = W×H, top/bottom = L×W. */
export default function BoxCSS({
  l = 300,
  w = 220,
  h = 200,
  className = "",
  spin = false,
  open = false,
  base = 190,
  palette = "kraft",
  brand = false,
  bands = false,
}: {
  l?: number;
  w?: number;
  h?: number;
  className?: string;
  spin?: boolean;
  open?: boolean;
  base?: number;
  palette?: "kraft" | "wood";
  brand?: boolean;
  bands?: boolean;
}) {
  const max = Math.max(l, w, h, 1);
  const s = base / max;
  const L = Math.max(l * s, 24); // width  (X)
  const H = Math.max(h * s, 24); // height (Y)
  const W = Math.max(w * s, 24); // depth  (Z)

  const pal = PALETTES[palette];
  const face = (extra: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    backgroundColor: pal.front,
    backgroundImage: pal.texture,
    border: `1px solid ${pal.border}`,
    ...extra,
  });

  return (
    <div className={`grid place-items-center ${className}`}>
      <div style={{ perspective: 950 }}>
        <div
          className={spin ? "boxcss-spin" : ""}
          style={{
            position: "relative",
            width: L,
            height: H,
            transformStyle: "preserve-3d",
            transform: "rotateX(-20deg) rotateY(-32deg)",
          }}
        >
          {/* front : L x H (holds brand / bands overlays) */}
          <div style={face({ width: L, height: H, transform: `translateZ(${W / 2}px)`, backgroundColor: pal.front, overflow: "hidden" })}>
            {brand && (
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: H * 0.06 }}>
                <div style={{ padding: `${H * 0.05}px ${L * 0.1}px`, borderRadius: 6, background: "rgba(20,36,92,0.9)", color: "#fff", fontWeight: 800, fontSize: Math.max(L * 0.08, 9), letterSpacing: 0.5, fontFamily: "var(--font-archivo), sans-serif" }}>
                  YOUR BRAND
                </div>
                <div style={{ display: "flex", gap: L * 0.04 }}>
                  {["△", "↑↑", "☂"].map((m, i) => (
                    <span key={i} style={{ width: L * 0.11, height: L * 0.11, border: "1.5px solid rgba(20,36,92,0.55)", borderRadius: 3, display: "grid", placeItems: "center", fontSize: L * 0.06, color: "rgba(20,36,92,0.7)" }}>{m}</span>
                  ))}
                </div>
              </div>
            )}
            {bands && (
              <>
                <div style={{ position: "absolute", left: 0, right: 0, top: "24%", height: H * 0.09, background: "#2a3038" }} />
                <div style={{ position: "absolute", left: 0, right: 0, top: "62%", height: H * 0.09, background: "#2a3038" }} />
              </>
            )}
          </div>
          {/* back */}
          <div style={face({ width: L, height: H, transform: `rotateY(180deg) translateZ(${W / 2}px)`, backgroundColor: pal.back })} />
          {/* left / right : W x H */}
          <div style={face({ width: W, height: H, left: (L - W) / 2, transform: `rotateY(90deg) translateZ(${L / 2}px)`, backgroundColor: pal.side, overflow: "hidden" })}>
            {bands && <div style={{ position: "absolute", left: 0, right: 0, top: "24%", height: H * 0.09, background: "#2a3038" }} />}
            {bands && <div style={{ position: "absolute", left: 0, right: 0, top: "62%", height: H * 0.09, background: "#2a3038" }} />}
          </div>
          <div style={face({ width: W, height: H, left: (L - W) / 2, transform: `rotateY(-90deg) translateZ(${L / 2}px)`, backgroundColor: pal.side })} />
          {/* top : L x W — flush when closed, hovering lid when open */}
          <div
            style={face({
              width: L,
              height: W,
              top: (H - W) / 2,
              transform: open
                ? `rotateX(90deg) translateZ(${H / 2 + Math.max(W * 0.55, 34)}px)`
                : `rotateX(90deg) translateZ(${H / 2}px)`,
              backgroundColor: pal.top,
              transition: "transform .55s ease",
              boxShadow: open ? "0 18px 30px rgba(0,0,0,0.18)" : "none",
              overflow: "hidden",
            })}
          >
            {bands && !open && (
              <>
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "24%", width: L * 0.06, background: "#2a3038" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "62%", width: L * 0.06, background: "#2a3038" }} />
              </>
            )}
          </div>
          {/* bottom : L x W */}
          <div style={face({ width: L, height: W, top: (H - W) / 2, transform: `rotateX(-90deg) translateZ(${H / 2}px)`, backgroundColor: pal.bottom })} />
        </div>
      </div>

      <style>{`
        .boxcss-spin { animation: boxcssSpin 18s linear infinite; }
        @keyframes boxcssSpin {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to   { transform: rotateX(-20deg) rotateY(360deg); }
        }
        @media (prefers-reduced-motion: reduce) { .boxcss-spin { animation: none; } }
      `}</style>
    </div>
  );
}
