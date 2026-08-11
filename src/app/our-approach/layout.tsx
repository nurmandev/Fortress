import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Explore Fortress Investment Holdings' disciplined investment approach: opportunity identification, rigorous risk evaluation, strategic investment, and active long-term value creation.",
  keywords: [
    "Fortress investment approach",
    "investment process Dubai",
    "how Fortress invests",
    "private equity due diligence UAE",
    "strategic investment management Dubai",
  ],
  alternates: {
    canonical: "https://fortressih.com/our-approach",
  },
  openGraph: {
    title: "Our Approach | Fortress Investment Holdings",
    description:
      "A disciplined investment process built on research, risk management, transparency, and long-term alignment.",
    url: "https://fortressih.com/our-approach",
    siteName: "Fortress Investment Holdings",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/website%20image.png",
        width: 1200,
        height: 630,
        alt: "Fortress Investment Holdings - Our investment approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | Fortress Investment Holdings",
    description:
      "A disciplined investment process built on research, risk management, transparency, and long-term alignment.",
    images: ["/website%20image.png"],
  },
};

export default function OurApproachLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
