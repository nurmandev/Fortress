import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Building2,
  Cpu,
  Briefcase,
  TrendingUp,
  UtensilsCrossed,
  Wifi,
  Truck,
  Gem,
  Handshake,
  ArrowRight,
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
    image: "/1.png",
    body: "Real estate in the UAE remains one of the world's most compelling property markets  driven by population growth, investor-friendly regulation, world-class infrastructure, and sustained international demand.",
    items: [
      "Residential  apartments, villas, and communities in high-demand locations",
      "Commercial  offices, retail, and mixed-use assets with reliable income profiles",
      "Hospitality Real Estate  hotels, resorts, and serviced accommodation",
      "Industrial & Logistics  warehousing and supply-chain infrastructure",
      "Development & Land  projects and plots with strong fundamentals and credible execution plans",
      "Income-Generating Assets  stabilised properties delivering consistent returns",
    ],
    closing:
      "Our interest spans direct acquisitions, development partnerships, land opportunities, structured investments, and project participation. In every case, we prioritise quality, location, market fundamentals, and responsible development over speculation.",
  },
  {
    icon: Cpu,
    title: "Digital Assets & Blockchain",
    subtitle: "Selective Participation in the Digital Economy",
    image: "/2.png",
    body: "Blockchain and digital assets are reshaping how value is created, transferred, and secured. In the UAE  one of the world's most progressive jurisdictions for digital asset regulation  this shift is creating serious, long-term commercial opportunities.\n\nFortress Investment Holdings participates in this space the same way we approach every sector: selectively, responsibly, and with a clear focus on real-world utility over hype.\n\nWe are not traders chasing market cycles. We are long-term investors backing the infrastructure, platforms, and businesses building the digital economy's foundations.",
    items: [
      "Blockchain Infrastructure  networks, protocols, and enterprise-grade systems powering secure digital transactions",
      "Digital Asset Platforms  regulated exchanges, custody solutions, and asset-management technology",
      "Tokenisation  real-world asset tokenisation, including real estate, funds, and commodities",
      "Financial Technology (Fintech)  payment systems, digital banking, and blockchain-enabled financial services",
      "Web3 & Enterprise Solutions  businesses applying distributed ledger technology to genuine commercial challenges",
    ],
    subheading: "How We Evaluate Digital Asset Opportunities",
    subitems: [
      "Regulatory Alignment  compliance with UAE frameworks including VARA, and awareness of international standards",
      "Genuine Utility  technology that solves a real market problem, not a speculative narrative",
      "Security & Custody  robust cybersecurity, transparent custody arrangements, responsible governance",
      "Commercial Viability  a clear revenue model, credible leadership, and a realistic path to scale",
      "Long-Term Relevance  businesses positioned to perform beyond short-term market sentiment",
    ],
    disclaimer:
      "Fortress Investment Holdings does not promote short-term speculation or guarantee returns from digital assets.",
  },
  {
    icon: Briefcase,
    title: "Business Acquisitions",
    subtitle:
      "We focus on businesses where our strategic involvement can improve efficiency, expand market reach, strengthen management, and accelerate long-term growth across the UAE, GCC, and global markets.",
    image: "/3.png",
    body: "Behind every established business is years of effort, relationships, and hard-won market knowledge. We treat that legacy with the respect it deserves.\n\nWe consider the acquisition of established businesses with proven operations, reliable customer demand, experienced management, and clear opportunities for further growth.",
    items: [
      "Full business acquisitions  complete ownership transitions, handled professionally and discreetly",
      "Majority ownership  control positions with continuing founder or management participation",
      "Minority strategic investments  meaningful stakes with active support",
      "Management buyouts  backing capable teams to own the businesses they run",
      "Joint acquisitions  partnering with co-investors on larger opportunities",
      "Succession-related transactions  structured solutions for owners planning their exit",
      "Growth capital partnerships  investment paired with expansion support",
    ],
    closing:
      "We focus on businesses where our strategic involvement can improve efficiency, expand market reach, strengthen management, and accelerate long-term growth across the UAE, GCC, and global markets.",
  },
  {
    icon: TrendingUp,
    title: "Private Equity",
    subtitle: "Supporting High-Potential Private Companies",
    image: "/4.png",
    body: "The most valuable companies of the next decade are private today. Finding them  and helping them grow  is what our private equity activity is built for.",
    items: [
      "Growth capital  funding expansion, product development, and market entry",
      "Strategic support  board-level guidance and commercial direction",
      "Market access  introductions across our UAE and international networks",
      "Governance guidance  structures that build institutional credibility",
      "Business development resources  practical support that accelerates growth",
    ],
    closing:
      "Our objective is straightforward: build value alongside founders, management teams, and shareholders  not at their expense.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    subtitle: "Investing in Experiences, Tourism, and Lifestyle",
    image: "/5.png",
    body: "The UAE remains our primary focus, supported by selective opportunities across the GCC and global markets. With strong tourism demand, world-class infrastructure, and a growing lifestyle economy, the region continues to offer attractive hospitality investment potential.",
    items: [
      { heading: "Hotels & Resorts", desc: "Established hospitality assets and credible development projects with strong location, demand, and operational potential." },
      { heading: "Serviced Apartments & Holiday Homes", desc: "High-demand short and medium-stay accommodation opportunities, especially in markets with strong tourism and business travel." },
      { heading: "Restaurants & Food Concepts", desc: "Proven dining concepts with strong brand identity, clear unit economics, and potential for expansion." },
      { heading: "Leisure & Tourism Experiences", desc: "Attractions, experiences, and tourism-related businesses serving residents, visitors, and international travellers." },
      { heading: "Wellness Concepts", desc: "Health, fitness, spa, and wellbeing businesses with strong customer demand and repeat revenue potential." },
      { heading: "Hospitality Technology", desc: "Technology platforms that improve how hospitality businesses operate, serve customers, manage bookings, and increase efficiency." },
      { heading: "Luxury Lifestyle Services", desc: "Premium services for residents, tourists, business travellers, and high-net-worth clients." },
    ],
    closing:
      "We focus on hospitality concepts with strong market positioning, professional operations, and the ability to deliver consistent customer value across the UAE, with potential for GCC and global expansion.",
  },
  {
    icon: Wifi,
    title: "AI & Emerging Technology",
    subtitle: "Investing in the Future of Intelligent Innovation",
    image: "/6.png",
    body: "We invest in artificial intelligence and emerging technology companies that have the potential to transform industries, improve efficiency, and create scalable commercial value.\n\nOur focus is on practical, high-growth technologies that solve real business problems, support digital transformation, and create long-term value across the UAE, GCC, and global markets.",
    items: [
      "Artificial Intelligence — AI platforms, automation systems, machine learning solutions, and intelligent tools with clear commercial use",
      "Business Automation — technologies that improve productivity, reduce operational costs, and enhance business performance",
      "Software & SaaS Platforms — scalable software solutions with recurring revenue models and strong market demand",
      "Property Technology (PropTech)  innovation serving the region's real estate sector",
      "Financial Technology (FinTech)  payments, lending, and financial infrastructure",
      "Marketing Technology  platforms driving measurable commercial results",
      "Cybersecurity  protecting the digital economy's foundations",
      "Data Analytics  turning information into decisions",
      "E-Commerce  digital retail with sustainable unit economics",
      "Enterprise Solutions  technology serving established business needs",
    ],
    closing:
      "We prioritise practical innovation, strong execution, responsible use of technology, and a clear path to commercial growth. We do not fund technology in search of a problem.",
  },
  {
    icon: Truck,
    title: "Energy & Physical Commodities",
    subtitle: "Investing in Essential Resources and Global Trade Flow",
    image: "/7.png",
    body: "Energy and physical commodities remain essential to global growth, industrial development, infrastructure, and everyday economic activity.\n\nFortress Investment Holdings focuses on opportunities connected to real, tangible commodities — including energy products, raw materials, and physical goods with genuine demand across regional and global markets.",
    items: [
      "Energy Products — opportunities connected to crude oil, refined petroleum products, fuel supply, and energy-related trade",
      "Physical Commodities — tangible goods such as metals, minerals, agricultural products, construction materials, and other high-demand physical resources",
      "Supply & Distribution Networks — businesses with established sourcing, logistics, storage, and distribution capabilities",
      "Reliable Trade Partners — strong supplier and buyer relationships with clear documentation, compliance, and delivery capacity",
      "Regional & Global Demand — commodities with active demand across the UAE, GCC, Africa, Asia, and international markets",
      "Operational Strength — businesses with proven trade flow, strong margins, risk controls, and transparent execution",
    ],
    closing:
      "We focus on physical commodity opportunities backed by real demand, reliable supply chains, disciplined execution, and strong regional or global market potential.",
  },
  {
    icon: Gem,
    title: "Luxury Assets",
    subtitle:
      "Investing in High-Value Lifestyle and Premium Asset Opportunities",
    image: "/8.png",
    body: "Fortress Investment Holdings invests in selected luxury asset opportunities with strong market demand, long-term value potential, and clear ownership or commercial structures.\n\nOur focus is on premium assets and luxury-linked businesses that can generate value through appreciation, income, rental demand, brand strength, or strategic market positioning.",
    items: [
      "Luxury Real Estate  trophy properties, premium developments, branded residences, and high-value real estate assets in prime locations",
      "High-Value Vehicles  rare, collectible, and premium automobiles with strong demand, scarcity value, or rental income potential",
      "Yachts & Marine Assets  yacht ownership, charter opportunities, marine services, and asset-management platforms connected to the luxury lifestyle market",
      "Aviation-Related Assets  private aviation opportunities, aircraft-related services, aviation support businesses, and premium mobility solutions",
      "Collectibles & Fine Art  selected collectibles, fine art, watches, jewellery, and rare assets with established provenance and market depth",
      "Premium Lifestyle Businesses  luxury brands and service businesses catering to high-net-worth clients, tourists, executives, and premium lifestyle consumers",
      "Luxury Rental & Asset-Management Platforms  businesses that monetise premium assets through rentals, leasing, management, memberships, or curated client access",
    ],
    closing:
      "We invest selectively in luxury assets and premium lifestyle opportunities where valuation, demand, liquidity, ownership costs, and long-term return potential are carefully assessed.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    subtitle: "Creating Value Through Collaboration",
    image: "/9.png",
    body: "The strongest outcomes are rarely achieved alone. Aligned capital, capabilities, and experience consistently outperform any single party working independently.\n\nWe develop strategic partnerships with investors, business owners, family offices, developers, institutions, advisors, and operating companies.",
    items: [
      "Joint Ventures  shared ownership of new projects and businesses",
      "Co-Investment  investing alongside partners on selected opportunities",
      "Market Expansion  helping partners enter the UAE and GCC markets",
      "Project Development  combining capital with execution capability",
      "Cross-Border Investment  connecting international capital with regional opportunity",
      "Distribution Partnerships  bringing products to new markets",
    ],
    closing:
      "Every joint venture must demonstrate clear responsibilities, commercial alignment, appropriate governance, and shared long-term objectives  agreed before work begins, not negotiated after problems arise.",
  },
];

export default function InvestmentFocusPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">
              Investment Focus
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-fortress-navy">Investing Across </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>
            <p className="text-fortress-charcoal/70 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
              Fortress Investment Holdings invests across selected sectors where
              long-term demand, strong fundamentals, and strategic involvement
              create sustainable value.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">
              A Diversified Investment Portfolio
            </p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">
              Sectors We Invest In
            </h2>
            <p className="text-fortress-ivory/80 text-sm md:text-lg leading-relaxed">
              Diversification is central to our investment strategy but
              diversification without discipline is just distraction.
            </p>
            <p className="text-fortress-silver text-sm md:text-base leading-relaxed mt-3 md:mt-4">
              We assess opportunities across a deliberate range of industries
              while maintaining a rigorous selection process. Every investment
              must demonstrate clear commercial potential, manageable risk, and
              genuine alignment with the long-term objectives of Fortress
              Investment Holdings.
            </p>
            <p className="text-fortress-silver/70 text-sm md:text-base leading-relaxed mt-3 md:mt-4">
              These are the sectors where we focus our capital and attention.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Sections */}
      {sectors.map((sector, index) => (
        <section
          key={sector.title}
          className={`py-12 md:py-28 my-8 md:my-12 sm:mx-4 rounded-2xl ${index % 2 === 1 ? "bg-fortress-deep" : "bg-white"}`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="flex items-start gap-4 md:gap-5 mb-8 md:mb-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-fortress-gold/10 flex items-center justify-center flex-shrink-0 rounded-sm">
                <sector.icon className="w-5 h-5 md:w-7 md:h-7 text-fortress-gold" />
              </div>
              <div className="min-w-0">
                <p className="text-fortress-gold/50 text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase font-semibold mb-1">
                  Sector {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  className={`text-xl md:text-4xl font-bold mb-1 break-words ${index % 2 === 1 ? "text-fortress-ivory" : "text-fortress-navy"}`}
                >
                  {sector.title}
                </h2>
                <p className="text-fortress-gold text-sm md:text-lg">
                  {sector.subtitle}
                </p>
              </div>
            </div>

            {/* Image + Content Grid */}
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-start">
              {/* Image */}
              <div
                className={`lg:col-span-2 ${index % 2 === 0 ? "lg:order-last" : ""}`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden border rounded-sm ${index % 2 === 1 ? "border-fortress-gold/10" : "border-fortress-gold/20"}`}
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 1 ? "from-fortress-deep/40" : "from-white/40"} to-transparent`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                {sector.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className={`text-sm md:text-base leading-relaxed mb-4 md:mb-5 last:mb-0 ${index % 2 === 1 ? "text-fortress-silver" : "text-fortress-charcoal/70"}`}
                  >
                    {para}
                  </p>
                ))}

                {/* Investment areas list */}
                <div className="mt-6 md:mt-8">
                  <p className="text-fortress-gold text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase font-semibold mb-3 md:mb-4">
                    {sector.title === "Digital Assets & Blockchain"
                      ? "Where We Focus"
                      : "What We Look For"}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {sector.items.map((item, i) => (
                      <li key={i}>
                        {typeof item === "string" ? (
                          <span className={`text-xs md:text-sm leading-relaxed ${index % 2 === 1 ? "text-fortress-silver/80" : "text-fortress-charcoal/60"}`}>
                            {item}
                          </span>
                        ) : (
                          <div>
                            <p className={`text-sm md:text-base font-semibold ${index % 2 === 1 ? "text-fortress-ivory" : "text-fortress-navy"}`}>
                              {item.heading}
                            </p>
                            <p className={`text-xs md:text-sm leading-relaxed mt-0.5 ${index % 2 === 1 ? "text-fortress-silver/70" : "text-fortress-charcoal/60"}`}>
                              {item.desc}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Digital Assets evaluation criteria */}
                {sector.subheading && sector.subitems && (
                  <div
                    className={`mt-8 md:mt-10 p-5 md:p-8 border-l border-fortress-gold/25 rounded-sm ${index % 2 === 1 ? "bg-fortress-navy" : "bg-fortress-ivory/30"}`}
                  >
                    <p className="text-fortress-gold text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] uppercase font-semibold mb-3 md:mb-4">
                      {sector.subheading}
                    </p>
                    <ul className="space-y-3">
                      {sector.subitems.map((item, i) => (
                        <li
                          key={i}
                          className={`text-xs md:text-sm leading-relaxed ${index % 2 === 1 ? "text-fortress-silver/80" : "text-fortress-charcoal/60"}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {sector.disclaimer && (
                      <p
                        className={`text-[10px] md:text-xs leading-relaxed mt-3 md:mt-4 ${index % 2 === 1 ? "text-fortress-silver/50" : "text-fortress-charcoal/40"}`}
                      >
                        {sector.disclaimer}
                      </p>
                    )}
                  </div>
                )}

                {/* Closing */}
                {sector.closing && (
                  <p
                    className={`text-sm md:text-base leading-relaxed mt-6 md:mt-8 border-t pt-4 md:pt-6 ${index % 2 === 1 ? "text-fortress-silver/70 border-fortress-gold/10" : "text-fortress-charcoal/60 border-fortress-gold/20"}`}
                  >
                    {sector.closing}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 md:py-28 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">
            Investment Focus
          </p>
          <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">
            Present an Opportunity to Fortress
          </h2>
          <p className="text-fortress-silver/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
            We welcome selected proposals from business owners, founders,
            advisors, investors, developers, and strategic partners. Every
            submission is reviewed professionally and treated with discretion.
          </p>
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm tracking-widest hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300"
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
