import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABand } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve — Pharma, FMCG, Electronics & More",
  description:
    "Corrugated packaging tuned to your sector — pharmaceutical, FMCG & food, electronics, agriculture, e-commerce and engineering. Serving Nalagarh, Baddi and pan-India.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries We Serve"
        title="Packaging tuned to"
        accent="your sector."
        sub="Every industry handles, stacks and ships differently. We build to the way your product actually travels — from the pharma belt of Baddi–Nalagarh to e-commerce fulfilment across India."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 70}>
                <Link href={`/industries/${ind.slug}`} className="card card-hover p-7 h-full flex flex-col group">
                  <span className="w-14 h-14 rounded-2xl bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon name={ind.icon} className="w-7 h-7" />
                  </span>
                  <h2 className="mt-5 text-[22px]">{ind.name}</h2>
                  <p className="mt-2.5 text-[14.5px] text-ink2 leading-relaxed flex-1">{ind.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-orange3 font-bold text-[14px]">
                    Explore <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Don't see your industry?" sub="If it needs packing, we can pack it. Tell us your product and we'll engineer the right solution." />
    </>
  );
}
