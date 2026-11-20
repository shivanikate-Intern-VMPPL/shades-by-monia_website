"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { studioPhilosophy } from "@/data/studio";

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = studioPhilosophy.quote.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating when container enters lower half of viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      const total = start - end;
      const current = start - rect.top;

      const progress = Math.max(0, Math.min(1, current / total));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-[#F7F4EE] text-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start gap-8 md:gap-12">
          {/* Tag */}
          <SectionTag label="// OUR PHILOSOPHY" theme="light" />

          {/* Scrubbed paragraph where each word transitions from light grey to deep black */}
          <p
            ref={textRef}
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.25] tracking-tight font-normal uppercase"
          >
            {words.map((word, index) => {
              const wordThreshold = index / words.length;
              const isRevealed = scrollProgress >= wordThreshold;

              return (
                <span
                  key={index}
                  className="inline-block mr-[0.28em] transition-colors duration-200"
                  style={{
                    color: isRevealed ? "#0D0D0D" : "rgba(13, 13, 13, 0.18)",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>

          {/* Supporting editorial reflection */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 w-full border-t border-[#0D0D0D]/10">
            <div className="md:col-span-4 text-xs font-mono uppercase tracking-[0.2em] text-[#75726D]">
              01 — BALANCE & ARTISTRY
            </div>
            <div className="md:col-span-8 flex flex-col items-start gap-6">
              <p className="text-sm md:text-base text-[#75726D] leading-relaxed max-w-2xl font-light">
                {studioPhilosophy.extendedNarrative[0]}
              </p>

              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#0D0D0D] hover:text-[#D9A441] transition-colors group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9A441] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
