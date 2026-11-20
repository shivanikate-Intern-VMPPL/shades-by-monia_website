"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import MagneticButton from "@/components/ui/MagneticButton";
import { servicesData } from "@/data/services";

export default function ServicesStackedSection() {
  return (
    <section className="relative w-full py-28 md:py-36 bg-[#0D0D0D] text-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <SectionTag label="// EXPERTISE" theme="dark" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EE] font-normal tracking-tight">
              What We Offer
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-md font-light leading-relaxed">
            Three interconnected disciplines tailored for private clients who view architecture as a
            sanctuary for modern living.
          </p>
        </div>

        {/* Stacked Cards Layout */}
        <div className="space-y-12 md:space-y-16">
          {servicesData.map((service, index) => {
            return (
              <div
                key={service.id}
                className="sticky top-24 md:top-28 z-10 bg-[#141414] border border-white/10 rounded-none p-8 md:p-12 lg:p-16 shadow-2xl transition-all"
                style={{
                  top: `calc(5.5rem + ${index * 1.5}rem)`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl md:text-4xl text-[#D9A441] font-light">
                        {service.number}
                      </span>
                      <span className="w-8 h-[1px] bg-[#D9A441]/40" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#75726D] font-mono">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-4xl text-[#F7F4EE] tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-[#F7F4EE]/70 font-light leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    {/* Scope list bullets */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                      {service.scope.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#F7F4EE]/80">
                          <Check className="w-3.5 h-3.5 text-[#D9A441] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stat Counter Highlight */}
                    <div className="pt-6 border-t border-white/10 w-full flex items-baseline gap-3">
                      <span className="font-serif text-4xl sm:text-5xl text-[#D9A441] font-light">
                        {service.statValue}{service.statSuffix}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#75726D] font-mono">
                        {service.statLabel}
                      </span>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] hover:text-[#F2DD93] transition-colors"
                      >
                        <span>VIEW FULL SCOPE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual */}
                  <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-black/50 border border-white/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom consultation action */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-white/10 bg-[#141414]">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F7F4EE] mb-1">
              Require a tailored engagement or multi-phase masterplan?
            </h4>
            <p className="text-xs text-[#75726D]">
              We advise on acquisitions, spatial feasibility, and comprehensive turnkey execution.
            </p>
          </div>
          <MagneticButton href="/contact" variant="gold" size="md">
            REQUEST CONSULTATION
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
