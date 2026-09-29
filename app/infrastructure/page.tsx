import type { Metadata } from "next";
import { PageHero, CTABand, SectionHeading, Stat, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { machinery, productionAdvantages, facilityHighlights } from "@/data/machinery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Infrastructure — Our Manufacturing Facility & Machinery",
  description:
    "A modern corrugated packaging plant in Nalagarh with a 10-machine production line — corrugation, cutting, pasting, printing, die-punching, stitching and strapping.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        kicker="Our Infrastructure"
        title="Advanced machinery."
        accent="Superior packaging."
        sub="A state-of-the-art facility equipped with modern machinery for precision, quality and efficiency — capable of handling bulk orders with consistent, reliable output."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Infrastructure" }]}
      />

      {/* highlights */}
      <section className="section">
        <div className="container">
          <SectionHeading kicker="Facility Highlights" title="Built for" accent="scale & precision." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
            {facilityHighlights.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 60}>
                <div className="card card-hover p-6 h-full">
                  <span className="w-12 h-12 rounded-xl bg-orange/12 text-orange3 grid place-items-center"><Icon name={f.icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[17px]">{f.title}</h3>
                  <p className="mt-2 text-[14px] text-ink2 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* machinery grid */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute -right-24 -top-16 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
        <DotBlock className="absolute top-10 right-8 hidden md:block" color="text-white" />
        <div className="container relative">
          <SectionHeading light center kicker="Our Machinery" title="A 10-machine" accent="production line." sub="Every stage of the corrugated process, in-house — from raw kraft roll to strapped, dispatch-ready boxes." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-10">
            {machinery.map((m, i) => (
              <Reveal key={m.n} delay={(i % 5) * 50}>
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 h-full hover:bg-white/[0.1] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-11 h-11 rounded-lg bg-orange/15 text-orange grid place-items-center"><Icon name={m.icon} className="w-5 h-5" /></span>
                    <span className="font-display font-extrabold text-white/20 text-[26px]">{m.n}</span>
                  </div>
                  <div className="font-extrabold text-white text-[14.5px] leading-snug">{m.name}</div>
                  <p className="text-[12.5px] text-white/55 mt-1.5 leading-snug">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* production advantages */}
      <section className="section">
        <div className="container">
          <SectionHeading center kicker="Production Advantages" title="Powered by modern technology," accent="driven by quality." />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {productionAdvantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 50}>
                <div className="text-center">
                  <span className="w-16 h-16 mx-auto rounded-2xl bg-navy text-orange grid place-items-center"><Icon name={a.icon} className="w-8 h-8" /></span>
                  <div className="mt-3 font-extrabold text-navy text-[14px] leading-snug">{a.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* location + capacity */}
      <section className="section band">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <span className="kicker">Our Location</span>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)]">Manufacturing in the<br /><span className="text-gradient">Nalagarh industrial belt.</span></h2>
            <p className="mt-5 text-[16px] text-ink2 leading-relaxed">
              Located on Bharatgarh Dabhota Road in Nalagarh, our plant sits within one of North India's busiest manufacturing
              corridors — close to the Baddi–Barotiwala pharma and FMCG hub — for fast, dependable supply.
            </p>
            <div className="mt-6 card p-5">
              <div className="flex gap-3">
                <Icon name="pin" className="w-6 h-6 text-orange shrink-0" />
                <div>
                  <div className="font-extrabold text-navy text-[15px]">Factory Address</div>
                  <p className="text-[14px] text-ink2 mt-1">{site.address.khasra}, {site.address.line1}, {site.address.line2}, {site.address.state}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["10+", "Machines in line"],
                ["7-Ply", "Max board strength"],
                ["Bulk", "Order capacity"],
                ["100%", "Quality checked"],
              ].map(([v, l]) => (
                <div key={l} className="card p-6">
                  <Stat value={v} label={l} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Want to see what we can produce for you?" sub="From a single custom size to a repeating bulk order — our line is ready. Send us your requirement." />
    </>
  );
}
