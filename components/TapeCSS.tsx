"use client";

import React from "react";

/* Pure-CSS packaging tape roll with a peeling strip. */
export default function TapeCSS({ className = "", spin = false }: { className?: string; spin?: boolean }) {
  const R = 150; // outer diameter
  return (
    <div className={`grid place-items-center ${className}`}>
      <div style={{ perspective: 900 }}>
        <div style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg) rotateZ(-18deg)" }}>
          <div className={spin ? "boxcss-spin-y" : ""} style={{ transformStyle: "preserve-3d", position: "relative", width: R, height: R }}>
            {/* roll body (edge) */}
            <div
              style={{
                position: "absolute",
                width: R,
                height: R,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #d29a5c, #b8823f, #d29a5c, #a4702f, #d29a5c)",
                transform: "translateZ(-38px)",
                border: "2px solid #8f6a30",
              }}
            />
            {/* wound layers as a thick ring via stacked tori */}
            {[0, 10, 20, 30].map((z) => (
              <div
                key={z}
                style={{
                  position: "absolute",
                  width: R,
                  height: R,
                  borderRadius: "50%",
                  border: "18px solid #cf9457",
                  boxSizing: "border-box",
                  transform: `translateZ(${-38 + z}px)`,
                  opacity: 0.9,
                }}
              />
            ))}
            {/* top face ring */}
            <div
              style={{
                position: "absolute",
                width: R,
                height: R,
                borderRadius: "50%",
                border: `${R * 0.19}px solid #dcae74`,
                boxSizing: "border-box",
                background: "radial-gradient(circle, #ece3d5 0 34%, transparent 34%)",
                borderColor: "#dcae74",
              }}
            />
            {/* peeling tape strip */}
            <div
              style={{
                position: "absolute",
                left: R - 8,
                top: R * 0.34,
                width: R * 0.95,
                height: R * 0.34,
                background: "linear-gradient(180deg, rgba(230,210,170,0.85), rgba(207,148,87,0.85))",
                borderTop: "1px solid #b8823f",
                borderBottom: "1px solid #b8823f",
                transform: "rotateX(-58deg) translateZ(20px)",
                transformOrigin: "left center",
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        .boxcss-spin-y { animation: tapeSpin 14s linear infinite; }
        @keyframes tapeSpin { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }
        @media (prefers-reduced-motion: reduce) { .boxcss-spin-y { animation: none; } }
      `}</style>
    </div>
  );
}
