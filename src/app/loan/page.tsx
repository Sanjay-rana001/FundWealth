import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LAMFHero } from "@/components/lamf/LAMFHero";
import { LAMFFeatures } from "@/components/lamf/LAMFFeatures";
import { LAMFProcess } from "@/components/lamf/LAMFProcess";
import { LAMFCalculator } from "@/components/lamf/LAMFCalculator";
import { LAMFComparison } from "@/components/lamf/LAMFComparison";
import { LAMFFAQ } from "@/components/lamf/LAMFFAQ";

export const metadata: Metadata = {
  title: "Loan Against Mutual Funds | Fundwealth",
  description: "Get an overdraft facility against your mutual funds at just 10.49% p.a. without redeeming your investments. 100% digital process with quick disbursal.",
};

export default function LoanAgainstMutualFundsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <LAMFHero />
        <LAMFCalculator />
        <LAMFFeatures />
        <LAMFComparison />
        <LAMFProcess />
        <LAMFFAQ />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
