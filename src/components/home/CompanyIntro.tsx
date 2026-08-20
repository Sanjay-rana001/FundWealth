import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Target, Eye, MountainSnow, ShieldCheck } from "lucide-react";

export function CompanyIntro() {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Who We Are</p>
          <h2 className="text-4xl lg:text-4xl font-display font-bold leading-[1.2] mb-6">
            FUND WEALTH <br />
            <span className="text-foreground/50">Plan Today, Prosper Tomorrow</span>
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/70 mb-8">
            <div className="flex gap-4">
               <div className="mt-1 flex-shrink-0 text-primary-600"><Target size={24}/></div>
               <div>
                 <h4 className="font-bold text-foreground">Our Goal</h4>
                 <p className="text-base">Understanding your dreams, taking you to financial freedom.</p>
               </div>
            </div>
            
            <div className="flex gap-4">
               <div className="mt-1 flex-shrink-0 text-primary-600"><Eye size={24}/></div>
               <div>
                 <h4 className="font-bold text-foreground">Our Vision</h4>
                 <p className="text-base">To give every Indian a prosperous and secure future through smart investing.</p>
               </div>
            </div>
            
            <div className="flex gap-4">
               <div className="mt-1 flex-shrink-0 text-primary-600"><MountainSnow size={24}/></div>
               <div>
                 <h4 className="font-bold text-foreground">Our Mission</h4>
                 <p className="text-base">To provide structured financial solutions with honesty, transparency, and dedication.</p>
               </div>
            </div>
            
            <div className="flex gap-4">
               <div className="mt-1 flex-shrink-0 text-primary-600"><ShieldCheck size={24}/></div>
               <div>
                 <h4 className="font-bold text-foreground">AMFI Guidelines</h4>
                 <p className="text-base">We follow all AMFI guidelines and consider your trust paramount.</p>
               </div>
            </div>
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
              <p className="text-xl font-display font-bold mb-2">"Small Investment, Big Future."</p>
              <p className="text-sm font-medium text-primary-600">Today's right decision, tomorrow's secure life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
