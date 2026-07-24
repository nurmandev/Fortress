import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ClipboardCheck, TrendingUp, BarChart3, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
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
    body: "Great opportunities rarely announce themselves. We find them through our professional networks, direct submissions, market research, trusted advisors, business owners, developers, investors, and strategic partners. We focus on opportunities that address genuine market demand and demonstrate a clear reason for long-term relevance  not momentum, not hype, not fear of missing out.",
    details: [] as { label: string; desc: string }[],
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Evaluate Risk and Potential",
    subtitle: "Looking Beyond the Presentation",
    body: "Every business looks good in a pitch deck. Our job is to understand what it looks like on a difficult Tuesday in a difficult quarter. Each opportunity undergoes an initial review followed, where appropriate, by detailed assessment covering business model, market demand, competitive position, leadership, financial performance, revenue quality, legal structure, operational requirements, valuation, growth potential, and exit possibilities.",
    details: [
      { label: "Business model", desc: "how the company actually makes money" },
      { label: "Market demand", desc: "evidence of genuine, durable customer need" },
      { label: "Competitive position", desc: "why this business wins" },
      { label: "Leadership and management", desc: "the people who will deliver the plan" },
      { label: "Historical financial performance", desc: "what the numbers actually show" },
      { label: "Revenue quality and cash flow", desc: "the difference between growth and health" },
      { label: "Legal structure and regulatory considerations", desc: "clean foundations" },
      { label: "Operational requirements", desc: "what it takes to run and scale" },
      { label: "Valuation", desc: "a price that leaves room for everyone to succeed" },
      { label: "Growth potential and key risks", desc: "upside and downside, honestly weighed" },
      { label: "Exit possibilities", desc: "how value is ultimately realised" },
    ],
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Invest Strategically",
    subtitle: "Structuring Every Investment With Purpose",
    body: "Once an opportunity meets our criteria, we design an investment structure that fits the needs of the business and the interests of all stakeholders. The goal in every case: a clear, responsible structure with appropriate governance, accountability, and alignment. Ambiguity is where partnerships fail  so we remove it at the start.",
    details: [
      { label: "Full acquisition", desc: "complete ownership transition" },
      { label: "Majority or minority investment", desc: "flexible equity positions" },
      { label: "Growth capital", desc: "funding tied to a clear expansion plan" },
      { label: "Joint venture or co-investment", desc: "shared ownership with aligned partners" },
      { label: "Asset acquisition", desc: "purchasing specific assets rather than entities" },
      { label: "Structured financing", desc: "tailored solutions for complex situations" },
      { label: "Strategic partnership", desc: "collaboration beyond pure capital" },
    ],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Manage and Grow Value",
    subtitle: "Contributing Beyond Capital",
    body: "Signing the agreement is where our work begins, not where it ends. Depending on the investment, Fortress actively supports development through strategic planning, financial oversight, management support, business development, brand development, technology implementation, operational improvement, governance, and partnership development. Our level of involvement is calibrated to each opportunity.",
    details: [
      { label: "Strategic planning", desc: "clear direction and measurable objectives" },
      { label: "Financial oversight", desc: "disciplined reporting and performance management" },
      { label: "Management support and recruitment", desc: "strengthening the team" },
      { label: "Business development and market expansion", desc: "opening doors" },
      { label: "Brand development", desc: "building recognition and trust" },
      { label: "Technology implementation", desc: "modernising operations" },
      { label: "Operational improvement", desc: "practical efficiency gains" },
      { label: "Governance and performance monitoring", desc: "accountability that protects value" },
      { label: "Partnership development", desc: "connections that create opportunity" },
    ],
  },
  {
    icon: Handshake,
    step: "05",
    title: "Manage for Long-Term Value",
    subtitle: "Disciplined Oversight. Sustainable Performance.",
    body: "Long-term value is created through disciplined management, consistent monitoring, and informed decision-making. We maintain clear investment objectives, transparent reporting, and structured oversight throughout the investment lifecycle.\n\nOur team continuously reviews performance, manages risk, and responds to changing market conditions while remaining focused on sustainable income and long-term capital growth. Every investment is managed with accountability, clarity, and alignment with the agreed strategy.",
    details: [] as { label: string; desc: string }[],
  },
];

const principles = [
  "Strong and ethical leadership  character precedes capability",
  "Genuine customer demand  real revenue from real customers",
  "Clear financial information  transparency as a starting condition",
  "Realistic valuation  pricing that reflects evidence, not enthusiasm",
  "Scalable operations  growth without structural strain",
  "Competitive differentiation  a defensible reason to win",
  "Responsible governance  structures that protect all stakeholders",
  "Manageable risk  downside we can understand and absorb",
  "Sustainable growth potential  value that compounds over time",
];

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-fortress-navy text-fortress-ivory">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-fortress-gold/10">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C9A24A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <span className="inline-block text-fortress-gold text-xs font-semibold tracking-[4px] uppercase mb-5 px-4 py-1.5 rounded-full border border-fortress-gold/20 bg-fortress-gold/5">
              Our Approach
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 uppercase">
              Disciplined.{" "}
              <span className="font-bold bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
                Strategic.
              </span>{" "}
              Long-Term.
            </h1>
            <p className="text-fortress-silver/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Our investment process is designed to identify quality opportunities, manage risk, and build sustainable value through careful evaluation and active strategic involvement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 border-b border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="text-fortress-gold text-xs tracking-[5px] uppercase font-semibold block mb-4">How We Invest</span>
            <h2 className="text-2xl md:text-4xl font-light text-fortress-ivory uppercase tracking-tight mb-5">
              Our <span className="font-semibold text-fortress-gold">Investment Process</span>
            </h2>
            <p className="text-fortress-ivory/80 text-base md:text-lg leading-relaxed mb-4 font-light italic">
              Every opportunity is different. Our standards never are.
            </p>
            <p className="text-fortress-silver/70 text-sm md:text-base leading-relaxed">
              Our decisions follow a consistent framework built on research, discipline, transparency, and long-term alignment. We assess the quality of the opportunity, the capability of the people behind it, the market environment, the financial requirements, the risks involved, and the realistic potential for sustainable value creation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {steps.map((step) => (
              <Reveal key={step.step}>
                <div className="group bg-fortress-deep/60 border border-fortress-gold/15 hover:border-fortress-gold/35 rounded-xl transition-all duration-300">
                  {/* Step Header */}
                  <div className="flex items-center gap-5 p-7 md:p-9 pb-0">
                    <div className="w-14 h-14 bg-fortress-gold/10 border border-fortress-gold/20 rounded-lg flex items-center justify-center shrink-0 text-fortress-gold group-hover:bg-fortress-gold group-hover:text-fortress-navy transition-colors duration-300">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-fortress-gold/50 text-xs font-mono font-bold tracking-widest uppercase">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-fortress-ivory leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-fortress-gold text-sm mt-0.5">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Body & Details */}
                  <div className="p-7 md:p-9 pt-6 grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      {step.body.split("\n\n").map((para, i) => (
                        <p key={i} className="text-fortress-silver/85 text-sm md:text-base leading-relaxed mb-4 last:mb-0">
                          {para}
                        </p>
                      ))}
                    </div>

                    {step.details && step.details.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-3 border-t lg:border-t-0 lg:border-l border-fortress-gold/10 pt-6 lg:pt-0 lg:pl-8">
                        {step.details.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-fortress-gold shrink-0 mt-0.5" />
                            <div>
                              <span className="text-fortress-ivory text-xs font-semibold">{item.label} </span>
                              <span className="text-fortress-silver/60 text-xs">— {item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Principles */}
      <section className="py-16 md:py-24 border-t border-fortress-gold/10 bg-fortress-deep/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-fortress-gold text-xs tracking-[5px] uppercase font-semibold block mb-3">What We Look For</span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-fortress-ivory">
              Our <span className="font-semibold text-fortress-gold">Evaluation Principles</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {principles.map((principle, i) => {
              const [label, ...rest] = principle.split("  ");
              return (
                <StaggerItem key={i}>
                  <div className="p-6 bg-fortress-navy border border-fortress-gold/10 hover:border-fortress-gold/30 rounded-xl transition-all duration-300 h-full">
                    <span className="text-fortress-gold text-xs font-bold tracking-widest uppercase block mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-fortress-ivory text-sm font-semibold mb-1">{label}</p>
                    <p className="text-fortress-silver/60 text-xs leading-relaxed">{rest.join("  ")}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="bg-gradient-to-r from-fortress-deep via-fortress-navy to-fortress-deep border border-fortress-gold/30 p-10 md:p-16 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-fortress-gold text-xs tracking-[4px] uppercase font-semibold block mb-3">Get in Touch</span>
            <h2 className="text-2xl md:text-4xl font-light uppercase text-fortress-ivory mb-5">
              Have an Opportunity That Matches Our <span className="font-semibold text-fortress-gold">Approach?</span>
            </h2>
            <p className="text-fortress-ivory/70 text-sm md:text-base leading-relaxed mb-8">
              Present your business, project, asset, or strategic proposal to our investment team. Serious opportunities receive serious attention.
            </p>
            <Link
              href="/invest-with-fortress"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm shadow-xl"
            >
              SUBMIT YOUR OPPORTUNITY
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
