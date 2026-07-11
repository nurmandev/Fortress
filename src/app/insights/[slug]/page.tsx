import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { allArticles, categoryColors } from "@/app/insights/articles";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-fortress-charcoal/50 hover:text-fortress-gold text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <p className="text-fortress-gold text-xs md:text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">
            {article.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-fortress-navy mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-fortress-charcoal/40 text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <p className="text-fortress-charcoal/70 text-lg leading-relaxed border-l-4 border-fortress-gold pl-6">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white my-4 md:my-6 sm:mx-4 rounded-2xl">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-fortress-charcoal/70 leading-relaxed space-y-6">
            <p>
              This article is currently being written. Please check back soon for the full version.
            </p>
            <p>
              At Fortress Investment Holdings, we believe in sharing thoughtful, well-researched content that helps our partners and investors make informed decisions. Each article in our Insights series is carefully prepared to provide genuine value.
            </p>
            <p>
              In the meantime, feel free to explore other articles or reach out to our team directly with any questions about your specific investment interests.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-fortress-gold/10 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-fortress-gold text-xs md:text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4 text-center">Continue Reading</p>
          <h2 className="text-xl md:text-3xl font-bold text-fortress-ivory mb-8 md:mb-12 text-center">More Insights</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {allArticles.filter((a) => a.slug !== slug).slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="group">
                <article className="bg-fortress-charcoal border border-fortress-gold/10 hover:border-fortress-gold/30 transition-all duration-300 flex flex-col rounded-2xl h-full">
                  <div className={`border-l-4 ${categoryColors[a.category] || "border-l-fortress-gold"} rounded-tl-2xl p-6 md:p-8 flex flex-col flex-1`}>
                    <span className="text-fortress-gold text-xs font-medium tracking-[3px] uppercase mb-3">{a.category}</span>
                    <h3 className="text-fortress-ivory font-bold text-base md:text-lg mb-3 leading-snug group-hover:text-fortress-gold transition-colors">{a.title}</h3>
                    <p className="text-fortress-silver/60 text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <div className="flex items-center gap-4 text-fortress-silver/40 text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fortress-gold/10">
        <Newsletter />
      </section>

      <Footer />
    </main>
  );
}
