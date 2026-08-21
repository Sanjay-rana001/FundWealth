"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Calculator } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.08)] border-t border-border-color z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${pathname === "/" ? "text-primary-600" : "text-slate-500 hover:text-slate-900"}`}
        >
          <Home size={22} strokeWidth={pathname === "/" ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Home</span>
        </Link>
        <Link 
          href="/contact" 
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${pathname === "/contact" ? "text-primary-600" : "text-slate-500 hover:text-slate-900"}`}
        >
          <Briefcase size={22} strokeWidth={pathname === "/contact" ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Invest</span>
        </Link>
        <Link 
          href="/calculators" 
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${pathname === "/calculators" ? "text-primary-600" : "text-slate-500 hover:text-slate-900"}`}
        >
          <Calculator size={22} strokeWidth={pathname === "/calculators" ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-wide">Tools</span>
        </Link>
      </div>
    </div>
  );
}
