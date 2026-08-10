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
            <div key={idx} className="bg-white border border-border-color rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <goal.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Target</span>
                  <span className="font-semibold">{goal.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Timeline</span>
                  <span className="font-semibold">{goal.time}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border-color text-sm font-medium text-primary-600 flex items-center justify-between group-hover:text-primary-700">
                View Strategy <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
