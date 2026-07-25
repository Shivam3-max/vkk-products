import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/data/site";

// Contained decorative dot block for corners (never behind text).
export function DotBlock({
  className = "",
  size = 132,
  color = "text-orange",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${color} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: "radial-gradient(currentColor 1.4px, transparent 1.4px)",
        backgroundSize: "18px 18px",
        opacity: 0.45,
        maskImage: "radial-gradient(circle at center, #000 55%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle at center, #000 55%, transparent 100%)",
      }}
    />
  );
}

export function SectionHeading({
  kicker,
  title,
  accent,
  sub,
  center,
  light,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className={`mt-3 text-[clamp(28px,4.2vw,44px)] ${light ? "!text-white" : ""}`}>
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {sub && <p className={`mt-4 text-[16.5px] leading-relaxed ${light ? "text-white/70" : "text-ink2"}`}>{sub}</p>}
    </div>
  );
}

// Page hero used on interior pages
export function PageHero({
  kicker,
  title,
  accent,
  sub,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  accent?: string;
  sub?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-navy3/50" style={{ clipPath: "polygon(30% 0,100% 0,100% 100%,0 100%)" }} />
      <DotBlock className="absolute top-7 right-7 hidden md:block" />
      <div className="container relative py-16 md:py-20">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-[13px] text-white/60 mb-5">
            {breadcrumb.map((b, i) => (
              <React.Fragment key={i}>
                {b.href ? (
                  <Link href={b.href} className="hover:text-orange">{b.label}</Link>
                ) : (
                  <span className="text-white/90">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <Icon name="arrow" className="w-3.5 h-3.5 opacity-50" />}
              </React.Fragment>
            ))}
          </nav>
        )}
        <span className="kicker !text-orange2">{kicker}</span>
        <h1 className="mt-3 text-[clamp(32px,6vw,60px)] !text-white max-w-3xl">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h1>
        {sub && <p className="mt-5 text-[17px] text-white/75 max-w-2xl leading-relaxed">{sub}</p>}
      </div>
      <div className="flute h-1.5 w-full" />
    </section>
  );
}

export function CTABand({
  title = "Ready to package smarter?",
  sub = "Tell us your product and quantity — we'll recommend the right board and send a quote.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-[26px] bg-navy text-white px-8 md:px-14 py-14 md:py-16">
          <DotBlock className="absolute -top-4 right-8 hidden md:block" size={116} />
          <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-orange/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="!text-white text-[clamp(26px,4vw,40px)]">{title}</h2>
              <p className="mt-3 text-white/75 text-[16px] leading-relaxed">{sub}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get a Quote <Icon name="arrow" className="w-4.5 h-4.5" />
              </Link>
              <a href={`tel:${site.phone}`} className="btn btn-white">
                <Icon name="phone" className="w-4.5 h-4.5" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stat({ value, label, light }: { value: string; label: string; light?: boolean }) {
  return (
    <div>
      <div className={`font-display font-extrabold text-[clamp(28px,4vw,44px)] ${light ? "text-white" : "text-navy"}`}>
        {value}
      </div>
      <div className={`text-[13.5px] font-semibold mt-1 ${light ? "text-white/60" : "text-ink3"}`}>{label}</div>
    </div>
  );
}
