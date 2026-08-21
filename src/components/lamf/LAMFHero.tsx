"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ContactModal } from "../ui/ContactModal";

export function LAMFHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] mb-4">
              Get Loan Against Mutual Funds at <span className="text-primary-600">10.49% p.a.</span>
            </h1>
            
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Unlock an overdraft facility against your mutual fund portfolio without selling your investments. 100% digital process with quick disbursal.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Limit approval in just 10 minutes",
                "Pay interest only on the utilized amount",
                "Zero prepayment or foreclosure charges",
                "Keep earning returns on your mutual funds"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" className="shadow-sm" onClick={() => setIsModalOpen(true)}>
                Apply Now
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm max-w-sm ml-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-primary-500"></div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-3">
                Quick Highlights
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Interest Rate</span>
                  <span className="text-base font-bold text-slate-900">10.49% p.a.</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Processing Fee</span>
                  <span className="text-base font-bold text-slate-900">Zero</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Loan Tenure</span>
                  <span className="text-base font-bold text-slate-900">Flexible</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Disbursal Time</span>
                  <span className="text-base font-bold text-slate-900">10 Mins*</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  *Subject to CAMS/KFintech lien marking
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
