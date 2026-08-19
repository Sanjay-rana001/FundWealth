"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, TrendingUp, Lock, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    // Add a tiny delay so the animation is clearly visible after page paint
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center gap-12 lg:gap-16">
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-5 border border-primary-100">
            <ShieldCheck size={16} /> AMFI Registered Mutual Fund Distributor
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.15] mb-5 tracking-tight">
            Build the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Your Family Deserves.</span>
          </h1>
          
          <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
            Navigate the mutual fund landscape with complete confidence. We partner with you to build tailored, transparent portfolios that turn your life goals into reality.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full">
            <Button variant="primary" className="w-full sm:w-auto text-base py-4 px-8 shadow-lg shadow-primary-500/20 hover:-translate-y-1 transition-transform">
              Start Your Journey
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-base py-4 px-8">
              Explore Portfolios
            </Button>
          </div>
        </div>

        {/* Right Side Form & Floating Doodles */}
        <div className="w-full h-full hidden md:flex items-center justify-end lg:pr-8">
          
          <div className="relative w-full max-w-[420px]">
            
            {/* Light Floating Finance Doodles - Positioned completely OUTSIDE the form */}
            
            {/* Growth Arrow Icon - Placed below the plant motif */}
            <div className="absolute top-40 right-full mr-32 w-24 h-24 flex items-center justify-center pointer-events-none transform -rotate-3 z-0">
              <TrendingUp className="w-14 h-14 text-emerald-300 opacity-60" strokeWidth={2.5} />
            </div>

            {/* Plant / Growth Motif - Fully to the left of the form */}
            <svg className="absolute top-6 right-full mr-12 w-20 h-20 text-primary-400 opacity-30 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 90 L 50 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M 50 65 C 20 65, 20 25, 50 25 C 50 25, 50 65, 50 65 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M 50 45 C 80 45, 80 5, 50 5 C 50 5, 50 45, 50 45 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
            </svg>

            {/* Bar Chart - Fully to the left of the form */}
            <svg className="absolute bottom-12 right-full mr-8 w-20 h-20 text-accent-200 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="60" width="12" height="20" rx="4" fill="currentColor" />
              <rect x="40" y="40" width="12" height="40" rx="4" fill="currentColor" />
              <rect x="60" y="20" width="12" height="60" rx="4" fill="currentColor" />
              <path d="M 10 90 L 90 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
            
            {/* Pie Chart - Fully ABOVE the form */}
            <svg className="absolute bottom-full mb-8 right-8 w-16 h-16 text-emerald-200 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" />
              <path d="M 50 10 L 50 50 L 90 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Lead Generation Form */}
            <div className="bg-white rounded-3xl border border-border-color shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex flex-col gap-6 relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Start Your Journey</h3>
              <p className="text-sm text-foreground/70">Leave your details and our experts will get in touch with you shortly.</p>
            </div>
            
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-foreground/70 uppercase mb-1.5 block">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border-color bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70 uppercase mb-1.5 block">Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-border-color bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
              </div>
              <Button variant="primary" className="w-full py-4 mt-2 text-base shadow-lg shadow-primary-500/20" type="button">
                Request a Callback
              </Button>
            </form>

            <div className="mt-2 pt-5 border-t border-border-color flex justify-between items-center">
              <div>
                <p className="text-xs text-foreground/50 font-semibold uppercase tracking-wider mb-1">Total AUM</p>
                <h4 className="text-lg font-display font-bold text-foreground">₹ 7 Crore+</h4>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground/50 font-semibold uppercase tracking-wider mb-1">Happy Clients</p>
                <h4 className="text-lg font-display font-bold text-foreground">1000+</h4>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
