"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, YouTubeIcon, WhatsAppIcon, PinterestIcon } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Studio local time in India (IST - Asia/Kolkata)
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: siteConfig.contact.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#0D0D0D] text-[#F7F4EE] pt-20 md:pt-28 pb-12 overflow-hidden border-t border-white/10">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#D9A441]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <Logo variant="dark" size="lg" />
            <p className="font-serif text-xl sm:text-2xl text-[#F7F4EE]/90 max-w-sm italic">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#75726D] max-w-md leading-relaxed">
              Bespoke interior architecture, turnkey renovations, and curated fine furnishings
              designed for distinguished private homes across Mumbai, Delhi NCR, and worldwide.
            </p>

            {/* Live studio local time clock in IST */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#D9A441]">
              <div className="w-2 h-2 rounded-full bg-[#D9A441] animate-ping" />
              <span>INDIA STUDIO TIME:</span>
              <span className="text-[#F7F4EE] tracking-widest">{localTime || "04:30:00 PM"} IST</span>
            </div>
          </div>

          {/* Col 2: Studio Locations & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
              // STUDIOS & INQUIRIES
            </span>
            <div className="space-y-3 text-xs text-[#F7F4EE]/80 leading-relaxed">
              <p className="font-medium text-[#F7F4EE]">Mumbai & Delhi NCR</p>
              <p className="text-[#75726D]">{siteConfig.contact.address}</p>
              <div className="pt-2 space-y-1">
                <p>
                  <span className="text-[#75726D]">Direct: </span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#D9A441] transition-colors">
                    {siteConfig.contact.displayPhone}
                  </a>
                </p>
                <p>
                  <span className="text-[#75726D]">Inquiries: </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D9A441] transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
              // EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F7F4EE]/80 hover:text-[#D9A441] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-[#D9A441]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Socials & Private Liaison */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441] font-mono block">
              // CONNECT
            </span>
            <ul className="space-y-2.5 text-xs text-[#F7F4EE]/80">
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A441] transition-colors inline-flex items-center gap-2"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A441] transition-colors inline-flex items-center gap-2"
                >
                  <PinterestIcon className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Pinterest</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A441] transition-colors inline-flex items-center gap-2"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A441] transition-colors inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive faded SHADES wordmark that reveals across the base */}
        <div className="relative py-12 md:py-16 overflow-hidden select-none pointer-events-none">
          <p className="font-serif text-[18vw] leading-none font-light tracking-tighter text-center text-white/[0.03] uppercase whitespace-nowrap">
            SHADES
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#75726D]">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            {siteConfig.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#D9A441] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
