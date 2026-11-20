"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial", "Living", "Bedroom", "Kitchen"] as const;

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionTag label="// PORTFOLIO ARCHIVE" theme="light" className="mb-4" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#0D0D0D] font-normal tracking-tight mb-6">
            Crafted Sanctuaries
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed">
            A comprehensive survey of bespoke residences, private penthouses, and hospitality
            retreats designed and executed across the world.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16 pb-6 border-b border-[#0D0D0D]/10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "bg-[#0D0D0D] text-[#F7F4EE] font-medium shadow-sm"
                    : "bg-[#EFEAE0] text-[#75726D] hover:text-[#0D0D0D] hover:bg-[#E5DFD3]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <div key={project.slug} className="group flex flex-col">
              <Link
                href={`/works/${project.slug}`}
                data-cursor="view"
                className="block relative aspect-[4/5] overflow-hidden bg-[#0D0D0D] mb-4"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95"
                />

                <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-[#F7F4EE]">
                  {project.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#D9A441]">
                  <span>{project.location}</span>
                  <span className="text-[#75726D]">{project.year}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#0D0D0D] group-hover:text-[#D9A441] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0D0D0D] group-hover:text-[#D9A441] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <p className="text-xs text-[#75726D] line-clamp-2 font-light leading-relaxed">
                  {project.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
