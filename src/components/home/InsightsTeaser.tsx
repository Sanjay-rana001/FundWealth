import React from "react";
import { ArrowRight, Clock, TrendingUp, BookOpen, Target, Globe, Shield } from "lucide-react";
import Link from "next/link";

export function InsightsTeaser() {
  const blogs = [
    {
      title: "Why mid-cap funds are outperforming large caps.",
      category: "Market Outlook",
      date: "Oct 24, 2024",
      icon: TrendingUp,
    },
    {
      title: "The hidden impact of expense ratios on retirement.",
      category: "Wealth Education",
      date: "Oct 18, 2024",
      icon: BookOpen,
    },
    {
      title: "How to use SIP step-ups to combat inflation.",
      category: "Strategy",
      date: "Oct 12, 2024",
      icon: Target,
    },
    {
      title: "Global equities: Is it the right time to diversify?",
      category: "Global Markets",
      date: "Oct 05, 2024",
      icon: Globe,
    },
    {
      title: "Understanding tax-harvesting before financial year end.",
      category: "Tax Planning",
      date: "Sep 28, 2024",
      icon: Shield,
    }
  ];

  return (
    <section id="insights" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Latest Insights</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Stay ahead of the curve.</h2>
          </div>
          <Link href="#blog" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View all articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-4 lg:gap-5 pt-4 pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory no-scrollbar">
          {blogs.map((blog, idx) => (
            <div key={idx} className="group cursor-pointer bg-white border border-border-color rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 snap-center shrink-0">
              {/* Solid Color Header with Centered Icon */}
              <div className={`h-24 flex items-center justify-center relative overflow-hidden border-b border-border-color/50 transition-colors duration-500 ${
                idx % 3 === 0 ? 'bg-teal-50 group-hover:bg-teal-100' :
                idx % 3 === 1 ? 'bg-indigo-50 group-hover:bg-indigo-100' :
                'bg-blue-50 group-hover:bg-blue-100'
              }`}>
                 
                 {/* Perfectly aligned and visible Icon */}
                 <blog.icon 
                   size={36} 
                   strokeWidth={2}
                   className={`group-hover:scale-[1.2] group-hover:-translate-y-1 group-hover:rotate-3 transition-transform duration-200 ease-out ${
                     idx % 3 === 0 ? 'text-teal-600' :
                     idx % 3 === 1 ? 'text-indigo-600' :
                     'text-blue-600'
                   }`} 
                 />
              </div>
              
              <div className="p-4 lg:p-5 flex flex-col flex-1">
                <div className="mb-3">
                   <span className={`inline-block px-2.5 py-1 font-bold text-[10px] tracking-wider uppercase rounded-md ${
                      idx % 3 === 0 ? 'bg-teal-100/50 text-teal-700' :
                      idx % 3 === 1 ? 'bg-indigo-100/50 text-indigo-700' :
                      'bg-blue-100/50 text-blue-700'
                    }`}>
                      {blog.category}
                    </span>
                </div>
                <h3 className="text-sm lg:text-base font-display font-bold mb-4 leading-snug group-hover:text-primary-600 transition-colors">
                  {blog.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-color/60">
                  <div className="flex items-center gap-1.5 text-[11px] text-foreground/50 font-semibold">
                    <Clock size={12} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="text-primary-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                     <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
