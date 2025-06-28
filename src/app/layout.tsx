import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { DefaultSeo } from "next-seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// These metadata are kept for Next.js's built-in SEO
export const metadata: Metadata = {
  title: "TokenRadar Labs - Real-Time Crypto Market Intelligence",
  description: "Real-time token price tracking and market insights for your crypto community. Stay ahead with instant alerts and comprehensive market data.",
};

// Configuration for next-seo
const SEO = {
  title: "TokenRadar Labs - Real-Time Crypto Market Intelligence",
  description: "Real-time token price tracking and market insights for your crypto community. Stay ahead with instant alerts and comprehensive market data.",
  canonical: "https://tokenradarlabs.com/",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://tokenradarlabs.com/',
    siteName: 'TokenRadar Labs',
    title: 'TokenRadar Labs - Real-Time Crypto Market Intelligence',
    description: 'Real-time token price tracking and market insights for your crypto community. Stay ahead with instant alerts and comprehensive market data.',
    images: [
      {
        url: 'https://tokenradarlabs.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TokenRadar Labs',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@tokenradarlabs',
    site: '@tokenradarlabs',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'crypto, token tracking, market intelligence, crypto alerts, crypto dashboard, token radar'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DefaultSeo {...SEO} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 dark:from-slate-900 dark:via-blue-900 dark:to-slate-950 min-h-screen`}
      >
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
