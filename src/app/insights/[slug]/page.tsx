import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { ReadingProgressBar, ShareButton } from "@/components/ui/ReadingProgressBar";
import { insights } from "@/data/insights";

export function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 md:pt-40 pb-28 bg-[#F7F4EE] text-[#0D0D0D] min-h-screen">
      {/* Reading Progress Bar pinned at top */}
      <ReadingProgressBar />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Navigation back */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#75726D] hover:text-[#0D0D0D] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-[#D9A441]">
            <span>{post.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#75726D]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="text-[#75726D]">{post.publishedAt}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0D0D0D] font-normal tracking-tight leading-[1.12]">
            {post.title}
          </h1>

          <div className="pt-4 flex items-center justify-between border-y border-[#0D0D0D]/10 py-4 text-xs text-[#75726D]">
            <div>
              <p className="font-medium text-[#0D0D0D]">{post.author}</p>
              <p className="text-[11px] font-mono">{post.authorRole}</p>
            </div>
            <div className="flex items-center gap-3">
              <ShareButton title={post.title} />
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0D0D] mb-12 shadow-sm">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-12 text-base sm:text-lg text-[#0D0D0D]/85 font-light leading-relaxed">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D] pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 pl-6 border-l-2 border-[#D9A441] font-serif text-xl sm:text-2xl italic text-[#0D0D0D] py-2">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {section.image && (
                <div className="my-8 space-y-2">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                    <Image
                      src={section.image}
                      alt={section.caption || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {section.caption && (
                    <p className="text-xs text-[#75726D] font-mono italic text-center">
                      {section.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 pt-8 border-t border-[#0D0D0D]/10 flex items-center gap-6 p-6 bg-[#EFEAE0]">
          <div className="w-14 h-14 rounded-full bg-[#0D0D0D] text-[#D9A441] flex items-center justify-center font-serif text-xl flex-shrink-0">
            sm
          </div>
          <div>
            <h4 className="font-serif text-lg text-[#0D0D0D]">{post.author}</h4>
            <p className="text-xs text-[#75726D]">{post.authorRole} at Shades by Monia Studio.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
