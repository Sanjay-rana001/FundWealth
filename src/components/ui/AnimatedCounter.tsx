"use client";

import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  className,
  prefix = "",
  suffix = "",
  delay = 0,
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Intl.NumberFormat("en-IN").format(
              Math.floor(latest)
            )}${suffix}`;
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, delay, duration]);

  return (
    <span className={className} ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
