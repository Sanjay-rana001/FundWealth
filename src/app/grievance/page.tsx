import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Grievance Redressal | FundWeALTH",
  description: "Grievance redressal mechanism and escalation matrix.",
};

export default function GrievancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Grievance Redressal Mechanism</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-lg text-slate-700">
            At FundWeALTH, client satisfaction is our priority. In case of any grievances or complaints regarding our services, please follow the escalation matrix below.
          </p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Level 1: Client Servicing Team</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="mb-2"><strong>Email:</strong> [INSERT SUPPORT EMAIL]</p>
              <p className="mb-2"><strong>Phone:</strong> 7042313042 / 9891361675</p>
              <p className="text-sm text-slate-500 mt-4">Expected Resolution Time: 3-5 Business Days</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Level 2: Principal / Grievance Officer</h2>
            <p className="text-slate-700 mb-4">If your complaint is not resolved within the expected time, or you are not satisfied with the resolution, you may escalate the matter to our Principal Officer.</p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="mb-2"><strong>Name:</strong> [INSERT PRINCIPAL OFFICER NAME]</p>
              <p className="mb-2"><strong>Email:</strong> [INSERT PO EMAIL]</p>
              <p className="mb-2"><strong>Phone:</strong> [INSERT PO PHONE]</p>
              <p className="text-sm text-slate-500 mt-4">Expected Resolution Time: 7-10 Business Days</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Level 3: SEBI SCORES / SMART ODR</h2>
            <p className="text-slate-700 mb-4">If you are still not satisfied with the resolution from our Principal Officer, or if the grievance is not resolved within 21 days, you may lodge a complaint with SEBI via the SCORES portal or the SMART ODR portal.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-primary-50 text-primary-700 rounded-xl font-bold border border-primary-100 hover:bg-primary-100 transition-colors">
                SEBI SCORES Portal <ExternalLink size={16} />
              </a>
              <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-100 hover:bg-blue-100 transition-colors">
                SMART ODR Portal <ExternalLink size={16} />
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
