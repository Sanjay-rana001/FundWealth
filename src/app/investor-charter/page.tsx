import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Investor Charter | Fundwealth",
  description: "Investor Charter detailing services, rights, and responsibilities.",
};

export default function InvestorCharterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Investor Charter</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Vision and Mission Statement for Investors</h2>
            <p className="text-slate-700">
              <strong>Vision:</strong> Invest with knowledge & safety.
            </p>
            <p className="text-slate-700 mt-2">
              <strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Details of Business Transacted by the Investment Adviser / Distributor</h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>To enter into an agreement with the client providing all details including fee details, aspect of Conflict of interest disclosure and maintaining confidentiality of information.</li>
              <li>To do a proper and unbiased risk profiling and suitability assessment of the client.</li>
              <li>To obtain registration with SEBI / AMFI and comply with all regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Rights of Investors</h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>Get full disclosure of all material facts and conflicts of interest.</li>
              <li>Receive transparent fee structures and services before onboarding.</li>
              <li>Right to ask for clarification on any advice or product recommended.</li>
              <li>Right to file a grievance using the provided escalation matrix or SEBI SCORES.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Responsibilities of Investors</h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>Provide accurate and complete information for risk profiling.</li>
              <li>Understand the risks associated with the investment products.</li>
              <li>Read all documents and terms carefully before investing.</li>
              <li>Do not fall for "Guaranteed Returns" or "Risk-Free" claims as investments are subject to market risks.</li>
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
