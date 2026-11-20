"use client";

import { useEffect, useRef } from "react";

export default function MarqueeStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    "BESPOKE INTERIORS",
    "PRIVATE VILLAS",
    "PENTHOUSES",
    "PRIME RESIDENCES",
    "ARTISANAL MATERIALITY",
    "ARCHITECTURAL FLOW",
  ];

  return (
    <section className="relative w-full py-6 md:py-8 bg-[#0D0D0D] border-y border-white/10 overflow-hidden select-none">
      <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
        {/* Repeat sequence 4 times for infinite seamless loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-10 md:gap-14 pr-10 md:pr-14">
            {items.map((text, idx) => (
              <div key={idx} className="flex items-center gap-10 md:gap-14">
                <span className="font-serif text-lg md:text-2xl uppercase tracking-[0.25em] text-[#F7F4EE]/85 font-light whitespace-nowrap">
                  {text}
                </span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#B97A2B] via-[#D9A441] to-[#F2DD93] flex-shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
