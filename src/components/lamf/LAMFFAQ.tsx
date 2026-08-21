"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function LAMFFAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const faqs = [
    {
      q: "Will I still receive dividends on my pledged Mutual Funds?",
      a: "Yes! Even though your mutual funds are pledged as collateral, they remain in your name. You will continue to receive all dividends, bonuses, and market returns as usual."
    },
    {
      q: "Do I have to pay regular EMIs like a personal loan?",
      a: "No. This is an overdraft facility. You only need to pay the interest on the utilized amount every month. The principal can be repaid whenever you have surplus funds, without any prepayment penalty."
    },
    {
      q: "What is the minimum and maximum loan limit I can get?",
      a: "The loan limit depends on the value of your mutual fund portfolio and the specific AMC policies. Generally, you can get up to 45% of the value for Equity funds and up to 80% for Debt funds."
    },
    {
      q: "Are there any foreclosure or prepayment charges?",
      a: "Absolutely zero. You can close your loan account or prepay any part of your principal amount at any time without incurring any hidden charges or foreclosure penalties."
    },
    {
      q: "Is it safe to pledge my mutual funds digitally?",
      a: "Yes, it is 100% secure. The lien is marked directly through CAMS or KFintech (the official registrars) via an OTP-based digital process. Your funds are never sold or transferred to anyone else."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Everything you need to know about getting a loan against your mutual funds.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl overflow-hidden transition-colors ${openIdx === idx ? 'border-primary-200 bg-primary-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className="font-bold text-slate-800 text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIdx === idx ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-5 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100/50 mt-1 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
