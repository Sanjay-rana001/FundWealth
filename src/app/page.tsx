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

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustIndicators />
        <CompanyIntro />
        <ServicesOverview />
        <InvestmentPhilosophy />
        <GoalBasedInvesting />
        <CalculatorTeaser />
        <HowItWorks />
        <AdvisorSection />
        <PortfolioIllustration />
        <Testimonials />
        <InsightsTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
