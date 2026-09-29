import type { Metadata } from "next";
import { PageHero, CTABand, SectionHeading, Stat, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { site, whyChoose } from "@/data/site";

export const metadata: Metadata = {
  title: "About VKK Products — Trusted Corrugated Packaging Partner",
  description:
    "VKK Products (VKK Projects) is a trusted corrugated packaging manufacturer in Nalagarh, Himachal Pradesh — delivering innovative, durable, cost-effective packaging across India.",
};

const mission = [
  "Deliver world-class packaging solutions",
  "Ensure customer satisfaction",
  "Maintain consistent product quality",
  "Promote innovation and sustainability",
  "Build long-term business relationships",
];

const businessInfo = [
  ["Trade Name", site.tradeName, "cog-box"],
  ["Brand Name", site.brand, "sparkles"],
  ["GSTIN", site.gstin, "shield"],
  ["Business Type", site.businessType, "factory"],
  ["Location", site.address.short, "pin"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Company Overview"
        title="About"
        accent="VKK Products."
        sub="A trusted name in the packaging industry, specializing in the manufacturing and supply of high-quality corrugated packaging solutions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* story */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,36px)]">Protecting products,<br /><span className="text-gradient">building trust.</span></h2>
            <div className="mt-5 space-y-4 text-[16px] text-ink2 leading-relaxed">
              <p>
                VKK Products is a trusted name in the packaging industry, specializing in the manufacturing and supply of
                high-quality corrugated packaging solutions. We deliver innovative, durable and cost-effective products
                designed to protect goods, strengthen brands and support business growth.
              </p>
              <p>
                With modern infrastructure, advanced machinery, skilled professionals and a genuine commitment to quality,
                we serve customers across multiple industries throughout India.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
              <Stat value="10+" label="Machines" />
              <Stat value="6" label="Product lines" />
              <Stat value="7-Ply" label="Max strength" />
              <Stat value="Pan-India" label="Supply" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-6">
              <h3 className="text-[18px] mb-4">Business Information</h3>
              <div className="divide-y divide-line">
                {businessInfo.map(([label, value, icon]) => (
                  <div key={label} className="flex items-center gap-3 py-3.5">
                    <span className="w-10 h-10 rounded-lg bg-navy text-orange grid place-items-center shrink-0"><Icon name={icon} className="w-5 h-5" /></span>
                    <span className="text-ink2 font-semibold text-[13.5px] flex-1">{label}</span>
                    <span className="text-navy font-extrabold text-[13.5px] text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* vision + mission */}
      <section className="section grid-dark bg-navy text-white relative overflow-hidden">
        <div className="absolute right-1/2 -top-10 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
        <div className="container relative grid lg:grid-cols-2 gap-10">
          <Reveal>
            <span className="w-14 h-14 rounded-2xl bg-orange/15 text-orange grid place-items-center"><Icon name="target" className="w-7 h-7" /></span>
            <h2 className="mt-5 !text-white text-[clamp(26px,3.6vw,38px)]">Our <span className="text-gradient">Vision</span></h2>
            <p className="mt-4 text-white/75 text-[17px] leading-relaxed">{site.vision}</p>
          </Reveal>
          <Reveal delay={120}>
            <span className="w-14 h-14 rounded-2xl bg-orange/15 text-orange grid place-items-center"><Icon name="check" className="w-7 h-7" /></span>
            <h2 className="mt-5 !text-white text-[clamp(26px,3.6vw,38px)]">Our <span className="text-gradient">Mission</span></h2>
            <div className="mt-5 space-y-3">
              {mission.map((m) => (
                <div key={m} className="flex items-start gap-3">
                  <Icon name="check" className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <span className="text-white/80 text-[15px]">{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* why choose */}
      <section className="section">
        <div className="container">
          <SectionHeading center kicker="Why Choose VKK" title="Our competitive" accent="advantage." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 60}>
                <div className="card card-hover p-6 h-full">
                  <span className="w-12 h-12 rounded-xl bg-orange/12 text-orange3 grid place-items-center"><Icon name={w.icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[16px]">{w.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
