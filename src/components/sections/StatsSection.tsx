"use client";

import { useEffect, useRef, useState } from "react";
import SectionTag from "@/components/ui/SectionTag";
import { studioStats } from "@/data/studio";

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(studioStats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setHasAnimated(true);

        // Animate rolling counts
        studioStats.forEach((stat, index) => {
          let current = 0;
          const target = stat.value;
          const duration = 1800; // ms
          const increment = target / (duration / 25);

          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCounts((prev) => {
              const next = [...prev];
              next[index] = Math.floor(current);
              return next;
            });
          }, 25);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-[#0D0D0D] text-[#F7F4EE] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <SectionTag label="// BY THE NUMBERS" theme="dark" className="mb-3" />
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F4EE] font-normal tracking-tight">
            What Our Clients Value
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {studioStats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-start ${
                index > 0 ? "pt-6 md:pt-0 md:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline gap-1 font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#D9A441] tracking-tight">
                <span>{counts[index]}</span>
                <span className="text-2xl sm:text-4xl">{stat.suffix}</span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#F7F4EE] mt-2 mb-1">
                {stat.label}
              </h3>

              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
