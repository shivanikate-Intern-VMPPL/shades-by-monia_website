import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin a thoughtful collaboration. Share your project brief with our Mumbai and Delhi NCR ateliers.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
