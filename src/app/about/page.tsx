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
  { icon: Shield, title: "Integrity", description: "We conduct business honestly, responsibly, and transparently  in every transaction, without exception." },
  { icon: Hexagon, title: "Strength", description: "We make decisions with discipline, confidence, and careful consideration. Conviction matters; so does knowing when to walk away." },
  { icon: Eye, title: "Vision", description: "We look beyond immediate returns to identify long-term value and future potential others may overlook." },
  { icon: Users, title: "Partnership", description: "We build relationships based on trust, respect, alignment, and shared objectives. Our partners' success is our success." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to high standards across every investment, partnership, and business interaction." },
  { icon: Scale, title: "Accountability", description: "We take full responsibility for our decisions, commitments, and performance. We do what we say." },
  { icon: Lock, title: "Confidentiality", description: "We protect the information, interests, and privacy of our partners and stakeholders  always." },
];

const philosophyPoints = [
  "Genuine market demand  customers who need the product, not a story that needs customers",
  "Clear commercial potential  a realistic path to profitable growth",
  "Responsible leadership  capable, ethical management teams",
  "Scalable operations  the ability to grow without breaking",
  "Defensible competitive advantages  reasons the business wins, and keeps winning",
  "Transparent financial information  clean numbers, honestly presented",
  "Realistic growth opportunities  ambition anchored in evidence",
  "Alignment between stakeholders  everyone pulling in the same direction",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">About Us</p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-fortress-navy">Built to Protect. </span>
              <span className="bg-gradient-to-r from-fortress-gold to-fortress-champagne bg-clip-text text-transparent">
                Positioned to Grow.
              </span>
            </h1>
            <p className="text-fortress-charcoal/70 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Fortress Investment Holdings brings together disciplined capital, strategic thinking, and long-term vision to build sustainable value across selected businesses, assets, and markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">About Fortress Investment Holdings</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-4 md:mb-6">
              A Platform Built for Long-Term Value
            </h2>
            <p className="text-fortress-silver text-sm md:text-lg leading-relaxed">
              Fortress Investment Holdings is a diversified investment holding company headquartered in Dubai, United Arab Emirates. We identify valuable opportunities, invest responsibly, and support businesses with genuine potential for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-20 my-8 md:my-12 sm:mx-4 rounded-2xl bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-fortress-navy border border-fortress-gold/10 p-6 md:p-10 rounded-2xl">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-fortress-gold/10 flex items-center justify-center mb-4 md:mb-6 rounded-sm">
                <Eye className="w-6 h-6 md:w-7 md:h-7 text-fortress-gold" />
              </div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-3">Our Vision</p>
              <h3 className="text-lg md:text-2xl font-bold text-fortress-ivory mb-3 md:mb-4">To Build a Globally Respected Investment Group</h3>
              <p className="text-fortress-silver text-sm md:text-base leading-relaxed">
                Our vision is to establish Fortress Investment Holdings as a trusted, diversified, and internationally recognised investment group. We measure success by the strength of our portfolio, not its size.
              </p>
            </div>
            <div className="bg-fortress-deep border border-fortress-gold/10 p-6 md:p-10 rounded-2xl">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-fortress-gold/10 flex items-center justify-center mb-4 md:mb-6 rounded-sm">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-fortress-gold" />
              </div>
              <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-3">Our Mission</p>
              <h3 className="text-lg md:text-2xl font-bold text-fortress-ivory mb-3 md:mb-4">Investing in Strength. Creating Lasting Value.</h3>
              <p className="text-fortress-silver text-sm md:text-base leading-relaxed">
                Our mission is to identify high-potential opportunities, deploy capital responsibly, and support sustainable growth through strategic involvement, strong governance, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-20 bg-fortress-deep my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Leadership</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory">Leadership Built on Vision and Responsibility</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 p-6 md:p-10 rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold text-fortress-ivory mb-1 whitespace-nowrap">Yogesh</h3>
              <p className="text-fortress-gold text-sm font-medium mb-4 md:mb-6">Founder and Chief Executive Officer</p>
              <div className="space-y-3 md:space-y-4 text-fortress-silver text-sm md:text-base leading-relaxed">
                <p>Yogesh leads Fortress Investment Holdings with a firm commitment to responsible investment, disciplined growth, and long-term value creation.</p>
                <p>With experience spanning business development, investment evaluation, and strategic partnerships, Yogesh provides the leadership behind every investment decision.</p>
                <p>Yogesh&rsquo;s approach is grounded in integrity, accountability, and the conviction that the best investments are built on strong relationships between all stakeholders.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fortress-navy to-fortress-charcoal border border-fortress-gold/10 p-6 md:p-10 flex items-center rounded-2xl">
              <blockquote className="text-lg md:text-2xl text-fortress-ivory leading-relaxed border-l-4 border-fortress-gold pl-4 md:pl-6">
                &ldquo;Our objective is not simply to invest capital. It is to build strong foundations, support meaningful growth, and create value that lasts.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 my-8 md:my-12 sm:mx-4 rounded-2xl bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Our Values</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-navy">The Principles Behind Every Decision</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-fortress-navy border border-fortress-gold/10 p-6 md:p-8 hover:border-fortress-gold/30 transition-all duration-300 rounded-2xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-fortress-gold/10 flex items-center justify-center mb-4 md:mb-5 rounded-sm">
                  <v.icon className="w-5 h-5 md:w-6 md:h-6 text-fortress-gold" />
                </div>
                <h3 className="text-fortress-ivory font-bold text-base md:text-lg mb-2 md:mb-3">{v.title}</h3>
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-12 md:py-20 bg-fortress-navy my-8 md:my-12 sm:mx-4 rounded-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">Our Investment Philosophy</p>
            <h2 className="text-xl md:text-4xl font-bold text-fortress-ivory mb-3 md:mb-4">Disciplined Capital. Strategic Growth.</h2>
            <p className="text-fortress-ivory/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Sustainable value begins with strong fundamentals. Everything else is noise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
            {philosophyPoints.map((point, i) => (
              <div key={i} className="p-4 md:p-5 bg-fortress-deep border border-fortress-gold/10 rounded-sm">
                <p className="text-fortress-silver text-xs md:text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
