import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABand, SectionHeading, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { plyTypes, flutes, boxStyles, qualityParams } from "@/data/specs";

export const metadata: Metadata = {
  title: "Specifications — Ply, Flutes, Box Styles & Quality Parameters",
  description:
    "The corrugated knowledge base: 2/3/5/7-ply construction, flute profiles (A, B, C, E, F, BC, EB), box styles (RSC, HSC, FOL, die-cut) and quality tests (GSM, burst, ECT, BCT).",
};

export default function SpecificationsPage() {
  return (
    <>
      <PageHero
        kicker="Specifications"
        title="The corrugated"
        accent="knowledge base."
        sub="Everything that goes into a strong box — ply construction, flute profiles, box styles and the quality parameters we test. Use it to spec smarter, or let our tools do it for you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Specifications" }]}
      />

      {/* quick nav */}
      <div className="border-b border-line bg-paper sticky top-[68px] z-30">
        <div className="container flex gap-1 overflow-x-auto no-scrollbar py-3">
          {[
            ["ply", "Ply Construction"],
            ["flutes", "Flute Profiles"],
            ["styles", "Box Styles"],
            ["quality", "Quality Tests"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap px-4 py-2 rounded-full text-[13.5px] font-bold text-ink2 hover:text-navy hover:bg-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* PLY */}
      <section id="ply" className="section scroll-mt-32">
        <div className="container">
          <SectionHeading kicker="01 · Ply Construction" title="How many" accent="walls?" sub="A ply is a layer of paper. More fluted layers between the liners means a thicker, stronger board that carries more weight." />
          <div className="grid md:grid-cols-2 gap-4 mt-9">
            {plyTypes.map((p, i) => (
              <Reveal key={p.ply} delay={(i % 2) * 70}>
                <div className="card p-6 h-full flex gap-5">
                  <div className="shrink-0 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-navy grid place-items-center">
                      <span className="font-display font-extrabold text-orange text-[30px] leading-none">{p.ply}</span>
                    </div>
                    <div className="text-[10px] font-bold text-ink3 uppercase tracking-widest mt-1.5">ply</div>
                  </div>
                  <div>
                    <h3 className="text-[18px]">{p.name}</h3>
                    <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="chip text-[11.5px]">{p.walls}</span>
                      <span className="chip text-[11.5px]">{p.thickness}</span>
                      <span className="chip chip-orange text-[11.5px]">{p.weightGuide}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLUTES */}
      <section id="flutes" className="section band scroll-mt-32">
        <div className="container">
          <SectionHeading kicker="02 · Flute Profiles" title="The waves that give" accent="strength." sub="The fluting is the wavy layer inside the board. Taller flutes cushion and stack better; finer flutes give a smoother print surface." />
          <Reveal className="mt-9 overflow-x-auto">
            <table className="w-full min-w-[680px] card overflow-hidden text-[14px]">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th className="px-5 py-3.5 font-extrabold">Flute</th>
                  <th className="px-5 py-3.5 font-extrabold">Height</th>
                  <th className="px-5 py-3.5 font-extrabold">Flutes / m</th>
                  <th className="px-5 py-3.5 font-extrabold">Properties</th>
                  <th className="px-5 py-3.5 font-extrabold">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {flutes.map((f, i) => (
                  <tr key={f.code} className={i % 2 ? "bg-paper" : "bg-white"}>
                    <td className="px-5 py-3.5"><span className="chip chip-orange !py-1 font-extrabold">{f.name}</span></td>
                    <td className="px-5 py-3.5 font-bold text-navy">{f.height}</td>
                    <td className="px-5 py-3.5 text-ink2">{f.fpm}</td>
                    <td className="px-5 py-3.5 text-ink2">{f.props}</td>
                    <td className="px-5 py-3.5 text-ink2">{f.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* BOX STYLES */}
      <section id="styles" className="section scroll-mt-32">
        <div className="container">
          <SectionHeading kicker="03 · Box Styles" title="Shapes for every" accent="job." sub="From the economical RSC to custom die-cut structures — the right style depends on your product, line and presentation." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
            {boxStyles.map((b, i) => (
              <Reveal key={b.code} delay={(i % 3) * 60}>
                <div className="card card-hover p-6 h-full">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-lg bg-navy text-orange grid place-items-center"><Icon name="box" className="w-6 h-6" /></span>
                    <span className="chip chip-orange font-extrabold">{b.code}</span>
                  </div>
                  <h3 className="mt-4 text-[16px]">{b.name}</h3>
                  <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="section bg-navy text-white relative overflow-hidden scroll-mt-32">
        <div className="absolute -right-24 -top-16 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
        <DotBlock className="absolute top-10 right-8 hidden md:block" color="text-white" />
        <div className="container relative">
          <SectionHeading light kicker="04 · Quality Tests" title="How we measure" accent="strength." sub="These are the numbers behind a reliable box. We test them so your product is protected — and you're not paying for board you don't need." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
            {qualityParams.map((q, i) => (
              <Reveal key={q.name} delay={(i % 3) * 60}>
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="!text-white text-[17px]">{q.name}</h3>
                    <span className="chip chip-dark !py-1 text-[11.5px]">{q.unit}</span>
                  </div>
                  <div className="text-orange text-[12.5px] font-bold mt-1">{q.short}</div>
                  <p className="mt-2.5 text-white/65 text-[13.5px] leading-relaxed">{q.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* tools cta inline */}
      <section className="section">
        <div className="container">
          <div className="rounded-[24px] border border-line bg-paper2 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="kicker">Let the tools do the work</span>
              <h2 className="mt-3 text-[clamp(22px,3vw,30px)]">Not sure what to pick?</h2>
              <p className="mt-2 text-ink2 text-[15px] max-w-lg">Our Strength Advisor turns your product weight into a board recommendation, and the Box Builder previews it in 3D.</p>
            </div>
            <Link href="/tools" className="btn btn-primary shrink-0">Open box tools <Icon name="arrow" className="w-4.5 h-4.5" /></Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
