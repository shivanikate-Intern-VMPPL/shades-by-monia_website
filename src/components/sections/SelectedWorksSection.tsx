"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/data/projects";

export default function SelectedWorksSection() {
  const selected = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#EFEAE0] text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-8 border-b border-[#0D0D0D]/10">
          <div>
            <SectionTag label="// 2020-2026" theme="light" className="mb-4" />
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0D0D0D] font-normal tracking-tight">
              Selected Works
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#75726D] max-w-md font-light leading-relaxed">
            A curation of private villas, duplex penthouses, and architectural sanctuaries delivered
            across the world’s most demanding destinations.
          </p>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {selected.map((project, index) => {
            // Asymmetric offset for editorial magazine layout
            const isStaggered = index % 2 === 1;

            return (
              <div
                key={project.slug}
                className={`group flex flex-col ${isStaggered ? "md:mt-16" : ""}`}
              >
                <Link
                  href={`/works/${project.slug}`}
                  data-cursor="view"
                  className="block relative overflow-hidden bg-[#0D0D0D] aspect-[4/5] sm:aspect-[3/4] mb-6 shadow-sm"
                >
                  {/* Subtle gold badge in corner */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-[#F7F4EE]">
                    {project.category}
                  </div>

                  {/* Project Image with scale-down / subtle zoom on hover */}
                  <div className="relative w-full h-full overflow-hidden">
                    <NextImage
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter group-hover:brightness-105"
                    />
                  </div>

                  {/* Hover vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>

                {/* Meta details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9A441] font-mono">
                      {project.location} — {project.year}
                    </span>
                    <span className="text-xs text-[#75726D] font-mono">0{index + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D] group-hover:text-[#D9A441] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#0D0D0D] group-hover:text-[#D9A441] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>

                  <p className="text-xs text-[#75726D] line-clamp-2 font-light leading-relaxed">
                    {project.excerpt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <MagneticButton href="/works" variant="outline" size="lg">
            EXPLORE MORE WORKS
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
