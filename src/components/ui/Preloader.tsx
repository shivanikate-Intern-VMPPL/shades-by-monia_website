"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsComplete(true);
      return;
    }

    // Check session storage so users navigating pages aren't blocked repeatedly
    const visited = sessionStorage.getItem("sbm_preloader_seen");
    if (visited) {
      setHasVisited(true);
      setIsComplete(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            sessionStorage.setItem("sbm_preloader_seen", "true");
          }, 450);
          return 100;
        }
        // Organic deceleration towards 100
        const step = Math.max(1, Math.floor((105 - prev) / 6));
        return Math.min(100, prev + step);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (hasVisited || isComplete) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0D0D0D] text-[#F7F4EE] overflow-hidden"
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1814]/30 to-[#0D0D0D] pointer-events-none" />

          {/* SVG stroke animation + Logo */}
          <div className="relative flex flex-col items-center z-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              {/* Animated gold brush circular stroke */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full -rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="rgba(217, 164, 65, 0.15)"
                  strokeWidth="2.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="url(#preloaderGoldGradient)"
                  strokeWidth="3"
                  strokeDasharray="276.5"
                  strokeDashoffset={276.5 - (276.5 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-150 ease-out"
                />
                <defs>
                  <linearGradient id="preloaderGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F2DD93" />
                    <stop offset="50%" stopColor="#D9A441" />
                    <stop offset="100%" stopColor="#B97A2B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Logo monogram fade in */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: progress > 15 ? 1 : progress / 15,
                  scale: 1,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-36 h-28"
              >
                <Image
                  src="/assets/logo-dark.png"
                  alt="Shades by Monia"
                  fill
                  sizes="144px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Studio Tag & Counter */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9A441] font-mono">
                INTERIOR DESIGN STUDIO
              </span>
              <div className="flex items-baseline gap-1 font-serif text-2xl text-[#F7F4EE]/90">
                <span>{progress}</span>
                <span className="text-xs text-[#D9A441] font-mono">%</span>
              </div>
            </div>
          </div>

          {/* Bottom subtle progress line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#F2DD93] via-[#D9A441] to-[#B97A2B] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
