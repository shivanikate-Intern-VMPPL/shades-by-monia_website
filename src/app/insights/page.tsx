import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { insights } from "@/data/insights";

export default function InsightsPage() {
  const featured = insights.find((p) => p.featured) || insights[0];
  const rest = insights.filter((p) => p.slug !== featured.slug);

  return (
    <div className="pt-32 md:pt-40 pb-28 bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionTag label="// EDITORIAL & PERSPECTIVE" theme="light" className="mb-4" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0D0D0D] leading-[1.05] mb-6">
            Insights & Monologues
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed">
            Essays on architectural restraint, historical materiality, lighting philosophy, and the
            sensory rituals of modern dwelling.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-20 pb-16 border-b border-[#0D0D0D]/10">
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#0D0D0D]">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-95"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-[#F7F4EE]">
                FEATURED ESSAY
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#D9A441]">
                <span>{featured.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#75726D]">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#0D0D0D] group-hover:text-[#D9A441] transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#75726D] font-light leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-[#75726D]">
                <span>By {featured.author}</span>
                <span className="text-[#0D0D0D] font-medium inline-flex items-center gap-1 group-hover:text-[#D9A441]">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0D0D] mb-4">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/50 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest text-[#F7F4EE]">
                  {post.category}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#75726D]">
                  <Clock className="w-3 h-3 text-[#D9A441]" />
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.publishedAt}</span>
                </div>

                <h3 className="font-serif text-xl text-[#0D0D0D] group-hover:text-[#D9A441] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-[#75726D] line-clamp-2 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
