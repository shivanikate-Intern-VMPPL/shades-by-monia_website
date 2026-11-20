"use client";

import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";

export function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      setReadingProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#F2DD93] via-[#D9A441] to-[#B97A2B] transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}

export function ShareButton({ title }: { title: string }) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && navigator.share) {
          navigator.share({ title, url: window.location.href });
        }
      }}
      className="p-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
      title="Share essay"
    >
      <Share2 className="w-4 h-4 text-[#0D0D0D]" />
    </button>
  );
}
