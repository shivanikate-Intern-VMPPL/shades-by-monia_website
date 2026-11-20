"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { faqs } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#EFEAE0] text-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#0D0D0D]/10">
          <div>
            <SectionTag label="// INQUIRIES & CLARITY" theme="light" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0D0D0D] font-normal tracking-tight">
              Questions Worth Asking
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-sm font-light leading-relaxed">
            Direct perspectives on investment parameters, project durations, and studio collaboration.
          </p>
        </div>

        {/* Accordion List 01-06 */}
        <div className="divide-y divide-[#0D0D0D]/10 border-y border-[#0D0D0D]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.number} className="transition-colors">
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-7 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 md:gap-8 pr-4">
                    <span className="text-xs sm:text-sm font-mono text-[#D9A441] font-medium">
                      {faq.number}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-[#0D0D0D] group-hover:text-[#D9A441] transition-colors font-normal">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#0D0D0D]/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#0D0D0D] text-[#F7F4EE] border-[#0D0D0D]" : "group-hover:border-[#D9A441]"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-8 pt-1 pl-12 md:pl-16 pr-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA: Didn't find your question? */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F7F4EE] border border-[#0D0D0D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg text-[#0D0D0D]">
              Didn’t find your specific question?
            </p>
            <p className="text-xs text-[#75726D]">
              Our concierge team is available to discuss specific project criteria and preliminary briefs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0D0D] text-[#F7F4EE] hover:bg-[#D9A441] hover:text-[#0D0D0D] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
          >
            <span>Ask Your Question</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
