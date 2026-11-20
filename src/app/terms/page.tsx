import SectionTag from "@/components/ui/SectionTag";

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionTag label="// TERMS & CONDITIONS" theme="light" className="mb-4" />
        <h1 className="font-serif text-3xl sm:text-5xl text-[#0D0D0D] font-normal tracking-tight mb-8">
          Terms of Engagement
        </h1>
        <p className="text-xs font-mono text-[#75726D] mb-12">
          Effective Date: January 1, 2026 // Studio Standard
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-[#75726D] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">1. Architectural & Design Services</h2>
            <p>
              Shades by Monia provides luxury interior architecture, turnkey design, and fine art
              curation. All design proposals, drawings, and 3D renderings remain intellectual property of
              the studio until formal contractual execution and milestone remuneration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">2. Client Engagements</h2>
            <p>
              Formal client engagements are governed by individual, bilateral Letters of Agreement (LOA)
              defining precise scopes of work, fabrication lead-times, and milestone payment schedules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">3. Custom Millwork & Sourcing</h2>
            <p>
              Natural stones, artisan-troweled lime plasters, and solid timbers exhibit organic variations in
              grain, tone, and character. These characteristics are hallmarks of authentic materiality and
              are celebrated in every Shades by Monia commission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
