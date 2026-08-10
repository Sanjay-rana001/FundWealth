"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, Calculator, User } from "lucide-react";

export function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "" || hash === "#home") setActive("home");
      else if (hash === "#investments" || hash === "#services") setActive("investments");
      else if (hash === "#calculators") setActive("calculators");
      else if (hash === "#about") setActive("profile");
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-border-color z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <Link 
          href="#" 
          onClick={() => setActive("home")}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active === "home" ? "text-primary-600" : "text-foreground/70 hover:text-foreground"}`}
        >
          <Home size={22} strokeWidth={active === "home" ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link 
          href="#investments" 
          onClick={() => setActive("investments")}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active === "investments" ? "text-primary-600" : "text-foreground/70 hover:text-foreground"}`}
        >
          <Briefcase size={22} strokeWidth={active === "investments" ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Invest</span>
        </Link>
        <Link 
          href="#calculators" 
          onClick={() => setActive("calculators")}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active === "calculators" ? "text-primary-600" : "text-foreground/70 hover:text-foreground"}`}
        >
          <Calculator size={22} strokeWidth={active === "calculators" ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Tools</span>
        </Link>
        <Link 
          href="#about" 
          onClick={() => setActive("profile")}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active === "profile" ? "text-primary-600" : "text-foreground/70 hover:text-foreground"}`}
        >
          <User size={22} strokeWidth={active === "profile" ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </div>
  );
}
