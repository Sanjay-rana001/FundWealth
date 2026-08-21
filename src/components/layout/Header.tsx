"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, ChevronsRight, MessageCircle } from "lucide-react";
import { ContactModal } from "../ui/ContactModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { label: "Loans", href: "/loan" },
    { label: "Calculators", href: "/calculators" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${
          isScrolled || isMobileOpen
            ? "bg-white border-b border-border-color shadow-sm" 
            : "bg-transparent"
        }`}
      >
        {/* Top Info Bar */}
        <div className={`w-full bg-slate-900 text-white transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "py-1.5 opacity-100"}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center text-[10px] sm:text-xs font-medium tracking-wide">
            <div className="flex items-center gap-2 sm:gap-4">
               <span className="flex items-center gap-1"><span className="text-green-400">▲</span> AMFI REGISTERED MUTUAL FUND DISTRIBUTOR</span>
               <span className="hidden md:inline-block text-slate-400">|</span>
               <span className="hidden sm:inline-block">ARN-314036</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-semibold text-blue-300">BSE</span>
               <span>MEMBER CODE 62154</span>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto w-full px-4 md:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled || isMobileOpen ? "py-2" : "py-3 md:py-4"
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image src="/images/logo_header.png" alt="Fundwealth" width={260} height={80} className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply origin-left transition-transform" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
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

          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-primary-600 text-white font-medium text-sm shadow-sm hover:bg-primary-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>Contact Us</span>
            </button>

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

          {/* Mobile Menu Toggle and Mobile Talk Button */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-4 py-1.5 rounded-full bg-primary-600 text-white font-medium text-xs shadow-sm hover:bg-primary-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-95"
            >
              Contact Us
            </button>
            <button 
              className="p-1 text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          <div className={`
            fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-5 transition-transform duration-300 ease-in-out lg:hidden
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
            <button 
              onClick={() => {
                setIsMobileOpen(false);
                setIsModalOpen(true);
              }}
              className="px-8 py-3 mt-4 rounded-full bg-primary-600 text-white font-bold text-lg hover:bg-primary-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-95"
            >
              Contact Us
            </button>
            <Link href="https://fundwealth.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer" className="relative flex items-center p-[5px] mt-4 rounded-full bg-white border border-primary-500/30 group overflow-hidden shadow-sm hover:shadow-md transition-shadow" onClick={() => setIsMobileOpen(false)}>
              
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

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
