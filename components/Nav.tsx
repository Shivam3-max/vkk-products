"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icon";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { useRFQ } from "./RFQContext";
import { site } from "@/data/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", mega: "products" as const },
  { label: "Industries", href: "/industries", mega: "industries" as const },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Specifications", href: "/specifications" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mega, setMega] = useState<null | "products" | "industries">(null);
  const { items, setOpen } = useRFQ();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMega(null);
  }, [pathname]);

  return (
    <>
      {/* top utility bar */}
      <div className="hidden md:block bg-navy3 text-white/80 text-[12.5px]">
        <div className="container flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="w-3.5 h-3.5" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="w-3.5 h-3.5" /> {site.email}
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Icon name="pin" className="w-3.5 h-3.5 text-orange" /> {site.address.short} · GSTIN {site.gstin}
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-[0_4px_20px_rgba(20,36,92,0.08)]" : "bg-white"
        }`}
        onMouseLeave={() => setMega(null)}
      >
        <div className="container flex items-center justify-between h-[68px]">
          <Link href="/" aria-label="VKK Products home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <div key={item.href} onMouseEnter={() => setMega(item.mega ?? null)}>
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 rounded-full text-[14.5px] font-bold inline-flex items-center gap-1 transition-colors ${
                      active ? "text-orange3" : "text-ink2 hover:text-navy"
                    }`}
                  >
                    {item.label}
                    {item.mega && <Icon name="arrow-down" className="w-3.5 h-3.5 opacity-60" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setOpen(true)}
              className="relative hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-line2 text-navy font-bold text-[14px] hover:border-navy hover:bg-paper2 transition-colors"
            >
              <Icon name="boxes" className="w-4.5 h-4.5" />
              Enquiry
              {items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-orange text-white text-[11px] font-extrabold grid place-items-center">
                  {items.length}
                </span>
              )}
            </button>
            <Link href="/contact" className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-5 !text-[14px]">
              Get a Quote
            </Link>
            <button
              className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-line text-navy"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              <Icon name={mobileOpen ? "close" : "menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {mega && (
          <div
            className="hidden lg:block absolute inset-x-0 top-full bg-white border-t border-line shadow-[0_20px_40px_rgba(20,36,92,0.1)]"
            onMouseEnter={() => setMega(mega)}
          >
            <div className="container py-6">
              {mega === "products" && (
                <div className="grid grid-cols-3 gap-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-paper2 transition-colors"
                    >
                      <span className="shrink-0 w-10 h-10 rounded-lg bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                        <Icon name={p.icon} className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block font-extrabold text-navy text-[15px]">{p.name}</span>
                        <span className="block text-[12.5px] text-ink3 leading-snug mt-0.5">{p.tagline}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              {mega === "industries" && (
                <div className="grid grid-cols-3 gap-2">
                  {industries.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/industries/${i.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-paper2 transition-colors"
                    >
                      <span className="shrink-0 w-10 h-10 rounded-lg bg-navy text-orange grid place-items-center group-hover:bg-orange group-hover:text-white transition-colors">
                        <Icon name={i.icon} className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block font-extrabold text-navy text-[15px]">{i.name}</span>
                        <span className="block text-[12.5px] text-ink3 leading-snug mt-0.5">{i.short}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-[68px] bg-white overflow-y-auto">
          <div className="container py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3.5 text-lg font-bold text-navy border-b border-line"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <button onClick={() => { setOpen(true); setMobileOpen(false); }} className="btn btn-ghost">
                Enquiry ({items.length})
              </button>
              <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            </div>
            <a href={`tel:${site.phone}`} className="btn btn-navy w-full mt-3">
              <Icon name="phone" className="w-4 h-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
