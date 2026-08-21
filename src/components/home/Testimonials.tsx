import React from "react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const allTestimonials = [
    { text: "Fundwealth completely restructured my haphazard investments into a streamlined, high-performing portfolio. Their transparency is unmatched.", author: "Rajeev K.", role: "Tech Executive" },
    { text: "I was skeptical about goal-based investing until I saw their roadmap for my daughter's education. We hit the corpus 2 years ahead of schedule.", author: "Sneha M.", role: "Surgeon" },
    { text: "Their active rebalancing saved my portfolio during the market correction. Highly recommend their wealth distribution services.", author: "Amit B.", role: "Business Owner" },
    { text: "Moving my entire family's assets to Fundwealth was a great decision. Their personalized approach is phenomenal.", author: "Pooja V.", role: "Architect" },
    { text: "The team’s depth of market knowledge is astounding. They predicted the tech sector rotation perfectly.", author: "Vikram S.", role: "Startup Founder" },
    { text: "I finally have peace of mind knowing my retirement corpus is managed by genuine experts, not just algorithms.", author: "Meera R.", role: "Retiree" },
    { text: "Their tax-harvesting strategies alone paid for their services multiple times over. Brilliant execution.", author: "Karan D.", role: "CA" },
    { text: "Transparent fees, zero hidden commissions, and a dashboard that actually makes sense. The gold standard.", author: "Anjali T.", role: "Marketing VP" },
    { text: "They don't just sell products; they build comprehensive wealth ecosystems. I feel completely secure.", author: "Suresh N.", role: "Real Estate Developer" },
    { text: "The onboarding was seamless, and my dedicated partner actually listens to my risk appetite.", author: "Nidhi P.", role: "Software Engineer" },
    { text: "I've tried multiple platforms, but Fundwealth's bespoke portfolio management is on another level.", author: "Rahul C.", role: "Consultant" },
    { text: "Excellent communication during volatile market phases kept me from making emotional mistakes.", author: "Divya K.", role: "Professor" },
    { text: "A truly premium service. The exclusive insights and webinars are just the cherry on top.", author: "Gaurav L.", role: "Director" },
    { text: "They helped me diversify into global equities seamlessly. My portfolio resilience has never been better.", author: "Tanya H.", role: "Entrepreneur" },
    { text: "Data-driven, honest, and wildly effective. I recommend Fundwealth to all my colleagues.", author: "Arjun W.", role: "Data Scientist" }
  ];

  // Double the array to ensure a seamless infinite scrolling loop
  const marqueeItems = [...allTestimonials, ...allTestimonials];

  return (
    <section className="bg-slate-50 py-10 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-primary-600 font-semibold tracking-wider text-xs md:text-sm uppercase mb-2">Client Stories</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Proven by results.</h2>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full relative">
        {/* Gradient fades on the edges for a clean look */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-3 md:gap-4 py-3">
          {marqueeItems.map((test, idx) => (
            <div 
              key={idx} 
              className="w-[220px] md:w-[240px] bg-white border border-slate-200/60 rounded-xl p-4 md:p-5 shrink-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col group relative overflow-hidden"
            >
              {/* Subtle accent border on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <Quote size={16} className="text-primary-100 mb-2.5 group-hover:text-primary-200 transition-colors" />
              <p className="text-slate-700 text-[12px] md:text-[13px] leading-snug mb-4 flex-grow font-medium">"{test.text}"</p>
              
              <div className="border-t border-slate-100 pt-2.5 mt-auto flex items-center justify-between">
                <div>
                   <h4 className="text-slate-900 font-bold text-[11px] md:text-xs">{test.author}</h4>
                   <p className="text-slate-500 text-[9px] md:text-[10px] font-medium mt-0.5">{test.role}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-primary-600 font-bold text-[10px] border border-slate-100">
                  {test.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
