"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/app/actions/contact";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const response = await submitContactForm(formData);
    
    if (response.success) {
      setIsSuccess(true);
    }
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl border border-border-color shadow-xl p-6 md:p-10 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Thank you for reaching out to Fundwealth. One of our wealth partners will get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-border-color shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-display font-bold mb-5">Send us a message</h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
            <input name="firstName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-slate-50 focus:bg-white" placeholder="John" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
            <input name="lastName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-slate-50 focus:bg-white" placeholder="Doe" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
          <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
          <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help you?</label>
          <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-slate-50 focus:bg-white resize-none" placeholder="I'm interested in portfolio management services..."></textarea>
        </div>

        <Button variant="primary" className="w-full py-4 text-base" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={20} /> Sending...</span>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </div>
  );
}
