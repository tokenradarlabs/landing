import { GetInTouch } from "@/components/common/GetInTouch";
import HeroSection from "@/components/common/HeroSection";
import PlatformFeatures from "@/components/common/PlatformFeatures";
import AboutSection from "@/components/common/AboutSection";
import FAQSection from "@/components/common/FAQSection";
import ComingSoon from "@/components/common/ComingSoon";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PlatformFeatures />
      <ComingSoon />
      <FAQSection />
      <GetInTouch />
    </main>
  );
}
