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
import { BottomNav } from "@/components/layout/BottomNav";
import { SplashScreen } from "@/components/layout/SplashScreen";

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-background text-foreground overflow-x-hidden relative min-h-screen">
        <SplashScreen />
        <main className="pb-28 md:pb-0">
          {children}
        </main>
        <BottomNav />
        <ScrollToTop />
      </body>
    </html>
  );
}
