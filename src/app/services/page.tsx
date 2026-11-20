import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Bespoke interior architecture, full-service design, and furniture curation for private residences across India.",
};

import SectionTag from "@/components/ui/SectionTag";
import MagneticButton from "@/components/ui/MagneticButton";
import ProcessSection from "@/components/sections/ProcessSection";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-[11px] uppercase tracking-[0.2em] font-mono text-[#75726D] hover:text-[#D9A441] transition-colors group"
        >
          <span className="w-7 h-7 rounded-full border border-[#0D0D0D]/15 group-hover:border-[#D9A441] flex items-center justify-center transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
          </span>
          Back to Home
        </Link>

        {/* Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <SectionTag label="// SCOPE & DISCIPLINE" theme="light" className="mb-4" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0D0D0D] leading-[1.05] mb-8">
            Disciplines of <span className="italic text-[#D9A441]">Enduring Architecture</span>.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#75726D] font-light leading-relaxed max-w-2xl">
            From the foundational reconfiguration of structural volumes to the procurement of
            rare museum-grade furnishings, we manage every facet of interior creation with uncompromising
            rigor.
          </p>
        </div>

        {/* Detailed Service Blocks */}
        <div className="space-y-24 md:space-y-36 mb-28">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 pt-12 border-t border-[#0D0D0D]/10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Image */}
                  <div
                    className={`lg:col-span-5 relative aspect-[4/5] overflow-hidden bg-[#0D0D0D] ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center filter brightness-95"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-[#F7F4EE]">
                      {service.number} — {service.subtitle}
                    </div>
                  </div>

                  {/* Details */}
                  <div
                    className={`lg:col-span-7 space-y-8 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9A441] font-mono block mb-2">
                        {service.number} // {service.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#75726D] font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#0D0D0D]/10">
                      <div>
                        <h3 className="font-serif text-lg text-[#0D0D0D] mb-3">
                          Scope of Stewardship
                        </h3>
                        <ul className="space-y-2.5">
                          {service.scope.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#75726D]">
                              <Check className="w-3.5 h-3.5 text-[#D9A441] mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-serif text-lg text-[#0D0D0D] mb-3">
                          Tangible Deliverables
                        </h3>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#75726D]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-5 bg-[#EFEAE0] border-l-2 border-[#D9A441] text-xs text-[#75726D]">
                      <span className="font-medium text-[#0D0D0D] uppercase tracking-wider block mb-1">
                        Ideal Engagement:
                      </span>
                      {service.idealFor}
                    </div>

                    <div className="pt-2">
                      <MagneticButton href="/contact" variant="outline" size="md">
                        DISCUSS THIS SCOPE
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Five-step process integration */}
      <ProcessSection />

      {/* Consultation Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-[#0D0D0D] text-[#F7F4EE] p-10 md:p-16 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono mb-4">
            CONFIDENTIAL ADVISORY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl max-w-2xl font-normal mb-6">
            Schedule an Exploratory Design Consultation
          </h2>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-lg mb-8 font-light">
            Whether evaluating property feasibility or preparing for a complete architectural renovation,
            we invite private inquiries.
          </p>
          <MagneticButton href="/contact" variant="gold" size="lg">
            REQUEST A CONSULTATION
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
