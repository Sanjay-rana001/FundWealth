"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only show the splash screen on the landing page
    if (pathname === '/') {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-[#0a1f16] to-zinc-950 text-white"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-10 relative z-10"
          >
            {/* Logo Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center p-4"
            >
              <Image src="/images/logo-5.png" alt="FundWeALTH" width={400} height={120} className="w-auto h-32 sm:h-40 object-contain drop-shadow-2xl" priority />
            </motion.div>

            {/* Text Animation */}
            <div className="text-center overflow-hidden flex flex-col items-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 font-[family-name:var(--font-outfit)]"
              >
                AMFI-Registered
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.9, duration: 1 }}
                className="mt-4 text-emerald-100/70 font-light tracking-[0.2em] uppercase text-xs md:text-sm"
              >
                Mutual Fund Distributor
              </motion.p>
            </div>
            
            {/* Elegant Loading Line */}
            <motion.div 
              className="w-48 h-[1px] mt-8 bg-white/10 overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                initial={{ width: "0%", x: "-100%" }}
                animate={{ width: "50%", x: "200%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
