"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Sparkles, 
  BarChart3, 
  AlertCircle, 
  RefreshCw, 
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  MousePointer2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  const deepFeatures = [
    {
      title: "Google Ads Optimization",
      subtitle: "Master the Search Results",
      description: "Our AI manages thousands of keywords, identifies negative search terms in real-time, and optimizes bids to ensure you're always in the top position without overpaying.",
      icon: Search,
      points: ["Dynamic Keyword Insertion", "Automatic Negative Keyword Sync", "Bid Strategy Shifting"],
    },
    {
      title: "Meta Ads Scaling",
      subtitle: "Creative-First Automation",
      description: "Ryze analyzes which creative elements (hooks, headlines, visuals) are driving conversions and automatically allocates budget to the winning combinations.",
      icon: MousePointer2,
      points: ["Automated Creative Testing", "Audience Culling", "Scaling winning ad sets"],
    },
    {
      title: "AI Search Ads (Beta)",
      subtitle: "The Future of Advertising",
      description: "Be where your customers are asking questions. Ryze is the first platform to support native ad placements on ChatGPT and Perplexity Search.",
      icon: Target,
      points: ["Native AI Placements", "Conversational Intent Targeting", "First-Mover Advantage"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Built for <span className="text-primary">Performance</span>
          </motion.h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Deep dive into the technology that powers the most advanced autonomous marketing platform on the market.
          </p>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-32">
            {deepFeatures.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <f.icon className="h-4 w-4" />
                    {f.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{f.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="space-y-4">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="rounded-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-muted overflow-hidden border border-border relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <f.icon className="h-24 w-24 text-primary/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Integration section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Ryze works with the tools you already use. Connect your stack in minutes and let our AI do the heavy lifting.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Google Ads", "Meta Ads", "TikTok Ads", "Snapchat Ads", "Shopify", "HubSpot"].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="font-medium text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-green-500 animate-spin-slow" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider">Status</div>
                      <div className="text-xs text-white/60">Optimizing 24/7</div>
                    </div>
                  </div>
                  <Clock className="h-5 w-5 text-white/40" />
                </div>
                <div className="h-px bg-white/10" />
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-foreground/40"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span>Account Health</span>
                    <span>75% Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
