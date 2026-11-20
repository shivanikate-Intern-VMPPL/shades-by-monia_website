import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "Explore our portfolio of luxury residential projects across Mumbai, Delhi NCR, Goa and beyond.",
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
