"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { PieChart, Briefcase, TrendingUp, Target, ShieldCheck, Droplet, Calendar, IndianRupee, Layers, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "MUTUAL FUNDS",
      description: "A collective investment vehicle managed by professionals.",
      details: "Mutual funds pool money from multiple investors to invest in a diversified portfolio of securities like stocks and bonds. They provide a regulated, structured way to participate in the capital markets.",
      features: ["Professionally managed", "Inherent diversification", "Highly regulated structure"],
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-50",
      glow: "shadow-blue-500/20"
    },
    {
      title: "PORTFOLIO MANAGEMENT",
      description: "Customized investment management for higher net-worth portfolios.",
      details: "Portfolio Management Services (PMS) offer professional management of investments with the flexibility of customization. Unlike mutual funds, investors directly own the underlying individual securities.",
      features: ["Direct security ownership", "Professional oversight", "Customized approach"],
      icon: Briefcase,
      color: "text-amber-500",
      bg: "bg-amber-50",
      glow: "shadow-amber-500/20"
    },
    {
      title: "ALTERNATE INVESTMENTS",
      description: "Investment options beyond traditional stocks and bonds.",
      details: "Alternative Investment Funds (AIF) pool funds for investments in real estate, private equity, and structured products. They are designed for sophisticated investors looking for distinct asset classes.",
      features: ["Beyond traditional assets", "Distinct risk profiles", "Sophisticated structure"],
      icon: Layers,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      glow: "shadow-indigo-500/20"
    },
    {
      title: "SPECIALIZED FUNDS",
      description: "Funds focused on specific sectors, themes, or strategies.",
      details: "Specialized funds concentrate their investments in a particular sector (like technology or healthcare) or a specific macroeconomic theme, offering targeted exposure to specific market segments.",
      features: ["Sector-specific exposure", "Thematic structure", "Concentrated holdings"],
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      glow: "shadow-emerald-500/20"
    },
    {
      title: "DEBT FUNDS",
      description: "Mutual funds that invest in fixed-income securities.",
      details: "Debt funds allocate capital into fixed-income instruments such as corporate bonds, government securities, and treasury bills. They are generally utilized for capital preservation and regular income generation.",
      features: ["Fixed-income allocation", "Lower volatility profile", "Regulated framework"],
      icon: IndianRupee,
      color: "text-purple-600",
      bg: "bg-purple-50",
      glow: "shadow-purple-500/20"
    },
    {
      title: "LIQUID FUNDS",
      description: "Debt funds investing in very short-term market instruments.",
      details: "Liquid funds are a category of debt mutual funds that invest in extremely short-term instruments like commercial papers and treasury bills. They are structured to offer high liquidity and very low interest rate risk.",
      features: ["Very short-term assets", "High liquidity focus", "Minimal duration risk"],
      icon: Droplet,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      glow: "shadow-cyan-500/20"
    },
    {
      title: "FORTNIGHT FUNDS",
      description: "Funds structured around a 14-day maturity or liquidity cycle.",
      details: "Fortnightly funds are specialized fixed-income products that manage their portfolio maturity around a two-week timeframe. This structure caters to specific short-term cash flow and corporate treasury requirements.",
      features: ["14-day maturity focus", "Treasury management", "Short-term cycle"],
      icon: Calendar,
      color: "text-rose-500",
      bg: "bg-rose-50",
      glow: "shadow-rose-500/20"
    },
  ];

  const activeService = services[activeTab];

  return (
    <section id="services" className="relative bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-700 font-bold tracking-widest text-sm uppercase mb-3">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 text-slate-900 tracking-tight">
            Wealth solutions built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">your future.</span>
          </h2>
          <p className="text-slate-700 text-lg md:text-xl font-medium">
            Explore our comprehensive suite of investment products designed to protect and grow your capital across all market cycles.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Tab List */}
          <div className="w-full lg:w-4/12 flex flex-col gap-1.5">
            {services.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? "bg-slate-50 shadow-sm border border-slate-200" 
                      : "bg-transparent hover:bg-slate-50/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? `${service.bg} ${service.color}` : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"}`}>
                      <service.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${isActive ? "text-slate-900 text-sm" : "text-slate-600 text-sm group-hover:text-slate-900"}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {isActive && (
                    <motion.div layoutId="activeTabIndicator" className="w-1 h-6 bg-primary-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2" />
                  )}
                  
                  <ChevronRight size={16} className={`transition-all ${isActive ? "text-primary-600 translate-x-1" : "text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content Display */}
          <div className="w-full lg:w-8/12 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-slate-50 rounded-[2rem] border border-slate-200 p-6 md:p-8 overflow-hidden flex flex-col"
              >
                {/* Large Background Icon Watermark */}
                <div className={`absolute -bottom-8 -right-8 opacity-[0.03] text-slate-900 pointer-events-none`}>
                  <activeService.icon size={200} strokeWidth={1} />
                </div>

                <div className={`w-14 h-14 rounded-xl ${activeService.bg} ${activeService.color} flex items-center justify-center mb-5 shadow-lg ${activeService.glow}`}>
                  <activeService.icon size={24} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
                  {activeService.title}
                </h3>
                
                <h4 className="text-base font-semibold text-slate-800 mb-4">
                  {activeService.description}
                </h4>
                
                <p className="text-slate-700 font-medium leading-relaxed text-sm mb-6 max-w-xl">
                  {activeService.details}
                </p>

                {/* Key Features List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 mt-2">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={16} className={activeService.color.replace("text-", "text-")} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <Button variant="outline" className="rounded-full px-6 py-4 text-sm font-semibold border-slate-300 text-slate-800 hover:border-primary-600 hover:text-primary-700 transition-all group">
                    Learn more about {activeService.title}
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
