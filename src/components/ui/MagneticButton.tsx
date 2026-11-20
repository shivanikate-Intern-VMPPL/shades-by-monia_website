"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "gold",
  className = "",
  size = "md",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-xs tracking-[0.25em]",
  };

  const variantClasses = {
    gold: "bg-gradient-to-r from-[#F2DD93] via-[#D9A441] to-[#B97A2B] text-[#0D0D0D] font-medium shadow-sm hover:shadow-lg hover:shadow-[#D9A441]/20",
    outline: "border border-[#D9A441]/80 text-[#0D0D0D] hover:bg-[#D9A441] hover:text-[#0D0D0D] transition-colors duration-500",
    ghost: "text-[#0D0D0D] hover:text-[#D9A441] transition-colors",
    dark: "bg-[#0D0D0D] text-[#F7F4EE] border border-white/10 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors duration-500",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center overflow-hidden uppercase tracking-[0.2em] transition-all duration-300 group cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Sweeping shimmer on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block bg-transparent border-0 p-0 focus:outline-none">
      {content}
    </button>
  );
}
