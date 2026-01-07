"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Link as LinkIcon, Settings, BarChart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Connect Accounts",
      description: "Securely link your Google and Meta ad accounts in seconds.",
      icon: LinkIcon,
    },
    {
      title: "Initial Audit",
      description: "Our AI scans your historical data to identify wasted spend and growth opportunities.",
      icon: CheckCircle2,
    },
    {
      title: "Autonomous Setup",
      description: "Ryze sets up campaigns and creative experiments based on your goals.",
      icon: Settings,
    },
    {
      title: "Scale & Ryze",
      description: "Sit back as Ryze continuously optimizes your accounts 24/7 for maximum ROI.",
      icon: BarChart,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in minutes and see results in days. No complex setup required.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 ring-8 ring-background group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
