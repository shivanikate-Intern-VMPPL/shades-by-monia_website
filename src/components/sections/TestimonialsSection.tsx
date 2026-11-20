"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { clientTestimonials } from "@/data/studio";

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Duplicate for smooth infinite loop
  const carouselItems = [...clientTestimonials, ...clientTestimonials];

  const renderCard = (testimonial: (typeof clientTestimonials)[number], idx: number) => (
    <div
      key={idx}
      className="w-[340px] sm:w-[460px] md:w-[540px] bg-[#F7F4EE] border border-[#0D0D0D]/10 p-8 md:p-10 flex flex-col justify-between flex-shrink-0 shadow-sm select-none"
    >
      <div>
        <Quote className="w-8 h-8 text-[#D9A441]/40 mb-6" />
        <p className="font-serif text-base sm:text-lg md:text-xl text-[#0D0D0D] italic leading-relaxed font-light mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-6 border-t border-[#0D0D0D]/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-300 border border-[#D9A441]">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-serif text-base text-[#0D0D0D] font-normal">
              {testimonial.author}
            </h4>
            <p className="text-[11px] text-[#75726D] font-mono">
              {testimonial.role}
            </p>
          </div>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-mono block">
            {testimonial.location}
          </span>
          <span className="text-xs text-[#0D0D0D]/70 font-serif italic">
            {testimonial.project}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#EFEAE0] text-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#0D0D0D]/10">
          <div>
            <SectionTag label="// TESTIMONIALS" theme="light" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0D0D0D] font-normal tracking-tight">
              Client Reflections
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-md font-light leading-relaxed">
            The privilege of collaborating with collectors, patrons, and founders who value silence,
            tactile truth, and bespoke architectural vision.
          </p>
        </div>
      </div>

      {/* Infinite scrolling carousel track */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {reducedMotion ? (
          // Static scrollable row for reduced-motion users
          <div className="flex gap-6 md:gap-8 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
            {clientTestimonials.map((testimonial, idx) => renderCard(testimonial, idx))}
          </div>
        ) : (
          // Animated infinite marquee
          <div
            className={`flex gap-6 md:gap-8 w-max px-6 transition-all duration-300 ${
              isPaused ? "[animation-play-state:paused]" : ""
            } animate-marquee-slow`}
          >
            {carouselItems.map((testimonial, idx) => renderCard(testimonial, idx))}
          </div>
        )}
      </div>
    </section>
  );
}
