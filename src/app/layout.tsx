import type { Metadata } from "next";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import AnimationProvider from "@/components/AnimationProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fortressih.com"),
  title: {
    default: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
    template: "%s | Fortress Investment Holdings",
  },
  description:
    "Fortress Investment Holdings is a Dubai-based investment company specialising in real estate, private equity, business acquisitions, AI & technology, hospitality, and strategic investments across the UAE and GCC.",
  keywords: [
    "investment company Dubai",
    "investment firm UAE",
    "private equity Dubai",
    "real estate investment Dubai",
    "business acquisitions UAE",
    "Fortress Investment Holdings",
    "Dubai investments",
    "UAE investment opportunities",
    "family office investment Dubai",
    "AI technology investment",
    "hospitality investment Dubai",
    "luxury assets investment",
    "strategic partnerships UAE",
  ],
  authors: [{ name: "Fortress Investment Holdings", url: "https://fortressih.com" }],
  creator: "Fortress Investment Holdings",
  publisher: "Fortress Investment Holdings",
  category: "Investment",
  themeColor: "#07111D",
  icons: {
    icon: "/small-logo.png",
    shortcut: "/small-logo.png",
    apple: "/small-logo.png",
  },
  openGraph: {
    title: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
    description:
      "A Dubai-based investment holding company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality across the UAE and GCC.",
    type: "website",
    locale: "en_US",
    siteName: "Fortress Investment Holdings",
    url: "https://fortressih.com",
    images: [
      {
        url: "/website%20image.png",
        width: 1200,
        height: 630,
        alt: "Fortress Investment Holdings - Dubai investment company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortress Investment Holdings | Investment Company in Dubai, UAE",
    description:
      "A Dubai-based investment holding company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality.",
    images: ["/website%20image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fortressih.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fortressih.com/#organization",
      name: "Fortress Investment Holdings",
      url: "https://fortressih.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://fortressih.com/#logo",
        url: "https://fortressih.com/large-logo.png",
        contentUrl: "https://fortressih.com/large-logo.png",
      },
      image: {
        "@type": "ImageObject",
        url: "https://fortressih.com/website%20image.png",
        contentUrl: "https://fortressih.com/website%20image.png",
      },
      description:
        "Fortress Investment Holdings is a Dubai-based investment company specialising in real estate, private equity, business acquisitions, AI & technology, and hospitality.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@fortressih.com",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://fortressih.com/#website",
      url: "https://fortressih.com",
      name: "Fortress Investment Holdings",
      inLanguage: "en",
      publisher: { "@id": "https://fortressih.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXX');
              fbq('track', 'PageView');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className="antialiased bg-fortress-navy text-fortress-silver cursor-none"
      >
        <AnimationProvider>
          <CustomCursor />
          {children}
          <WhatsAppButton />
        </AnimationProvider>
      </body>
    </html>
  );
}
