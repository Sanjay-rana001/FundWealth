"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What is the minimum investment amount?",
      a: "For Mutual Fund SIPs, you can start with as low as ₹5,000 per month. For dedicated Portfolio Management Services (PMS), the regulatory minimum is ₹50 Lakhs."
    },
    {
      q: "How are your fees structured?",
      a: "We operate on a transparent, flat-fee model for our services, or zero-fee for direct mutual fund distribution where we earn a nominal trailing commission from the AMCs. We will clearly outline all costs before you invest."
    },
    {
      q: "Are my investments safe with Fundwealth?",
      a: "Fundwealth does not hold your money. All investments are made directly in your name with the respective AMCs, held in your own demat/folio accounts. We simply act as your strategic partner."
    },
    {
      q: "How frequently will my portfolio be reviewed?",
      a: "We conduct deep portfolio reviews every quarter, and ad-hoc rebalancing whenever there are significant market events or changes in your personal financial goals."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-surface-card border-y border-border-color py-12">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-color rounded-2xl bg-background  overflow-hidden transition-all duration-300">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary-600' : 'text-foreground/40'}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
