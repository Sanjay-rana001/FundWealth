"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Menu, X, User, ChevronsRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check scroll position immediately on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Investments", href: "/#investments" },
    { label: "Calculators", href: "/calculators" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? "bg-white border-b border-border-color shadow-sm py-2" 
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image src="/images/logo_header.png" alt="FundWeALTH" width={260} height={80} className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply origin-left transition-transform" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="https://fundwealth.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer" className="relative flex items-center p-[4px] rounded-full bg-white border border-primary-500/30 group overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            
            {/* Background Sweep */}
            <div className="absolute inset-0 bg-primary-500 rounded-full -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-10" />

            {/* Inner Pill */}
            <div className="relative px-5 py-1.5 rounded-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary-600 rounded-full z-0 transition-colors duration-300" />
              <span className="relative z-20 text-white font-medium text-sm transition-colors duration-300 flex items-center gap-2">
                <User size={16} />
                Login
              </span>
            </div>

            {/* Sliding Arrow */}
            <div className="relative z-20 flex items-center overflow-hidden h-5 w-6 mx-2">
              <ChevronsRight className="absolute left-0 w-5 h-5 text-primary-600 transition-all duration-300 ease-in-out group-hover:translate-x-8 group-hover:text-white" />
              <ChevronsRight className="absolute left-0 w-5 h-5 text-primary-600 -translate-x-8 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-white" />
            </div>

          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`
          fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-5 transition-transform duration-300 ease-in-out md:hidden
          ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-display font-bold hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="https://fundwealth.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer" className="relative flex items-center p-[5px] mt-8 rounded-full bg-white border border-primary-500/30 group overflow-hidden shadow-sm hover:shadow-md transition-shadow" onClick={() => setIsMobileOpen(false)}>
            
            {/* Background Sweep */}
            <div className="absolute inset-0 bg-primary-500 rounded-full -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-10" />

            {/* Inner Pill */}
            <div className="relative px-6 py-2 rounded-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary-600 rounded-full z-0 transition-colors duration-300" />
              <span className="relative z-20 text-white font-medium text-base transition-colors duration-300 flex items-center gap-2">
                <User size={18} />
                Login
              </span>
            </div>

            {/* Sliding Arrow */}
            <div className="relative z-20 flex items-center overflow-hidden h-6 w-7 mx-2">
              <ChevronsRight className="absolute left-0 w-6 h-6 text-primary-600 transition-all duration-300 ease-in-out group-hover:translate-x-8 group-hover:text-white" />
              <ChevronsRight className="absolute left-0 w-6 h-6 text-primary-600 -translate-x-8 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-white" />
            </div>

          </Link>
        </div>

      </div>
    </header>
  );
}
