import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function CompanyIntro() {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Who We Are</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-[1.2] mb-6">
            Not just wealth managers. <br />
            <span className="text-foreground/50">Your financial partners.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/70 mb-8">
            <p>
              At FundWeALTH, we believe that true wealth is not just about accumulating numbers in a bank account. It is about the freedom to live life on your terms, without financial anxiety.
            </p>
            <p>
              For over 15 years, we have been crafting meticulously researched, data-driven mutual fund portfolios that weather market volatility and consistently deliver long-term alpha.
            </p>
          </div>
          
          <Button variant="outline" className="gap-2">
            Read Our Story <ArrowRight size={18} />
          </Button>
        </div>
        
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden bg-slate-100  border border-border-color shadow-2xl">
            <img src="/images/company_intro.png" alt="Company Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/80  backdrop-blur-md p-6 rounded-xl border border-white/20">
              <p className="text-xl font-display font-bold mb-2">"Our philosophy is simple: Protect capital first, grow it second."</p>
              <p className="text-sm font-medium text-primary-600">— The Leadership Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
