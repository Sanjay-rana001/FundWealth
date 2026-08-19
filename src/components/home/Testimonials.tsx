import React from "react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const allTestimonials = [
    { text: "FundWeALTH completely restructured my haphazard investments into a streamlined, high-performing portfolio. Their transparency is unmatched.", author: "Rajeev K.", role: "Tech Executive", image: "/images/investor_1.png" },
    { text: "I was skeptical about goal-based investing until I saw their roadmap for my daughter's education. We hit the corpus 2 years ahead of schedule.", author: "Sneha M.", role: "Surgeon", image: "/images/investor_2.png" },
    { text: "Their active rebalancing saved my portfolio during the market correction. Highly recommend their wealth distribution services.", author: "Amit B.", role: "Business Owner", image: "/images/investor_3.png" },
    { text: "Moving my entire family's assets to FundWeALTH was the best decision. Their personalized approach is phenomenal.", author: "Pooja V.", role: "Architect", image: "/images/investor_4.png" },
    { text: "The team’s depth of market knowledge is astounding. They predicted the tech sector rotation perfectly.", author: "Vikram S.", role: "Startup Founder", image: "/images/investor_1.png" },
    { text: "I finally have peace of mind knowing my retirement corpus is managed by genuine experts, not just algorithms.", author: "Meera R.", role: "Retiree", image: "/images/investor_2.png" },
    { text: "Their tax-harvesting strategies alone paid for their services multiple times over. Brilliant execution.", author: "Karan D.", role: "CA", image: "/images/investor_3.png" },
    { text: "Transparent fees, zero hidden commissions, and a dashboard that actually makes sense. The gold standard.", author: "Anjali T.", role: "Marketing VP", image: "/images/investor_4.png" },
    { text: "They don't just sell products; they build comprehensive wealth ecosystems. I feel completely secure.", author: "Suresh N.", role: "Real Estate Developer", image: "/images/investor_1.png" },
    { text: "The onboarding was seamless, and my dedicated partner actually listens to my risk appetite.", author: "Nidhi P.", role: "Software Engineer", image: "/images/investor_2.png" },
    { text: "I've tried multiple platforms, but FundWeALTH's bespoke portfolio management is on another level.", author: "Rahul C.", role: "Consultant", image: "/images/investor_3.png" },
    { text: "Excellent communication during volatile market phases kept me from making emotional mistakes.", author: "Divya K.", role: "Professor", image: "/images/investor_4.png" },
    { text: "A truly premium service. The exclusive insights and webinars are just the cherry on top.", author: "Gaurav L.", role: "Director", image: "/images/investor_1.png" },
    { text: "They helped me diversify into global equities seamlessly. My portfolio resilience has never been better.", author: "Tanya H.", role: "Entrepreneur", image: "/images/investor_2.png" },
    { text: "Data-driven, honest, and wildly effective. I recommend FundWeALTH to all my colleagues.", author: "Arjun W.", role: "Data Scientist", image: "/images/investor_3.png" }
  ];

  // Double the array to ensure a seamless infinite scrolling loop
  const marqueeItems = [...allTestimonials, ...allTestimonials];

  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Client Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built on trust. <br/>Proven by results.</h2>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full relative">
        {/* Gradient fades on the edges for a clean look */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-4 md:gap-6 py-4">
          {marqueeItems.map((test, idx) => (
            <div 
              key={idx} 
              className="group relative w-[200px] md:w-[220px] h-[280px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-md cursor-pointer"
            >
              {/* Client Photo Background */}
              <img 
                src={test.image} 
                alt={test.author} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Default State: Dark Gradient at bottom with Name */}
              <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="text-white font-bold text-base leading-tight">{test.author}</h4>
                <p className="text-white/70 text-xs font-medium">{test.role}</p>
              </div>

              {/* Cinematic Curtain: Slides up on Hover */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md p-5 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <Quote size={20} className="text-primary-500 mb-2 opacity-80" />
                <p className="text-white/95 text-xs md:text-sm leading-relaxed font-medium italic mb-4">"{test.text}"</p>
                
                <div className="mt-auto border-t border-white/20 pt-3">
                   <h4 className="text-white font-bold text-xs">{test.author}</h4>
                   <p className="text-white/60 text-[10px] font-medium leading-none mt-1">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
