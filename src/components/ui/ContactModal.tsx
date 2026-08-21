"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, ChevronRight, PhoneCall } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 cursor-pointer"
          />
          
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[360px] bg-white rounded-[24px] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Top decorative gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-primary-400 via-primary-500 to-teal-400"></div>

            <div className="p-6">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all focus:outline-none"
              >
                <X size={18} />
              </button>

              <div className="mb-6 mt-2">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-1.5">Get in Touch</h3>
                <p className="text-sm text-slate-500 font-medium">Connect directly with our wealth experts</p>
              </div>

              <div className="flex flex-col gap-5">
                
                {/* WhatsApp Group */}
                <div>
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <MessageCircle size={12} className="fill-current" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">WhatsApp</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <a href="https://wa.me/917042313042" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-[0_4px_20px_-5px_rgba(16,185,129,0.15)] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <MessageCircle size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">+91 70423 13042</span>
                          <span className="text-[11px] text-slate-400 font-medium">Message instantly</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </a>
                    <a href="https://wa.me/919891361675" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-[0_4px_20px_-5px_rgba(16,185,129,0.15)] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <MessageCircle size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">+91 98913 61675</span>
                          <span className="text-[11px] text-slate-400 font-medium">Message instantly</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100 my-1"></div>

                {/* Call Group */}
                <div>
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <PhoneCall size={12} />
                    </div>
                    <span className="text-sm font-bold text-slate-800">Direct Call</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <a href="tel:+917042313042" className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-[0_4px_20px_-5px_rgba(var(--primary-600),0.15)] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <Phone size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 group-hover:text-primary-600 transition-colors">+91 70423 13042</span>
                          <span className="text-[11px] text-slate-400 font-medium">Speak with an expert</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </a>
                    <a href="tel:+919891361675" className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-[0_4px_20px_-5px_rgba(var(--primary-600),0.15)] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <Phone size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 group-hover:text-primary-600 transition-colors">+91 98913 61675</span>
                          <span className="text-[11px] text-slate-400 font-medium">Speak with an expert</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
