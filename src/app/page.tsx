import { GetInTouch } from "@/components/common/GetInTouch";
import HeroSection from "@/components/common/HeroSection";
import PlatformFeatures from "@/components/common/PlatformFeatures";
import AboutSection from "@/components/common/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PlatformFeatures />
      <GetInTouch />
      <AboutSection />
    </main>
  );
}
