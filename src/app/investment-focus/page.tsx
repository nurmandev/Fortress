import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2, Cpu, Briefcase, TrendingUp, UtensilsCrossed,
  Wifi, Truck, Gem, Handshake, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Focus",
  description:
    "Explore Fortress Investment Holdings' investment sectors: real estate, digital assets, business acquisitions, private equity, hospitality, AI & technology, trading, luxury assets, and strategic partnerships.",
  openGraph: {
    title: "Investment Focus | Fortress Investment Holdings",
    description:
      "Explore our diversified investment sectors across the UAE and beyond.",
  },
};

const sectors = [
  {
    icon: Building2,
    title: "Real Estate",
    subtitle: "Building Value Through Strategic Property Investment",
    items: [
      "Residential — apartments, villas, and communities in high-demand locations",
      "Commercial — offices, retail, and mixed-use assets with reliable income profiles",
      "Hospitality Real Estate — hotels, resorts, and serviced accommodation",
      "Industrial & Logistics — warehousing and supply-chain infrastructure",
      "Development & Land — projects and plots with strong fundamentals",
      "Income-Generating Assets — stabilised properties delivering consistent returns",
    ],
    body: "Real estate in the UAE remains one of the world's most compelling property markets — driven by population growth, investor-friendly regulation, world-class infrastructure, and sustained international demand. We prioritise quality, location, market fundamentals, and responsible development over speculation.",
  },
  {
    icon: Cpu,
    title: "Digital Assets & Blockchain",
    subtitle: "Selective Participation in the Digital Economy",
    items: [
      "Blockchain Infrastructure — networks, protocols, and enterprise-grade systems",
      "Digital Asset Platforms — regulated exchanges, custody solutions, and asset-management technology",
      "Tokenisation — real-world asset tokenisation, including real estate, funds, and commodities",
      "Financial Technology (Fintech) — payment systems, digital banking, and blockchain-enabled financial services",
      "Web3 & Enterprise Solutions — businesses applying distributed ledger technology to genuine commercial challenges",
    ],
    body: "Blockchain and digital assets are reshaping how value is created, transferred, and secured. In the UAE — one of the world's most progressive jurisdictions for digital asset regulation — this shift is creating serious, long-term commercial opportunities. We are long-term investors backing the infrastructure, platforms, and businesses building the digital economy's foundations.",
  },
  {
    icon: Briefcase,
    title: "Business Acquisitions",
    subtitle: "Acquiring Businesses With Strong Foundations",
    items: [
      "Full business acquisitions — complete ownership transitions, handled professionally and discreetly",
      "Majority ownership — control positions with continuing founder or management participation",
      "Minority strategic investments — meaningful stakes with active support",
      "Management buyouts — backing capable teams to own the businesses they run",
      "Joint acquisitions — partnering with co-investors on larger opportunities",
      "Succession-related transactions — structured solutions for owners planning their exit",
      "Growth capital partnerships — investment paired with expansion support",
    ],
    body: "Behind every established business is years of effort, relationships, and hard-won market knowledge. We treat that legacy with the respect it deserves. We consider the acquisition of established businesses with proven operations, reliable customer demand, experienced management, and clear opportunities for further growth.",
  },
  {
    icon: TrendingUp,
    title: "Private Equity",
    subtitle: "Supporting High-Potential Private Companies",
    items: [
      "Growth capital — funding expansion, product development, and market entry",
      "Strategic support — board-level guidance and commercial direction",
      "Market access — introductions across our UAE and international networks",
      "Governance guidance — structures that build institutional credibility",
      "Business development resources — practical support that accelerates growth",
    ],
    body: "The most valuable companies of the next decade are private today. Finding them — and helping them grow — is what our private equity activity is built for. We invest selectively in privately held businesses with scalable models, capable leadership, strong market positioning, and clear development potential.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    subtitle: "Investing in Experiences, Tourism, and Lifestyle",
    items: [
      "Hotels & Resorts — established assets and credible development projects",
      "Serviced Apartments & Holiday Homes — high-demand short and medium-stay accommodation",
      "Restaurants & Food Concepts — proven concepts with strong brand identity",
      "Leisure & Tourism Experiences — attractions and experiences serving the visitor economy",
      "Wellness Concepts — health, fitness, and wellbeing businesses",
      "Hospitality Technology — platforms improving how hospitality businesses operate",
      "Luxury Lifestyle Services — premium services for residents and visitors",
    ],
    body: "The UAE welcomes tens of millions of visitors each year, and the region's tourism, dining, and lifestyle economy continues to grow. We focus on concepts with strong market positioning, professional operations, and the ability to deliver consistent customer value — because in hospitality, reputation compounds.",
  },
  {
    icon: Wifi,
    title: "AI & Technology",
    subtitle: "Investing in Innovation With Commercial Purpose",
    items: [
      "Artificial Intelligence — practical AI applications with proven customer demand",
      "Business Automation — tools that measurably reduce cost or increase output",
      "Software Platforms — SaaS and enterprise solutions with recurring revenue",
      "Property Technology (PropTech) — innovation serving the region's real estate sector",
      "Financial Technology (FinTech) — payments, lending, and financial infrastructure",
      "Marketing Technology — platforms driving measurable commercial results",
      "Cybersecurity — protecting the digital economy's foundations",
      "Data Analytics — turning information into decisions",
      "E-Commerce — digital retail with sustainable unit economics",
      "Enterprise Solutions — technology serving established business needs",
    ],
    body: "Technology creates value when it solves real problems for real customers. That is our entire filter. We evaluate businesses that use artificial intelligence, automation, software, data, and digital platforms to improve efficiency and create scalable commercial value.",
  },
  {
    icon: Truck,
    title: "Trading & Distribution",
    subtitle: "Connecting Products With Growing Markets",
    items: [
      "Exclusive distribution rights — protected market positions with recognised brands",
      "Strong supplier relationships — reliable, long-standing sourcing partnerships",
      "Proven demand — consistent, repeatable customer orders",
      "Efficient supply chains — operations that protect margin",
      "Recognised brands — products customers actively seek out",
      "Regional expansion potential — clear opportunities across the UAE, GCC, and international markets",
    ],
    body: "The UAE sits at the crossroads of global trade — a gateway between East and West, with world-class ports, logistics infrastructure, and access to markets serving billions of consumers. We evaluate trading, import, export, supply, and distribution businesses with reliable products and established customer networks.",
  },
  {
    icon: Gem,
    title: "Luxury Assets",
    subtitle: "Selective Investment in High-Value Assets",
    items: [
      "Luxury Real Estate — trophy properties and premium developments",
      "High-Value Vehicles — rare and collectible automobiles",
      "Yachts & Marine Assets — ownership, charter, and management opportunities",
      "Aviation-Related Assets — private aviation and related services",
      "Collectibles & Fine Art — assets with established provenance and market depth",
      "Premium Lifestyle Businesses — brands serving high-net-worth clientele",
      "Luxury Rental & Asset-Management Platforms — businesses monetising premium assets",
    ],
    body: "The global luxury market rewards knowledge, patience, and access. We bring all three. Every opportunity is assessed individually, with careful attention to valuation, liquidity, maintenance, insurance, ownership costs, and realistic return potential.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    subtitle: "Creating Value Through Collaboration",
    items: [
      "Joint Ventures — shared ownership of new projects and businesses",
      "Co-Investment — investing alongside partners on selected opportunities",
      "Market Expansion — helping partners enter the UAE and GCC markets",
      "Project Development — combining capital with execution capability",
      "Cross-Border Investment — connecting international capital with regional opportunity",
      "Distribution Partnerships — bringing products to new markets",
      "Business Development Alliances — long-term commercial collaboration",
      "Shared Operating Platforms — building infrastructure that benefits multiple parties",
    ],
    body: "The strongest outcomes are rarely achieved alone. Aligned capital, capabilities, and experience consistently outperform any single party working independently. We develop strategic partnerships with investors, business owners, family offices, developers, institutions, advisors, and operating companies.",
  },
];

export default function InvestmentFocusPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Investment Focus</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Investing Across </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Opportunity
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              Fortress Investment Holdings invests across selected sectors where long-term demand, strong fundamentals, and strategic involvement create sustainable value.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">A Diversified Investment Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">Sectors We Invest In</h2>
            <p className="text-fortress-silver text-lg leading-relaxed">
              Diversification is central to our investment strategy — but diversification without discipline is just distraction.
              We assess opportunities across a deliberate range of industries while maintaining a rigorous selection process.
              Every investment must demonstrate clear commercial potential, manageable risk, and genuine alignment with our long-term objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Sections */}
      {sectors.map((sector, index) => (
        <section
          key={sector.title}
          className={`py-20 ${index % 2 === 1 ? "bg-fortress-deep" : ""} border-t border-fortress-gold/10`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center flex-shrink-0">
                <sector.icon className="w-7 h-7 text-fortress-gold" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-fortress-ivory mb-1">{sector.title}</h2>
                <p className="text-fortress-gold text-base">{sector.subtitle}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-fortress-silver leading-relaxed mb-6">{sector.body}</p>
                <ul className="space-y-2">
                  {sector.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-fortress-silver text-sm">
                      <span className="w-1.5 h-1.5 bg-fortress-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">Present an Opportunity to Fortress</h2>
          <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We welcome selected proposals from business owners, founders, advisors, investors, developers, and strategic partners. Every submission is reviewed professionally and treated with discretion.
          </p>
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105 rounded-sm"
          >
            SUBMIT AN INVESTMENT OPPORTUNITY
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
