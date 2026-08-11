import React from "react";

export function PortfolioIllustration() {
  return (
    <section className="bg-white text-foreground py-24 border-y border-border-color relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Abstract Data Visualization */}
        <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
          
          {/* Clean SVG Donut Chart */}
          <div className="relative w-full h-full max-w-[280px] md:max-w-[340px]">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
              {/* Debt & Bonds (30%) - Yellow/Accent */}
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="75.36" className="opacity-90" />
              {/* Gold (20%) - Blue */}
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" strokeDashoffset="150.72" strokeDasharray="50.24 200.96" className="opacity-90" transform="rotate(108 50 50)" />
              {/* Large Cap Equity (50%) - Green/Primary */}
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="125.6" className="opacity-90" transform="rotate(180 50 50)" />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs md:text-sm text-foreground/60 uppercase tracking-widest font-semibold mb-1">Expected Alpha</span>
              <span className="text-3xl md:text-5xl font-display font-bold text-primary-700 drop-shadow-sm">+4.5%</span>
            </div>
            
            {/* Floating Legend Cards */}
            <div className="absolute -right-4 top-4 md:top-10 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 transition-transform hover:-translate-y-1">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary-500 rounded-full shrink-0"></div> 
              <span className="font-medium">Equity (50%)</span>
            </div>
            
            <div className="absolute -left-6 bottom-16 md:bottom-24 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 transition-transform hover:-translate-y-1">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent-500 rounded-full shrink-0"></div> 
              <span className="font-medium">Debt (30%)</span>
            </div>

            <div className="absolute -right-2 -bottom-2 md:-bottom-4 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 transition-transform hover:-translate-y-1">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full shrink-0"></div> 
              <span className="font-medium">Gold (20%)</span>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-4 md:mb-6">
            Institutional-grade <br />asset allocation.
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            We don't put all your eggs in one basket. Our proprietary dynamic asset allocation model ensures your wealth grows steadily while protecting downside risk during market crashes.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary-500 pl-6">
              <h4 className="text-xl font-bold mb-2">Equity for Growth</h4>
              <p className="text-foreground/60 text-sm">Carefully selected active and passive funds to beat benchmark indices over the long run.</p>
            </div>
            <div className="border-l-2 border-accent-500 pl-6">
              <h4 className="text-xl font-bold mb-2">Debt for Stability</h4>
              <p className="text-foreground/60 text-sm">High-grade corporate bonds and government securities to cushion volatility.</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="text-xl font-bold mb-2">Gold for Hedging</h4>
              <p className="text-foreground/60 text-sm">Strategic allocation to Sovereign Gold Bonds to protect purchasing power against inflation.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
