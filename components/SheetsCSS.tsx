"use client";

import React from "react";

/* Pure-CSS stack of corrugated sheets — each sheet shows a fluted edge. */
export default function SheetsCSS({ className = "", spin = false }: { className?: string; spin?: boolean }) {
  const sheets = [0, 1, 2, 3];
  const W = 230;
  const D = 150;
  const thick = 14;
  const gap = 30;

  return (
    <div className={`grid place-items-center ${className}`}>
      <div style={{ perspective: 1000 }}>
        <div
          className={spin ? "boxcss-spin" : ""}
          style={{ position: "relative", width: W, height: D, transformStyle: "preserve-3d", transform: "rotateX(56deg) rotateZ(-32deg)" }}
        >
          {sheets.map((i) => (
            <div key={i} style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transform: `translateZ(${i * gap}px)` }}>
              {/* top face */}
              <div
                style={{
                  position: "absolute",
                  width: W,
                  height: D,
                  background: "linear-gradient(135deg, #dcae74, #cf9457)",
                  border: "1px solid #a86e33",
                  borderRadius: 2,
                }}
              />
              {/* front fluted edge */}
              <div
                style={{
                  position: "absolute",
                  width: W,
                  height: thick,
                  bottom: -thick,
                  transformOrigin: "top",
                  transform: "rotateX(-90deg)",
                  backgroundColor: "#b8823f",
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #cf9457 0 3px, #9c6d33 3px 6px)",
                  border: "1px solid #8f6a30",
                }}
              />
              {/* side fluted edge */}
              <div
                style={{
                  position: "absolute",
                  width: thick,
                  height: D,
                  right: -thick,
                  transformOrigin: "left",
                  transform: "rotateY(90deg)",
                  backgroundColor: "#a4702f",
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #cf9457 0 3px, #9c6d33 3px 6px)",
                  border: "1px solid #8f6a30",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
