import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');

export type InsightData = {
  slug: string;
  title: string;
  date: string;
  category: string;
  icon?: string;
  excerpt?: string;
  contentHtml?: string;
};

export function getSortedInsightsData(): InsightData[] {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(insightsDirectory);
  const allInsightsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fullPath = path.join(insightsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; date: string; category: string; icon?: string; excerpt?: string }),
    };
  });

  return allInsightsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getInsightData(slug: string): Promise<InsightData> {
  const fullPath = path.join(insightsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; category: string; icon?: string; excerpt?: string }),
  };
}
