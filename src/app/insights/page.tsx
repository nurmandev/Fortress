import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { ArrowRight, Calendar, Clock, Building2, Cpu, Briefcase, TrendingUp, UtensilsCrossed, Truck, LineChart, Newspaper, Handshake } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market perspectives, investment insights, sector developments, and strategic commentary from Fortress Investment Holdings.",
  openGraph: {
    title: "Insights | Fortress Investment Holdings",
    description:
      "Market perspectives and investment insights from Fortress Investment Holdings.",
  },
};

const categories = [
  { icon: Building2, label: "Real Estate" },
  { icon: Briefcase, label: "Business Acquisitions" },
  { icon: TrendingUp, label: "Private Equity" },
  { icon: Cpu, label: "AI & Technology" },
  { icon: Cpu, label: "Digital Assets & Blockchain" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Truck, label: "Trading & Distribution" },
  { icon: LineChart, label: "Market Insights" },
  { icon: Newspaper, label: "Company News" },
  { icon: Handshake, label: "Strategic Partnerships" },
];

const featuredArticles = [
  {
    category: "Business Acquisitions",
    title: "Understanding the Value of Business Acquisitions",
    excerpt:
      "The key factors serious investors evaluate before acquiring an established company — and the warning signs that end negotiations early.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    category: "Market Insights",
    title: "The UAE as a Global Investment Destination",
    excerpt:
      "Why capital, talent, and businesses continue to choose the UAE: a clear-eyed look at the commercial, regulatory, and strategic advantages.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    category: "AI & Technology",
    title: "Investing in AI With Commercial Purpose",
    excerpt:
      "Why practical applications, strong teams, and genuine customer demand matter more than technology trends alone.",
    date: "Coming Soon",
    readTime: "4 min read",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Insights That Support </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Better Decisions
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              Market perspectives, investment insights, sector developments, and strategic commentary from Fortress Investment Holdings.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Knowledge Builds Stronger Investments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">Fortress Insights</h2>
            <p className="text-fortress-silver text-lg leading-relaxed mb-8">
              The best investment decisions are informed ones. Fortress Insights shares selected commentary and analysis across the sectors and markets that shape our investment strategy — written for business owners, investors, and partners who value substance over noise.
            </p>
            <p className="text-fortress-silver text-sm leading-relaxed border-l-4 border-fortress-gold pl-4">
              The information published is intended for general informational purposes and should not be considered financial, legal, tax, or investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-fortress-deep border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-fortress-ivory mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="inline-flex items-center gap-2 px-5 py-3 bg-fortress-navy border border-fortress-gold/10 text-fortress-silver hover:border-fortress-gold/30 hover:text-fortress-gold transition-all duration-300 text-sm rounded-sm"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4 text-center">Featured</p>
          <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-12 text-center">Featured Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 hover:border-fortress-gold/30 transition-all duration-300 flex flex-col rounded-sm"
              >
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-fortress-gold text-xs font-medium tracking-[3px] uppercase mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-fortress-ivory font-bold text-lg mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-fortress-silver text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-fortress-silver/50 text-xs mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-fortress-gold text-sm font-medium hover:text-fortress-champagne transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-fortress-gold/10">
        <Newsletter />
      </section>

      <Footer />
    </main>
  );
}
