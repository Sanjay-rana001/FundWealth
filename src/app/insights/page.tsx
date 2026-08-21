import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppDownloadFAB } from "@/components/ui/AppDownloadFAB";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { InsightsTeaser } from "@/components/home/InsightsTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getSortedInsightsData } from "@/lib/insights";

export const metadata = {
  title: "Market Insights | Fundwealth",
  description: "Read the latest financial insights, market outlooks, and wealth education articles.",
};

export default function InsightsPage() {
  const blogs = getSortedInsightsData();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-10">
        <div className="text-center max-w-3xl mx-auto mb-6 px-6">
          <p className="text-primary-700 font-bold tracking-widest text-sm uppercase mb-3">Knowledge Hub</p>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold mb-4 text-slate-900 tracking-tight">
            Wealth <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">Education.</span>
          </h1>
          <p className="text-slate-700 text-base md:text-lg font-medium">
            Stay informed with expert opinions, market updates, and strategic financial planning advice.
          </p>
        </div>

        {/* Reusing the InsightsTeaser with dynamic blogs */}
        <InsightsTeaser blogs={blogs} />
      </div>

      <FinalCTA />
      <Footer />
      <AppDownloadFAB />
      <ScrollToTop />
    </main>
  );
}
