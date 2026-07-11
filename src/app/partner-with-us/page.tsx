import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import { TrendingUp, Building2, Handshake, CheckCircle } from "lucide-react";
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

const benefits = [
  {
    icon: TrendingUp,
    title: "Capital & Strategy",
    description:
      "We provide more than capital - strategic guidance, market access, and operational support to accelerate growth.",
  },
  {
    icon: Building2,
    title: "Proven Track Record",
    description:
      "Successful investments across real estate, technology, hospitality, and private equity in the UAE and beyond.",
  },
  {
    icon: Handshake,
    title: "Long-Term Commitment",
    description:
      "We build lasting partnerships, not short-term transactions. Our success is tied to yours.",
  },
];

const process = [
  {
    step: "01",
    title: "Submit Your Enquiry",
    description: "Complete the form with details about your opportunity or proposal.",
  },
  {
    step: "02",
    title: "Initial Review",
    description: "Our team evaluates your submission within 2-3 business days.",
  },
  {
    step: "03",
    title: "Discovery Call",
    description: "If aligned, we schedule a call to explore the opportunity further.",
  },
  {
    step: "04",
    title: "Due Diligence",
    description: "Comprehensive analysis of the opportunity, financials, and market fit.",
  },
  {
    step: "05",
    title: "Partnership",
    description: "Finalise terms and begin building value together.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
              Partner With Us
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Build Value </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Together
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              We are always looking for strong opportunities and capable partners.
              Whether you are a business owner, investor, or company seeking capital
              and strategic support - we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-8 hover:border-fortress-gold/30 transition-all duration-300 rounded-sm"
              >
                <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-fortress-gold" />
                </div>
                <h3 className="text-fortress-ivory font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-fortress-silver text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-fortress-deep border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-fortress-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-fortress-gold font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-fortress-ivory font-bold text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-fortress-silver text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">
                Submit Your Enquiry
              </h2>
              <p className="text-fortress-silver leading-relaxed mb-8">
                Complete the form and our team will review your submission. We
                respond to all enquiries within 2-3 business days.
              </p>

              <div className="space-y-4">
                {[
                  "Strictly confidential process",
                  "No obligation to proceed",
                  "Response within 2-3 business days",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-fortress-gold flex-shrink-0" />
                    <span className="text-fortress-silver text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-8 lg:p-10 rounded-sm">
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
