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
              <Image src="/images/logo-5.png" alt="Fundwealth" width={260} height={80} className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply scale-[1.25] sm:scale-[1.4] origin-left" />
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
            <ul className="space-y-2 text-sm font-medium text-slate-600 mb-6">
              <li>14, First Floor, Above SBI Bank,</li>
              <li>Achievers Mall, Sector-49,</li>
              <li>Faridabad, Pin-121001</li>
              <li className="pt-2"><a href="https://www.fundwealth.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors text-primary-600">www.fundwealth.in</a></li>
              <li><a href="tel:7042313042" className="hover:text-primary-600 transition-colors">7042313042</a> / <a href="tel:9891361675" className="hover:text-primary-600 transition-colors">9891361675</a></li>
            </ul>

            <h4 className="font-display font-bold text-slate-900 text-xs tracking-wide uppercase mb-3 text-slate-500">Apps Available On</h4>
            <div className="flex gap-4 items-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.fundwealthapps.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 text-white rounded-md cursor-pointer hover:bg-slate-800 transition-colors shadow-sm"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="text-green-500 fill-green-500">
                   <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9992.4482.9992.9993 0 .5511-.4482.9997-.9992.9997zm11.4045-6.02l1.9973-3.4592c.1158-.2006.0471-.457-.1535-.5728-.2006-.1157-.4569-.0471-.5727.1535l-2.0296 3.5156c-1.4287-.6555-3.0422-1.0264-4.7578-1.0264-1.7155 0-3.329.3709-4.7577 1.0264l-2.0297-3.5156c-.1157-.2006-.372-.2692-.5727-.1535-.2005.1158-.2692.3722-.1534.5728l1.9972 3.4592c-2.9157 1.5992-4.9082 4.6063-5.2638 8.167h21.5623c-.3555-3.5607-2.3481-6.5678-5.2638-8.167z"/>
                 </svg>
                 <span className="font-bold text-xs tracking-wider pt-[2px]">Android</span>
              </a>
              <a 
                href="https://apps.apple.com/us/app/fund-wealth/id6745012080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 text-white rounded-md cursor-pointer hover:bg-slate-800 transition-colors shadow-sm"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="14" height="14" className="text-white fill-current">
                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                 </svg>
                 <span className="font-bold text-xs tracking-wider pt-[2px]">iOS</span>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Mandatory Risk Disclaimer */}
        <div className="pt-4 pb-4 border-t border-slate-200 text-center md:text-left">
          <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-6xl">
            <strong className="text-slate-700">Standard Warning:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-sm font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Fundwealth. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
