import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InvestmentPhilosophy } from "@/components/home/InvestmentPhilosophy";
import { GoalBasedInvesting } from "@/components/home/GoalBasedInvesting";
import { CalculatorTeaser } from "@/components/home/CalculatorTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AdvisorSection } from "@/components/home/AdvisorSection";
import { PortfolioIllustration } from "@/components/home/PortfolioIllustration";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustIndicators />
        
        <ScrollReveal><CompanyIntro /></ScrollReveal>
        <ScrollReveal><ServicesOverview /></ScrollReveal>
        <ScrollReveal><InvestmentPhilosophy /></ScrollReveal>
        <ScrollReveal><GoalBasedInvesting /></ScrollReveal>
        <ScrollReveal><CalculatorTeaser /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><AdvisorSection /></ScrollReveal>
        <ScrollReveal><PortfolioIllustration /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><InsightsTeaser /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal direction="none"><FinalCTA /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
