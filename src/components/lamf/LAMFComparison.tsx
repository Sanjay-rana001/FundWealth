import React from "react";
import { Check, X } from "lucide-react";

export function LAMFComparison() {
  const comparisonData = [
    {
      feature: "Interest Rate",
      lamf: "10.49% p.a.",
      personalLoan: "12% - 24% p.a.",
      sellingMF: "N/A (Loss of future returns)"
    },
    {
      feature: "Impact on Portfolio",
      lamf: "Continues to grow",
      personalLoan: "No impact",
      sellingMF: "Stops compounding immediately"
    },
    {
      feature: "Repayment Flexibility",
      lamf: "Pay interest only, prepay anytime",
      personalLoan: "Fixed monthly EMIs",
      sellingMF: "N/A"
    },
    {
      feature: "Prepayment Penalty",
      lamf: "Zero",
      personalLoan: "2% - 5% of outstanding",
      sellingMF: "N/A"
    },
    {
      feature: "Tax Implications",
      lamf: "No capital gains tax",
      personalLoan: "None",
      sellingMF: "Capital gains tax applicable"
    },
    {
      feature: "Processing Time",
      lamf: "10 Minutes (Digital)",
      personalLoan: "2 - 7 Days",
      sellingMF: "2 - 3 Days"
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Why LAMF is the smarter choice
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Compare Loan Against Mutual Funds with traditional personal loans and the cost of redeeming your investments.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="p-4 font-bold text-xs tracking-wide uppercase text-slate-300">Feature</div>
              <div className="p-4 font-bold text-sm text-center text-primary-400 bg-slate-800/50">LAMF (Overdraft)</div>
              <div className="p-4 font-bold text-sm text-center">Personal Loan</div>
              <div className="p-4 font-bold text-sm text-center">Selling Mutual Funds</div>
            </div>

            {/* Data Rows */}
            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 hover:bg-slate-50 transition-colors">
                  <div className="p-4 flex items-center font-bold text-slate-700 text-sm">
                    {row.feature}
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center bg-primary-50/30 border-x border-primary-100/50">
                    {idx === 0 || idx === 5 ? (
                      <span className="font-bold text-primary-700">{row.lamf}</span>
                    ) : (
                      <>
                        <Check size={18} className="text-primary-600 mb-1" />
                        <span className="text-sm font-medium text-primary-700">{row.lamf}</span>
                      </>
                    )}
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center text-slate-600">
                    {idx === 0 || idx === 5 ? (
                      <span className="font-medium">{row.personalLoan}</span>
                    ) : (
                      <>
                        <X size={18} className="text-slate-300 mb-1" />
                        <span className="text-sm">{row.personalLoan}</span>
                      </>
                    )}
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-center text-slate-600">
                    {idx === 0 || idx === 5 ? (
                      <span className="font-medium">{row.sellingMF}</span>
                    ) : (
                      <>
                        <X size={18} className="text-slate-300 mb-1" />
                        <span className="text-sm">{row.sellingMF}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
