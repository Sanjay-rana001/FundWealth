import React from "react";
import { TrendingUp, Clock, Globe } from "lucide-react";

export function CompanyStory() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-background border-t border-border-color/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Journey So Far</h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            From a small team of financial analysts to a leading digital wealth platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-600 block tracking-widest uppercase mb-0.5">2018</span>
                <h3 className="text-lg font-display font-bold leading-tight">The Beginning</h3>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Fundwealth was founded with a simple observation: the tools used by institutional investors were lightyears ahead of what was available to the everyday person. We set out to bridge that gap.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-600 block tracking-widest uppercase mb-0.5">2021</span>
                <h3 className="text-lg font-display font-bold leading-tight">Rapid Growth</h3>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              After launching our flagship algorithm-driven portfolio, we crossed $1B in Assets Under Management (AUM), proving that our technology-first approach to wealth generation was exactly what the market needed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-600 block tracking-widest uppercase mb-0.5">TODAY</span>
                <h3 className="text-lg font-display font-bold leading-tight">Global Reach</h3>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Today, we serve over 100,000 clients worldwide, continuously iterating on our models and expanding our services to include comprehensive financial planning, tax optimization, and estate management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
