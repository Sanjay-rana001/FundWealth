import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { AssociatedAMCs } from "@/components/home/AssociatedAMCs";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InvestmentPhilosophy } from "@/components/home/InvestmentPhilosophy";
import { GoalBasedInvesting } from "@/components/home/GoalBasedInvesting";
import { CalculatorTeaser } from "@/components/home/CalculatorTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AdvisorSection } from "@/components/home/AdvisorSection";

import { Testimonials } from "@/components/home/Testimonials";
import { MutualFundComparison } from "@/components/home/MutualFundComparison";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FeatureBanner } from "@/components/home/FeatureBanner";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getSortedInsightsData } from "@/lib/insights";

export default function Home() {
  const blogs = getSortedInsightsData();
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustIndicators />
        
        <ScrollReveal><CompanyIntro /></ScrollReveal>
        <ScrollReveal><AssociatedAMCs /></ScrollReveal>
        <ScrollReveal><ServicesOverview /></ScrollReveal>
        <ScrollReveal><InvestmentPhilosophy /></ScrollReveal>
        <ScrollReveal><GoalBasedInvesting /></ScrollReveal>
        <ScrollReveal><CalculatorTeaser /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><AdvisorSection /></ScrollReveal>

        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><MutualFundComparison /></ScrollReveal>
        <ScrollReveal><InsightsTeaser blogs={blogs.slice(0, 5)} /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal direction="none"><FinalCTA /></ScrollReveal>
        <FeatureBanner />
      </main>
      <Footer />
    </>
  );
}
