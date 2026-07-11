"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { ArrowRight, Calendar, Clock, Search, Building2, Briefcase, TrendingUp, Cpu, UtensilsCrossed, Truck, LineChart, Newspaper, Handshake, X } from "lucide-react";
import Link from "next/link";
import { allArticles, categoryColors } from "@/app/insights/articles";

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

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q
        ? article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Insights</p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-fortress-navy">Insights That Support </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
                Better Decisions
              </span>
            </h1>
            <p className="text-fortress-charcoal/70 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Market perspectives, investment insights, sector developments, and strategic commentary from Fortress Investment Holdings.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filter Section */}
      <section ref={ref} className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fortress-silver/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, topic, or category..."
                  className="w-full pl-12 pr-12 py-4 bg-fortress-charcoal border border-fortress-gold/10 text-fortress-ivory text-sm placeholder:text-fortress-silver/30 focus:outline-none focus:border-fortress-gold/40 transition-colors rounded-xl"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-fortress-silver/50 hover:text-fortress-silver transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="text-center mb-8">
              <p className="text-fortress-gold text-xs font-medium tracking-[3px] uppercase">Filter by Category</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border text-xs md:text-sm font-medium transition-all duration-300 rounded-xl ${
                  selectedCategory === null
                    ? "bg-fortress-gold text-fortress-navy border-fortress-gold"
                    : "bg-fortress-charcoal border-fortress-gold/10 text-fortress-silver hover:border-fortress-gold/30 hover:text-fortress-gold"
                }`}
              >
                All
              </button>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setSelectedCategory(isActive ? null : cat.label)}
                    className={`inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 border text-xs md:text-sm font-medium transition-all duration-300 rounded-xl ${
                      isActive
                        ? "bg-fortress-gold text-fortress-navy border-fortress-gold"
                        : "bg-fortress-charcoal border-fortress-gold/10 text-fortress-silver hover:border-fortress-gold/30 hover:text-fortress-gold"
                    }`}
                  >
                    <cat.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      {selectedCategory || searchQuery ? (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 my-4 md:my-6">
          <p className="text-fortress-charcoal/50 text-sm">
            {filteredArticles.length === 0
              ? "No articles match your search."
              : `Showing ${filteredArticles.length} article${filteredArticles.length !== 1 ? "s" : ""}${selectedCategory ? ` in <strong>${selectedCategory}</strong>` : ""}${searchQuery ? ` for "<strong>${searchQuery}</strong>"` : ""}.`}
          </p>
        </div>
      ) : null}

      {/* Articles Grid */}
      <section className="py-8 md:py-12 bg-white my-4 md:my-6 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white border border-fortress-charcoal/10 hover:border-fortress-gold/30 transition-all duration-300 flex flex-col rounded-2xl shadow-sm hover:shadow-md"
                >
                  <div className={`border-l-4 ${categoryColors[article.category] || "border-l-fortress-gold"} rounded-tl-2xl`}>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <span className="text-fortress-gold text-xs font-medium tracking-[3px] uppercase mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-fortress-navy font-bold text-base md:text-lg mb-3 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-fortress-charcoal/60 text-sm leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-fortress-charcoal/40 text-xs mb-6">
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
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-2 text-fortress-gold text-sm font-medium hover:text-fortress-champagne transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-fortress-charcoal/40 text-lg mb-2">No articles found</p>
              <p className="text-fortress-charcoal/30 text-sm">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            </div>
          )}
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
