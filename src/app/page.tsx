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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
  );
}
