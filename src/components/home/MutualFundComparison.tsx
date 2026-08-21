"use client";

import React from "react";
import { UserCheck, TrendingUp, Layers, Wallet, BarChart3, ShieldCheck, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

export function MutualFundComparison() {
  const whyReasons = [
    { title: "Professional Management", desc: "Managed by experts who research and monitor your investments.", icon: UserCheck },
    { title: "Power of Compounding", desc: "Reinvesting earnings helps your investments grow over the long term.", icon: TrendingUp },
    { title: "Diversification", desc: "Spread your risk across various asset classes and sectors.", icon: Layers },
    { title: "Affordable Investment", desc: "Start investing with as low as ₹500 through SIP.", icon: Wallet },
    { title: "Market-Linked Growth", desc: "Potential to beat inflation over longer durations.", icon: BarChart3 },
    { title: "Transparency & Regulation", desc: "Strictly regulated by SEBI for investor protection.", icon: ShieldCheck },
  ];

  const comparisonData = [
    { feature: "Returns", mf: "High (10%-15%*) Long Term", re: "Low to Moderate", fd: "Low (5%-7%)", gold: "Moderate (Long Term)", ppf: "Low (7%-8%)" },
    { feature: "Liquidity", mf: "High", re: "Low", fd: "Medium (penalty)", gold: "Medium", ppf: "Low (Lock-in)" },
    { feature: "Min. Investment", mf: "As low as ₹500 (SIP)", re: "High", fd: "₹1,000", gold: "High", ppf: "₹500" },
    { feature: "Diversification", mf: "High", re: "Low", fd: "No", gold: "Low", ppf: "No" },
    { feature: "Inflation Beating", mf: "Yes (Potentially)", re: "Yes (Depends)", fd: "No", gold: "Yes", ppf: "No" },
    { feature: "Tax Efficiency", mf: "Yes (ELSS) & Benefits", re: "No", fd: "No", gold: "No", ppf: "Yes" },
    { feature: "Transparency", mf: "High", re: "Low", fd: "High", gold: "High", ppf: "High" },
  ];

  const sidebarChecklist = [
    "Professional fund management by experts",
    "Diversification reduces risk",
    "Potential for higher long-term returns",
    "Liquidity and flexibility",
    "Affordable - start small with SIP",
    "Regulated and transparent investments",
    "Suitable for every financial goal"
  ];

  return (
    <section className="bg-slate-50 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-6">
        
        {/* Top Half: Why Mutual Funds */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-1">WHY <span className="text-primary-600">MUTUAL FUNDS</span></h2>
            <h3 className="text-lg font-bold text-slate-700 mb-3 uppercase">Are a Better Choice?</h3>
            <div className="space-y-3">
              {whyReasons.map((reason, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <reason.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{reason.title}</h4>
                    <p className="text-xs text-slate-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-lg flex flex-col justify-between p-6 md:p-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">The Power of Discipline</h3>
              <p className="text-sm text-slate-600 font-medium">Consistent SIPs over time can help build long-term wealth and achieve financial goals.</p>
            </div>
            
            {/* Premium Chart */}
            <div className="relative z-10 flex flex-col items-center mt-6 mb-4 w-full">
              {/* Chart Grid Area */}
              <div className="relative flex items-end gap-3 sm:gap-5 h-36 w-full justify-center border-b-2 border-slate-200 pb-1">
                
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 py-2">
                  <div className="w-full border-t border-dashed border-slate-300"></div>
                  <div className="w-full border-t border-dashed border-slate-300"></div>
                  <div className="w-full border-t border-dashed border-slate-300"></div>
                  <div className="w-full border-t border-dashed border-slate-300"></div>
                </div>

                {/* Bars */}
                {[
                  { h: 30, lbl: "Yr 1" },
                  { h: 55, lbl: "Yr 3" },
                  { h: 85, lbl: "Yr 5" },
                  { h: 120, lbl: "Yr 10" },
                  { h: 160, lbl: "Yr 15" }
                ].map((item, i) => (
                   <div key={i} className="relative flex flex-col items-center group">
                     {/* Final Bar Badge */}
                     {i === 4 && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: 1.2 }}
                         className="absolute -top-10 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-20"
                       >
                         Wealth Created
                         {/* Triangle pointer */}
                         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                       </motion.div>
                     )}
                     
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: item.h }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 60 }}
                       className="w-7 sm:w-10 bg-gradient-to-t from-primary-700 to-primary-500 rounded-t-[4px] shadow-sm relative z-10"
                     />
                   </div>
                ))}
              </div>
              
              {/* X-Axis Labels */}
              <div className="flex gap-3 sm:gap-5 w-full justify-center mt-2 px-1">
                {["Yr 1", "Yr 3", "Yr 5", "Yr 10", "Yr 15"].map((lbl, i) => (
                  <span key={i} className="w-7 sm:w-10 text-center text-[10px] font-bold text-slate-400 uppercase">
                    {lbl}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto w-full bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="text-slate-400 shrink-0 mt-0.5" size={16} />
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold">
                  Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half: Comparison Table and Sidebar */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-border-color shadow-sm bg-white">
            <div className="bg-slate-800 text-white p-3 text-center font-bold uppercase tracking-wider text-sm">
              How Mutual Funds Compare With Other Investments?
            </div>
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-border-color text-[10px] md:text-xs">
                <tr>
                  <th className="p-3">Features</th>
                  <th className="p-3 bg-primary-50 text-primary-700 border-x border-border-color">Mutual Funds</th>
                  <th className="p-3">Real Estate</th>
                  <th className="p-3 bg-orange-50 text-orange-700">Fixed Deposit</th>
                  <th className="p-3">Gold</th>
                  <th className="p-3">PPF / NSC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-800">{row.feature}</td>
                    <td className="p-3 font-semibold text-primary-700 bg-primary-50/30 border-x border-border-color">{row.mf}</td>
                    <td className="p-3 text-slate-600">{row.re}</td>
                    <td className="p-3 text-slate-600 bg-orange-50/30">{row.fd}</td>
                    <td className="p-3 text-slate-600">{row.gold}</td>
                    <td className="p-3 text-slate-600">{row.ppf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-2 text-[10px] text-slate-500 text-right italic bg-slate-50">
              *Returns are not guaranteed and are subject to market risks.
            </div>
          </div>

          <div className="lg:col-span-1 bg-slate-800 rounded-xl p-6 text-white shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-display font-bold text-yellow-400 mb-4 uppercase leading-snug">
              Why Mutual Fund is a Better Option to Invest?
            </h3>
            <ul className="space-y-3">
              {sidebarChecklist.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start text-sm">
                  <CheckSquare className="text-yellow-400 shrink-0 mt-0.5" size={16} />
                  <span className="font-medium text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

      </div>
    </section>
  );
}
