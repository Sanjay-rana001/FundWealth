import React from "react";
import { ShieldCheck, TrendingUp, Lock } from "lucide-react";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex items-center">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-5 border border-primary-100">
            <ShieldCheck size={16} /> SEBI Registered Advisory
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.15] mb-5 tracking-tight">
            Wealth creation, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">engineered.</span>
          </h1>
          
          <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
            Institutional-grade mutual fund portfolios and bespoke wealth strategies tailored for individuals who demand excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button variant="primary" className="text-base py-4 px-8 shadow-lg shadow-primary-500/20 hover:-translate-y-1 transition-transform">
              Start Your Journey
            </Button>
            <Button variant="outline" className="text-base py-4 px-8">
              Explore Portfolios
            </Button>
          </div>
          
          {/* Trust avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/100?img=11", 
                "https://i.pravatar.cc/100?img=33", 
                "https://i.pravatar.cc/100?img=47", 
                "https://i.pravatar.cc/100?img=12"
              ].map((imgUrl, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                  <img src={imgUrl} alt="Investor" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="font-bold">10,000+</span> investors trust us.
            </div>
          </div>
        </div>

        {/* Abstract Isometric Illustration */}
        <div className="relative h-[350px] lg:h-[450px] w-full perspective-1000 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-50 to-white rounded-3xl transform rotate-3 shadow-xl border border-border-color"></div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-8 left-8 right-8 bottom-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-white shadow-lg p-6 flex flex-col gap-5 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            
            <div className="flex justify-between items-center border-b border-border-color pb-4">
              <div>
                <p className="text-xs text-foreground/50 font-semibold uppercase tracking-wider mb-1">Total Corpus</p>
                <h3 className="text-2xl font-display font-bold">₹ 14,50,00,000</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
            </div>

            {/* Fake Chart */}
            <div className="flex-1 rounded-xl bg-slate-50 border border-border-color relative overflow-hidden flex items-end">
              <div className="w-full h-1/2 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
              {/* CSS simulated line chart */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 C20,80 40,90 60,40 C80,-10 100,20 100,20 L100,100 Z" fill="url(#grad)" opacity="0.3"/>
                <path d="M0,100 C20,80 40,90 60,40 C80,-10 100,20 100,20" fill="none" stroke="var(--color-primary-500)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-xl border border-border-color shadow-sm">
                <p className="text-xs text-foreground/50 mb-1">XIRR Return</p>
                <p className="text-base font-bold text-green-600">+16.4%</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-border-color shadow-sm">
                <p className="text-xs text-foreground/50 mb-1">Risk Profile</p>
                <p className="text-base font-bold flex items-center gap-1"><Lock size={14} className="text-accent-500"/> Balanced</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
