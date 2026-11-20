"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  withLink?: boolean;
}

export default function Logo({
  variant = "dark", // 'dark' = for dark backgrounds (white text), 'light' = for light backgrounds (black text)
  size = "md",
  className = "",
  withLink = true,
}: LogoProps) {
  // Dimensions map corresponding to 1024x724 ratio (~1.414 : 1)
  const sizeMap = {
    sm: { width: 140, height: 99, class: "w-[120px] md:w-[140px]" },
    md: { width: 180, height: 127, class: "w-[150px] md:w-[180px]" },
    lg: { width: 240, height: 170, class: "w-[200px] md:w-[240px]" },
    hero: { width: 340, height: 240, class: "w-[240px] sm:w-[300px] md:w-[340px]" },
  };

  const currentSize = sizeMap[size];
  const src = variant === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

  const content = (
    <div className={`relative inline-block select-none ${currentSize.class} ${className}`}>
      <Image
        src={src}
        alt="Shades by Monia – Luxury Interior Design Studio"
        width={currentSize.width}
        height={currentSize.height}
        className="w-full h-auto object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block group focus:outline-none" aria-label="Shades by Monia Homepage">
        {content}
      </Link>
    );
  }

  return content;
}
