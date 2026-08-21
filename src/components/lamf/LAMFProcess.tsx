"use client";

import React, { useState } from "react";
import { CheckCircle2, LockKeyhole, IndianRupee } from "lucide-react";
import { Button } from "../ui/Button";
import { ContactModal } from "../ui/ContactModal";

export function LAMFProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      step: "01",
      icon: CheckCircle2,
      title: "Check Limit Eligibility",
      desc: "View the maximum loan amount available against your mutual fund portfolio."
    },
    {
      step: "02",
      icon: LockKeyhole,
      title: "Pledge Digitally",
      desc: "Select the mutual funds you want to pledge. The lien is marked securely via CAMS/KFintech."
    },
    {
      step: "03",
      icon: IndianRupee,
      title: "Disbursal in 10 Mins*",
      desc: "The cash limit is unlocked and funds are transferred directly to your registered bank account in 10 minutes."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            How it Works
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            A simple, 100% digital process with zero paperwork required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-100 z-0"></div>
            
            {steps.map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-primary-600 mb-4 shadow-sm">
                  <item.icon size={20} />
                </div>
                <div className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-bold mb-2">Step {item.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="primary" className="shadow-sm" onClick={() => setIsModalOpen(true)}>
              Start Application Now
            </Button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
