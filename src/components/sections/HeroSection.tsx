"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.0003})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Image with Ken Burns zoom and parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85" /* REPLACE: Hero luxury interior */
          alt="Luxury living salon interior by Shades by Monia"
          fill
          priority
          className="object-cover object-center filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Dark cinematic vignette and warm gold gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-[#0D0D0D]/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0D0D]/30 to-[#0D0D0D]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-24 pb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] animate-pulse" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#F7F4EE]/90 font-medium">
            INTERIOR DESIGN STUDIO
          </span>
        </motion.div>

        {/* Brand Mark in Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <Logo variant="dark" size="hero" withLink={false} />
        </motion.div>

        {/* Split-line Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F4EE] font-normal leading-[1.08] tracking-tight max-w-4xl"
          >
            Considered Spaces for <span className="italic font-light text-[#D9A441]">Modern Living</span>
          </motion.h1>
        </div>

        {/* Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-xs sm:text-sm md:text-base text-[#F7F4EE]/75 max-w-xl font-light tracking-wide leading-relaxed mb-10"
        >
          Sculpting bespoke private residences, penthouses, and architectural sanctuaries with quiet
          materiality and enduring warmth.
        </motion.p>

        {/* Thin gold divider line reveal */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-[#F2DD93] via-[#D9A441] to-[#B97A2B] mb-6 origin-left"
        />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton href="/studio" variant="gold" size="lg">
            DISCOVER STUDIO
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton href="/works" variant="outline" size="lg" className="border-white/20 text-[#F7F4EE]">
            SELECTED WORKS
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#F7F4EE]/60 group-hover:text-[#D9A441] transition-colors font-mono">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#D9A441] transition-colors">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"
          />
        </div>
      </motion.button>
    </section>
  );
}
