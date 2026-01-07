"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  BarChart3, 
  Target,
  ArrowUpRight,
  Zap,
  MousePointer2,
  RefreshCw,
  Globe,
  Lock,
  Cpu
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
      className: "border-4 border-foreground bg-background",
    },
    {
      title: "Meta Ads Scaling",
      subtitle: "Creative-First Automation",
      description: "Ryze analyzes which creative elements (hooks, headlines, visuals) are driving conversions and automatically allocates budget to the winning combinations.",
      icon: MousePointer2,
      points: ["Automated Creative Testing", "Audience Culling", "Scaling winning ad sets"],
      className: "border-4 border-primary bg-primary/5",
    },
    {
      title: "AI Search Ads",
      subtitle: "The Future of Advertising",
      description: "Be where your customers are asking questions. Ryze is the first platform to support native ad placements on ChatGPT and Perplexity Search.",
      icon: Target,
      points: ["Native AI Placements", "Conversational Intent Targeting", "First-Mover Advantage"],
      className: "border-4 border-foreground bg-secondary/30",
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Header */}
      <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                  The Full Capability
                </span>
              </div>
              <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.85] font-black uppercase italic tracking-tighter">
                Built For <br />
                <span className="text-primary">Performance</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-md leading-tight mb-4">
              Deep dive into the technology that powers the most advanced autonomous marketing platform on the market.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-32 px-6 lg:px-12 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12">
            {deepFeatures.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-12 p-12 lg:p-24 ${f.className}`}
              >
                <div className="lg:col-span-7 space-y-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <f.icon className="h-8 w-8 text-primary" />
                      <span className="text-sm font-black uppercase tracking-widest">{f.subtitle}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                      {f.title}
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium leading-tight max-w-xl">
                      {f.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {f.points.map((p, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary fill-current" />
                        <span className="text-sm font-bold uppercase tracking-wide">{p}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="h-16 px-12 text-xl font-black uppercase italic tracking-tighter rounded-none group">
                    Learn More
                    <ArrowUpRight className="ml-2 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>

                <div className="lg:col-span-5 flex items-center justify-center mt-12 lg:mt-0">
                  <div className="relative w-full aspect-square border-2 border-border flex items-center justify-center group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <f.icon className="h-32 w-32 text-foreground/10 group-hover:text-primary transition-colors duration-500" />
                    {/* Decorative bits */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-border" />
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-12">
                Seamless <br />
                <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-md leading-tight mb-12">
                Ryze works with the tools you already use. Connect your stack in minutes and let our AI do the heavy lifting.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {["Google Ads", "Meta Ads", "TikTok Ads", "Snapchat Ads", "Shopify", "HubSpot"].map((tool) => (
                  <div key={tool} className="border-2 border-border bg-background p-4 flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-xs font-black uppercase tracking-widest">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border-8 border-foreground p-12 bg-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <Cpu className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-primary-foreground animate-spin-slow" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">System Status</div>
                      <div className="text-2xl font-black uppercase italic italic tracking-tight">Active Ops</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-black uppercase tracking-[0.2em]">
                      <span>Optimization Level</span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="h-4 w-full bg-secondary overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "94%" }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>

                  <div className="p-4 border-2 border-border italic font-bold text-sm text-muted-foreground">
                    &quot;Deploying creative variation #482 to Meta Audience Network...&quot;
                  </div>
                </div>
                
                {/* Background wash */}
                <div className="absolute bottom-[-10%] left-[-10%] text-9xl font-black text-foreground/5 pointer-events-none italic uppercase">RYZE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
