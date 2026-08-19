import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-card border-t border-border-color pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-lg leading-none">W</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Fund<span className="text-primary-600">WeALTH</span>
              </span>
            </Link>
            <p className="text-foreground/70 text-sm max-w-sm mb-6">
              Premium wealth management and institutional-grade mutual fund distribution for individuals who demand excellence and transparency.
            </p>
            <div className="text-sm font-medium text-foreground/50">
              AMFI ARN: 314036<br/>
              BSE Member Code: 62154
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="#about" className="hover:text-primary-600 transition-colors">Our Story</Link></li>
              <li><Link href="#services" className="hover:text-primary-600 transition-colors">Services</Link></li>
              <li><Link href="#calculators" className="hover:text-primary-600 transition-colors">Calculators</Link></li>
              <li><Link href="#insights" className="hover:text-primary-600 transition-colors">Market Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>Head Office: 14, First Floor,</li>
              <li>Above SBI Bank, Achievers Mall,</li>
              <li>Sector-49, Faridabad, Pin-121001</li>
              <li className="pt-2"><a href="https://www.fundwealth.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors font-medium">www.fundwealth.in</a></li>
              <li><a href="tel:7042313042" className="hover:text-primary-600 transition-colors font-medium">7042313042</a> / <a href="tel:9891361675" className="hover:text-primary-600 transition-colors font-medium">9891361675</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
          <p>&copy; {new Date().getFullYear()} FundWeALTH. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
