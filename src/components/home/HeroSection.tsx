"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, TrendingUp, Lock, ArrowRight, IndianRupee, LineChart, PieChart, Coins, PiggyBank, Target, Shield, Wallet, Clock, BarChart3, Receipt, Landmark, Calculator, Percent, Banknote, Gem, Briefcase, CircleDollarSign, CreditCard, BadgePercent, FileText, Lightbulb } from "lucide-react";
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
    <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-10 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center gap-6 lg:gap-6">
      
      {/* --- Full Background Financial Doodles --- */}
      {/* Very thin, subtle outline doodles mimicking the reference image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 text-slate-200 [&>svg]:stroke-[1.5px]">
        {/* Left Side */}
        <IndianRupee className="absolute top-[10%] left-[5%] w-12 h-12" />
        <LineChart className="absolute top-[20%] left-[40%] w-14 h-14" />
        <PiggyBank className="absolute top-[40%] left-[10%] w-16 h-16" />
        <PieChart className="absolute bottom-[20%] left-[5%] w-12 h-12" />
        <Coins className="absolute top-[80%] left-[25%] w-10 h-10" />
        <Target className="absolute bottom-[10%] left-[15%] w-14 h-14" />
        <Landmark className="absolute bottom-[5%] left-[45%] w-16 h-16" />
        <Briefcase className="absolute top-[60%] left-[15%] w-12 h-12" />
        <Banknote className="absolute top-[50%] left-[30%] w-10 h-10" />
        
        {/* Middle Area (Filling the blank space between text and form) */}
        <Lightbulb className="absolute top-[15%] left-[55%] w-12 h-12" />
        <FileText className="absolute top-[35%] left-[58%] w-14 h-14" />
        <CreditCard className="absolute top-[55%] left-[52%] w-12 h-12" />
        <BadgePercent className="absolute bottom-[30%] left-[60%] w-14 h-14" />
        <TrendingUp className="absolute bottom-[10%] left-[55%] w-10 h-10" />

        {/* Right Side (Behind Form & Edges) */}
        <PiggyBank className="absolute top-[15%] left-[75%] w-14 h-14" />
        <Wallet className="absolute top-[30%] right-[5%] w-10 h-10" />
        <BarChart3 className="absolute top-[50%] right-[35%] w-14 h-14" />
        <TrendingUp className="absolute top-[45%] right-[10%] w-12 h-12" />
        <Receipt className="absolute bottom-[20%] right-[40%] w-10 h-10" />
        <Clock className="absolute bottom-[30%] right-[15%] w-14 h-14" />
        <Shield className="absolute bottom-[10%] right-[5%] w-12 h-12" />
        <Calculator className="absolute top-[70%] right-[25%] w-12 h-12" />
        <Percent className="absolute top-[20%] right-[30%] w-10 h-10" />
        <CircleDollarSign className="absolute bottom-[45%] right-[2%] w-12 h-12" />
        <Gem className="absolute bottom-[5%] right-[25%] w-10 h-10" />
      </div>
      {/* -------------------------------------- */}

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-5 items-center w-full z-10 relative">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-5 border border-primary-100 backdrop-blur-sm">
            <ShieldCheck size={16} /> AMFI Registered Mutual Fund Distributor
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.15] mb-5 tracking-tight">
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
            <Button variant="outline" className="w-full sm:w-auto text-base py-4 px-8 bg-white/50 backdrop-blur-sm">
              Explore Portfolios
            </Button>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full h-full hidden md:flex items-center justify-end lg:pr-8">
          
          <div className="relative w-full max-w-[420px]">
            
            {/* Lead Generation Form */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-border-color shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex flex-col gap-6 relative z-10">
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
