import { TrendingUp, BookOpen, Target, Globe, Shield, LucideIcon, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { InsightData } from "@/lib/insights";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, BookOpen, Target, Globe, Shield
};

interface InsightsTeaserProps {
  blogs?: InsightData[];
}

export function InsightsTeaser({ blogs = [] }: InsightsTeaserProps) {
  // Fallback to empty array if no blogs provided, though in practice it should be passed from the parent.

  return (
    <section id="insights" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-6">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Latest Insights</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Stay ahead of the curve.</h2>
          </div>
          <Link href="/insights" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View all articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-5 pt-4 pb-8">
          {blogs.map((blog, idx) => {
            const IconComponent = blog.icon ? iconMap[blog.icon] || TrendingUp : TrendingUp;
            return (
            <Link href={`/insights/${blog.slug}`} key={idx} className="group cursor-pointer bg-white border border-border-color rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Solid Color Header with Centered Icon */}
              <div className={`h-16 lg:h-24 flex items-center justify-center relative overflow-hidden border-b border-border-color/50 transition-colors duration-500 ${
                idx % 3 === 0 ? 'bg-teal-50 group-hover:bg-teal-100' :
                idx % 3 === 1 ? 'bg-indigo-50 group-hover:bg-indigo-100' :
                'bg-blue-50 group-hover:bg-blue-100'
              }`}>
                 
                 {/* Perfectly aligned and visible Icon */}
                 <IconComponent 
                   size={24} 
                   strokeWidth={2}
                   className={`lg:w-9 lg:h-9 group-hover:scale-[1.2] group-hover:-translate-y-1 group-hover:rotate-3 transition-transform duration-200 ease-out ${
                     idx % 3 === 0 ? 'text-teal-600' :
                     idx % 3 === 1 ? 'text-indigo-600' :
                     'text-blue-600'
                   }`} 
                 />
              </div>
              
              <div className="p-3 lg:p-5 flex flex-col flex-1">
                <div className="mb-2 lg:mb-3">
                   <span className={`inline-block px-1.5 py-0.5 lg:px-2.5 lg:py-1 font-bold text-[8px] lg:text-[10px] tracking-wider uppercase rounded-md ${
                      idx % 3 === 0 ? 'bg-teal-100/50 text-teal-700' :
                      idx % 3 === 1 ? 'bg-indigo-100/50 text-indigo-700' :
                      'bg-blue-100/50 text-blue-700'
                    }`}>
                      {blog.category}
                    </span>
                </div>
                <h3 className="text-xs lg:text-base font-display font-bold mb-3 lg:mb-4 leading-snug group-hover:text-primary-600 transition-colors">
                  {blog.title}
                </h3>
                <div className="mt-auto pt-3 lg:pt-4 flex items-center justify-between border-t border-border-color/60">
                  <div className="flex items-center gap-1 lg:gap-1.5 text-[9px] lg:text-[11px] text-foreground/50 font-semibold">
                    <Clock size={10} className="lg:w-3 lg:h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="text-primary-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                     <ArrowRight size={12} className="lg:w-[14px] lg:h-[14px]" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </section>
  );
}
