import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ClipboardCheck, TrendingUp, BarChart3, Handshake, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
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
    title: "Evaluate Risk and Potential",
    subtitle: "Looking Beyond the Presentation",
    body: "Every business looks good in a pitch deck. Our job is to understand what it looks like on a difficult Tuesday in a difficult quarter. Each opportunity undergoes an initial review followed, where appropriate, by detailed assessment covering business model, market demand, competitive position, leadership, financial performance, revenue quality, legal structure, operational requirements, valuation, growth potential, and exit possibilities.",
    details: [
      "Business model — how the company actually makes money",
      "Market demand — evidence of genuine, durable customer need",
      "Competitive position — why this business wins",
      "Leadership and management — the people who will deliver the plan",
      "Historical financial performance — what the numbers actually show",
      "Revenue quality and cash flow — the difference between growth and health",
      "Legal structure and regulatory considerations — clean foundations",
      "Operational requirements — what it takes to run and scale",
      "Valuation — a price that leaves room for everyone to succeed",
      "Growth potential and key risks — upside and downside, honestly weighed",
      "Exit possibilities — how value is ultimately realised",
    ],
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Invest Strategically",
    subtitle: "Structuring Every Investment With Purpose",
    body: "Once an opportunity meets our criteria, we design an investment structure that fits the needs of the business and the interests of all stakeholders. The goal in every case: a clear, responsible structure with appropriate governance, accountability, and alignment. Ambiguity is where partnerships fail — so we remove it at the start.",
    details: [
      "Full acquisition — complete ownership transition",
      "Majority or minority investment — flexible equity positions",
      "Growth capital — funding tied to a clear expansion plan",
      "Joint venture or co-investment — shared ownership with aligned partners",
      "Asset acquisition — purchasing specific assets rather than entities",
      "Structured financing — tailored solutions for complex situations",
      "Strategic partnership — collaboration beyond pure capital",
    ],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Manage and Grow Value",
    subtitle: "Contributing Beyond Capital",
    body: "Signing the agreement is where our work begins, not where it ends. Depending on the investment, Fortress actively supports development through strategic planning, financial oversight, management support, business development, brand development, technology implementation, operational improvement, governance, and partnership development. Our level of involvement is calibrated to each opportunity.",
    details: [
      "Strategic planning — clear direction and measurable objectives",
      "Financial oversight — disciplined reporting and performance management",
      "Management support and recruitment — strengthening the team",
      "Business development and market expansion — opening doors",
      "Brand development — building recognition and trust",
      "Technology implementation — modernising operations",
      "Operational improvement — practical efficiency gains",
      "Governance and performance monitoring — accountability that protects value",
      "Partnership development — connections that create opportunity",
    ],
  },
  {
    icon: Handshake,
    step: "05",
    title: "Build Long-Term Partnerships",
    subtitle: "Shared Vision. Aligned Outcomes.",
    body: "Long-term value is built through strong relationships — and strong relationships are built through consistency. We maintain clear communication, shared objectives, transparency, and mutual accountability between Fortress, management teams, founders, investors, and strategic partners. Markets will bring both opportunities and challenges. Our aim is to build partnerships strong enough for both.",
  },
];

const principles = [
  "Strong and ethical leadership — character precedes capability",
  "Genuine customer demand — real revenue from real customers",
  "Clear financial information — transparency as a starting condition",
  "Realistic valuation — pricing that reflects evidence, not enthusiasm",
  "Scalable operations — growth without structural strain",
  "Competitive differentiation — a defensible reason to win",
  "Responsible governance — structures that protect all stakeholders",
  "Manageable risk — downside we can understand and absorb",
  "Sustainable growth potential — value that compounds over time",
  "Strategic alignment — a genuine fit with the Fortress portfolio",
];

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Our Approach</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Disciplined. Strategic. </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Long-Term.
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              Our investment process is designed to identify quality opportunities, manage risk, and build sustainable value through careful evaluation and active strategic involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">How We Invest</p>
              <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">Our Investment Process</h2>
            </div>
            <div>
              <p className="text-fortress-silver text-lg leading-relaxed mb-6">
                Every opportunity is different. Our standards never are.
              </p>
              <p className="text-fortress-silver leading-relaxed">
                Our decisions follow a consistent framework built on research, discipline, transparency, and long-term alignment.
                We assess the quality of the opportunity, the capability of the people behind it, the market environment,
                the financial requirements, the risks involved, and the realistic potential for sustainable value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section
          key={step.step}
          className={`py-20 ${index % 2 === 1 ? "bg-fortress-deep" : ""} border-t border-fortress-gold/10`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-7 h-7 text-fortress-gold" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-1">
                  <span className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase">
                    Step {step.step}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-fortress-ivory mb-1">{step.title}</h2>
                <p className="text-fortress-gold text-base">{step.subtitle}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-fortress-silver leading-relaxed">{step.body}</p>
              </div>
              {step.details && (
                <div>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-fortress-silver text-sm">
                        <span className="w-1.5 h-1.5 bg-fortress-gold mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Evaluation Principles */}
      <section className="py-20 bg-fortress-deep border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">What We Look For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory">Our Evaluation Principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 rounded-sm"
              >
                <Target className="w-5 h-5 text-fortress-gold mt-0.5 flex-shrink-0" />
                <p className="text-fortress-silver text-sm leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">Have an Opportunity That Matches Our Approach?</h2>
          <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Present your business, project, asset, or strategic proposal to our investment team. Serious opportunities receive serious attention.
          </p>
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105 rounded-sm"
          >
            SUBMIT YOUR OPPORTUNITY
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
