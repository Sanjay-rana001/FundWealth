"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const portfolioData = [
  {
    id: "large-cap",
    title: "Large Cap Equity (35%)",
    desc: "Stable, blue-chip companies providing consistent long-term compound growth.",
    color: "#10b981", // green
    strokeClassName: "stroke-primary-500",
    bgClassName: "bg-primary-500",
    borderClassName: "border-primary-500",
    length: 35,
    offset: 0,
    tx: 1.82, ty: 3.56
  },
  {
    id: "mid-cap",
    title: "Mid/Small Cap Equity (15%)",
    desc: "High-growth potential businesses to generate exceptional portfolio alpha.",
    color: "#06b6d4", // cyan
    strokeClassName: "stroke-cyan-500",
    bgClassName: "bg-cyan-500",
    borderClassName: "border-cyan-500",
    length: 15,
    offset: -35,
    tx: -3.56, ty: 1.82
  },
  {
    id: "debt",
    title: "Debt for Stability (25%)",
    desc: "High-grade corporate bonds and government securities to cushion volatility.",
    color: "#f59e0b", // yellow
    strokeClassName: "stroke-accent-500",
    bgClassName: "bg-accent-500",
    borderClassName: "border-accent-500",
    length: 25,
    offset: -50,
    tx: -2.83, ty: -2.83
  },
  {
    id: "gold",
    title: "Gold for Hedging (10%)",
    desc: "Strategic allocation to Sovereign Gold Bonds to protect purchasing power.",
    color: "#3b82f6", // blue
    strokeClassName: "stroke-blue-500",
    bgClassName: "bg-blue-500",
    borderClassName: "border-blue-500",
    length: 10,
    offset: -75,
    tx: 1.24, ty: -3.80
  },
  {
    id: "alts",
    title: "Alternatives (15%)",
    desc: "REITs and smart-beta strategies designed to perform independently of markets.",
    color: "#8b5cf6", // purple
    strokeClassName: "stroke-purple-500",
    bgClassName: "bg-purple-500",
    borderClassName: "border-purple-500",
    length: 15,
    offset: -85,
    tx: 3.56, ty: -1.82
  },
];

export function PortfolioIllustration() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-foreground py-4 md:py-8 border-y border-border-color relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
        
        {/* Interactive Data Visualization */}
        <div className="relative aspect-square max-w-[260px] md:max-w-[380px] mx-auto w-full flex items-center justify-center group">
          
          {/* Subtle static background circles instead of heavy animated ones */}
          <div className="absolute inset-4 md:inset-6 rounded-full border border-gray-100/50 bg-gray-50/50"></div>
          <div className="absolute inset-8 md:inset-12 rounded-full border border-gray-100/50 bg-gray-50/50"></div>

          {/* Clean SVG Donut Chart */}
          <motion.div 
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.9, rotate: -120 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -90 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {portfolioData.map((item, index) => {
                const isActive = activeIndex === index;
                const isFaded = activeIndex !== null && activeIndex !== index;
                
                return (
                  <motion.circle 
                    key={item.id}
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke={item.color} 
                    pathLength="100"
                    strokeDashoffset={item.offset}
                    className={`transition-all duration-500 ease-out cursor-pointer outline-none`}
                    strokeWidth={12}
                    style={{
                      opacity: isFaded ? 0.2 : 1,
                      filter: isActive ? `drop-shadow(0px 0px 6px ${item.color}60)` : "none",
                      transform: isActive ? `translate(${item.tx}px, ${item.ty}px)` : "translate(0px, 0px)",
                    }}
                    initial={{ strokeDasharray: "0 100" }}
                    whileInView={{ strokeDasharray: `${item.length} 100` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onTouchStart={() => setActiveIndex(index)}
                  />
                );
              })}
            </svg>
            
            {/* Inner Content */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center transform rotate-90 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
            >
              <span className="text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-0.5">Expected Alpha</span>
              <span className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">+5.2%</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Text and Interactive Legend */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-3xl font-display font-bold leading-tight mb-2 md:mb-3">
              Institutional-grade asset allocation.
            </h2>
            <p className="text-xs md:text-sm text-foreground/70 mb-4 md:mb-6 max-w-lg">
              Hover over the portfolio allocations below to see how our proprietary 5-factor dynamic model ensures your wealth grows steadily while protecting downside risk.
            </p>
          </motion.div>
          
          <div className="space-y-0.5">
            {portfolioData.map((item, index) => {
              const isActive = activeIndex === index;
              const isFaded = activeIndex !== null && activeIndex !== index;
              
              return (
                <motion.div 
                  key={item.id}
                  className={`relative p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-300 overflow-hidden ${isActive ? 'bg-gray-50 shadow-sm' : 'hover:bg-gray-50/50'}`}
                  style={{ opacity: isFaded ? 0.5 : 1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onTouchStart={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  {/* Left accent border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg transition-all duration-300 ${item.bgClassName} ${isActive ? 'opacity-100' : 'opacity-40'}`}></div>
                  
                  <div className="pl-3 md:pl-4">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.bgClassName} ${isActive ? 'scale-125' : ''} transition-transform duration-300`}></div>
                      <h4 className="text-xs md:text-sm font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-foreground/60 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
