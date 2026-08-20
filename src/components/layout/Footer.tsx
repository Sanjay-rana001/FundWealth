import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-card border-t border-border-color pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 mb-6">
          
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center mb-3">
              <Image src="/images/logo-5.png" alt="FundWeALTH" width={260} height={80} className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply scale-[1.25] sm:scale-[1.4] origin-left" />
            </Link>
            <p className="text-slate-600 font-medium text-sm max-w-sm mb-4 leading-relaxed">
              Premium wealth management and structured mutual fund distribution for individuals who demand excellence and transparency.
            </p>
            
            {/* SEBI Mandatory Registration Block - Compact Inline */}
            <div className="text-[11px] font-medium text-slate-500 bg-slate-50/80 p-3 rounded-lg border border-slate-200 leading-relaxed shadow-sm">
              <strong className="text-slate-700">Name:</strong> [INSERT EXACT REGISTERED NAME] &nbsp;|&nbsp; 
              <strong className="text-slate-700">Type:</strong> [INSERT REGISTRATION TYPE] &nbsp;|&nbsp; 
              <strong className="text-slate-700">AMFI ARN:</strong> <span className="text-primary-700 font-bold">314036</span> &nbsp;|&nbsp; 
              <strong className="text-slate-700">BSE Code:</strong> 62154 &nbsp;|&nbsp; 
              <strong className="text-slate-700">SEBI Reg:</strong> <span className="text-primary-700 font-bold">[INSERT SEBI REG NO]</span> &nbsp;|&nbsp; 
              <strong className="text-slate-700">Validity:</strong> [INSERT VALIDITY] &nbsp;|&nbsp; 
              <strong className="text-slate-700">Principal Officer:</strong> [INSERT NAME, CONTACT] &nbsp;|&nbsp; 
              <strong className="text-slate-700">SEBI Office:</strong> [INSERT OFFICE ADDRESS]
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-600">
              <li><Link href="/about" className="hover:text-primary-600 transition-colors">Our Story</Link></li>
              <li><Link href="/#services" className="hover:text-primary-600 transition-colors">Services</Link></li>
              <li><Link href="/calculators?type=sip" className="hover:text-primary-600 transition-colors">SIP Calculator</Link></li>
              <li><Link href="/calculators?type=lumpsum" className="hover:text-primary-600 transition-colors">Lumpsum Calculator</Link></li>
              <li><Link href="/insights" className="hover:text-primary-600 transition-colors">Market Insights</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
            
          <div className="col-span-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-3">Regulatory</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-600">
              <li><Link href="/regulatory" className="hover:text-primary-600 transition-colors">Regulatory Disclosures</Link></li>
              <li><Link href="/investor-charter" className="hover:text-primary-600 transition-colors">Investor Charter</Link></li>
              <li><Link href="/grievance" className="hover:text-primary-600 transition-colors">Grievance Redressal</Link></li>
              <li><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors flex items-center gap-1">SEBI SCORES ↗</a></li>
              <li><a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors flex items-center gap-1">SMART ODR ↗</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-3">Contact</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-600">
              <li>14, First Floor, Above SBI Bank,</li>
              <li>Achievers Mall, Sector-49,</li>
              <li>Faridabad, Pin-121001</li>
              <li className="pt-2"><a href="https://www.fundwealth.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors text-primary-600">www.fundwealth.in</a></li>
              <li><a href="tel:7042313042" className="hover:text-primary-600 transition-colors">7042313042</a> / <a href="tel:9891361675" className="hover:text-primary-600 transition-colors">9891361675</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Mandatory Risk Disclaimer */}
        <div className="pt-4 pb-4 border-t border-slate-200 text-center md:text-left">
          <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-6xl">
            <strong className="text-slate-700">Standard Warning:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-sm font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} FundWeALTH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
