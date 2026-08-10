const fs = require('fs');
const path = require('path');

const replacements = [
  { file: 'src/app/globals.css', search: '--background: #020617;', replace: '--background: #0a0a0a;' },
  { file: 'src/app/globals.css', search: '--border-color: #334155;', replace: '--border-color: #27272a;' },
  { file: 'src/components/home/PortfolioIllustration.tsx', search: 'bg-[#020617]', replace: 'bg-[#0a0a0a]' },
  { file: 'src/components/layout/Header.tsx', search: 'dark:bg-[#020617]/90', replace: 'dark:bg-[#0a0a0a]/90' },
  { file: 'src/components/home/HeroSection.tsx', search: 'dark:bg-[#020617]/60', replace: 'dark:bg-[#0a0a0a]/60' },
  { file: 'src/components/home/HeroSection.tsx', search: 'dark:from-[#0f172a]', replace: 'dark:from-[#171717]' },
  { file: 'src/components/home/HeroSection.tsx', search: 'dark:to-[#1e293b]', replace: 'dark:to-[#262626]' },
  { file: 'src/components/home/HeroSection.tsx', search: 'dark:bg-[#0f172a]', replace: 'dark:bg-[#171717]' },
  { file: 'src/components/home/ServicesOverview.tsx', search: 'dark:bg-[#0a0f1c]', replace: 'dark:bg-[#0a0a0a]' },
  { file: 'src/components/home/Testimonials.tsx', search: 'dark:bg-[#0a0f1c]', replace: 'dark:bg-[#0a0a0a]' },
  { file: 'src/components/home/CalculatorTeaser.tsx', search: 'dark:bg-[#0f172a]', replace: 'dark:bg-[#171717]' },
  { file: 'src/components/home/FAQ.tsx', search: 'dark:bg-[#0f172a]', replace: 'dark:bg-[#171717]' },
  { file: 'src/components/ui/Input.tsx', search: 'dark:bg-[#0f172a]', replace: 'dark:bg-[#171717]' }
];

let totalCount = 0;
replacements.forEach(({file, search, replace}) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes(search)) {
      content = content.split(search).join(replace);
      fs.writeFileSync(fullPath, content);
      totalCount++;
    }
  }
});

console.log('Fixed ' + totalCount + ' color instances to a clean neutral dark theme.');
