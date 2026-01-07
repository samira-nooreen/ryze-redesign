"use client";

import { motion } from "framer-motion";
import { Link2, Search, Cpu, Rocket, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Sync Assets",
      description: "Link your Google & Meta accounts. Our secure bridge pulls 2 years of historical data in seconds.",
      icon: Link2,
    },
    {
      title: "Deep Scan",
      description: "Our AI identifies 'Leakage Points'—keywords and placements where you're wasting budget today.",
      icon: Search,
    },
    {
      title: "Deploy Agent",
      description: "Activate your dedicated AI agent. It starts testing thousands of bid and creative variations.",
      icon: Cpu,
    },
    {
      title: "Scale Vertically",
      description: "Once ROI targets are hit, Ryze automatically scales your budget to capture all available market share.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-12 bg-secondary/30 relative">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="h-6 w-6 text-primary fill-current" />
            <span className="text-sm font-black uppercase tracking-[0.2em]">The Pipeline</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
            From Audit <br />
            To <span className="text-primary">Autonomy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-12 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-foreground/5 italic group-hover:text-primary/10 transition-colors">
                {i + 1}
              </div>
              
              <div className="relative z-10">
                <div className="h-14 w-14 bg-primary text-primary-foreground flex items-center justify-center mb-12">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tight mb-6">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
