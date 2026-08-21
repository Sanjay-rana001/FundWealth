"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Visibility
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Stop animation when reached top
      if (currentScroll <= 10) {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        @keyframes shoot-up {
          0% { transform: translateY(20px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        @keyframes ready-launch {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-shoot {
          animation: shoot-up 0.6s linear infinite;
        }
        .animate-shoot-delayed {
          animation: shoot-up 0.6s linear 0.3s infinite;
        }
        /* Fix for hover animation not working via tailwind classes */
        .group:hover .custom-hover-bounce {
          animation: ready-launch 0.5s ease-in-out infinite;
        }
      `}</style>

      <div 
        className={`fixed bottom-[85px] right-3 md:bottom-8 md:right-8 z-50 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="relative group w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-md md:shadow-xl hover:shadow-primary-500/30 active:scale-95 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 52 52">
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-200"
            />
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-primary-500 transition-all duration-150 ease-out"
            />
          </svg>

          {/* Mouse Outline Container with Arrows Inside */}
          <div className={`relative z-10 w-3 h-5 md:w-5 md:h-8 rounded-full border-[1.5px] md:border-2 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
            isScrolling ? "border-primary-600" : "border-slate-800 group-hover:border-primary-600"
          }`}>
            
            {/* Static Arrow (Bounces on hover like it's ready to launch, hides when scrolling) */}
            <ArrowUp 
              size={12} 
              strokeWidth={3} 
              className={`absolute w-2 h-2 md:w-3 md:h-3 transition-all duration-200 custom-hover-bounce ${
                isScrolling 
                  ? "opacity-0" 
                  : "text-slate-800 group-hover:text-primary-600"
              }`} 
            />

            {/* Animating Arrow 1 (Visible ONLY when scrolling up) */}
            <ArrowUp 
              size={12} 
              strokeWidth={3} 
              className={`absolute w-2 h-2 md:w-3 md:h-3 text-primary-600 opacity-0 ${
                isScrolling ? "animate-shoot" : ""
              }`} 
            />

            {/* Animating Arrow 2 (Delayed, Visible ONLY when scrolling up) */}
            <ArrowUp 
              size={12} 
              strokeWidth={3} 
              className={`absolute w-2 h-2 md:w-3 md:h-3 text-primary-600 opacity-0 ${
                isScrolling ? "animate-shoot-delayed" : ""
              }`} 
            />
            
          </div>
        </button>
      </div>
    </>
  );
}
