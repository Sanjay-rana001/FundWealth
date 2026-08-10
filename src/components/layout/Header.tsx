"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Investments", href: "#investments" },
    { label: "Calculators", href: "#calculators" },
    { label: "Insights", href: "#insights" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90  backdrop-blur-lg border-b border-border-color shadow-sm py-3 md:py-4" 
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-display font-bold text-lg leading-none">W</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Fund<span className="text-primary-600">WeALTH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" className="py-2.5 px-6 shadow-md shadow-primary-500/20">
            Talk to Advisor
          </Button>
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
          fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:hidden
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
          <Button variant="primary" className="mt-8 py-3 px-8 text-lg" onClick={() => setIsMobileOpen(false)}>
            Talk to Advisor
          </Button>
        </div>

      </div>
    </header>
  );
}
