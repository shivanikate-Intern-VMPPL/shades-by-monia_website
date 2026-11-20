import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Award-winning luxury easing
export const LUXURY_EASE = "power3.out";
export const LUXURY_EASE_SLOW = "power4.out";
export const LUXURY_CUBIC = "cubic-bezier(0.16, 1, 0.3, 1)";

// Check for prefers-reduced-motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
