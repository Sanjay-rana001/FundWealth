import React from "react";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-primary-100">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-900 mb-6">
            Ready to take control of your wealth?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Schedule a free, no-obligation consultation with one of our expert wealth partners today and discover the FundWeALTH difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="text-lg py-6 px-8 w-full sm:w-auto">
              Get in Touch
            </Button>
            <p className="text-foreground/50 text-sm sm:hidden mt-2">No commitment required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
