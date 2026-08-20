import React from "react";
import { Linkedin, Twitter } from "lucide-react";

export function AdvisorSection() {
  const team = [
    { name: "Aditya Sharma", role: "Chief Investment Officer", exp: "20+ Years Exp.", image: "/images/aditya.png" },
    { name: "Priya Desai", role: "Head of Wealth Planning", exp: "15+ Years Exp.", image: "/images/priya.png" },
    { name: "Vikram Mehta", role: "Sr. Mutual Fund Analyst", exp: "12+ Years Exp.", image: "/images/vikram.png" }
  ];

  return (
    <section className="section-padding">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Our Experts</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
            Managed by humans.<br />Powered by data.
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Behind every robust portfolio is our team of seasoned CFA charterholders and market veterans who live and breathe markets.
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer flex md:block items-center gap-4 bg-white md:bg-transparent p-3 md:p-0 rounded-2xl border border-border-color md:border-none shadow-sm md:shadow-none transition-all hover:border-primary-200">
              <div className="w-20 h-20 md:w-full md:h-auto md:aspect-[3/4] shrink-0 rounded-xl md:rounded-2xl bg-slate-200 md:mb-4 overflow-hidden relative border border-border-color">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3 text-white">
                    <Linkedin size={20} className="hover:text-primary-400" />
                    <Twitter size={20} className="hover:text-primary-400" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold">{member.name}</h3>
                <p className="text-xs md:text-sm text-primary-600 font-medium md:mt-1">{member.role}</p>
                <p className="text-[10px] md:text-xs text-foreground/60 mt-0.5 md:mt-1">{member.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
