"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  caption: string;
}

export default function BeforeAfterSlider({ before, after, caption }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12">
      <div className="mb-8 text-center max-w-xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block mb-2">
          // TRANSFORMATION
        </span>
        <h3 className="font-serif text-2xl sm:text-4xl text-[#0D0D0D]">
          Before & After Spatial Realignment
        </h3>
        <p className="text-xs text-[#75726D] mt-2 font-light">
          Drag the interactive slider to view the architectural transformation.
        </p>
      </div>

      <div
        className="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-[#0D0D0D]/10 shadow-lg"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          handleSliderMove(e.clientX, rect);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            const rect = e.currentTarget.getBoundingClientRect();
            handleSliderMove(e.touches[0].clientX, rect);
          }
        }}
      >
        {/* After Image (Full width background) */}
        <Image
          src={after}
          alt="After transformation"
          fill
          className="object-cover object-center"
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-[#F7F4EE]">
          AFTER
        </div>

        {/* Before Image (Clipped with width) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={before}
              alt="Before transformation"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-[#F7F4EE]">
            BEFORE
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute inset-y-0 w-[2px] bg-[#D9A441] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0D0D0D] border-2 border-[#D9A441] flex items-center justify-center text-[#D9A441] shadow-xl">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-[#75726D] font-mono mt-3">
        {caption}
      </p>
    </section>
  );
}
