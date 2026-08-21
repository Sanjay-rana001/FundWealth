"use client";

import React, { useState } from "react";
import { Home, Plane, Baby, Wallet, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ContactModal } from "../ui/ContactModal";

export function GoalBasedInvesting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goals = [
    { title: "Dream Home", icon: Home, amount: "₹2 Cr", time: "10 Years" },
    { title: "Retirement", icon: Wallet, amount: "₹10 Cr", time: "25 Years" },
    { title: "Child's Education", icon: Baby, amount: "₹50 L", time: "15 Years" },
    { title: "World Tour", icon: Plane, amount: "₹15 L", time: "5 Years" },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-10 relative overflow-hidden border-t border-b border-border-color">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3">Goal-Based Investing</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight text-slate-900 tracking-tight">
              Don't just invest.<br />
              <span className="text-primary-700">Invest for a reason.</span>
            </h2>
          </div>
          <Button variant="primary" className="hidden md:flex" onClick={() => setIsModalOpen(true)}>
            Start a Goal Plan
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {goals.map((goal, idx) => (
            <div key={idx} className="relative bg-white border border-border-color rounded-2xl p-3 md:p-5 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-300">
              
              <div className="relative z-10">
                {/* Header with Icon and Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <goal.icon size={16} className="md:w-5 md:h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm md:text-base font-display font-bold text-slate-800 group-hover:text-primary-700 transition-colors">{goal.title}</h3>
                </div>
                
                {/* Stats */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-3 md:mb-4 bg-slate-50 rounded-xl p-2 md:p-3 border border-slate-100 gap-1 md:gap-0">
                  <div>
                    <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">Target</span>
                    <span className="text-sm md:text-xl font-display font-bold text-primary-700">
                      {goal.amount}
                    </span>
                  </div>
                  <div className="md:text-right">
                    <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">Timeline</span>
                    <span className="text-xs md:text-sm font-bold text-slate-700">{goal.time}</span>
                  </div>
                </div>
                
                {/* View Strategy Link */}
                <div className="pt-1 md:pt-2 flex items-center justify-between text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-primary-600 transition-colors">
                  <span className="truncate">Discuss Strategy</span> 
                  <ArrowRight size={12} className="md:w-[14px] md:h-[14px] transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 md:hidden">
          <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(true)}>
            Start a Goal Plan
          </Button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
