import React from "react";
import { Home, Plane, Baby, Wallet, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function GoalBasedInvesting() {
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
          <Button variant="primary" className="hidden md:flex">
            Start a Goal Plan
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {goals.map((goal, idx) => (
            <div key={idx} className="relative bg-white border border-border-color rounded-2xl p-4 md:p-5 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-300">
              
              <div className="relative z-10">
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <goal.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-display font-bold text-slate-800 group-hover:text-primary-700 transition-colors">{goal.title}</h3>
                </div>
                
                {/* Stats */}
                <div className="flex justify-between items-end mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Target</span>
                    <span className="text-xl font-display font-bold text-primary-700">
                      {goal.amount}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Timeline</span>
                    <span className="text-sm font-bold text-slate-700">{goal.time}</span>
                  </div>
                </div>
                
                {/* View Strategy Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-primary-600 transition-colors">
                  <span>Discuss Strategy</span> 
                  <ArrowRight size={14} className="transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 md:hidden">
          <Button variant="primary" className="w-full">
            Start a Goal Plan
          </Button>
        </div>
      </div>
    </section>
  );
}
