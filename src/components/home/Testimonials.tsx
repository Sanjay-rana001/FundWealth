import React from "react";
import { Quote } from "lucide-react";
import { Card } from "../ui/Card";

export function Testimonials() {
  const testimonials = [
    {
      text: "FundWeALTH completely restructured my haphazard investments into a streamlined, high-performing portfolio. Their transparency is unmatched.",
      author: "Rajeev K.",
      role: "Tech Executive",
      image: "/images/investor_1.png"
    },
    {
      text: "I was skeptical about goal-based investing until I saw their roadmap for my daughter's education. We hit the corpus 2 years ahead of schedule.",
      author: "Sneha M.",
      role: "Surgeon",
      image: "/images/investor_2.png"
    },
    {
      text: "Their active rebalancing saved my portfolio during the market correction. Highly recommend their wealth advisory services.",
      author: "Amit B.",
      role: "Business Owner",
      image: "/images/investor_3.png"
    }
  ];

  return (
    <section className="bg-slate-50  py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Client Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built on trust. <br/>Proven by results.</h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0">
          {testimonials.map((test, idx) => (
            <Card key={idx} glass={false} className="relative pt-12 min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0">
              <div className="absolute top-6 right-6 text-primary-200 ">
                <Quote size={48} />
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 font-medium">"{test.text}"</p>
              <div className="flex items-center gap-4 border-t border-border-color pt-6">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border-color">
                  <img src={test.image} alt={test.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{test.author}</h4>
                  <p className="text-xs text-foreground/60">{test.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
