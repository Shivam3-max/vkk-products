import type { Metadata } from "next";
import { PageHero, CTABand, SectionHeading } from "@/components/UI";
import BoxBuilder from "@/components/BoxBuilder";
import StrengthAdvisor from "@/components/StrengthAdvisor";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Box Tools — 3D Builder & Strength Advisor",
  description:
    "Design your corrugated box in 3D, build a precise spec, and let our strength advisor recommend the right ply, flute and GSM for your product.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        kicker="Interactive Tools"
        title="Design your box,"
        accent="get your spec."
        sub="Two free tools most packaging suppliers don't offer — build your exact box in 3D, and get an instant board recommendation for your product. Then send it to us for a firm quote."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />

      {/* Box Builder */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <SectionHeading kicker="Tool 01 · Box Builder" title="Configure your box in" accent="3D." sub="Set dimensions, style, ply, flute and printing. Watch the box update live, build a precise spec — then add it straight to your enquiry for a firm quote." />
          </div>
          <Reveal>
            <BoxBuilder />
          </Reveal>
        </div>
      </section>

      {/* Strength Advisor */}
      <section className="section band">
        <div className="container">
          <div className="mb-8">
            <SectionHeading kicker="Tool 02 · Strength Advisor" title="Not sure which board" accent="you need?" sub="Tell us how heavy your product is and how it ships. We'll recommend the ply, flute and GSM that protects it without over-spending." />
          </div>
          <Reveal>
            <StrengthAdvisor />
          </Reveal>
        </div>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["ruler", "Precise to your product", "Build the exact box — size, style, ply, flute and print — so your quote is accurate from the first message."],
              ["shield", "Engineered to spec", "Every recommendation is validated in production with burst and box-compression testing before dispatch."],
              ["whatsapp", "One-tap enquiry", "Add configured boxes and recommendations to your enquiry list and send them to us in a single WhatsApp message for a firm price."],
            ].map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="card p-6 h-full">
                  <span className="w-11 h-11 rounded-xl bg-navy text-orange grid place-items-center"><Icon name={icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[17px]">{t}</h3>
                  <p className="mt-2 text-[14px] text-ink2 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Prefer to talk it through?" sub="Send us your configured box or just your product details — we'll come back with a firm quote and lead time." />
    </>
  );
}
