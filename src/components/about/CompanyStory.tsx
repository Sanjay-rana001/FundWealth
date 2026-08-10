import React from "react";
import { TrendingUp, Clock, Globe } from "lucide-react";

export function CompanyStory() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-background border-t border-border-color/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Journey So Far</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            From a small team of financial analysts to a leading digital wealth platform.
          </p>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[31px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-200 before:via-primary-300 before:to-transparent">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-primary-100 shadow-md text-primary-600 shrink-0 md:order-1 md:group-odd:-ml-8 md:group-even:-mr-8 z-10 transition-transform group-hover:scale-110">
              <Clock size={28} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-border-color shadow-sm ml-6 md:ml-0 transition-all hover:shadow-lg hover:border-primary-200">
              <span className="text-sm font-bold text-primary-600 mb-1 block tracking-wider">2018</span>
              <h3 className="text-2xl font-display font-bold mb-3">The Beginning</h3>
              <p className="text-foreground/70 leading-relaxed text-base">
                FundWeALTH was founded with a simple observation: the tools used by institutional investors were lightyears ahead of what was available to the everyday person. We set out to bridge that gap.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-primary-100 shadow-md text-primary-600 shrink-0 md:order-1 md:group-odd:-ml-8 md:group-even:-mr-8 z-10 transition-transform group-hover:scale-110">
              <TrendingUp size={28} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-border-color shadow-sm ml-6 md:ml-0 transition-all hover:shadow-lg hover:border-primary-200">
              <span className="text-sm font-bold text-primary-600 mb-1 block tracking-wider">2021</span>
              <h3 className="text-2xl font-display font-bold mb-3">Rapid Growth</h3>
              <p className="text-foreground/70 leading-relaxed text-base">
                After launching our flagship algorithm-driven portfolio, we crossed $1B in Assets Under Management (AUM), proving that our technology-first approach to wealth generation was exactly what the market needed.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-primary-100 shadow-md text-primary-600 shrink-0 md:order-1 md:group-odd:-ml-8 md:group-even:-mr-8 z-10 transition-transform group-hover:scale-110">
              <Globe size={28} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-border-color shadow-sm ml-6 md:ml-0 transition-all hover:shadow-lg hover:border-primary-200">
              <span className="text-sm font-bold text-primary-600 mb-1 block tracking-wider">TODAY</span>
              <h3 className="text-2xl font-display font-bold mb-3">Global Reach</h3>
              <p className="text-foreground/70 leading-relaxed text-base">
                Today, we serve over 100,000 clients worldwide, continuously iterating on our models and expanding our services to include comprehensive financial planning, tax optimization, and estate management.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
