"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, BarChart3, AlertCircle, RefreshCw, Target, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Search Dominance",
      description: "Be the first to capture intent on ChatGPT and Perplexity. Our AI adapts your ads for the conversational web.",
      icon: Target,
      className: "md:col-span-8 md:row-span-2 bg-primary text-primary-foreground",
    },
    {
      title: "Account Audits",
      description: "Instant, deep-dive audits for Google and Meta.",
      icon: Search,
      className: "md:col-span-4 bg-secondary",
    },
    {
      title: "Creative Gen",
      description: "High-performing copy tailored to your brand voice.",
      icon: Sparkles,
      className: "md:col-span-4 bg-background border-2 border-border",
    },
    {
      title: "Waste Prevention",
      description: "Stop bleeding budget on low-intent search terms automatically.",
      icon: AlertCircle,
      className: "md:col-span-4 bg-secondary",
    },
    {
      title: "24/7 Ops",
      description: "Autonomous adjustments while you sleep.",
      icon: RefreshCw,
      className: "md:col-span-4 bg-background border-2 border-border",
    },
    {
      title: "ROI Reporting",
      description: "Clear, aggressive focus on your bottom line.",
      icon: BarChart3,
      className: "md:col-span-4 bg-secondary",
    },
  ];

  return (
    <section id="features" className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-6 w-6 text-primary fill-current" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">The Toolkit</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Built for <br />
              <span className="text-primary">Performance</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-md font-medium leading-tight">
            Traditional agencies are too slow. Ryze is the autonomous layer that outpaces the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative p-8 overflow-hidden group ${feature.className}`}
            >
              <div className="flex flex-col h-full justify-between relative z-10">
                <feature.icon className={`h-10 w-10 ${feature.className.includes('bg-primary') ? 'text-primary-foreground' : 'text-primary'}`} />
                <div>
                  <h3 className={`text-2xl font-black uppercase italic tracking-tight mb-2 ${feature.className.includes('bg-primary') ? 'text-primary-foreground' : ''}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm font-medium leading-tight ${feature.className.includes('bg-primary') ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative detail */}
              <div className="absolute top-4 right-4 text-[10px] font-black opacity-20 uppercase tracking-widest">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
