"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // On subpages with light backgrounds vs hero dark background
  const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";
  const isLightPage = cleanPath !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past top
      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Determine navbar text and logo color
  const navTheme = isScrolled || isLightPage ? "light" : "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#0D0D0D]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-sm"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo
              variant={isScrolled ? "dark" : isLightPage ? "light" : "dark"}
              size="sm"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {siteConfig.navigation.slice(0, 4).map((item) => {
              const isActive = cleanPath === item.href.replace(/\/+$/, "");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] uppercase tracking-[0.2em] font-medium transition-colors relative py-1 group ${
                    isScrolled
                      ? "text-[#F7F4EE]/80 hover:text-[#D9A441]"
                      : isLightPage
                      ? "text-[#0D0D0D]/80 hover:text-[#D9A441]"
                      : "text-[#F7F4EE]/90 hover:text-[#D9A441]"
                  } ${isActive ? "text-[#D9A441] font-semibold" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D9A441] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch button */}
          <div className="hidden lg:flex items-center gap-6">
            <MagneticButton
              href="/contact"
              variant="outline"
              size="sm"
              className={
                isScrolled || !isLightPage
                  ? "border-[#D9A441]/70 text-[#F7F4EE]/90 hover:text-[#0D0D0D]"
                  : "border-[#D9A441] text-[#0D0D0D]/80 hover:text-[#D9A441]"
              }
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2.5 rounded-full transition-colors ${
              isScrolled || !isLightPage
                ? "text-[#F7F4EE] hover:bg-white/10"
                : "text-[#0D0D0D] hover:bg-black/5"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen animated mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] text-[#F7F4EE] flex flex-col justify-between px-8 py-24 lg:hidden"
          >
            {/* Top decorative line */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9A441] font-mono">
                // NAVIGATION
              </span>
              {siteConfig.navigation.map((item, index) => {
                const isActive = cleanPath === item.href.replace(/\/+$/, "");
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-serif text-3xl sm:text-4xl transition-colors flex items-center justify-between py-2 border-b border-white/5 ${
                        isActive ? "text-[#D9A441] italic" : "text-[#F7F4EE] hover:text-[#D9A441]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#D9A441]/60" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#75726D]">
              <div>
                <p className="text-[#F7F4EE]/90 uppercase tracking-wider text-[11px] mb-1">Inquiries</p>
                <p>{siteConfig.contact.email}</p>
              </div>
              <div>
                <p className="text-[#F7F4EE]/90 uppercase tracking-wider text-[11px] mb-1">Telephone</p>
                <p>{siteConfig.contact.displayPhone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
