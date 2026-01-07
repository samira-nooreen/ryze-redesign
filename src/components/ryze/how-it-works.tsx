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
    <section id="how-it-works" className="py-32 px-6 lg:px-12 bg-background relative border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">The Process</span>
            <div className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
            From Audit to <span className="text-muted-foreground/40">Autonomy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-secondary/50 border border-border/50 group hover:border-foreground/20 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="h-10 w-10 bg-background border border-border text-foreground rounded-xl flex items-center justify-center mb-8">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
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
