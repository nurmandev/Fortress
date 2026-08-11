import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Browse investment articles, UAE market research, sector analysis, and strategic commentary from Fortress Investment Holdings, Dubai's leading investment company.",
  keywords: [
    "UAE investment insights",
    "Dubai market analysis",
    "private equity insights",
    "real estate market UAE",
    "Fortress Investment Holdings blog",
  ],
  alternates: {
    canonical: "https://fortressih.com/insights",
  },
  openGraph: {
    title: "Insights & Resources | Fortress Investment Holdings",
    description:
      "Investment perspectives, market analysis, and strategic commentary from Fortress Investment Holdings.",
    url: "https://fortressih.com/insights",
    siteName: "Fortress Investment Holdings",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/website%20image.png",
        width: 1200,
        height: 630,
        alt: "Fortress Investment Holdings insights and resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Resources | Fortress Investment Holdings",
    description:
      "Investment perspectives, market analysis, and strategic commentary from Fortress Investment Holdings.",
    images: ["/website%20image.png"],
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <Navbar />
      <InsightsClient />
      <Footer />
    </main>
  );
}
