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
              
              {/* Debt & Bonds (25%) - Yellow */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="16" pathLength="100"
                strokeDashoffset="-50" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: "25 100" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              />
              {/* Gold (10%) - Blue */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="16" pathLength="100"
                strokeDashoffset="-75" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: "10 100" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              />
              {/* Alternatives/Cash (15%) - Purple */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="16" pathLength="100"
                strokeDashoffset="-85" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: "15 100" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
              {/* Mid/Small Cap Equity (15%) - Cyan */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="16" pathLength="100"
                strokeDashoffset="-35" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: "15 100" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
              {/* Large Cap Equity (35%) - Green */}
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="16" pathLength="100"
                strokeDashoffset="0" className="opacity-90 transition-all duration-300 hover:opacity-100 hover:strokeWidth-18 cursor-pointer" 
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: "35 100" }}
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
              <span className="text-[10px] md:text-xs text-foreground/60 uppercase tracking-widest font-semibold mb-1">Expected Alpha</span>
              <span className="text-3xl md:text-5xl font-display font-bold text-primary-700 drop-shadow-sm">+5.2%</span>
            </motion.div>
          </motion.div>
          
          {/* Floating Legend Cards with Bouncing */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Cap (Top Right) */}
            <motion.div 
              className="absolute -right-2 top-4 md:-right-6 md:top-8 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl border border-border-color text-[10px] md:text-sm z-20 flex items-center gap-1.5 pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-primary-500 rounded-full shrink-0"></div> 
                <span className="font-medium whitespace-nowrap">Large Cap (35%)</span>
              </motion.div>
            </motion.div>
            
            {/* Mid Cap (Top Left) */}
            <motion.div 
              className="absolute -left-2 top-10 md:-left-8 md:top-16 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl border border-border-color text-[10px] md:text-sm z-20 flex items-center gap-1.5 pointer-events-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, type: "spring" }}
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-cyan-500 rounded-full shrink-0"></div> 
                <span className="font-medium whitespace-nowrap">Mid Cap (15%)</span>
              </motion.div>
            </motion.div>

            {/* Debt (Bottom Left) */}
            <motion.div 
              className="absolute -left-4 bottom-24 md:-left-6 md:bottom-28 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl border border-border-color text-[10px] md:text-sm z-20 flex items-center gap-1.5 pointer-events-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: "spring" }}
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-accent-500 rounded-full shrink-0"></div> 
                <span className="font-medium whitespace-nowrap">Debt (25%)</span>
              </motion.div>
            </motion.div>

            {/* Gold (Bottom Right) */}
            <motion.div 
              className="absolute -right-4 bottom-16 md:-right-2 md:bottom-20 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl border border-border-color text-[10px] md:text-sm z-20 flex items-center gap-1.5 pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full shrink-0"></div> 
                <span className="font-medium whitespace-nowrap">Gold (10%)</span>
              </motion.div>
            </motion.div>

            {/* Alternatives (Bottom Center) */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl border border-border-color text-[10px] md:text-sm z-20 flex items-center gap-1.5 pointer-events-auto"
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              whileInView={{ opacity: 1, y: 0, x: "-50%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="flex items-center gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-purple-500 rounded-full shrink-0"></div> 
                <span className="font-medium whitespace-nowrap">Alternatives (15%)</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-4 md:mb-6">
            Institutional-grade <br />asset allocation.
          </h2>
          <p className="text-base md:text-lg text-foreground/70 mb-6 md:mb-8">
            We don't put all your eggs in one basket. Our proprietary 5-factor dynamic asset allocation model ensures your wealth grows steadily while protecting downside risk.
          </p>
          
          <div className="space-y-4 md:space-y-5">
            <div className="border-l-2 border-primary-500 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-bold mb-1">Large Cap Equity (35%)</h4>
              <p className="text-foreground/60 text-xs md:text-sm">Stable, blue-chip companies providing consistent long-term compound growth.</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-bold mb-1">Mid/Small Cap Equity (15%)</h4>
              <p className="text-foreground/60 text-xs md:text-sm">High-growth potential businesses to generate exceptional portfolio alpha.</p>
            </div>
            <div className="border-l-2 border-accent-500 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-bold mb-1">Debt for Stability (25%)</h4>
              <p className="text-foreground/60 text-xs md:text-sm">High-grade corporate bonds and government securities to cushion volatility.</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-bold mb-1">Alternatives (15%)</h4>
              <p className="text-foreground/60 text-xs md:text-sm">REITs and smart-beta strategies designed to perform independently of markets.</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-bold mb-1">Gold for Hedging (10%)</h4>
              <p className="text-foreground/60 text-xs md:text-sm">Strategic allocation to Sovereign Gold Bonds to protect purchasing power.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
