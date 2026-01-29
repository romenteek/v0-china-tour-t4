import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { RouteSection } from "@/components/route-section";
import { ComfortSection } from "@/components/comfort-section";
import { BudgetSection } from "@/components/budget-section";
import { PartiesSection } from "@/components/parties-section";
import { BusinessSection } from "@/components/business-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function ChinaTourPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ComfortSection />
      <RouteSection />
      <PartiesSection />
      <BusinessSection />
      <BudgetSection />
      <CTASection />
      <Footer />
    </main>
  );
}
