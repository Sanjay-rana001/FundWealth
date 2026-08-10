import React from "react";
import { Home, Plane, Baby, Wallet } from "lucide-react";
import { Button } from "../ui/Button";

export function GoalBasedInvesting() {
  const goals = [
    { title: "Dream Home", icon: Home, amount: "₹2 Cr", time: "10 Years" },
    { title: "Retirement", icon: Wallet, amount: "₹10 Cr", time: "25 Years" },
    { title: "Child's Education", icon: Baby, amount: "₹50 L", time: "15 Years" },
    { title: "World Tour", icon: Plane, amount: "₹15 L", time: "5 Years" },
  ];

  return (
    <section className="bg-primary-50 text-foreground py-24 relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary-500) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Goal-Based Investing</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-primary-900">
              Don't just invest.<br />Invest for a reason.
            </h2>
          </div>
          <Button variant="primary">
            Start a Goal Plan
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, idx) => (
            <div key={idx} className="relative bg-white border border-border-color rounded-2xl p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-500/30">
              
              {/* Subtle hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon Container with animation */}
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 text-primary-600 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary-500/40">
                  <goal.icon size={26} className="transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-5 group-hover:text-primary-700 transition-colors">{goal.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/60 font-medium">Target Amount</span>
                    <span className="font-bold text-foreground bg-slate-50 border border-border-color px-2.5 py-1 rounded-md">{goal.amount}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/60 font-medium">Timeline</span>
                    <span className="font-bold text-foreground bg-slate-50 border border-border-color px-2.5 py-1 rounded-md">{goal.time}</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-border-color text-sm font-bold text-primary-600 flex items-center justify-between group-hover:text-primary-700 transition-colors">
                  <span>View Strategy</span> 
                  <span className="transform translate-x-0 opacity-70 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
