import React from "react";
import { getInsightData, getSortedInsightsData } from "@/lib/insights";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FinalCTA } from "@/components/home/FinalCTA";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export async function generateStaticParams() {
  const insights = getSortedInsightsData();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = await getInsightData(slug);
  return {
    title: `${postData.title} | FundWeALTH Insights`,
    description: postData.excerpt || "Read our latest financial insight.",
  };
}

export default async function InsightPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = await getInsightData(slug);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-12 px-6 md:px-12 max-w-4xl mx-auto">
        <Link href="/insights" className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-6 hover:-translate-x-1 transition-transform">
          <ArrowLeft size={18} /> Back to all insights
        </Link>
        
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 font-bold text-xs uppercase tracking-widest rounded-md mb-4">
            {postData.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
            {postData.title}
          </h1>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Clock size={16} />
            <time>{postData.date}</time>
          </div>
        </div>

        <article className="prose md:prose-lg max-w-none text-slate-700 marker:text-primary-600 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-headings:font-display prose-headings:text-slate-900 prose-h2:text-2xl prose-h3:text-xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
        
      </div>

      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
