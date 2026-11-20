"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch device or reduced motion
    const touchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touchDevice) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const viewCard = target.closest("[data-cursor='view']");

      setIsViewHovered(!!viewCard);
      setIsHovered(!!interactive && !viewCard);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Primary Gold Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999998] rounded-full bg-[#D9A441]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isViewHovered ? 0 : 1,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999997] rounded-full flex items-center justify-center font-mono text-[9px] uppercase tracking-widest text-[#0D0D0D] font-medium backdrop-blur-[1px]"
        animate={{
          x: isViewHovered ? position.x - 42 : isHovered ? position.x - 24 : position.x - 16,
          y: isViewHovered ? position.y - 42 : isHovered ? position.y - 24 : position.y - 16,
          width: isViewHovered ? 84 : isHovered ? 48 : 32,
          height: isViewHovered ? 84 : isHovered ? 48 : 32,
          backgroundColor: isViewHovered
            ? "rgba(242, 221, 147, 0.95)"
            : isHovered
            ? "rgba(217, 164, 65, 0.2)"
            : "transparent",
          borderColor: isViewHovered ? "#B97A2B" : "#D9A441",
          borderWidth: isViewHovered ? 1 : 1,
          boxShadow: isViewHovered ? "0 10px 30px rgba(217,164,65,0.3)" : "none",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isViewHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-[0.25em] font-semibold"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
