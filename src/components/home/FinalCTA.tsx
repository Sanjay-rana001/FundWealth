import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border border-slate-800">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-md"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTAgMTAuNWgyMHYtMWgtMjB6TTEwLjUgMGgxLjd2MjBoLTEuN3oiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight tracking-tight max-w-3xl">
            Ready to take control of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-300">financial future?</span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free, no-obligation consultation with our wealth partners today and discover the FundWeALTH difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link href="/contact" className="relative flex items-center p-[6px] rounded-full bg-white/5 border border-white/10 group overflow-hidden shadow-lg hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all">
              
              {/* Background Sweep */}
              <div className="absolute inset-0 bg-primary-500 rounded-full -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-10" />

              {/* Inner Pill */}
              <div className="relative px-8 py-3 rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary-600 rounded-full z-0 transition-colors duration-300" />
                <span className="relative z-20 text-white font-medium text-lg transition-colors duration-300 flex items-center gap-2">
                  Speak to our Team
                </span>
              </div>

              {/* Sliding Arrow */}
              <div className="relative z-20 flex items-center overflow-hidden h-6 w-8 mx-3">
                <ArrowRight className="absolute left-0 w-6 h-6 text-white transition-all duration-300 ease-in-out group-hover:translate-x-10 group-hover:text-white" />
                <ArrowRight className="absolute left-0 w-6 h-6 text-white -translate-x-10 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-white" />
              </div>

            </Link>
          </div>
          
          <p className="text-slate-500 text-sm mt-6 font-medium">No commitment required. 100% confidential.</p>
        </div>
      </div>
    </section>
  );
}
