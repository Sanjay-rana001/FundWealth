import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppDownloadFAB } from "@/components/ui/AppDownloadFAB";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Privacy Policy | Fundwealth",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Privacy Policy</h1>
        
        <article className="prose prose-slate max-w-none text-slate-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Fundwealth. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2>2. The data we collect about you</h2>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes your investment preferences and goals (when provided via our calculators or forms).</li>
          </ul>

          <h2>3. How we use your personal data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at info@fundwealth.in.</p>
        </article>
      </div>

      <Footer />
      <AppDownloadFAB />
      <ScrollToTop />
    </main>
  );
}
