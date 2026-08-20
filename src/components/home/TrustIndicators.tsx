"use client";

import React from "react";
import { ShieldCheck, Award, Users } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { motion } from "framer-motion";

export function TrustIndicators() {
  const stats = [
    { 
      label: "Assets Under Management", 
      value: <AnimatedCounter value={7} prefix="₹" suffix=" Crore+" delay={0} duration={1.5} />, 
      icon: ShieldCheck 
    },
    { 
      label: "Happy Clients", 
      value: <AnimatedCounter value={300} suffix="+" delay={1.2} duration={1.5} />, 
      icon: Users 
    },
    { 
      label: "ARN: 314036 / BSE Code: 62154", 
      value: (
        <motion.span 
          initial={{ opacity: 0, y: 5 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 2.2, duration: 0.6 }} 
          viewport={{ once: true, margin: "-50px" }}
        >
          Registered
        </motion.span>
      ), 
      icon: Award 
    },
  ];

  return (
    <section className="bg-surface-card border-y border-border-color py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border-color">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
                <p className="text-sm text-foreground/60 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
