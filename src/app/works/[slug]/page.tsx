import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      {/* Full-Bleed Hero */}
      <section className="relative w-full h-[75vh] md:h-[88vh] bg-[#0D0D0D] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 z-10 text-[#F7F4EE]">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F7F4EE]/80 hover:text-[#D9A441] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </Link>

          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D9A441] font-mono mb-3">
              <span>{project.category}</span>
              <span>—</span>
              <span>{project.location}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight text-[#F7F4EE]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Meta Bar */}
      <section className="border-b border-[#0D0D0D]/10 bg-[#EFEAE0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block mb-1">
              LOCATION
            </span>
            <p className="font-medium text-[#0D0D0D]">{project.location}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block mb-1">
              COMPLETED
            </span>
            <p className="font-medium text-[#0D0D0D]">{project.year}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block mb-1">
              AREA
            </span>
            <p className="font-medium text-[#0D0D0D]">{project.area}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block mb-1">
              CLIENT
            </span>
            <p className="font-medium text-[#0D0D0D]">{project.client}</p>
          </div>
        </div>
      </section>

      {/* Narrative & Scope */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-6">
            <SectionTag label="// PROJECT BRIEF" theme="light" />
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D]">
              Spatial Vision & Architecture
            </h2>
            <div className="pt-2 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block">
                DELIVERED SERVICES
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.services.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EFEAE0] border border-[#0D0D0D]/10 text-xs font-mono text-[#0D0D0D]"
                  >
                    <Check className="w-3 h-3 text-[#D9A441]" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-serif text-xl sm:text-2xl text-[#0D0D0D] font-light leading-relaxed">
              {project.excerpt}
            </p>
            <div className="space-y-4 pt-4 border-t border-[#0D0D0D]/10 text-xs sm:text-sm text-[#75726D] font-light leading-relaxed">
              {project.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Gallery with Parallax Images */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        {project.galleryImages.map((img, i) => (
          <div key={i} className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0D0D0D] shadow-sm">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center filter brightness-[0.95] contrast-[1.03]"
              />
            </div>
            <p className="text-xs text-[#75726D] font-serif italic text-right">
              {img.caption}
            </p>
          </div>
        ))}
      </section>

      {/* Interactive Before & After Slider (if available) */}
      {project.beforeAfter && (
        <BeforeAfterSlider
          before={project.beforeAfter.before}
          after={project.beforeAfter.after}
          caption={project.beforeAfter.caption}
        />
      )}

      {/* Next Project Link with Hover Reveal */}
      <section className="py-24 md:py-32 bg-[#0D0D0D] text-[#F7F4EE] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block mb-4">
            NEXT RESIDENTIAL COMMISSION
          </span>
          <Link
            href={`/works/${nextProject.slug}`}
            className="group inline-flex flex-col items-center gap-3"
          >
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal group-hover:text-[#D9A441] transition-colors flex items-center gap-4">
              <span>{nextProject.title}</span>
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-[#D9A441] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </h2>
            <span className="text-xs text-[#75726D] font-mono tracking-widest uppercase">
              {nextProject.location} — {nextProject.year}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
