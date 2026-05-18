import { HeroSection } from "@/components/landing/hero-section";
import { LoQueResolvemosSection } from "@/components/landing/lo-que-resolvemos-section";
import { PorQueLoResolvemosSection } from "@/components/landing/por-que-lo-resolvemos-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TechPipelineSection } from "@/components/landing/tech-pipeline-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { WhatsAppSubscribeInline } from "@/components/landing/whatsapp-subscribe-inline";
import { CtaSection } from "@/components/landing/cta-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <HeroSection />
      <LoQueResolvemosSection />
      <PorQueLoResolvemosSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TechPipelineSection />
      <IntegrationsSection />
      <DevelopersSection />
      <WhatsAppSubscribeInline />
      <CtaSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
