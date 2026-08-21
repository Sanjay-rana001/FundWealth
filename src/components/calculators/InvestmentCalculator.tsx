"use client";

import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export function InvestmentCalculator() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("type") === "lumpsum" ? "LUMPSUM" : "SIP";

  const [mode, setMode] = useState<"SIP" | "LUMPSUM">(initialMode);
  
  const [investment, setInvestment] = useState(initialMode === "LUMPSUM" ? 1000000 : 25000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(15);
  
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let P = investment;
    let r = expectedReturn;
    let t = timePeriod;
    
    let totalInvested = 0;
    let finalValue = 0;

    if (mode === "SIP") {
      // SIP Calculation: M = P × ({[1 + i]^n - 1} / i) × (1 + i)
      const i = r / 12 / 100;
      const n = t * 12;
      totalInvested = P * n;
      if (i === 0) {
        finalValue = totalInvested;
      } else {
        finalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      }
    } else {
      // Lumpsum Calculation: A = P(1 + r/100)^t
      totalInvested = P;
      if (r === 0) {
        finalValue = totalInvested;
      } else {
        finalValue = P * Math.pow(1 + (r / 100), t);
      }
    }
    
    const returns = finalValue - totalInvested;
    
    setInvestedAmount(totalInvested);
    setEstimatedReturns(returns);
    setTotalValue(finalValue);
  }, [investment, expectedReturn, timePeriod, mode]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const isSIP = mode === "SIP";

  return (
    <div className="bg-white rounded-3xl border border-border-color shadow-xl overflow-hidden">
      
      {/* Animated Top Toggle Bar */}
      <div className="p-2 border-b border-border-color bg-slate-50/50">
        <div className="flex bg-slate-200/60 p-1.5 rounded-2xl relative">
          <button 
            onClick={() => { setMode("SIP"); setInvestment(25000); }}
            className={`relative flex-1 py-2.5 text-center rounded-xl font-bold text-sm md:text-base transition-colors z-10 ${isSIP ? 'text-primary-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {isSIP && (
              <motion.div
                layoutId="calcTabPill"
                className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            SIP Calculator
          </button>
          <button 
            onClick={() => { setMode("LUMPSUM"); setInvestment(1000000); }}
            className={`relative flex-1 py-2.5 text-center rounded-xl font-bold text-sm md:text-base transition-colors z-10 ${!isSIP ? 'text-primary-700' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {!isSIP && (
              <motion.div
                layoutId="calcTabPill"
                className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            Lumpsum Calculator
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Controls Section */}
        <div className="p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-border-color">
          
          <div className="space-y-5">
            {/* Investment Amount */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">{isSIP ? "Monthly Investment" : "Total Investment"}</label>
                <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 font-bold text-primary-700 flex items-center focus-within:border-primary-500 transition-colors">
                  <span className="mr-1">₹</span>
                  <input
                    type="text"
                    value={investment ? investment.toLocaleString('en-IN') : ""}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setInvestment(Number(val));
                    }}
                    className="bg-transparent border-none outline-none w-28 text-right font-bold text-primary-700"
                  />
                </div>
              </div>
              <input 
                type="range" 
                min={isSIP ? 500 : 5000} 
                max={Math.max(investment, isSIP ? 100000 : 10000000)} 
                step={isSIP ? 500 : 5000}
                value={investment} 
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>{isSIP ? "₹500" : "₹5,000"}</span>
                <span>{formatCurrency(Math.max(investment, isSIP ? 100000 : 10000000))}</span>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">Expected Return (p.a)</label>
                <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 font-bold text-primary-700 flex items-center focus-within:border-primary-500 transition-colors">
                  <input
                    type="text"
                    value={expectedReturn || ""}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setExpectedReturn(Number(val));
                    }}
                    className="bg-transparent border-none outline-none w-16 text-right font-bold text-primary-700"
                  />
                  <span className="ml-1">%</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max={Math.max(expectedReturn, 30)} 
                step="1"
                value={expectedReturn} 
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>1%</span>
                <span>{Math.max(expectedReturn, 30)}%</span>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">Time Period</label>
                <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 font-bold text-primary-700 flex items-center focus-within:border-primary-500 transition-colors">
                  <input
                    type="text"
                    value={timePeriod || ""}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setTimePeriod(Number(val));
                    }}
                    className="bg-transparent border-none outline-none w-16 text-right font-bold text-primary-700"
                  />
                  <span className="ml-1">Years</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max={Math.max(timePeriod, 40)} 
                step="1"
                value={timePeriod} 
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>1 Yr</span>
                <span>{Math.max(timePeriod, 40)} Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-5 md:p-8 bg-slate-50 flex flex-col justify-center relative">
          
          <div className="mb-6 text-center relative z-10">
            <p className="text-slate-500 font-medium mb-2 uppercase tracking-widest text-xs">Total Value of Investment</p>
            <div className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
              {formatCurrency(totalValue)}
            </div>
            <p className="text-sm font-medium text-primary-600 flex items-center justify-center gap-1">
              <TrendingUp size={16} /> Projected Growth
            </p>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="bg-white p-4 rounded-2xl border border-border-color flex justify-between items-center shadow-sm">
              <span className="text-slate-600 font-medium">Invested Amount</span>
              <span className="font-bold text-slate-900 text-base md:text-lg">{formatCurrency(investedAmount)}</span>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-border-color flex justify-between items-center shadow-sm">
              <span className="text-slate-600 font-medium">Est. Returns</span>
              <span className="font-bold text-primary-600 text-base md:text-lg">+{formatCurrency(estimatedReturns)}</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 font-medium relative z-10">
            * Returns are not guaranteed and are purely for illustration purposes. Mutual fund investments are subject to market risks.
          </div>
        </div>

      </div>
    </div>
  );
}
