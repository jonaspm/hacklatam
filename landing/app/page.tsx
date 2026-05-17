import { HeroSection } from "@/components/landing/hero-section";
import { LoQueResolvemosSection } from "@/components/landing/lo-que-resolvemos-section";
import { PorQueLoResolvemosSection } from "@/components/landing/por-que-lo-resolvemos-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <HeroSection />
      <LoQueResolvemosSection />
      <PorQueLoResolvemosSection />
      <HowItWorksSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
