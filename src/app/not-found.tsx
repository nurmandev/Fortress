import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-fortress-gold text-sm font-medium tracking-[2px] md:tracking-[4px] uppercase mb-4">404</p>
          <h1 className="text-5xl md:text-7xl font-bold text-fortress-navy mb-6">Page Not Found</h1>
          <p className="text-fortress-charcoal/60 text-lg max-w-xl mx-auto mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-fortress-gold text-fortress-navy font-semibold text-sm tracking-wider hover:bg-fortress-champagne transition-colors rounded-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
