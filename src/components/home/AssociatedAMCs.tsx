"use client";

import React from "react";

const amcLogos = [
  "Edelweiss mutual fund.svg",
  "HSBC mutual fund.png",
  "ICICI prudential mutual fund.jpg",
  "LIC mutual fund.png",
  "SBI MUTUAL FUND.svg",
  "axis mutual fund.svg",
  "bajaj finserv mutual fund.svg",
  "bandhan mutual fund.svg",
  "baroda bnp paribas mutual fund.png",
  "canara robeco mutual fund.svg",
  "franklin templeton mutual fund.png",
  "hdfc mutual fund.svg",
  "kotak-mutual-fund.png",
  "mirae asset mutual fund.png",
  "nippon india mutual fund.png",
  "ppfas mutual fund.png",
  "quant-logo.png",
  "tata mutual fund.jpg",
  "whiteoak capital mutual fund.svg"
];

const row1 = amcLogos.slice(0, 7);
const row2 = amcLogos.slice(7, 14);
const row3 = [...amcLogos.slice(14, 20), amcLogos[0]];

// Duplicated enough times to cover ultra-wide screens seamlessly
const extendedRow1 = Array(8).fill(row1).flat();
const extendedRow2 = Array(8).fill(row2).flat();
const extendedRow3 = Array(8).fill(row3).flat();

export function AssociatedAMCs() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
          Trusted by Top Asset Management Companies
        </h3>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
          We partner with India's leading AMCs to bring you a diverse and robust range of investment opportunities.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-12.5%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-12.5%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left-fast {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right-medium {
          animation: marquee-right 45s linear infinite;
        }
        .animate-marquee-left-slow {
          animation: marquee-left 55s linear infinite;
        }
        .animate-marquee-left-fast:hover,
        .animate-marquee-right-medium:hover,
        .animate-marquee-left-slow:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="marquee-container flex flex-col gap-4 md:gap-8 w-full relative">
        {/* Fade gradients to make it look clean at edges */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Moving Left - Fast) */}
        <div className="flex w-max animate-marquee-left-fast gap-4 md:gap-8 px-4">
          {extendedRow1.map((logo, idx) => (
            <div key={`r1-${idx}`} className={`w-[120px] md:w-[220px] h-[60px] md:h-[90px] shrink-0 border rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1 overflow-hidden ${logo.toLowerCase().includes('kotak') ? 'bg-black border-black p-0' : 'bg-white border-slate-100 p-3 md:p-5'}`}>
              <img 
                src={`/images/amc/${logo}`} 
                alt={logo.split('.')[0].replace(/%20/g, ' ')} 
                className={`max-w-full max-h-full transition-all duration-300 ${logo.toLowerCase().includes('kotak') ? 'object-contain scale-[1.3]' : 'object-contain mix-blend-multiply'} ${logo.toLowerCase().includes('tata') ? 'scale-[1.6]' : ''}`} 
              />
            </div>
          ))}
        </div>

        {/* Row 2 (Moving Right - Medium) */}
        <div className="flex w-max animate-marquee-right-medium gap-4 md:gap-8 px-4">
          {extendedRow2.map((logo, idx) => (
            <div key={`r2-${idx}`} className={`w-[120px] md:w-[220px] h-[60px] md:h-[90px] shrink-0 border rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1 overflow-hidden ${logo.toLowerCase().includes('kotak') ? 'bg-black border-black p-0' : 'bg-white border-slate-100 p-3 md:p-5'}`}>
              <img 
                src={`/images/amc/${logo}`} 
                alt={logo.split('.')[0].replace(/%20/g, ' ')} 
                className={`max-w-full max-h-full transition-all duration-300 ${logo.toLowerCase().includes('kotak') ? 'object-contain scale-[1.3]' : 'object-contain mix-blend-multiply'} ${logo.toLowerCase().includes('tata') ? 'scale-[1.6]' : ''}`} 
              />
            </div>
          ))}
        </div>

        {/* Row 3 (Moving Left - Slightly Slower) */}
        <div className="flex w-max animate-marquee-left-slow gap-4 md:gap-8 px-4">
          {extendedRow3.map((logo, idx) => (
            <div key={`r3-${idx}`} className={`w-[120px] md:w-[220px] h-[60px] md:h-[90px] shrink-0 border rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1 overflow-hidden ${logo.toLowerCase().includes('kotak') ? 'bg-black border-black p-0' : 'bg-white border-slate-100 p-3 md:p-5'}`}>
              <img 
                src={`/images/amc/${logo}`} 
                alt={logo.split('.')[0].replace(/%20/g, ' ')} 
                className={`max-w-full max-h-full transition-all duration-300 ${logo.toLowerCase().includes('kotak') ? 'object-contain scale-[1.3]' : 'object-contain mix-blend-multiply'} ${logo.toLowerCase().includes('tata') ? 'scale-[1.6]' : ''}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
