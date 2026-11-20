import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          black: "#0D0D0D",
          dark: "#141414",
          surface: "#1A1A1A",
          neutral: "#F7F4EE",
          "neutral-soft": "#EFEAE0",
          "neutral-subtle": "#E5DFD3",
          muted: "#75726D",
          light: "#FAF8F5",
        },
        gold: {
          light: "#F2DD93",
          DEFAULT: "#D9A441",
          dark: "#B97A2B",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Quagera", "Marcellus", "serif"],
        sans: ["Montserrat", "HDColton", "Jost", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F2DD93 0%, #D9A441 50%, #B97A2B 100%)",
        "gold-shimmer": "linear-gradient(90deg, #F2DD93 0%, #D9A441 50%, #F2DD93 100%)",
        "dark-radial": "radial-gradient(circle at 50% 50%, rgba(26,26,26,0.6) 0%, rgba(13,13,13,0.95) 100%)",
      },
      letterSpacing: {
        widest: "0.25em",
        editorial: "0.2em",
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
