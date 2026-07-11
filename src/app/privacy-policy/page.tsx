import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Fortress Investment Holdings. Learn how we collect, use, store, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-fortress-navy">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fortress-deep" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-fortress-gold text-sm font-medium tracking-[4px] uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-fortress-ivory mb-4">Privacy Policy</h1>
            <p className="text-fortress-silver text-sm">Last Updated: [INSERT DATE]</p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-fortress-gold/10">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8">
          <div className="space-y-10 text-fortress-silver leading-relaxed text-sm sm:text-base">

            <p>
              Fortress Investment Holdings respects the privacy of everyone who visits our website, contacts our team, submits an enquiry, or provides information through our online forms.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, process, and protect personal information.
            </p>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Information We May Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full name, company name, and job title</li>
                <li>Email address, telephone number, and country</li>
                <li>Business, investment, or partnership details</li>
                <li>Documents uploaded through our website</li>
                <li>Website usage, device, and browser information, including IP address</li>
                <li>Communication preferences</li>
                <li>Information provided through contact or submission forms</li>
              </ul>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">How We Use Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to enquiries and communicate with users</li>
                <li>Review investment opportunities and business acquisition proposals</li>
                <li>Assess partnership or joint venture enquiries</li>
                <li>Provide requested information</li>
                <li>Improve our website and services</li>
                <li>Maintain security and analyse website performance</li>
                <li>Meet legal or regulatory requirements</li>
                <li>Send marketing communications where consent has been provided</li>
              </ul>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Document Uploads</h2>
              <p>
                Documents uploaded through the website may contain confidential, financial, corporate, or personal information. Please only upload information you are authorised to provide.
              </p>
              <p className="mt-4">
                Submitting documents does not create a formal confidential, advisory, investment, partnership, or contractual relationship unless separately agreed in writing. If your information requires a formal non-disclosure agreement, contact our team before submitting.
              </p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar technologies to improve functionality, understand usage, measure performance, and support marketing relevance through tools including Google Analytics and Meta Pixel.
              </p>
              <p className="mt-4">
                You may manage cookies through your browser settings or the website&apos;s cookie consent tool.
              </p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Sharing of Information</h2>
              <p>We do not sell personal information. Information may be shared with:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Employees and authorised representatives</li>
                <li>Professional advisors</li>
                <li>Technology, hosting, website, and analytics providers</li>
                <li>Legal or regulatory authorities where required</li>
                <li>Service providers supporting our operations</li>
              </ul>
              <p className="mt-4">All third parties are expected to handle information responsibly and only for legitimate purposes.</p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Data Security</h2>
              <p>
                We take reasonable administrative, technical, and organisational measures to protect information against unauthorised access, loss, misuse, alteration, or disclosure. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
              </p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Data Retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to respond to enquiries, evaluate opportunities, maintain business records, meet legal obligations, resolve disputes, and protect legitimate business interests.
              </p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Your Rights</h2>
              <p>Depending on applicable law, you may have the right to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Request access to or correction of your personal information</li>
                <li>Request deletion of information</li>
                <li>Withdraw marketing consent</li>
                <li>Object to or request restriction of certain processing</li>
              </ul>
              <p className="mt-4">Requests may be submitted using the contact information below.</p>
            </div>

            <div className="border-t border-fortress-gold/10 pt-8">
              <h2 className="text-xl font-bold text-fortress-ivory mb-4">Contact</h2>
              <p>For privacy-related questions:</p>
              <div className="mt-3 space-y-1">
                <p>Fortress Investment Holdings</p>
                <p>Email: [INSERT PRIVACY EMAIL]</p>
                <p>Address: [INSERT OFFICE ADDRESS]</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
