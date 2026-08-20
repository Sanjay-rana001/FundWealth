import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | FundWeALTH",
  description: "Get in touch with FundWeALTH to start your wealth creation journey.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-primary-700 font-bold tracking-widest text-sm uppercase mb-3">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold mb-4 text-slate-900 tracking-tight">
            Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">wealth together.</span>
          </h1>
          <p className="text-slate-700 text-base md:text-lg font-medium">
            Schedule a no-obligation consultation with our expert wealth partners today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Head Office</h3>
                    <p className="text-slate-600 text-sm">
                      14, First Floor,<br />
                      Above SBI Bank, Achievers Mall,<br />
                      Sector-49, Faridabad, Pin-121001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:7042313042" className="hover:text-primary-600 transition-colors">7042313042</a><br />
                      <a href="tel:9891361675" className="hover:text-primary-600 transition-colors">9891361675</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:info@fundwealth.in" className="hover:text-primary-600 transition-colors">info@fundwealth.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <ContactForm />

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
