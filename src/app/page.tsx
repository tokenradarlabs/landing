import { GetInTouch } from "@/components/common/GetInTouch";
import HeroSection from "@/components/common/HeroSection";
import PlatformFeatures from "@/components/common/PlatformFeatures";
import AboutSection from "@/components/common/AboutSection";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main>
      <NextSeo 
        title="TokenRadar Labs - Real-Time Crypto Market Intelligence"
        description="Real-time token price tracking and market insights for your crypto community. Stay ahead with instant alerts and comprehensive market data."
        canonical="https://tokenradarlabs.com/"
        openGraph={{
          url: 'https://tokenradarlabs.com/',
          title: 'TokenRadar Labs - Real-Time Crypto Market Intelligence',
          description: 'Real-time token price tracking and market insights for your crypto community. Stay ahead with instant alerts and comprehensive market data.',
          images: [
            {
              url: 'https://tokenradarlabs.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'TokenRadar Labs',
            },
          ],
        }}
      />
      <HeroSection />
      <AboutSection />
      <PlatformFeatures />
      <GetInTouch />
    </main>
  );
}
