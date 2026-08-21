import React from "react";
import { Target, Users, Sliders, Activity, CalendarDays, Shield } from "lucide-react";

export function FeatureBanner() {
  const features = [
    { label: "Goal Based Investing", icon: Target },
    { label: "Wealth Creation for All", icon: Users },
    { label: "Flexible Options", icon: Sliders },
    { label: "Suit Your Risk Profile", icon: Activity },
    { label: "Systematic Investment (SIP)", icon: CalendarDays },
    { label: "Financial Security for Future", icon: Shield },
  ];

  return (
    <section className="bg-primary-900 border-t-4 border-yellow-400">
      <div className="bg-primary-800 text-center py-2 border-b border-primary-700/50">
         <h3 className="text-white font-bold tracking-widest text-sm md:text-base uppercase">
            Mutual Funds - The Smart Way to Wealth Creation
         </h3>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <feature.icon size={24} />
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors max-w-[120px]">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
