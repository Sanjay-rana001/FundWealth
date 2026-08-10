import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Card } from "../ui/Card";
import Link from "next/link";

export function InsightsTeaser() {
  const blogs = [
    {
      title: "Why mid-cap mutual funds are currently outperforming large caps in India.",
      category: "Market Outlook",
      date: "Oct 24, 2024",
    },
    {
      title: "The hidden impact of expense ratios on your long-term retirement corpus.",
      category: "Wealth Education",
      date: "Oct 18, 2024",
    },
    {
      title: "How to use SIP step-ups to combat rising inflation costs.",
      category: "Strategy",
      date: "Oct 12, 2024",
    }
  ];

  return (
    <section id="insights" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Latest Insights</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Stay ahead of the curve.</h2>
        </div>
        <Link href="#blog" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
          View all articles <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <Card key={idx} className="group cursor-pointer hover:shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100  text-xs font-semibold mb-4">
                {blog.category}
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                {blog.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/50 font-medium mt-6">
              <Clock size={14} />
              <span>{blog.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
