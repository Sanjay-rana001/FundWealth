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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex items-center">
      
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
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
            <Button variant="primary" className="w-full sm:w-auto text-base py-4 px-8 shadow-lg shadow-primary-500/20 hover:-translate-y-1 transition-transform">
              Start Your Journey
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-base py-4 px-8">
              Explore Portfolios
            </Button>
          </div>
          
          {/* Trust avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "/images/investor_1.png", 
                "/images/investor_2.png", 
                "/images/investor_3.png", 
                "/images/investor_4.png"
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

            {/* Premium Bar Chart Design */}
            <div className="flex-1 rounded-xl bg-white relative overflow-hidden flex items-end group">
              
              {/* Subtle background gridlines */}
              <div className="absolute inset-0 flex flex-col justify-between pt-4 pb-2 px-0 pointer-events-none opacity-[0.10]">
                 <div className="border-t border-dashed border-primary-900 w-full"></div>
                 <div className="border-t border-dashed border-primary-900 w-full"></div>
                 <div className="border-t border-dashed border-primary-900 w-full"></div>
                 <div className="border-t border-dashed border-primary-900 w-full"></div>
              </div>

              {/* Crisp SVG Bar Chart */}
              <svg className="absolute inset-x-2 bottom-0 w-[calc(100%-16px)] h-[85%] transition-transform duration-700 group-hover:scale-[1.02]" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* 12 Bars for 12 months growth */}
                {[15, 22, 18, 30, 25, 40, 35, 52, 48, 65, 60, 85].map((val, i) => (
                  <rect 
                    key={i} 
                    x={i * 8.5} 
                    y={isLoaded ? 100 - val : 100} 
                    width="5.5" 
                    height={isLoaded ? val : 0} 
                    rx="1.5"
                    fill={hoveredBar === i ? "var(--color-accent-500)" : "var(--color-primary-500)"} 
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ 
                      transition: `height 700ms ease-out ${i * 60}ms, y 700ms ease-out ${i * 60}ms, fill 150ms ease-out` 
                    }}
                    className="cursor-pointer"
                  />
                ))}
              </svg>

              {/* Interactive Hover Tooltip */}
              <div className="absolute top-[10%] right-[5%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 pointer-events-none z-30">
                 <div className="bg-white/95 backdrop-blur border border-primary-100 text-foreground text-[10px] font-bold px-3 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center relative">
                    <span className="text-primary-600 text-sm tracking-tight">+ ₹ 1,24,500</span>
                    <span className="text-foreground/40 text-[9px] font-semibold uppercase mt-0.5">This Month</span>
                    {/* Tooltip triangle */}
                    <div className="absolute -bottom-[5px] right-3 w-2.5 h-2.5 bg-white border-b border-r border-primary-100 rotate-45"></div>
                 </div>
              </div>
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
