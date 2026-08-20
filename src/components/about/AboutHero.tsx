"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="section-padding text-center relative z-10 pt-4 md:pt-6">
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-4 rounded-full bg-primary-50 text-primary-700 font-medium text-sm border border-primary-100 shadow-sm">
          <Target size={16} />
          <span>Our Mission & Vision</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
          Democratizing <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Premium Wealth</span> Management
        </h1>
        
        {/* Lead Paragraph */}
        <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-6">
          We believe that sophisticated investment strategies shouldn't be reserved exclusively for the ultra-wealthy. FundWeALTH was founded on the principle that modern technology and trusted expertise can unlock institutional-grade portfolios for everyone.
        </p>

        {/* Key Highlight Stats/Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 text-left">
          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Trust First</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              We operate with complete transparency, putting your financial security and peace of mind above all else.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
              <ArrowRight size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Future Ready</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Leveraging state-of-the-art technology to optimize your portfolio and adapt to rapidly changing markets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-2">For Everyone</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Making institutional-grade wealth management accessible, regardless of your starting capital.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
