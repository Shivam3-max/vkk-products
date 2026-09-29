import type { Metadata } from "next";
import { PageHero, CTABand, SectionHeading, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Sustainability — Recyclable, Eco-Friendly Corrugated Packaging",
  description:
    "Corrugated packaging is one of the most sustainable choices available — recyclable, renewable and biodegradable. See how VKK Products packs responsibly.",
};

const pillars = [
  { icon: "recycle", title: "100% Recyclable", desc: "Corrugated board is fully recyclable and is itself made largely from recycled fibre — a true circular material." },
  { icon: "leaf", title: "Renewable Fibre", desc: "Made from kraft paper sourced from renewable wood fibre rather than fossil-based plastics." },
  { icon: "feather", title: "Right-Weight Design", desc: "We spec the lightest board that safely does the job — less material, lower freight, smaller footprint." },
  { icon: "shield", title: "Less Damage, Less Waste", desc: "Properly engineered boxes mean fewer damaged goods — the biggest hidden waste in the supply chain." },
  { icon: "cogs", title: "Efficient Production", desc: "Optimised processes and minimal off-cut waste across our production line." },
  { icon: "box", title: "Reusable & Biodegradable", desc: "Boxes are reusable through multiple trips and biodegrade naturally at end of life." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        kicker="Sustainability"
        title="Packaging that's"
        accent="kind to the planet."
        sub="Corrugated is one of the most sustainable packaging materials in the world — recyclable, renewable and biodegradable. Responsible packaging is built into how we work."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading center kicker="Our Approach" title="Six ways corrugated" accent="does better." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 60}>
                <div className="card card-hover p-6 h-full">
                  <span className="w-12 h-12 rounded-xl bg-[#e8f3ea] text-[#2f9e52] grid place-items-center"><Icon name={p.icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[17px]">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-ink2 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid-dark bg-navy text-white relative overflow-hidden">
        <div className="absolute -left-24 -bottom-16 w-80 h-80 rounded-full bg-[#2f9e52]/20 blur-3xl" />
        <DotBlock className="absolute top-10 right-8 hidden md:block" color="text-white" />
        <div className="container relative text-center max-w-2xl mx-auto">
          <span className="w-16 h-16 mx-auto rounded-2xl bg-orange/15 text-orange grid place-items-center"><Icon name="recycle" className="w-8 h-8" /></span>
          <h2 className="mt-6 !text-white text-[clamp(24px,3.6vw,36px)]">Committed to sustainable, <span className="text-gradient">responsible manufacturing.</span></h2>
          <p className="mt-5 text-white/70 text-[16px] leading-relaxed">
            We believe good packaging protects both your product and the environment. When you choose corrugated with VKK,
            you choose a material that works hard and then goes back into the cycle.
          </p>
        </div>
      </section>

      <CTABand title="Package responsibly with VKK." sub="Ask us about right-weight board and recyclable options for your product." />
    </>
  );
}
