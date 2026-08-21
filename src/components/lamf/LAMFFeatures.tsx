import React from "react";
import { TrendingUp, Wallet, Banknote, ShieldCheck } from "lucide-react";

export function LAMFFeatures() {
  const features = [
    {
      icon: TrendingUp,
      title: "Compounding Continues",
      desc: "Your mutual funds continue to earn market returns and compound even while pledged."
    },
    {
      icon: Banknote,
      title: "Pay on Utilized Amount",
      desc: "Interest is charged only on the exact amount you withdraw, not the full limit."
    },
    {
      icon: Wallet,
      title: "Zero Prepayment Penalty",
      desc: "Close your loan or prepay any amount whenever you have surplus cash."
    },
    {
      icon: ShieldCheck,
      title: "Better Than Personal Loans",
      desc: "Enjoy much lower interest rates compared to unsecured personal loans."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Why choose an Overdraft Facility?
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Get the liquidity you need without sacrificing your long-term wealth creation goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4 border border-primary-100">
                <feature.icon size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
