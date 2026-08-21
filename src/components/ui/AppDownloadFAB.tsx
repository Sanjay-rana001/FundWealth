"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, Smartphone, Play, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function AppDownloadFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoShowing, setIsAutoShowing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Show after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-show tooltip schedule
  useEffect(() => {
    // Times in seconds: 15s, 45s, 2m(120s), 5m(300s), 9m(540s), 15m(900s), 25m(1500s)
    const schedule = [15, 45, 120, 300, 540, 900, 1500, 2400, 3600];
    const timers: NodeJS.Timeout[] = [];

    schedule.forEach((timeInSeconds) => {
      const timer = setTimeout(() => {
        setIsAutoShowing(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setIsAutoShowing(false);
        }, 5000);
      }, timeInSeconds * 1000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Animation variants for the radial menu items
  const appleVariants: Variants = {
    closed: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -45 },
    open: { 
      x: -22, 
      y: -55, 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
    }
  };

  const androidVariants: Variants = {
    closed: { x: 0, y: 0, scale: 0, opacity: 0, rotate: -45 },
    open: { 
      x: -85, 
      y: 8, 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20, delay: 0.05 } 
    }
  };

  return (
    <div 
      ref={menuRef}
      className={`fixed bottom-[135px] right-3 md:bottom-[120px] md:right-8 z-[60] transition-all duration-500 flex flex-col items-end ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div 
        className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Hover / Auto Tooltip "Apps" */}
        <AnimatePresence>
          {((isHovered || isAutoShowing) && !isOpen) && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: -10, scale: 1 }}
              exit={{ opacity: 0, x: 5, scale: 0.9 }}
              className="absolute right-full mr-2 bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
            >
              Get Apps
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-800 transform -translate-y-1/2 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Apple (iOS) Radial Button */}
        <motion.a
          href="https://apps.apple.com/us/app/fund-wealth/id6745012080"
          target="_blank"
          rel="noopener noreferrer"
          variants={appleVariants as any}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute h-10 px-4 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center gap-2 hover:bg-slate-900 hover:border-slate-800 transition-colors duration-300 group z-10 whitespace-nowrap"
          title="Download iOS App"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" className="text-slate-800 group-hover:text-white transition-colors fill-current">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          <span className="text-xs font-bold text-slate-800 group-hover:text-white transition-colors">iOS App</span>
        </motion.a>

        {/* Android Radial Button */}
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.fundwealthapps.app"
          target="_blank"
          rel="noopener noreferrer"
          variants={androidVariants as any}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute h-10 px-4 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-center gap-2 hover:bg-green-50 hover:border-green-200 transition-colors duration-300 group z-10 whitespace-nowrap"
          title="Download Android App"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="text-green-500 fill-green-500">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9992.4482.9992.9993 0 .5511-.4482.9997-.9992.9997zm11.4045-6.02l1.9973-3.4592c.1158-.2006.0471-.457-.1535-.5728-.2006-.1157-.4569-.0471-.5727.1535l-2.0296 3.5156c-1.4287-.6555-3.0422-1.0264-4.7578-1.0264-1.7155 0-3.329.3709-4.7577 1.0264l-2.0297-3.5156c-.1157-.2006-.372-.2692-.5727-.1535-.2005.1158-.2692.3722-.1534.5728l1.9972 3.4592c-2.9157 1.5992-4.9082 4.6063-5.2638 8.167h21.5623c-.3555-3.5607-2.3481-6.5678-5.2638-8.167z"/>
          </svg>
          <span className="text-xs font-bold text-slate-800 group-hover:text-green-700 transition-colors">Android</span>
        </motion.a>

        {/* Main Center Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 group w-full h-full flex items-center justify-center rounded-full bg-white/95 backdrop-blur-xl border border-white shadow-md md:shadow-xl hover:shadow-primary-500/30 active:scale-95 transition-all duration-300 focus:outline-none"
          aria-label="Download App"
        >
          {/* Aesthetic Animated Ring */}
          <div className="absolute inset-0 w-full h-full rounded-full border-[1.5px] border-slate-200"></div>
          <div className="absolute inset-0 w-full h-full rounded-full border-[2.5px] border-transparent border-t-primary-500 border-r-primary-500 rotate-45 group-hover:rotate-[225deg] transition-all duration-700 ease-in-out opacity-70"></div>

          {/* Inner Container */}
          <div className={`relative z-10 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300 ${
            isOpen ? "bg-slate-800" : "bg-primary-50 group-hover:bg-primary-100"
          }`}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} strokeWidth={2.5} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center relative"
                >
                  <Smartphone size={16} strokeWidth={2.5} className="text-primary-600 absolute" />
                  <Download size={8} strokeWidth={4} className="text-primary-600 absolute bottom-1 right-1 bg-white rounded-full p-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>

      </div>
    </div>
  );
}
