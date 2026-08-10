import React from "react";
import { Card } from "../ui/Card";
import { PieChart, Briefcase, GraduationCap, Building } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      title: "Mutual Fund Advisory",
      description: "Curated, high-performing funds selected through rigorous quantitative and qualitative analysis.",
      icon: PieChart,
      color: "text-blue-500",
      bg: "bg-blue-50 ",
    },
    {
      title: "Goal-Based Planning",
      description: "Mapped investments for retirement, child education, or buying your dream home.",
      icon: GraduationCap,
      color: "text-purple-500",
      bg: "bg-purple-50 ",
    },
    {
      title: "Corporate Treasury",
      description: "Optimizing idle corporate funds for better yields with managed risk profiles.",
      icon: Building,
      color: "text-emerald-500",
      bg: "bg-emerald-50 ",
    },
    {
      title: "Portfolio Restructuring",
      description: "Reviewing and rebalancing your existing scattered investments into a cohesive strategy.",
      icon: Briefcase,
      color: "text-orange-500",
      bg: "bg-orange-50 ",
    },
  ];

  return (
    <section id="services" className="bg-slate-50  py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-4">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Comprehensive wealth solutions.</h2>
          <p className="text-foreground/70 text-lg">
            We offer end-to-end investment services designed to cater to both individual investors and corporate treasuries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} glass={false} className="group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
