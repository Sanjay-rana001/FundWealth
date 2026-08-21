import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppDownloadFAB } from "@/components/ui/AppDownloadFAB";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Terms of Service | Fundwealth",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Terms of Service</h1>
        
        <article className="prose prose-slate max-w-none text-slate-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Fundwealth ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that:</p>
          <ol>
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ol>

          <h2>4. Financial Disclaimer</h2>
          <p>The information provided on the Site does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the Site's content as such. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.</p>

          <h2>5. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at info@fundwealth.in.</p>
        </article>
      </div>

      <Footer />
      <AppDownloadFAB />
      <ScrollToTop />
    </main>
  );
}
