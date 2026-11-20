import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Editorial perspectives on luxury architecture, materiality, and contemporary Indian living.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
