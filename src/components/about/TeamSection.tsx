import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Eleanor Sterling",
    role: "Chief Executive Officer",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Former VP at Goldman Sachs, Eleanor brings 15 years of institutional investing experience to democratize wealth management.",
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Previously engineering lead at Stripe. David architects the robust, secure algorithms powering our wealth platform.",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Investment Strategy",
    image: "https://i.pravatar.cc/300?img=33",
    bio: "Ph.D. in Financial Mathematics. Marcus oversees the quantitative models ensuring optimal portfolio performance.",
  }
];

export function TeamSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-3 block">Leadership</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Meet the Team</h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Our leadership brings together decades of experience across Wall Street, Silicon Valley, and quantitative research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative rounded-3xl bg-white border border-border-color shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links on hover */}
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
