import type { Metadata } from "next";
import { PageHero, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Get a Quote for Corrugated Packaging",
  description:
    "Get in touch with VKK Products, Nalagarh. Call +91 98572 22490, WhatsApp us or email info@vkkpackworld.com for a corrugated packaging quote.",
};

export default function ContactPage() {
  const contacts = [
    { icon: "phone", label: "Call us", value: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: "whatsapp", label: "WhatsApp", value: site.phoneDisplay, href: `https://wa.me/${site.whatsapp}` },
    { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <PageHero
        kicker="Get in Touch"
        title="Let's work"
        accent="together."
        sub="We're here to deliver packaging solutions that add value to your business. Reach out for a quote, a sample or just some advice on the right board."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* contact details */}
          <Reveal>
            <span className="kicker">Contact details</span>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)]">Reach VKK Products</h2>
            <p className="mt-4 text-[15.5px] text-ink2 leading-relaxed">
              Whether you need a single custom size or a repeating bulk order, our team is ready to help. Choose whichever
              way is easiest for you.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target={c.icon === "whatsapp" ? "_blank" : undefined} rel="noopener noreferrer" className="card card-hover p-5 text-center">
                  <span className="w-12 h-12 mx-auto rounded-xl bg-navy text-orange grid place-items-center"><Icon name={c.icon} className="w-6 h-6" /></span>
                  <div className="text-[12px] font-bold text-ink3 uppercase tracking-widest mt-3">{c.label}</div>
                  <div className="text-navy font-extrabold text-[13.5px] mt-1 break-words">{c.value}</div>
                </a>
              ))}
            </div>

            {/* address */}
            <div className="mt-6 card p-6">
              <div className="flex gap-3">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-navy text-orange grid place-items-center"><Icon name="pin" className="w-6 h-6" /></span>
                <div>
                  <div className="font-extrabold text-navy text-[16px]">Factory & Office</div>
                  <p className="text-[14px] text-ink2 mt-1.5 leading-relaxed">
                    {site.address.khasra},<br />
                    {site.address.line1},<br />
                    {site.address.line2},<br />
                    {site.address.state}
                  </p>
                  <div className="mt-3 text-[13px] text-ink3">GSTIN: <span className="font-bold text-navy">{site.gstin}</span></div>
                </div>
              </div>
            </div>

            {/* map */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-line h-[260px]">
              <iframe
                title="VKK Products location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* promise band */}
      <section className="pb-20">
        <div className="container">
          <div className="rounded-[24px] bg-navy text-white text-center px-6 py-10 relative overflow-hidden">
            <DotBlock className="absolute top-4 right-6 hidden md:block" color="text-white" size={96} />
            <DotBlock className="absolute bottom-4 left-6 hidden md:block" color="text-white" size={96} />
            <div className="relative">
              <div className="font-display font-extrabold text-[clamp(20px,3vw,30px)]">
                "Your Trusted <span className="text-orange">Packaging Partner</span>"
              </div>
              <p className="mt-2 text-white/70">Protecting Products. Building Trust.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
