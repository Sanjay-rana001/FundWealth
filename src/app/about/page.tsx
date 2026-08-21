import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppDownloadFAB } from "@/components/ui/AppDownloadFAB";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { TeamSection } from "@/components/about/TeamSection";
import { CoreValues } from "@/components/about/CoreValues";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "About Us | Fundwealth",
  description: "Learn more about our mission, our story, and the leadership team driving Fundwealth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28">
        <AboutHero />
        <CompanyStory />
        <TeamSection />
        <CoreValues />
        <FinalCTA />
      </div>

      <Footer />
      <AppDownloadFAB />
      <ScrollToTop />
    </main>
  );
}
