import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero, CTABand, DotBlock } from "@/components/UI";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ProductVisual from "@/components/ProductVisual";
import AddToEnquiry from "@/components/AddToEnquiry";
import { products, getProduct } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product" };
  return { title: p.name, description: p.description };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker="Product"
        title={p.name}
        sub={p.tagline}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: p.name }]}
      />

      {/* intro + visual */}
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="kicker">Overview</span>
            <h2 className="mt-3 text-[clamp(24px,3.4vw,36px)]">Built to protect,<br /><span className="text-gradient">priced to scale.</span></h2>
            <p className="mt-5 text-[16px] text-ink2 leading-relaxed">{p.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <AddToEnquiry id={`product-${p.slug}`} name={p.name} detail={p.tagline} />
              <Link href="/contact" className="btn btn-ghost">Get a Quote</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-[340px] rounded-[24px] bg-navy overflow-hidden grid place-items-center">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-orange/15 blur-3xl" />
              <DotBlock className="absolute top-5 right-5" size={100} />
              <ProductVisual slug={p.slug} className="relative w-full h-full" spin base={190} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section className="section band">
        <div className="container">
          <span className="kicker">Why it works</span>
          <h2 className="mt-3 text-[clamp(24px,3.4vw,36px)] mb-9">Key features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 60}>
                <div className="card p-6 h-full">
                  <span className="w-12 h-12 rounded-xl bg-orange/12 text-orange3 grid place-items-center"><Icon name={f.icon} className="w-6 h-6" /></span>
                  <h3 className="mt-4 text-[16px]">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* specs + variants */}
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-10">
          <Reveal>
            <span className="kicker">At a glance</span>
            <h2 className="mt-3 text-[clamp(22px,3vw,32px)] mb-6">Specifications</h2>
            <div className="card overflow-hidden">
              {p.specs.map((s, i) => (
                <div key={s.label} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 ? "bg-paper" : "bg-white"}`}>
                  <span className="text-ink2 font-semibold text-[14px]">{s.label}</span>
                  <span className="text-navy font-extrabold text-[14px] text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            {p.variants ? (
              <>
                <span className="kicker">Options</span>
                <h2 className="mt-3 text-[clamp(22px,3vw,32px)] mb-6">Types & styles</h2>
                <div className="space-y-3">
                  {p.variants.map((v) => (
                    <div key={v.name} className="card p-5 flex gap-4">
                      <span className="w-10 h-10 shrink-0 rounded-lg bg-navy text-orange grid place-items-center"><Icon name="box" className="w-5 h-5" /></span>
                      <div>
                        <div className="font-extrabold text-navy text-[15px]">{v.name}</div>
                        <p className="text-[13.5px] text-ink2 mt-1 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="kicker">Applications</span>
                <h2 className="mt-3 text-[clamp(22px,3vw,32px)] mb-6">Ideal for</h2>
                <div className="flex flex-wrap gap-2.5">
                  {p.useCases.map((u) => (
                    <span key={u} className="chip !py-2.5 !px-4 !text-[14px]"><Icon name="check" className="w-4 h-4 text-orange" /> {u}</span>
                  ))}
                </div>
              </>
            )}
            {p.variants && (
              <div className="mt-6">
                <div className="text-[13px] font-extrabold text-navy uppercase tracking-wide mb-2">Applications</div>
                <div className="flex flex-wrap gap-2">
                  {p.useCases.map((u) => (
                    <span key={u} className="chip text-[12.5px]">{u}</span>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* other products */}
      <section className="section band">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[clamp(22px,3vw,32px)]">Explore more products</h2>
            <Link href="/products" className="btn btn-ghost">All products <Icon name="arrow" className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="card card-hover p-6 group">
                <span className="w-12 h-12 rounded-xl bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors"><Icon name={o.icon} className="w-6 h-6" /></span>
                <h3 className="mt-4 text-[18px]">{o.name}</h3>
                <p className="mt-2 text-[13.5px] text-ink2 leading-relaxed">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
