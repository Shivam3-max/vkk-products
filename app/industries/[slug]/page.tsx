import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero, CTABand, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import AddToEnquiry from "@/components/AddToEnquiry";
import { industries, getIndustry } from "@/data/industries";
import { getProduct } from "@/data/products";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry" };
  return { title: `${ind.name} Packaging`, description: ind.short };
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero
        kicker="Industry"
        title={`${ind.name} packaging`}
        sub={ind.short}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.name }]}
      />

      <section className="section">
        <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <Reveal>
            <span className="kicker">The brief</span>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)]">Understanding your<br /><span className="text-gradient">packaging needs.</span></h2>
            <p className="mt-5 text-[16px] text-ink2 leading-relaxed">{ind.intro}</p>

            <div className="mt-8">
              <div className="text-[13px] font-extrabold text-navy uppercase tracking-wide mb-3">What this sector needs</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {ind.needs.map((n) => (
                  <div key={n} className="flex items-start gap-2.5">
                    <Icon name="check" className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <span className="text-[14.5px] text-ink2">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AddToEnquiry id={`industry-${ind.slug}`} name={`${ind.name} packaging`} detail={ind.short} />
              <Link href="/contact" className="btn btn-ghost">Discuss your requirement</Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[22px] bg-navy text-white p-6 md:p-7 relative overflow-hidden h-full">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-orange/15 blur-3xl" />
              <DotBlock className="absolute top-5 right-5" size={92} />
              <div className="relative">
                <span className="chip chip-dark">Recommended for {ind.name}</span>
                <h3 className="mt-4 !text-white text-[21px] leading-tight">The right VKK products <span className="text-gradient">for this sector.</span></h3>
                <div className="mt-6 space-y-3">
                  {ind.recommended.map((r) => {
                    const prod = getProduct(r.product.toLowerCase().replace(/ /g, "-"));
                    const href = prod ? `/products/${prod.slug}` : "/products";
                    return (
                      <Link key={r.product} href={href} className="flex items-center gap-4 rounded-xl bg-white/[0.1] border border-white/15 p-4 hover:bg-white/[0.16] hover:border-orange/40 transition-colors">
                        <span className="w-11 h-11 shrink-0 rounded-lg bg-orange text-white grid place-items-center"><Icon name={prod?.icon || "box"} className="w-6 h-6" /></span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-extrabold text-white text-[15px]">{r.product}</span>
                          <span className="block text-white/70 text-[13px] mt-0.5">{r.spec}</span>
                        </span>
                        <Icon name="arrow" className="w-5 h-5 text-orange shrink-0" />
                      </Link>
                    );
                  })}
                </div>
                <Link href="/contact" className="btn btn-primary w-full mt-6">Get a quote for {ind.name} <Icon name="arrow" className="w-4.5 h-4.5" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* other industries */}
      <section className="section bg-paper">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[clamp(22px,3vw,32px)]">Other industries</h2>
            <Link href="/industries" className="btn btn-ghost">All industries <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.filter((x) => x.slug !== ind.slug).map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="card card-hover p-5 group text-center">
                <span className="w-12 h-12 mx-auto rounded-xl bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors"><Icon name={o.icon} className="w-6 h-6" /></span>
                <h3 className="mt-3 text-[14px]">{o.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
