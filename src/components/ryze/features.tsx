"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, BarChart3, AlertCircle, RefreshCw, Target } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Account Audits",
      description: "Instant audit of your Google and Meta accounts to identify quick wins and structural issues.",
      icon: Search,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "AI Creative Generation",
      description: "Generate high-performing ad creatives and copy tailored to each platform's unique audience.",
      icon: Sparkles,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Wasted Spend Identification",
      description: "Automatically identify and pause search terms and placements that are draining your budget.",
      icon: AlertCircle,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "Performance Optimization",
      description: "24/7 autonomous adjustments to bids, budgets, and targeting based on real-time data.",
      icon: RefreshCw,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Advanced Reporting",
      description: "Clear, actionable reports that show exactly how Ryze is improving your ROI.",
      icon: BarChart3,
      color: "bg-yellow-500/10 text-yellow-500",
    },
    {
      title: "AI Search Ads",
      description: "Be the first to dominate ad surfaces on ChatGPT and Perplexity as they evolve.",
      icon: Target,
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Autonomous Marketing <br /> Powerhouse</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to scale your advertising across the modern web, powered by purpose-built AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <div className={`h-12 w-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
