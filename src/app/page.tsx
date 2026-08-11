import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import WhatWeDo from "@/components/WhatWeDo";
import InvestmentSectors from "@/components/InvestmentSectors";
import WhyChooseUs from "@/components/WhyChooseUs";
import Philosophy from "@/components/Philosophy";
import PartnershipCTA from "@/components/PartnershipCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PageTransition from "@/components/animations/PageTransition";
import { FloatingBlobs } from "@/components/animations/AnimatedBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
  },
  description:
    "Fortress Investment Holdings is a leading Dubai investment company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality across the UAE and GCC.",
  keywords: [
    "investment company Dubai",
    "investment firm UAE",
    "real estate investment Dubai",
    "private equity Dubai",
    "business acquisitions UAE",
    "Dubai investment opportunities",
  ],
  alternates: {
    canonical: "https://fortressih.com",
  },
  openGraph: {
    title: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
    description:
      "A leading Dubai investment company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality.",
    url: "https://fortressih.com",
    siteName: "Fortress Investment Holdings",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/website%20image.png",
        width: 1200,
        height: 630,
        alt: "Fortress Investment Holdings - Dubai investment company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
    description:
      "A leading Dubai investment company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality.",
    images: ["/website%20image.png"],
  },
};

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white relative">
        <FloatingBlobs />
        <Navbar />
        <Hero />
        <Introduction />
        <WhatWeDo />
        <InvestmentSectors />
        <WhyChooseUs />
        <Philosophy />
        <PartnershipCTA />
        <Newsletter />
        <Footer />
      </main>
    </PageTransition>
  );
}
