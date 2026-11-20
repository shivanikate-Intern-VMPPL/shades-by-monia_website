import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass, Feather, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio",
  description: "Meet Monia Kedari and the team behind India's most considered luxury interior design practice.",
};

import SectionTag from "@/components/ui/SectionTag";
import MagneticButton from "@/components/ui/MagneticButton";
import TeamSection from "@/components/sections/TeamSection";
import { studioPhilosophy, studioAwards } from "@/data/studio";

export default function StudioPage() {
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

        {/* Page Hero */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <SectionTag label="// ABOUT THE ATELIER" theme="light" className="mb-4" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0D0D0D] leading-[1.05] mb-8">
            An Atelier Rooted in <span className="italic text-[#D9A441]">Stillness & Craft</span>.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#75726D] font-light leading-relaxed max-w-2xl">
            Founded by Monia, Shades by Monia is an international interior architecture studio
            dedicated to crafting private residences that resonate with timeless architectural clarity,
            tactile authenticity, and restorative calm.
          </p>
        </div>

        {/* Founder Story Section */}
        <section className="mb-28 md:mb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden bg-[#0D0D0D]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" /* REPLACE: Monia portrait */
              alt="Monia – Founder & Creative Director"
              fill
              priority
              className="object-cover object-top filter grayscale contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EE]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
                FOUNDER & CREATIVE DIRECTOR
              </span>
              <p className="font-serif text-2xl">Monia Kedari</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
              // THE FOUNDER'S JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight">
              Designing from the Inside Out
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed">
              Having cultivated her practice across Mumbai, New Delhi, and international design capitals,
              Monia established Shades by Monia with a clear purpose: to design homes that feel peaceful,
              uncluttered, and deeply comfortable for modern family living.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed">
              "We don't view a residence as a gallery of trends. We view it as a sanctuary for private life—where
              the texture of honed stone, the grain of smoked oak, and the movement of daylight create an
              unconscious sense of serenity."
            </p>
            <div className="pt-4 flex items-center gap-6">
              <MagneticButton href="/contact" variant="gold" size="md">
                INITIATE A CONVERSATION
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Brand Story & Logo Symbology (Exact Brand Guidelines Breakdown) */}
        <section className="mb-28 md:mb-36 p-8 md:p-14 bg-[#EFEAE0] border border-[#0D0D0D]/10">
          <div className="max-w-3xl mb-12">
            <SectionTag label="// BRAND IDENTITY & CONCEPT" theme="light" className="mb-3" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0D0D]">
              The Symbology Behind the Mark
            </h2>
            <p className="text-xs sm:text-sm text-[#75726D] mt-2 font-light">
              Every curve of the Shades by Monia emblem embodies our philosophical foundation: the balance
              between handcrafted intuition and architectural discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Element 1: Circular Brush */}
            <div className="p-6 bg-[#F7F4EE] border border-[#0D0D0D]/10 space-y-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#D9A441] flex items-center justify-center font-serif text-lg text-[#D9A441]">
                ○
              </div>
              <h3 className="font-serif text-lg text-[#0D0D0D]">The Circular Frame</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                {studioPhilosophy.logoConcept.circularFrame}
              </p>
            </div>

            {/* Element 2: Monogram */}
            <div className="p-6 bg-[#F7F4EE] border border-[#0D0D0D]/10 space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#D9A441] flex items-center justify-center font-serif italic text-base text-[#D9A441]">
                sm
              </div>
              <h3 className="font-serif text-lg text-[#0D0D0D]">The Signature Monogram</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                {studioPhilosophy.logoConcept.symbolism}
              </p>
            </div>

            {/* Element 3: Typography */}
            <div className="p-6 bg-[#F7F4EE] border border-[#0D0D0D]/10 space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#D9A441] flex items-center justify-center font-serif text-sm tracking-wider text-[#D9A441]">
                Aa
              </div>
              <h3 className="font-serif text-lg text-[#0D0D0D]">Refined Typography</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                {studioPhilosophy.logoConcept.typography}
              </p>
            </div>
          </div>
        </section>

        {/* Studio Core Values */}
        <section className="mb-28 md:mb-36">
          <div className="max-w-2xl mb-12">
            <SectionTag label="// GUIDING PRINCIPLES" theme="light" className="mb-3" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0D0D]">
              Values That Define Every Commission
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 border-l border-[#D9A441]">
              <Feather className="w-6 h-6 text-[#D9A441]" />
              <h3 className="font-serif text-xl text-[#0D0D0D]">Material Honesty</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                We celebrate materials that age with grace: unlacquered brass that acquires a deep patina,
                honed travertine that absorbs daylight, and hand-woven silks.
              </p>
            </div>

            <div className="space-y-3 p-6 border-l border-[#D9A441]">
              <Compass className="w-6 h-6 text-[#D9A441]" />
              <h3 className="font-serif text-xl text-[#0D0D0D]">Spatial Restraint</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                We believe what you leave out is as important as what you include. Negative space is the
                canvas that allows human rituals and architectural proportions to breathe.
              </p>
            </div>

            <div className="space-y-3 p-6 border-l border-[#D9A441]">
              <ShieldCheck className="w-6 h-6 text-[#D9A441]" />
              <h3 className="font-serif text-xl text-[#0D0D0D]">Fiduciary Stewardship</h3>
              <p className="text-xs text-[#75726D] font-light leading-relaxed">
                Absolute fiscal discipline, open-book procurement schedules, and unyielding site management
                guarantee that your investment is executed with total integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Team Component */}
        <TeamSection />

        {/* Awards & Press Honors */}
        <section className="pt-24 border-t border-[#0D0D0D]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionTag label="// RECOGNITION" theme="light" className="mb-3" />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0D0D]">
                Honors & Press Accolades
              </h2>
            </div>
            <p className="text-xs text-[#75726D] max-w-sm font-light">
              Peer-reviewed accolades celebrating architectural nuance and spatial execution.
            </p>
          </div>

          <div className="divide-y divide-[#0D0D0D]/10 border-y border-[#0D0D0D]/10">
            {studioAwards.map((award, i) => (
              <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[#D9A441]">{award.year}</span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#0D0D0D]">{award.title}</h3>
                </div>
                <div className="flex items-center gap-6 text-xs text-[#75726D]">
                  <span>{award.organization}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  <span className="font-mono">{award.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
