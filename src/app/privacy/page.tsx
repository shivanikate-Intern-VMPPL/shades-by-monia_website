import SectionTag from "@/components/ui/SectionTag";
import { siteConfig } from "@/data/site";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionTag label="// LEGAL COMPLIANCE" theme="light" className="mb-4" />
        <h1 className="font-serif text-3xl sm:text-5xl text-[#0D0D0D] font-normal tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-[#75726D] mb-12">
          Effective Date: January 1, 2026 // Last Updated: 2026
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-[#75726D] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">1. Commitment to Client Confidentiality</h2>
            <p>
              At Shades by Monia, safeguarding the privacy of our distinguished clientele is fundamental
              to our studio ethos. All project communications, floorplans, site addresses, and financial
              transactions remain strictly confidential under customary non-disclosure standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">2. Information We Collect</h2>
            <p>
              When you submit an exploratory brief through our website, we collect your name, email
              address, telephone number, and qualitative details regarding your residential commission. This
              information is utilized exclusively for client consultation and project execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">3. Non-Disclosure & Security</h2>
            <p>
              We never sell, rent, or trade your personal or project data with third-party advertisers. Data
              is shared solely with essential vetted suppliers (e.g., custom millworkers, structural engineers)
              strictly as required to execute your commission, with sensitive identifiers redacted whenever
              possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0D0D0D]">4. Contact & Inquiries</h2>
            <p>
              For inquiries regarding our confidentiality protocols or data retention practices, please
              contact our studio at {siteConfig.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
