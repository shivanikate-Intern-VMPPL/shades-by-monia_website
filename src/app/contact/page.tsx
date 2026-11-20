"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import confetti from "canvas-confetti";
import SectionTag from "@/components/ui/SectionTag";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Sea-Facing Penthouse",
    budget: "₹1 Crore – ₹2.5 Crores",
    location: "Mumbai",
    timeline: "Within 3 Months",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to submit brief. Please try again.");
      }

      setSubmitted(true);

      // Celebratory luxury gold confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#F2DD93", "#D9A441", "#B97A2B", "#0D0D0D"],
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please contact us directly.");
    } finally {
      setLoading(false);
    }
  };

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
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionTag label="// INITIATE COMMISSION" theme="light" className="mb-4" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0D0D0D] leading-[1.05] mb-6">
            Begin a <span className="italic text-[#D9A441]">Thoughtful Dialogue</span>.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#75726D] font-light leading-relaxed">
            Our atelier accepts a limited number of bespoke private residences each year to ensure
            uncompromising personal attention and on-site perfection. Share your vision below.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 bg-[#EFEAE0] border border-[#0D0D0D]/10 space-y-6">
              <h2 className="font-serif text-2xl text-[#0D0D0D]">Atelier Presence</h2>

              <div className="space-y-4 text-xs text-[#75726D] leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#0D0D0D]">Mumbai Atelier</p>
                    <p>Bandra West / Worli, Mumbai, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#0D0D0D]">Delhi NCR Atelier</p>
                    <p>Golf Course Road, Gurugram (Delhi NCR)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                  <div>
                    <span className="text-[#75726D]">Direct: </span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#D9A441] text-[#0D0D0D] font-medium">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                  <div>
                    <span className="text-[#75726D]">Inquiries: </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D9A441] text-[#0D0D0D] font-medium">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>

              {/* Map Graphic */}
              <div className="relative aspect-[16/9] w-full rounded-none overflow-hidden bg-[#0D0D0D] flex items-center justify-center p-4 text-center border border-white/10">
                <div className="space-y-1">
                  <div className="w-3 h-3 rounded-full bg-[#D9A441] mx-auto animate-ping" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F7F4EE]/90 font-mono pt-2">
                    MUMBAI & NEW DELHI ATELIERS
                  </p>
                  <p className="text-[10px] text-[#75726D] italic">
                    Consultations arranged across India & for NRI homeowners
                  </p>
                </div>
              </div>

              {/* Direct Socials */}
              <div className="pt-4 border-t border-[#0D0D0D]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#75726D] font-mono block mb-3">
                  DIRECT CHANNELS
                </span>
                <div className="flex items-center gap-4 text-xs">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#F7F4EE] border border-[#0D0D0D]/10 hover:border-[#D9A441] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#D9A441]" />
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#F7F4EE] border border-[#0D0D0D]/10 hover:border-[#D9A441] transition-colors"
                  >
                    <YouTubeIcon className="w-4 h-4 text-[#D9A441]" />
                  </a>
                  <a
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#F7F4EE] border border-[#0D0D0D]/10 hover:border-[#D9A441] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#D9A441]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#EFEAE0] p-8 md:p-12 border border-[#0D0D0D]/10">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#D9A441]/20 border border-[#D9A441] flex items-center justify-center mx-auto text-[#D9A441]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#0D0D0D]">Brief Transmitted</h3>
                <p className="text-xs sm:text-sm text-[#75726D] max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your vision with us. Monia and our senior team will review your
                  project details and reach out within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-[0.2em] text-[#0D0D0D] font-medium hover:text-[#D9A441] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative group">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] placeholder-[#75726D]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@domain.com"
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] placeholder-[#75726D]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="relative group">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] placeholder-[#75726D]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Location */}
                  <div className="relative group">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      City / Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Worli, Mumbai / Goa / Delhi NCR"
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] placeholder-[#75726D]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Property Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] focus:outline-none cursor-pointer"
                    >
                      <option>Sea-Facing Penthouse</option>
                      <option>Private Villa / Bungalow</option>
                      <option>Luxury High-Rise Apartment</option>
                      <option>Holiday Home (Goa / Alibaug)</option>
                      <option>Furniture & Art Styling Only</option>
                    </select>
                  </div>

                  {/* Budget in INR */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Anticipated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] focus:outline-none cursor-pointer"
                    >
                      <option>₹50 Lakhs – ₹1 Crore</option>
                      <option>₹1 Crore – ₹2.5 Crores</option>
                      <option>₹2.5 Crores – ₹5 Crores</option>
                      <option>₹5 Crores+</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] focus:outline-none cursor-pointer"
                    >
                      <option>Immediate / Ready</option>
                      <option>Within 3 Months</option>
                      <option>Within 6 Months</option>
                      <option>Planning for Next Year</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#75726D] block mb-2 font-mono">
                    About Your Home & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property, your family's routine, and any specific ideas or requirements you have..."
                    className="w-full bg-[#F7F4EE] border-b-2 border-[#0D0D0D]/20 focus:border-[#D9A441] p-3 text-xs sm:text-sm text-[#0D0D0D] placeholder-[#75726D]/50 focus:outline-none transition-colors"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-600 font-mono">{errorMessage}</p>
                )}

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] text-[#75726D] italic">
                    Strict privacy & non-disclosure guaranteed.
                  </span>
                  <MagneticButton
                    type="submit"
                    variant="gold"
                    size="lg"
                    className={loading ? "opacity-70 pointer-events-none" : ""}
                  >
                    {loading ? "TRANSMITTING..." : "SUBMIT PROJECT BRIEF"}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
