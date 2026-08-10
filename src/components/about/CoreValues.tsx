import React from "react";
import { Lightbulb, Lock, HeartHandshake, Zap } from "lucide-react";

const values = [
  {
    icon: <Lock className="text-primary-600" size={32} />,
    title: "Security First",
    description: "Bank-level encryption and rigorous compliance protocols are the foundation of everything we build."
  },
  {
    icon: <Lightbulb className="text-primary-600" size={32} />,
    title: "Radical Transparency",
    description: "No hidden fees. No convoluted jargon. We believe you deserve to understand exactly how your money is managed."
  },
  {
    icon: <HeartHandshake className="text-primary-600" size={32} />,
    title: "Fiduciary Duty",
    description: "Our incentives are aligned with yours. We strictly operate as fiduciaries, prioritizing your financial well-being."
  },
  {
    icon: <Zap className="text-primary-600" size={32} />,
    title: "Continuous Innovation",
    description: "The financial markets never sleep, and neither do our algorithms. We constantly refine our models to stay ahead."
  }
];

export function CoreValues() {
  return (
    <section className="section-padding bg-slate-50 border-t border-border-color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Core Values</h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            These are the non-negotiable principles that guide our platform, our team, and our commitment to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white border border-border-color shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
