"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire via WhatsApp Concierge"
      className="fixed bottom-8 left-8 z-50 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D0D0D]/95 text-[#F7F4EE] border border-[#D9A441]/40 backdrop-blur-md hover:border-[#D9A441] transition-all duration-300 shadow-xl"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <MessageCircle className="w-4 h-4 text-[#D9A441] group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.18em] font-medium text-[#F7F4EE]/90 group-hover:text-[#D9A441] transition-colors">
        Private Concierge
      </span>
    </a>
  );
}
