"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full py-32 md:py-44 bg-[#0D0D0D] text-[#F7F4EE] overflow-hidden">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85" /* REPLACE: Warm moody bedroom salon */
          alt="Atmospheric residence interior"
          fill
          className="object-cover object-center filter brightness-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-[#0D0D0D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9A441] font-mono mb-6">
          // INITIATE COMMISSION
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EE] font-normal tracking-tight leading-[1.12] mb-8">
          Share your vision.{" "}
          <span className="italic text-[#D9A441]">We&apos;ll craft a home worthy of it</span>.
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#F7F4EE]/70 font-light max-w-xl leading-relaxed mb-10">
          Whether designing a penthouse in Mumbai from its foundations or curating a private holiday
          home in Goa, our studio welcomes confidential, unhurried conversations.
        </p>

        <MagneticButton href="/contact" variant="gold" size="lg">
          DISCUSS YOUR PROJECT
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </MagneticButton>
      </div>
    </section>
  );
}
