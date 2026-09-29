import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import BoxCSS from "@/components/BoxCSS";
import SectionNav from "@/components/SectionNav";
import Leadership from "@/components/Leadership";
import { SectionHeading, CTABand, Stat, DotBlock } from "@/components/UI";
import FAQ from "@/components/FAQ";
import { processSteps } from "@/data/faqs";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { machinery, productionAdvantages } from "@/data/machinery";
import { plyTypes } from "@/data/specs";
import { site, stats, whyChoose } from "@/data/site";

export default function Home() {
  return (
    <>
      <SectionNav />
      {/* ============ HERO ============ */}
      <section id="top" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute right-0 top-0 h-full w-[46%] bg-navy hidden lg:block" style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }} />
        <div className="absolute right-0 top-0 h-full w-[46%] hidden lg:block overflow-hidden" style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-orange/15 blur-3xl" />
          <DotBlock className="absolute right-10 top-14" />
        </div>
        <div className="container relative grid lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div>
            <Reveal>
              <span className="chip chip-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" /> {site.descriptor}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[clamp(34px,6vw,62px)] leading-[1.02]">
                Corrugated packaging that
                <span className="text-gradient"> protects products</span> &amp; builds trust.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[17px] text-ink2 leading-relaxed max-w-lg">
                VKK Products manufactures corrugated boxes and sheets in 3-ply, 5-ply and 7-ply — plus custom, export and
                industrial packaging — from our modern facility in Nalagarh, Himachal Pradesh.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/tools" className="btn btn-primary">
                  Build Your Box <Icon name="arrow" className="w-4.5 h-4.5" />
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  Explore Products
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-ink2 font-semibold">
                <span className="inline-flex items-center gap-2"><Icon name="check" className="w-4.5 h-4.5 text-orange" /> Up to 7-ply strength</span>
                <span className="inline-flex items-center gap-2"><Icon name="check" className="w-4.5 h-4.5 text-orange" /> 10-machine plant</span>
                <span className="inline-flex items-center gap-2"><Icon name="check" className="w-4.5 h-4.5 text-orange" /> Pan-India supply</span>
              </div>
            </Reveal>
          </div>

          {/* 3D box */}
          <Reveal delay={200} className="relative">
            <div className="relative h-[380px] md:h-[460px] rounded-[26px] overflow-hidden grid place-items-center">
              <BoxCSS l={320} w={230} h={240} spin base={230} className="w-full h-full" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <div className="chip bg-white !text-navy shadow-[var(--shadow-md)]">
                <Icon name="box" className="w-4 h-4 text-orange" /> Live 3D preview · rotate & resize in our tools
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-paper border-y border-line">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-9">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="bg-navy py-4 overflow-hidden">
        <div className="container flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-white/55 font-display font-extrabold text-[14px] uppercase tracking-wider">
          {["Corrugated Boxes", "3 / 5 / 7 Ply", "Custom Printing", "Export Packaging", "Industrial Crates", "Pan-India Supply"].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-7">
              {i > 0 && <span className="text-orange">◆</span>}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ============ PRODUCTS ============ */}
      <section id="products" className="section scroll-mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <SectionHeading kicker="Our Products" title="Complete packaging," accent="one partner." sub="From single-wall shippers to triple-wall industrial crates — engineered to your product, printed with your brand." />
            <Link href="/products" className="btn btn-ghost shrink-0">View all products <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link href={`/products/${p.slug}`} className="card card-hover p-6 h-full flex flex-col group">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon name={p.icon} className="w-6 h-6" />
                    </span>
                    <span className="chip">{p.tagline}</span>
                  </div>
                  <h3 className="mt-5 text-[21px]">{p.name}</h3>
                  <p className="mt-2 text-[14.5px] text-ink2 leading-relaxed flex-1">{p.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-orange3 font-bold text-[14px]">
                    Learn more <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLY EXPLAINER ============ */}
      <section className="section band">
        <div className="container">
          <SectionHeading center kicker="The Technical Difference" title="Understand" accent="ply & strength." sub="More plies mean more fluted layers — and more strength. Here's how to match the board to your product." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {plyTypes.map((p, i) => (
              <Reveal key={p.ply} delay={i * 70}>
                <div className="card card-hover p-6 h-full">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-orange text-[40px] leading-none">{p.ply}</span>
                    <span className="font-display font-extrabold text-navy text-[15px]">PLY</span>
                  </div>
                  <div className="mt-3 text-navy font-extrabold text-[15px]">{p.name.split("(")[1]?.replace(")", "") || p.name}</div>
                  <p className="mt-2 text-[13px] text-ink2 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-line space-y-1.5 text-[12.5px]">
                    <div className="flex justify-between"><span className="text-ink3">Thickness</span><span className="font-bold text-navy">{p.thickness}</span></div>
                    <div className="flex justify-between"><span className="text-ink3">Best for</span><span className="font-bold text-navy">{p.best}</span></div>
                    <div className="flex justify-between"><span className="text-ink3">Load</span><span className="font-bold text-navy">{p.weightGuide}</span></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/specifications" className="btn btn-navy">Full specifications guide <Icon name="arrow" className="w-4.5 h-4.5" /></Link>
          </div>
        </div>
      </section>

      {/* ============ TOOLS CTA ============ */}
      <section id="tools" className="section scroll-mt-24">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-[26px] border border-line bg-gradient-to-br from-white to-paper2 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="kicker">Interactive Tools</span>
                <h2 className="mt-3 text-[clamp(26px,3.6vw,40px)]">Design and spec your box <span className="text-gradient">in minutes.</span></h2>
                <p className="mt-4 text-ink2 text-[16px] leading-relaxed">
                  Three free tools most packaging suppliers don't offer: a live 3D box builder, a
                  strength advisor that recommends the right board, and a full specifications library.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    ["box", "3D Box Builder", "Set dimensions, style, ply & print — see it in 3D and build a precise spec."],
                    ["shield", "Strength Advisor", "Enter your product weight — get a board recommendation instantly."],
                    ["layers", "Specifications Library", "Ply, flute profiles, box styles and quality parameters explained."],
                  ].map(([icon, t, d]) => (
                    <div key={t} className="flex gap-3.5">
                      <span className="w-10 h-10 shrink-0 rounded-lg bg-navy text-orange grid place-items-center"><Icon name={icon} className="w-5 h-5" /></span>
                      <div>
                        <div className="font-extrabold text-navy text-[15px]">{t}</div>
                        <div className="text-[13.5px] text-ink2">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/tools" className="btn btn-primary mt-7">Open the tools <Icon name="arrow" className="w-4.5 h-4.5" /></Link>
              </div>
              <div className="relative h-[340px] rounded-[20px] overflow-hidden bg-navy grid place-items-center">
                <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-orange/15 blur-3xl" />
                <DotBlock className="absolute top-5 right-5" size={100} />
                <BoxCSS className="relative w-full h-full" spin open />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section id="industries" className="section grid-dark bg-navy text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute -right-24 top-10 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
        <DotBlock className="absolute top-10 left-8 hidden md:block" color="text-white" />
        <div className="container relative">
          <SectionHeading light center kicker="Industries We Serve" title="Packaging tuned to" accent="your sector." sub="Every industry handles, stacks and ships differently. We build to the way your product actually travels." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <Link href={`/industries/${ind.slug}`} className="group block rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.1] transition-colors h-full">
                  <span className="w-12 h-12 rounded-xl bg-orange/15 text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon name={ind.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 text-white text-[19px]">{ind.name}</h3>
                  <p className="mt-2 text-white/65 text-[14px] leading-relaxed">{ind.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MACHINERY ============ */}
      <section id="plant" className="section scroll-mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <SectionHeading kicker="Our Infrastructure" title="A 10-machine" accent="production line." sub="Advanced machinery, superior packaging. This is the plant behind every VKK box." />
            <Link href="/infrastructure" className="btn btn-ghost shrink-0">See the facility <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {machinery.map((m, i) => (
              <Reveal key={m.n} delay={(i % 5) * 50}>
                <div className="card card-hover p-5 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-lg bg-paper2 text-navy grid place-items-center"><Icon name={m.icon} className="w-5 h-5" /></span>
                    <span className="font-display font-extrabold text-line2 text-[22px]">{m.n}</span>
                  </div>
                  <div className="font-extrabold text-navy text-[14px] leading-snug">{m.name}</div>
                  <p className="text-[12.5px] text-ink3 mt-1.5 leading-snug">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {productionAdvantages.map((a) => (
              <span key={a.title} className="chip !py-2 !px-4">
                <Icon name={a.icon} className="w-4 h-4 text-orange" /> {a.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY VKK ============ */}
      <section id="why" className="section band scroll-mt-24">
        <div className="container">
          <SectionHeading center kicker="Why Choose VKK" title="Our competitive" accent="advantage." sub="Everything you need in a packaging partner — quality, capacity, customisation and dependable delivery." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 60}>
                <div className="card card-hover p-6 h-full">
                  <span className="w-12 h-12 rounded-xl bg-orange/12 text-orange3 grid place-items-center"><Icon name={w.icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[16.5px]">{w.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-2xl bg-navy text-white text-center px-6 py-8">
            <div className="font-display font-extrabold text-[clamp(20px,3vw,30px)]">
              "{site.promise.split(",")[0]},<span className="text-orange"> {site.promise.split(",").slice(1).join(",")}"</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <Leadership />

      {/* ============ PROCESS ============ */}
      <section id="process" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading center kicker="How We Work" title="From your brief to your" accent="dispatch." sub="A simple, transparent path from first enquiry to delivered boxes — no guesswork, no surprises." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="relative h-full">
                  <div className="card card-hover p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-12 h-12 rounded-xl bg-navy text-orange grid place-items-center"><Icon name={s.icon} className="w-6 h-6" /></span>
                      <span className="font-display font-extrabold text-line2 text-[30px] leading-none">{s.n}</span>
                    </div>
                    <h3 className="text-[16px]">{s.title}</h3>
                    <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{s.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <span className="hidden lg:grid absolute top-11 -right-3 z-10 w-6 h-6 place-items-center text-orange">
                      <Icon name="arrow" className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="section band scroll-mt-24">
        <div className="container">
          <SectionHeading center kicker="Questions & Answers" title="Everything you need to" accent="know." sub="The practical stuff — MOQ, samples, lead times and how quoting works. Still unsure? Just ask us." />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
