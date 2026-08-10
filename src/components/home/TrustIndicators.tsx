import React from "react";
import { ShieldCheck, Award, Users } from "lucide-react";

export function TrustIndicators() {
  const stats = [
    { label: "Assets Under Management", value: "₹1,500+ Cr", icon: ShieldCheck },
    { label: "Happy Families", value: "10,000+", icon: Users },
    { label: "Years of Excellence", value: "15+", icon: Award },
  ];

  return (
    <section className="bg-surface-card border-y border-border-color py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border-color">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-primary-100  text-primary-600 flex items-center justify-center shrink-0">
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
                <p className="text-sm text-foreground/60 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
