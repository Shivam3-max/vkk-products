import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABand, SectionHeading, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products } from "@/data/products";
import { plyTypes } from "@/data/specs";

export const metadata: Metadata = {
  title: "Products — Corrugated Boxes, Sheets & Custom Packaging",
  description:
    "Explore VKK Products' full range: corrugated boxes, corrugated sheets (3/5/7 ply), customized packaging, export packaging, industrial packaging and packaging tapes.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Our Products"
        title="Complete corrugated"
        accent="packaging."
        sub="One partner for every packaging need — from single-wall shippers to triple-wall industrial crates, printed with your brand and engineered to your product."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link href={`/products/${p.slug}`} className="card card-hover p-7 h-full flex flex-col group">
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-14 h-14 rounded-2xl bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon name={p.icon} className="w-7 h-7" />
                    </span>
                    <span className="chip chip-orange">{p.tagline}</span>
                  </div>
                  <h2 className="mt-5 text-[24px]">{p.name}</h2>
                  <p className="mt-2.5 text-[15px] text-ink2 leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.specs.slice(0, 3).map((s) => (
                      <span key={s.label} className="chip text-[12px]">{s.label}: {s.value}</span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-orange3 font-bold text-[15px]">
                    View details <Icon name="arrow" className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ply quick reference */}
      <section className="section grid-dark bg-navy text-white relative overflow-hidden">
        <div className="absolute -right-24 -top-16 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
        <DotBlock className="absolute top-10 right-8 hidden md:block" color="text-white" />
        <div className="container relative">
          <SectionHeading light center kicker="Build Quality" title="Available in every" accent="ply & strength." sub="Match the board to your product — light single-wall to heavy triple-wall." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {plyTypes.map((p, i) => (
              <Reveal key={p.ply} delay={i * 60}>
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 h-full">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-orange text-[38px] leading-none">{p.ply}</span>
                    <span className="text-white/70 font-bold text-sm">ply</span>
                  </div>
                  <div className="mt-3 text-white font-bold text-[14px]">{p.walls}</div>
                  <p className="mt-2 text-white/60 text-[13px] leading-relaxed">{p.best} · {p.weightGuide}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-9">
            <Link href="/specifications" className="btn btn-primary">See full specifications <Icon name="arrow" className="w-4.5 h-4.5" /></Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
