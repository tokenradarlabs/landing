import { GetInTouch } from "@/components/common/GetInTouch";
import HeroSection from "@/components/common/HeroSection";
import PlatformFeatures from "@/components/common/PlatformFeatures";
import AboutSection from "@/components/common/AboutSection";
import FAQSection from "@/components/common/FAQSection";
import IntegrationPartners from "@/components/common/IntegrationPartners";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PlatformFeatures />
      <IntegrationPartners />
      <FAQSection />
      <GetInTouch />
    </main>
  );
}
