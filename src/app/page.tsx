import Navbar from"@/components/Navbar";
import Hero from"@/components/Hero";
import Partners from"@/components/Partners";
import Stats from"@/components/Stats";
import About from"@/components/About";
import InvestmentSectors from"@/components/InvestmentSectors";
import WhyChooseUs from"@/components/WhyChooseUs";
import HowItWorks from"@/components/HowItWorks";
import Philosophy from"@/components/Philosophy";
import FeaturedArticles from"@/components/FeaturedArticles";
import Testimonials from"@/components/Testimonials";
import Newsletter from"@/components/Newsletter";
import ContactPreview from"@/components/ContactPreview";
import CTASection from"@/components/CTASection";
import Footer from"@/components/Footer";

export default function Home() {
 return (
 <main className="min-h-screen bg-fortress-navy">
 <Navbar />
 <Hero />
 <Partners />
 <Stats />
 <About />
 <InvestmentSectors />
 <WhyChooseUs />
 <HowItWorks />
 <Philosophy />
 <FeaturedArticles />
 <Testimonials />
 <Newsletter />
 <ContactPreview />
 <CTASection />
 <Footer />
 </main>
 );
}
