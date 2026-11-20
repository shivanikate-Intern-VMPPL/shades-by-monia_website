"use client";

import { useState } from "react";
import { Plus, Minus, Clock, CheckCircle2 } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { processSteps } from "@/data/services";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#F7F4EE] text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-8 border-b border-[#0D0D0D]/10">
          <div>
            <SectionTag label="// METHODOLOGY" theme="light" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0D0D0D] font-normal tracking-tight">
              How the Studio Works
            </h2>
            <p className="font-serif text-xl sm:text-2xl italic text-[#D9A441] mt-1">
              Five-Step Process
            </p>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-md font-light leading-relaxed">
            A methodical architectural cadence honed across 14 years, ensuring total budget discipline,
            artisanal precision, and peace of mind.
          </p>
        </div>

        {/* Step Selector / Accordion */}
        <div className="divide-y divide-[#0D0D0D]/10 border-y border-[#0D0D0D]/10">
          {processSteps.map((step, index) => {
            const isOpen = activeStep === index;

            return (
              <div key={step.number} className="transition-colors group">
                {/* Header row */}
                <button
                  onClick={() => setActiveStep(isOpen ? -1 : index)}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span
                      className={`font-serif text-3xl sm:text-5xl md:text-6xl font-light transition-colors ${
                        isOpen ? "text-[#D9A441]" : "text-[#0D0D0D]/30 group-hover:text-[#0D0D0D]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-xl sm:text-3xl transition-colors ${
                          isOpen ? "text-[#0D0D0D]" : "text-[#0D0D0D]/80 group-hover:text-[#D9A441]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#75726D] font-light mt-1 hidden sm:block">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#D9A441]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.duration}</span>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isOpen
                          ? "border-[#D9A441] bg-[#D9A441] text-[#0D0D0D]"
                          : "border-[#0D0D0D]/20 group-hover:border-[#0D0D0D] text-[#0D0D0D]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="pb-12 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#D9A441] mb-2 md:hidden">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{step.duration}</span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#75726D] font-mono mb-2">
                        Phase Duration
                      </p>
                      <p className="font-serif text-2xl text-[#0D0D0D]">{step.duration}</p>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
                        // HOW WE DO IT
                      </span>
                      <ul className="space-y-3">
                        {step.howWeDoIt.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0D0D0D]/80 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-5 space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
                        // WHAT TO EXPECT
                      </span>
                      <ul className="space-y-3">
                        {step.whatToExpect.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0D0D0D]/80 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
