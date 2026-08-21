import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppDownloadFAB } from "@/components/ui/AppDownloadFAB";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { InvestmentCalculator } from "@/components/calculators/InvestmentCalculator";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Financial Calculators | Fundwealth",
  description: "Plan your wealth creation journey with our advanced SIP and Lumpsum calculators.",
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-5 rounded-full bg-primary-50 text-primary-700 font-bold tracking-widest text-sm uppercase border border-primary-100 shadow-sm">
            <span>Planning Tools</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold mb-4 text-slate-900 tracking-tight">
            Map out your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">financial future.</span>
          </h1>
          <p className="text-slate-700 text-base md:text-lg font-medium">
            Use our interactive calculators to visualize the power of compounding and see how small disciplined investments can create massive wealth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="h-96 flex items-center justify-center bg-white rounded-3xl border border-border-color shadow-xl"><div className="animate-pulse text-slate-400 font-semibold">Loading Calculator...</div></div>}>
            <InvestmentCalculator />
          </Suspense>
        </div>
      </div>

      <FinalCTA />
      <Footer />
      <AppDownloadFAB />
      <ScrollToTop />
    </main>
  );
}
