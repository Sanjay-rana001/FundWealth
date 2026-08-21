"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, PiggyBank } from "lucide-react";
import { Button } from "../ui/Button";
import { ContactModal } from "../ui/ContactModal";

export function LAMFCalculator() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(1000000); // Default 10 Lakhs

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioValue(Number(e.target.value));
  };

  // Equity limit ~45%, Debt limit ~80%
  const equityLimit = portfolioValue * 0.45;
  const debtLimit = portfolioValue * 0.80;

  return (
    <section className="py-10 md:py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-50 text-primary-600 rounded-lg mb-4 shadow-sm border border-primary-100">
              <Calculator size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
              Check your <span className="text-primary-600">Loan Eligibility</span> instantly
            </h2>
            <p className="text-slate-600 text-sm md:text-base mb-6">
              Estimate the maximum overdraft limit you can get against your current mutual fund portfolio.
            </p>

            <div className="bg-slate-50 p-5 md:p-6 rounded-xl border border-slate-200 shadow-inner">
              <div className="flex justify-between items-end mb-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Total Mutual Fund Value
                </label>
                <div className="text-xl font-bold text-primary-700 font-display">
                  {formatCurrency(portfolioValue)}
                </div>
              </div>
              
              <input
                type="range"
                min={100000}
                max={10000000}
                step={100000}
                value={portfolioValue}
                onChange={handleSliderChange}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600 mb-6"
              />
              
              <div className="flex justify-between text-xs text-slate-400 font-medium px-1">
                <span>₹1L</span>
                <span>₹50L</span>
                <span>₹1Cr</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Estimated Overdraft Limit</h3>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">If Equity Funds</p>
                    <p className="text-slate-300 text-sm">Up to 45% of value</p>
                  </div>
                </div>
                <div className="text-xl font-bold text-white font-display">
                  {formatCurrency(equityLimit)}
                </div>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                    <PiggyBank size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">If Debt Funds</p>
                    <p className="text-slate-300 text-sm">Up to 80% of value</p>
                  </div>
                </div>
                <div className="text-xl font-bold text-white font-display">
                  {formatCurrency(debtLimit)}
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <Button 
                variant="primary" 
                className="w-full text-base shadow-lg shadow-primary-500/20"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now to Unlock Limit
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <p className="text-center text-xs text-slate-500 mt-4">
                *Final limit depends on the specific AMCs and schemes you hold.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
