import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import PhilosophySection from "@/components/sections/PhilosophySection";
import SelectedWorksSection from "@/components/sections/SelectedWorksSection";
import ServicesStackedSection from "@/components/sections/ServicesStackedSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      {/* 1. Hero */}
      <HeroSection />

      {/* Gold divider: Hero → Marquee */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />

      {/* 2. Marquee */}
      <MarqueeStrip />

      {/* 3. Philosophy */}
      <PhilosophySection />

      {/* 4. Selected Works */}
      <SelectedWorksSection />

      {/* 5. Services */}
      <ServicesStackedSection />

      {/* 6. Process */}
      <ProcessSection />

      {/* 7. Stats */}
      <StatsSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Team */}
      <TeamSection />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
