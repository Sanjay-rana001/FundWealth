import React from "react";
import { LineChart, Shield, Zap } from "lucide-react";

export function InvestmentPhilosophy() {
  const pillars = [
    {
      title: "Data-Driven Decisions",
      desc: "We remove emotional biases from investing. Every fund selection is backed by 10+ years of back-tested data.",
      icon: LineChart,
    },
    {
      title: "Risk-Adjusted Returns",
      desc: "High returns mean nothing if they keep you awake at night. We focus on maximizing your Sharpe ratio.",
      icon: Shield,
    },
    {
      title: "Agile Rebalancing",
      desc: "Markets change. Your portfolio should too. We actively rebalance allocations to capture emerging opportunities.",
      icon: Zap,
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-500/20 rounded-3xl transform -rotate-3 scale-105 blur-lg"></div>
          <div className="bg-surface-card border border-border-color p-8 md:p-12 rounded-3xl relative">
            <h3 className="text-2xl font-bold mb-8">The Three Pillars</h3>
            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100  text-primary-600 flex items-center justify-center shrink-0">
                    <pillar.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                    <p className="text-foreground/70">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Investment Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
            Methodical. Transparent. <br className="hidden md:block"/> Uncompromising.
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Our investment philosophy is built on the premise that wealth generation is a marathon, not a sprint. We don't chase the latest fads; we build robust, weather-proof portfolios.
          </p>
          
          <ul className="space-y-4 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100  text-green-600 flex items-center justify-center text-xs">✓</div>
              <span>Zero conflict of interest</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100  text-green-600 flex items-center justify-center text-xs">✓</div>
              <span>Direct mutual fund plans only</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100  text-green-600 flex items-center justify-center text-xs">✓</div>
              <span>Complete portfolio transparency</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
