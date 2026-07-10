import type { Metadata } from"next";
import { GeistSans } from"geist/font/sans";
import { GeistMono } from"geist/font/mono";
import"./globals.css";

export const metadata: Metadata = {
 title:"Fortress Investment Holdings | Investment Company in Dubai, UAE",
 description:"Fortress Investment Holdings is a Dubai-based diversified investment holding company investing in real estate, business acquisitions, private equity, AI & technology, hospitality, and strategic partnerships across the UAE.",
 keywords: ["investment company Dubai","private equity UAE","real estate investment","business acquisitions","Fortress Investment Holdings","Dubai investments","strategic partnerships",
 ],
 openGraph: {
 title:"Fortress Investment Holdings",
 description:"Built on Strength. Driven by Vision.",
 type:"website",
 locale:"en_US",
 siteName:"Fortress Investment Holdings",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" className="dark">
 <body
 className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-fortress-navy text-fortress-ivory`}
 >
 {children}
 </body>
 </html>
 );
}
