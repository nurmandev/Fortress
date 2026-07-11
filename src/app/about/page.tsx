import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Target, Award, Users, Scale, Lock, Hexagon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fortress Investment Holdings is a Dubai-based diversified investment holding company. Learn about our vision, mission, values, and leadership.",
  openGraph: {
    title: "About Us | Fortress Investment Holdings",
    description:
      "Learn about our vision, mission, values, and leadership.",
  },
};

const values = [
  { icon: Shield, title: "Integrity", description: "We conduct business honestly, responsibly, and transparently — in every transaction, without exception." },
  { icon: Hexagon, title: "Strength", description: "We make decisions with discipline, confidence, and careful consideration. Conviction matters; so does knowing when to walk away." },
  { icon: Eye, title: "Vision", description: "We look beyond immediate returns to identify long-term value and future potential others may overlook." },
  { icon: Users, title: "Partnership", description: "We build relationships based on trust, respect, alignment, and shared objectives. Our partners' success is our success." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to high standards across every investment, partnership, and business interaction." },
  { icon: Scale, title: "Accountability", description: "We take full responsibility for our decisions, commitments, and performance. We do what we say." },
  { icon: Lock, title: "Confidentiality", description: "We protect the information, interests, and privacy of our partners and stakeholders — always." },
];

const philosophyPoints = [
  "Genuine market demand — customers who need the product, not a story that needs customers",
  "Clear commercial potential — a realistic path to profitable growth",
  "Responsible leadership — capable, ethical management teams",
  "Scalable operations — the ability to grow without breaking",
  "Defensible competitive advantages — reasons the business wins, and keeps winning",
  "Transparent financial information — clean numbers, honestly presented",
  "Realistic growth opportunities — ambition anchored in evidence",
  "Alignment between stakeholders — everyone pulling in the same direction",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,74,0.08),transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-fortress-ivory">Built to Protect. </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent rounded-sm">
                Positioned to Grow.
              </span>
            </h1>
            <p className="text-fortress-silver text-lg leading-relaxed max-w-2xl">
              Fortress Investment Holdings brings together disciplined capital, strategic thinking, and long-term vision to build sustainable value across selected businesses, assets, and markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">About Fortress Investment Holdings</p>
              <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-6">
                A Platform Built for Long-Term Value
              </h2>
            </div>
            <div className="space-y-6 text-fortress-silver leading-relaxed">
              <p>
                Fortress Investment Holdings is a diversified investment holding company headquartered in Dubai, United Arab Emirates.
              </p>
              <p>
                We were established with a clear purpose: to identify valuable opportunities, invest responsibly, and support businesses and assets with genuine potential for sustainable growth.
              </p>
              <p>
                What sets us apart is how we think about time. Markets move in cycles. Trends come and go. We evaluate every opportunity on its fundamentals — market position, leadership quality, financial performance, scalability, and risk profile — because fundamentals are what endure.
              </p>
              <p>
                Our role extends well beyond providing capital. Depending on the opportunity, we support strategic planning, business development, operational improvement, market expansion, governance, brand positioning, and access to professional networks that would otherwise take years to build.
              </p>
              <p>
                Through this disciplined, partnership-driven approach, Fortress is building a resilient portfolio of valuable businesses and strategic assets — one carefully chosen opportunity at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-fortress-deep border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 p-10 rounded-sm">
              <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-fortress-gold" />
              </div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-3">Our Vision</p>
              <h3 className="text-2xl font-bold text-fortress-ivory mb-4">To Build a Globally Respected Investment Group</h3>
              <p className="text-fortress-silver leading-relaxed">
                Our vision is to establish Fortress Investment Holdings as a trusted, diversified, and internationally recognised investment group. We measure success not by the size of our portfolio, but by its strength: businesses, assets, and partnerships capable of delivering sustainable performance through changing market cycles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 p-10 rounded-sm">
              <div className="w-14 h-14 bg-fortress-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-fortress-gold" />
              </div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-3">Our Mission</p>
              <h3 className="text-2xl font-bold text-fortress-ivory mb-4">Investing in Strength. Creating Lasting Value.</h3>
              <p className="text-fortress-silver leading-relaxed">
                Our mission is to identify high-potential opportunities, deploy capital responsibly, and support sustainable growth through strategic involvement, strong governance, and long-term partnerships. We seek to create value for our portfolio companies, partners, investors, stakeholders — and the communities in which we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-2">Leadership Built on Vision and Responsibility</h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-10 rounded-sm">
              <h3 className="text-xl font-bold text-fortress-ivory mb-1">[INSERT FOUNDER / CEO NAME]</h3>
              <p className="text-fortress-gold text-sm font-medium mb-6">Founder and Chief Executive Officer</p>
              <div className="space-y-4 text-fortress-silver leading-relaxed">
                <p>[INSERT FOUNDER / CEO NAME] leads Fortress Investment Holdings with a firm commitment to responsible investment, disciplined growth, and long-term value creation.</p>
                <p>With experience spanning business development, investment evaluation, strategic partnerships, and commercial operations, [INSERT NAME] provides the leadership and direction behind every investment decision the company makes.</p>
                <p>[INSERT NAME] approach is grounded in careful decision-making, integrity, and accountability — and in a simple conviction: the best investments are built on strong relationships and clear alignment between all stakeholders.</p>
                <p>Under [INSERT NAME] leadership, Fortress Investment Holdings is building a diversified portfolio of high-quality businesses and strategic assets across the UAE and selected international markets.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 p-10 flex items-center rounded-sm">
              <blockquote className="text-xl md:text-2xl text-fortress-ivory italic leading-relaxed border-l-4 border-fortress-gold pl-6">
                &ldquo;Our objective is not simply to invest capital. It is to build strong foundations, support meaningful growth, and create value that lasts.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-fortress-deep border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory">The Principles Behind Every Decision</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 p-8 hover:border-fortress-gold/30 transition-all duration-300 rounded-sm">
                <div className="w-12 h-12 bg-fortress-gold/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-fortress-gold" />
                </div>
                <h3 className="text-fortress-ivory font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-fortress-silver text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 border-t border-fortress-gold/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Our Investment Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fortress-ivory mb-4">Disciplined Capital. Strategic Growth.</h2>
            <p className="text-fortress-silver text-lg leading-relaxed mb-10">
              Sustainable value begins with strong fundamentals. Everything else is noise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {philosophyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 rounded-sm">
                <div className="w-2 h-2 bg-fortress-gold mt-2 flex-shrink-0" />
                <p className="text-fortress-silver text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 bg-gradient-to-br from-fortress-deep to-fortress-charcoal border border-fortress-gold/10 rounded-sm">
            <p className="text-fortress-silver leading-relaxed">
              We balance ambition with discipline, and opportunity with risk awareness. Rather than following short-term market trends, we back businesses and assets capable of creating meaningful value over time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
