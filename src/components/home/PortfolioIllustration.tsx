import React from "react";
import { motion } from "framer-motion";

export function PortfolioIllustration() {
  return (
    <section className="bg-white text-foreground py-24 border-y border-border-color relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Abstract Data Visualization */}
        <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
          
          {/* Animated Pulsing Aura Background (Optimized for performance) */}
          <motion.div 
            className="absolute inset-4 md:inset-8 rounded-full bg-primary-50/40 will-change-transform"
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-8 md:inset-12 rounded-full bg-accent-50/30 will-change-transform"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Clean SVG Donut Chart */}
          <motion.div 
            className="relative w-full h-full max-w-[280px] md:max-w-[340px] will-change-transform"
            initial={{ opacity: 0, scale: 0.8, rotate: -120 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -90 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            {/* Removed heavy drop-shadow from SVG to prevent lag on low-end mobile */}
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Debt & Bonds (30%) - Yellow/Accent */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="16" 
                strokeDasharray="251.2" strokeDashoffset="75.36" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDashoffset: 251.2 }}
                whileInView={{ strokeDashoffset: 75.36 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              />
              {/* Gold (20%) - Blue */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" 
                strokeDashoffset="150.72" strokeDasharray="50.24 200.96" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" transform="rotate(108 50 50)" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
              {/* Large Cap Equity (50%) - Green/Primary */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" 
                strokeDasharray="251.2" strokeDashoffset="125.6" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" transform="rotate(180 50 50)" 
                initial={{ strokeDashoffset: 251.2 }}
                whileInView={{ strokeDashoffset: 125.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </svg>
            
            {/* Inner Content */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring", bounce: 0.5 }}
            >
              <span className="text-xs md:text-sm text-foreground/60 uppercase tracking-widest font-semibold mb-1">Expected Alpha</span>
              <span className="text-3xl md:text-5xl font-display font-bold text-primary-700 drop-shadow-sm">+4.5%</span>
            </motion.div>
          </motion.div>
          
          {/* Floating Legend Cards with Bouncing */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute -right-4 top-4 md:top-10 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                className="flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary-500 rounded-full shrink-0"></div> 
                <span className="font-medium">Equity (50%)</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-6 bottom-16 md:bottom-24 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 pointer-events-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: "spring" }}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                className="flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent-500 rounded-full shrink-0"></div> 
                <span className="font-medium">Debt (30%)</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute -right-2 -bottom-2 md:-bottom-4 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-border-color text-xs md:text-sm z-20 flex items-center gap-2 pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
                className="flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full shrink-0"></div> 
                <span className="font-medium">Gold (20%)</span>
              </motion.div>
            </motion.div>
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
