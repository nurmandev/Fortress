import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ClipboardCheck, TrendingUp, BarChart3, Handshake, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Fortress Investment Holdings' disciplined investment process: identify, evaluate, invest, manage, and build long-term partnerships across the UAE.",
  openGraph: {
    title: "Our Approach | Fortress Investment Holdings",
    description:
      "Our disciplined investment process for creating sustainable value.",
  },
};

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Identify Opportunities",
    subtitle: "Finding Businesses and Assets With Potential",
    body: "Great opportunities rarely announce themselves. We find them through our professional networks, direct submissions, market research, trusted advisors, business owners, developers, investors, and strategic partners. We focus on opportunities that address genuine market demand and demonstrate a clear reason for long-term relevance — not momentum, not hype, not fear of missing out.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Evaluate Risk & Potential",
    subtitle: "Looking Beyond the Presentation",
    body: "Every business looks good in a pitch deck. Our job is to understand what it looks like on a difficult Tuesday in a difficult quarter. Each opportunity undergoes a rigorous multi-point assessment.",
    details: [
      { label: "Business Model", desc: "How the company actually generates sustainable revenue" },
      { label: "Market Demand", desc: "Evidence of genuine, durable customer need" },
      { label: "Competitive Position", desc: "Defensible advantages that allow the business to win" },
      { label: "Leadership Capability", desc: "Ethical management teams capable of delivering the vision" },
      { label: "Financial Quality", desc: "Audited numbers, cash flow dynamics, and clean balances" },
      { label: "Valuation & Risk", desc: "Downside protection paired with realistic growth upside" },
    ],
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Invest Strategically",
    subtitle: "Structuring Every Investment With Purpose",
    body: "Once an opportunity meets our criteria, we design an investment structure that fits the needs of the business and aligns with stakeholder interests. Ambiguity is where partnerships fail — so we remove it from day one.",
    details: [
      { label: "Full Acquisition", desc: "Orderly and complete ownership transition" },
      { label: "Growth Equity", desc: "Flexible majority/minority equity tied to clear expansion plans" },
      { label: "Joint Ventures", desc: "Co-investments with aligned institutions and family offices" },
      { label: "Structured Assets", desc: "Direct participation in income-generating real assets" },
    ],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Manage & Scale Value",
    subtitle: "Contributing Capital + Active Guidance",
    body: "Signing the agreement is where our work begins. Depending on the asset, Fortress actively supports development through strategic governance, corporate development, and operational improvement.",
    details: [
      { label: "Strategic Planning", desc: "Clear direction and measurable objectives" },
      { label: "Financial Governance", desc: "Institutional reporting and capital discipline" },
      { label: "Market Expansion", desc: "Unlocking regional UAE and GCC commercial networks" },
      { label: "Operational Scaling", desc: "Technology integration and efficiency gains" },
    ],
  },
  {
    icon: Handshake,
    step: "05",
    title: "Long-Term Stewardship",
    subtitle: "Disciplined Oversight & Compounded Growth",
    body: "Long-term value is created through disciplined stewardship, continuous risk management, and structured oversight throughout the investment lifecycle.",
  },
];

const principles = [
  { title: "Ethical Leadership", desc: "Character precedes capability. We partner with leaders of uncompromised integrity." },
  { title: "Durable Market Demand", desc: "Real revenue from real customers with non-negotiable needs." },
  { title: "Financial Transparency", desc: "Clean numbers and full visibility as non-negotiable starting conditions." },
  { title: "Realistic Valuation", desc: "Pricing anchored in empirical evidence rather than speculative optimism." },
  { title: "Scalable Operations", desc: "Robust processes engineered to grow without structural strain." },
  { title: "Downside Protection", desc: "Risk profiles thoroughly evaluated, understood, and managed." },
];

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-fortress-navy text-fortress-ivory">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-fortress-navy via-fortress-navy to-fortress-deep border-b border-fortress-gold/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A24A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <span className="inline-block text-fortress-gold text-xs md:text-sm font-semibold tracking-[4px] uppercase mb-4 px-4 py-1.5 rounded-full border border-fortress-gold/20 bg-fortress-gold/5">
              Disciplined Capital Allocation
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 uppercase">
              Our <span className="font-bold bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">Approach</span>
            </h1>
            <p className="text-fortress-silver/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              A structured investment framework engineered to identify high-quality assets, manage downside risk, and compound long-term capital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fortress-gold text-xs tracking-[5px] uppercase font-semibold block mb-3">5-Stage Framework</span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-fortress-ivory">
            The Fortress <span className="font-semibold text-fortress-gold">Lifecycle</span>
          </h2>
          <p className="text-fortress-silver/70 text-sm md:text-base mt-4 leading-relaxed">
            Every decision follows a disciplined, repeatable methodology from initial discovery to long-term stewardship.
          </p>
        </Reveal>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Reveal key={step.step}>
              <div className="group bg-fortress-deep/80 border border-fortress-gold/15 hover:border-fortress-gold/40 p-8 md:p-10 rounded-xl transition-all duration-300 shadow-xl">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Step Header */}
                  <div className="lg:col-span-5 flex items-start gap-5">
                    <div className="w-14 h-14 bg-fortress-gold/10 border border-fortress-gold/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-fortress-gold group-hover:text-fortress-navy transition-colors duration-300 text-fortress-gold">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-fortress-gold/60 text-xs font-mono font-bold tracking-widest block uppercase">
                        Stage {step.step}
                      </span>
                      <h3 className="text-2xl font-semibold text-fortress-ivory mt-1">
                        {step.title}
                      </h3>
                      <p className="text-fortress-gold text-sm font-medium mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body & Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-fortress-silver/90 text-sm md:text-base leading-relaxed">
                      {step.body}
                    </p>

                    {step.details && (
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-fortress-gold/10">
                        {step.details.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-fortress-gold shrink-0 mt-0.5" />
                            <div>
                              <p className="text-fortress-ivory text-xs font-semibold">{item.label}</p>
                              <p className="text-fortress-silver/60 text-[11px] leading-snug mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Evaluation Principles Grid */}
      <section className="py-20 md:py-28 bg-fortress-deep/40 border-y border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-fortress-gold text-xs tracking-[5px] uppercase font-semibold block mb-3">Filter & Criteria</span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-fortress-ivory">
              Core <span className="font-semibold text-fortress-gold">Evaluation Principles</span>
            </h2>
            <p className="text-fortress-silver/70 text-sm md:text-base mt-4 leading-relaxed">
              We say no to the vast majority of proposals so we can dedicate full capital and conviction to exceptional opportunities.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <StaggerItem key={i} className="h-full">
                <div className="h-full p-6 md:p-8 bg-fortress-navy border border-fortress-gold/10 hover:border-fortress-gold/30 rounded-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-fortress-gold/10 flex items-center justify-center mb-5 text-fortress-gold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-fortress-ivory mb-2">{p.title}</h4>
                    <p className="text-fortress-silver/70 text-xs md:text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Modern Compact CTA */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="bg-gradient-to-r from-fortress-deep via-fortress-navy to-fortress-deep border border-fortress-gold/30 p-10 md:p-16 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-fortress-gold text-xs tracking-[4px] uppercase font-semibold block mb-3">Partner With Fortress</span>
            <h2 className="text-2xl md:text-4xl font-light uppercase text-fortress-ivory mb-6">
              Present an <span className="font-semibold text-fortress-gold">Opportunity</span>
            </h2>
            <p className="text-fortress-silver/80 text-sm md:text-base leading-relaxed mb-8">
              We welcome high-quality proposals from owners, founders, advisors, and developers across the UAE and GCC.
            </p>
            <Link
              href="/invest-with-fortress"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm shadow-xl"
            >
              Submit Opportunity
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
