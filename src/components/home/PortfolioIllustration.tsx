import React from "react";

export function PortfolioIllustration() {
  return (
    <section className="bg-white text-foreground py-24 border-y border-border-color relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Abstract Data Visualization */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          {/* Outer ring */}
          <div className="absolute inset-4 rounded-full border border-primary-200 border-dashed animate-[spin_60s_linear_infinite]"></div>
          {/* Middle ring */}
          <div className="absolute inset-12 rounded-full border-[20px] border-primary-50">
            <div className="absolute top-0 right-0 w-1/2 h-full border-[20px] border-primary-500 rounded-r-full -mx-[20px]"></div>
          </div>
          {/* Inner ring */}
          <div className="absolute inset-24 rounded-full border-[15px] border-accent-50">
            <div className="absolute bottom-0 left-0 w-full h-1/2 border-[15px] border-accent-500 rounded-b-full -my-[15px]"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
            <span className="text-[10px] md:text-sm text-foreground/60 uppercase tracking-widest font-medium">Expected Alpha</span>
            <span className="text-3xl md:text-5xl font-display font-bold text-primary-600">+4.5%</span>
          </div>
          
          {/* Legend floating cards */}
          <div className="absolute -right-2 md:-right-4 top-1/4 bg-white/90 backdrop-blur shadow-xl px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg border border-border-color text-[10px] md:text-sm z-20 max-w-[110px] md:max-w-none text-center">
            <div className="flex items-center justify-center gap-1.5 md:gap-2"><div className="w-2 h-2 md:w-3 md:h-3 bg-primary-500 rounded-full shrink-0"></div> <span className="leading-tight">Large Cap Equity (50%)</span></div>
          </div>
          <div className="absolute -left-2 md:-left-4 bottom-1/4 bg-white/90 backdrop-blur shadow-xl px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg border border-border-color text-[10px] md:text-sm z-20 max-w-[110px] md:max-w-none text-center">
            <div className="flex items-center justify-center gap-1.5 md:gap-2"><div className="w-2 h-2 md:w-3 md:h-3 bg-accent-500 rounded-full shrink-0"></div> <span className="leading-tight">Debt & Bonds (30%)</span></div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
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
