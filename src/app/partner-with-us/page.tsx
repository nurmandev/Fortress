import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Fortress Investment Holdings",
  description:
    "Partner with Fortress Investment Holdings. Submit investment opportunities, explore joint ventures, business acquisitions, and strategic partnerships across the UAE.",
  openGraph: {
    title: "Partner With Us | Fortress Investment Holdings",
    description:
      "Submit investment opportunities, explore joint ventures, business acquisitions, and strategic partnerships.",
  },
};

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Partner With Us</p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-fortress-navy">Strong Partnerships Create </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
                Stronger Outcomes
              </span>
            </h1>
            <p className="text-fortress-charcoal/70 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              We work with business owners, entrepreneurs, investors, companies, developers, family offices, and advisors to identify and develop valuable opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Build the Next Opportunity With Fortress</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">Investment and Growth Support</h2>
            <p className="text-fortress-silver text-sm md:text-lg leading-relaxed">
              Behind every submission to Fortress is someone&rsquo;s business, project, or vision. We treat each one accordingly  with professionalism, discretion, and a genuine review. Fortress Investment Holdings welcomes selected proposals from individuals and organisations seeking capital, acquisitions, joint ventures, strategic support, or long-term investment partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* For Business Owners */}
      <section className="py-12 md:py-20 my-8 md:my-12 sm:mx-4 rounded-2xl bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">For Business Owners</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-navy mb-4 md:mb-6">You Have Built Something Valuable</h2>
            <p className="text-fortress-charcoal/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              We work with established businesses seeking growth capital, strategic investment, expansion support, operational development, or succession solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {["Growth capital", "Strategic investment", "Expansion support", "Operational development", "Business sale solutions", "Succession solutions", "Strategic guidance"].map((item, i) => (
              <div key={i} className="p-4 md:p-5 bg-fortress-navy border border-fortress-gold/10 rounded-sm">
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Acquisition Opportunities */}
      <section className="py-12 md:py-20 bg-fortress-deep my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Business Acquisition Opportunities</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">Considering the Sale of Your Business?</h2>
            <p className="text-fortress-ivory/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Selling a business you have built is one of the most significant decisions you will make. Our approach is professional, confidential, and commercially focused.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
            {["Business overview", "Industry and location", "Ownership structure", "Years of operation", "Revenue and profitability", "Reason for sale", "Proposed valuation", "Assets and liabilities"].map((item, i) => (
              <div key={i} className="p-4 md:p-5 bg-fortress-navy border border-fortress-gold/10 rounded-sm">
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Venture Opportunities */}
      <section className="py-12 md:py-20 my-8 md:my-12 sm:mx-4 rounded-2xl bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Joint Venture Opportunities</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-navy mb-4 md:mb-6">Combining Strengths to Build Value</h2>
            <p className="text-fortress-charcoal/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              The best joint ventures pair complementary strengths: capital with capability, access with execution, vision with resources.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {["Real estate development", "New business creation", "Regional expansion", "Technology platforms", "Trading and distribution", "Hospitality projects", "International partnerships", "Asset acquisitions"].map((item, i) => (
              <div key={i} className="p-4 md:p-5 bg-fortress-deep border border-fortress-gold/10 rounded-sm">
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-12 md:py-20 bg-fortress-deep my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Strategic Partnerships</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">Creating Opportunities Through Collaboration</h2>
            <p className="text-fortress-ivory/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              We welcome partnership enquiries from investors, family offices, financial institutions, developers, business advisors, and corporate groups.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {["Investors and family offices", "Financial institutions", "Developers and asset owners", "Business advisors", "Corporate groups", "Distributors and trading businesses"].map((item, i) => (
              <div key={i} className="p-4 md:p-5 bg-fortress-navy border border-fortress-gold/10 rounded-sm">
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 bg-white my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-16">
            <div className="lg:col-span-2">
              <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Submit Your Opportunity</p>
              <h2 className="text-xl md:text-4xl font-bold text-fortress-navy mb-4 md:mb-6">Partner With Us</h2>
              <p className="text-fortress-charcoal/70 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Complete the form and our team will review your submission. We respond to all enquiries within 2-3 business days.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Strictly confidential process",
                  "No obligation to proceed",
                  "Response within 2-3 business days",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-fortress-gold flex-shrink-0" />
                    <span className="text-fortress-charcoal/60 text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-fortress-navy border border-fortress-gold/10 p-6 md:p-10 rounded-2xl">
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Note */}
      <section className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Confidentiality</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">Your Information Is Protected</h2>
            <p className="text-fortress-silver text-sm md:text-base leading-relaxed">
              Information submitted through this website is reviewed solely for the purpose of assessing a potential business or investment opportunity. Submission of information does not automatically establish a confidential, advisory, partnership, or investment relationship. Parties requiring a formal non-disclosure agreement should contact our team before submitting sensitive information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
