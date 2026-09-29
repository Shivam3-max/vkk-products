import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export default function Footer() {
  return (
    <footer className="grid-dark relative overflow-hidden bg-navy3 text-white/75">
      {/* CTA strip */}
      <div className="flute h-1.5 w-full" />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-[14px] leading-relaxed max-w-xs">
              A trusted name in corrugated packaging — delivering strong, durable and cost-effective solutions across India.
            </p>
            <p className="mt-4 font-display font-extrabold text-white text-lg">
              Protecting Products.<span className="text-orange"> Building Trust.</span>
            </p>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-extrabold tracking-widest uppercase mb-4">Products</h4>
            <ul className="space-y-2.5 text-[14px]">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="hover:text-orange transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-extrabold tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/about" className="hover:text-orange">About Us</Link></li>
              <li><Link href="/infrastructure" className="hover:text-orange">Infrastructure</Link></li>
              <li><Link href="/specifications" className="hover:text-orange">Specifications</Link></li>
              <li><Link href="/tools" className="hover:text-orange">Box Tools</Link></li>
              <li><Link href="/sustainability" className="hover:text-orange">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-extrabold tracking-widest uppercase mb-4">Get in Touch</h4>
            <ul className="space-y-3.5 text-[14px]">
              <li className="flex gap-3">
                <Icon name="pin" className="w-5 h-5 text-orange shrink-0" />
                <span>{site.address.khasra}, {site.address.line1}, {site.address.line2}, {site.address.state}</span>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="flex gap-3 hover:text-orange">
                  <Icon name="phone" className="w-5 h-5 text-orange shrink-0" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-orange">
                  <Icon name="mail" className="w-5 h-5 text-orange shrink-0" /> {site.email}
                </a>
              </li>
            </ul>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 !py-2.5">
              <Icon name="whatsapp" className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px]">
          <p>© {new Date().getFullYear()} {site.brand} ({site.tradeName}). All rights reserved. · GSTIN {site.gstin}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center">
            {industries.map((i, n) => (
              <React.Fragment key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-orange">{i.name}</Link>
                {n < industries.length - 1 && <span className="opacity-30">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
