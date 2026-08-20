import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
 return (
 <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-border-color transition-colors">
 <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
 {/* Logo */}
 <Link href="/" className="flex items-center gap-2 group">
 <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
 F
 </div>
 <span className="font-display font-bold text-xl tracking-tight">
 Fund<span className="text-primary-600">WeALTH</span>
 </span>
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden md:flex items-center gap-5 font-medium text-sm">
 <Link href="#services" className="hover:text-primary-600 transition-colors">Services</Link>
 <Link href="#funds" className="hover:text-primary-600 transition-colors">Mutual Funds</Link>
 <Link href="#calculators" className="hover:text-primary-600 transition-colors">Calculators</Link>
 <Link href="#about" className="hover:text-primary-600 transition-colors">About</Link>
 </nav>

 {/* Actions */}
 <div className="flex items-center gap-4">
 <Button variant="secondary" className="hidden sm:flex">Log In</Button>
 <Button variant="primary">Start SIP</Button>
 </div>
 </div>
 </header>
 );
}
