import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHeading } from "./UI";

const leaders = [
  { name: "Mahipal Singh", title: "Managing Director", initials: "MS" },
  { name: "Vijay Kumar Khattar", title: "Managing Director", initials: "VK" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section scroll-mt-24">
      <div className="container">
        <SectionHeading
          center
          kicker="Leadership"
          title="The people behind"
          accent="VKK Products."
          sub="Led by hands-on experience in manufacturing and a shared commitment to quality, service and long-term relationships."
        />
        <div className="grid sm:grid-cols-2 gap-7 md:gap-10 mt-14 max-w-4xl mx-auto">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 100}>
              <div className="card card-hover overflow-hidden h-full">
                {/* big empty photo placeholder */}
                <div className="relative w-full aspect-[4/5] grid place-items-center bg-gradient-to-br from-[#eef1f8] via-[#e6ebf5] to-[#dbe2ef] border-b border-line">
                  <div className="flex flex-col items-center gap-3">
                    <span className="w-24 h-24 rounded-full bg-white/70 border border-line grid place-items-center text-navy/30">
                      <Icon name="user" className="w-14 h-14" />
                    </span>
                    <span className="font-display font-extrabold text-[34px] text-navy/15 tracking-wide">{l.initials}</span>
                  </div>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/25">
                    Photo
                  </span>
                </div>
                {/* name + title */}
                <div className="p-6 text-center">
                  <h3 className="text-[24px] md:text-[26px] leading-tight">{l.name}</h3>
                  <div className="mt-2.5 inline-flex items-center gap-2 text-orange3 font-bold text-[14px] uppercase tracking-wider">
                    <span className="w-6 h-px bg-orange" /> {l.title} <span className="w-6 h-px bg-orange" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
