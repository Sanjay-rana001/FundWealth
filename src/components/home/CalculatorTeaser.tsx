import React from "react";
import { Button } from "../ui/Button";
import { Calculator, IndianRupee, TrendingUp, PiggyBank, Target, Clock, Wallet, LineChart } from "lucide-react";

import Link from "next/link";

export function CalculatorTeaser() {
  return (
    <section id="calculators" className="section-padding">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 md:p-12 border border-border-color shadow-2xl relative overflow-hidden">
        
        {/* Decorative Background Doodles */}
        {/* Very thin, subtle outline doodles mimicking the reference image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 text-slate-300 [&>svg]:stroke-[1.5px]">
          <IndianRupee className="absolute top-[10%] left-[5%] w-14 h-14" />
          <TrendingUp className="absolute bottom-[20%] left-[30%] w-20 h-20" />
          <PiggyBank className="absolute top-[20%] right-[10%] w-16 h-16" />
          <Target className="absolute bottom-[10%] right-[40%] w-14 h-14" />
          <Clock className="absolute top-[50%] left-[10%] w-12 h-12" />
          <Wallet className="absolute bottom-[5%] right-[5%] w-16 h-16" />
          <LineChart className="absolute top-[10%] right-[45%] w-12 h-12" />
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 z-0"></div>
        
        <div className="grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white  shadow-lg mb-8 text-primary-600">
              <Calculator size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Plan your future with precision.</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-md">
              Use our advanced SIP and Lumpsum calculators to visualize the power of compounding and map out your exact path to wealth creation.
            </p>
            <div className="flex gap-4">
              <Link href="/calculators"><Button variant="primary">SIP Calculator</Button></Link>
              <Link href="/calculators"><Button variant="secondary" className="bg-white ">Lumpsum Calculator</Button></Link>
            </div>
          </div>
          
          {/* Abstract Interface Graphic */}
          <div className="relative h-[300px] bg-white  rounded-2xl shadow-xl border border-border-color p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-border-color pb-4">
              <span className="font-bold">Wealth Projection</span>
              <span className="text-primary-600 font-bold text-xl">₹1.2 Cr</span>
            </div>
            
            {/* Fake sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-2 opacity-70">
                  <span>Monthly Investment</span>
                  <span>₹20,000</span>
                </div>
                <div className="h-2 w-full bg-slate-100  rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2 opacity-70">
                  <span>Expected Return</span>
                  <span>12%</span>
                </div>
                <div className="h-2 w-full bg-slate-100  rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-accent-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2 opacity-70">
                  <span>Time Period</span>
                  <span>15 Years</span>
                </div>
                <div className="h-2 w-full bg-slate-100  rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
