import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Regulatory Disclosures | Fundwealth",
  description: "Important regulatory disclosures and conflict of interest information.",
};

export default function RegulatoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Regulatory Disclosures</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-8">
            The following disclosures are provided in accordance with the regulatory requirements of the Securities and Exchange Board of India (SEBI) and the Association of Mutual Funds in India (AMFI).
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Registration Details</h2>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
            <ul className="space-y-3">
              <li><strong>Name of the Entity:</strong> [INSERT EXACT REGISTERED NAME]</li>
              <li><strong>Type of Registration:</strong> [INSERT REGISTRATION TYPE]</li>
              <li><strong>SEBI Registration Number:</strong> [INSERT SEBI REG NO]</li>
              <li><strong>AMFI ARN:</strong> 314036</li>
              <li><strong>Validity of Registration:</strong> [INSERT VALIDITY DATES]</li>
              <li><strong>Principal Officer:</strong> [INSERT NAME, CONTACT]</li>
              <li><strong>Registered Address:</strong> 14, First Floor, Above SBI Bank, Achievers Mall, Sector-49, Faridabad, Pin-121001</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Business Activities & Affiliations</h2>
          <p className="text-slate-700 mb-4">
            [INSERT DESCRIPTION OF BUSINESS, e.g., We are engaged in the business of Mutual Fund Distribution...]
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Conflict of Interest</h2>
          <p className="text-slate-700 mb-4">
            [INSERT CONFLICT OF INTEREST DISCLOSURES, e.g., We earn commissions from AMCs on mutual fund distributions. A detailed commission structure is available upon request.]
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Standard Risk Warning</h2>
          <p className="text-slate-700 mb-4 font-medium border-l-4 border-primary-500 pl-4 py-2 bg-slate-50">
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
