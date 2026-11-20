import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FilmGrain from "@/components/ui/FilmGrain";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shades of Monia | Interior Design Studio",
    template: "%s | Shades of Monia",
  },
  description: siteConfig.description,
  keywords: [
    "Luxury Interior Design India",
    "Shades of Monia",
    "Shades by Monia",
    "Luxury Interior Designer Mumbai",
    "Interior Architect Delhi NCR",
    "Bespoke Penthouse Design Mumbai",
    "Luxury Villas Goa and Alibaug",
    "Turnkey Residential Interiors India",
    "Contemporary Indian Luxury Homes",
  ],
  authors: [{ name: "Monia Kedari", url: siteConfig.url }],
  creator: "Shades of Monia",
  publisher: "Shades of Monia Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Shades of Monia",
    title: "Shades of Monia | Interior Design Studio",
    description: siteConfig.description,
    images: [
      {
        url: "/assets/logo-original.jpg",
        width: 1024,
        height: 724,
        alt: "Shades of Monia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shades of Monia | Interior Design Studio",
    description: siteConfig.description,
    images: ["/assets/logo-original.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Search Engines (LocalBusiness / InteriorDesign)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.displayPhone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    priceRange: "₹₹₹₹",
    image: `${siteConfig.url}/assets/logo-original.jpg`,
    openingHours: "Mo-Sa 10:00-19:00",
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=3" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-[#F7F4EE] text-[#0D0D0D] font-sans antialiased selection:bg-[#D9A441] selection:text-[#0D0D0D]">
        <SmoothScrollProvider>
          {/* Film Grain tactile texture */}
          <FilmGrain />

          {/* Desktop Custom Follower Cursor */}
          <CustomCursor />

          {/* Preloader with SVG Stroke Animation & Monogram */}
          <Preloader />

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Global Sticky Luxury Navbar */}
          <Navbar />

          {/* Page View */}
          <div className="relative z-10">{children}</div>

          {/* Global Footer */}
          <Footer />

          {/* Floating Action Controls */}
          <WhatsAppButton />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
