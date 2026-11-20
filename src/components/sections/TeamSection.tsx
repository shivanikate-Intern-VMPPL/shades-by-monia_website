"use client";

import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import { teamMembers } from "@/data/studio";

export default function TeamSection() {
  return (
    <section className="relative w-full py-28 md:py-36 bg-[#F7F4EE] text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-8 border-b border-[#0D0D0D]/10">
          <div>
            <SectionTag label="// THE ATELIER" theme="light" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0D0D0D] font-normal tracking-tight">
              People Behind the Practice
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-md font-light leading-relaxed">
            An agile studio of interior architects, materiality directors, and art historians dedicated to
            the deliberate execution of beauty.
          </p>
        </div>

        {/* 4-Column Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col">
              {/* Portrait Container with hover trait reveal */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0D0D0D] mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95"
                />

                {/* Trait Badge sliding up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono font-medium">
                    // TRAIT
                  </span>
                  <span className="font-serif text-sm italic text-[#F7F4EE]">
                    {member.trait}
                  </span>
                </div>
              </div>

              {/* Bio info */}
              <div>
                <h3 className="font-serif text-xl text-[#0D0D0D] font-normal group-hover:text-[#D9A441] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-[#D9A441] font-mono tracking-wider mt-0.5 mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-[#75726D] leading-relaxed line-clamp-3 font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
