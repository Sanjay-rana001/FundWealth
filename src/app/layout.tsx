import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "FundWeALTH - Premium Wealth Management",
  description: "Secure your financial future with FundWeALTH's premium investment and mutual fund solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
