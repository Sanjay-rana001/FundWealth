"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "lucide-react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-950 text-white"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Logo Animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-400 shadow-2xl shadow-emerald-900/50 border border-emerald-500/30"
            >
              <Wallet className="w-12 h-12 text-white" strokeWidth={1.5} />
            </motion.div>

            {/* Text Animation */}
            <div className="text-center overflow-hidden flex flex-col items-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 font-[family-name:var(--font-outfit)]"
              >
                FundWeALTH
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-3 text-emerald-100/70 font-light tracking-wide uppercase text-sm md:text-base"
              >
                Premium Wealth Management
              </motion.p>
            </div>
            
            {/* Elegant Loading Line */}
            <motion.div 
              className="w-64 h-[2px] mt-10 bg-emerald-900/50 rounded-full overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circInOut", delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
