import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Profiling",
      desc: "We analyze your current financial standing, life goals, and risk appetite through a detailed consultation."
    },
    {
      num: "02",
      title: "Strategy Formulation",
      desc: "Our experts create a bespoke asset allocation strategy using our quantitative models."
    },
    {
      num: "03",
      title: "Portfolio Execution",
      desc: "Seamless, paperless onboarding and execution of your investment portfolio."
    },
    {
      num: "04",
      title: "Active Monitoring",
      desc: "Continuous tracking, periodic reviews, and agile rebalancing to keep you on course."
    }
  ];

  return (
    <section className="bg-surface-card border-y border-border-color py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
          <p className="text-foreground/70 text-lg">A systematic, friction-free journey from your first consultation to total financial freedom.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-border-color"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-display font-bold text-2xl shadow-lg mb-6 mx-auto md:mx-0">
                {step.num}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
