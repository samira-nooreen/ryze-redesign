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
import { BookDemoModal } from "@/components/ryze/book-demo-modal";

export default function FeaturesPage() {
    const deepFeatures = [
      {
        title: "Google Ads Optimization",
        subtitle: "Master the Search Results",
        description: "Our AI manages thousands of keywords, identifies negative search terms in real-time, and optimizes bids to ensure you're always in the top position without overpaying.",
        icon: Search,
        points: ["Dynamic Keyword Insertion", "Automatic Negative Keyword Sync", "Bid Strategy Shifting"],
        className: "border border-border bg-background",
      },
      {
        title: "Meta Ads Scaling",
        subtitle: "Creative-First Automation",
        description: "Ryze analyzes which creative elements (hooks, headlines, visuals) are driving conversions and automatically allocates budget to the winning combinations.",
        icon: MousePointer2,
        points: ["Automated Creative Testing", "Audience Culling", "Scaling winning ad sets"],
        className: "border border-primary/20 bg-primary/5 shadow-xl shadow-primary/5",
      },
      {
        title: "AI Search Ads",
        subtitle: "The Future of Advertising",
        description: "Be where your customers are asking questions. Ryze is the first platform to support native ad placements on ChatGPT and Perplexity Search.",
        icon: Target,
        points: ["Native AI Placements", "Conversational Intent Targeting", "First-Mover Advantage"],
        className: "border border-border bg-muted/30",
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
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    The Full Capability
                  </span>
                </div>
                <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.1] font-bold tracking-tight">
                  Built for <br />
                  <span className="text-primary">Performance</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-md leading-relaxed mb-4">
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
                  className={`grid grid-cols-1 lg:grid-cols-12 p-8 lg:p-20 rounded-[3rem] ${f.className}`}
                >
                  <div className="lg:col-span-7 space-y-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <f.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">{f.subtitle}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-none">
                        {f.title}
                      </h2>
                      <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
                        {f.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {f.points.map((p, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <Zap className="h-5 w-5 text-primary fill-current" />
                          <span className="text-sm font-semibold">{p}</span>
                        </div>
                      ))}
                    </div>

                      <BookDemoModal>
                        <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-full group">
                          Learn More
                          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </BookDemoModal>

                  </div>

                  <div className="lg:col-span-5 flex items-center justify-center mt-12 lg:mt-0">
                    <div className="relative w-full aspect-square rounded-3xl border border-border flex items-center justify-center group bg-background/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      <f.icon className="h-32 w-32 text-foreground/5 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110" />
                      {/* Decorative bits */}
                      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
                      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Grid */}
        <section className="py-32 px-6 lg:px-12 bg-muted/30 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-border" />
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
                  Seamless <br />
                  <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium max-w-md leading-relaxed mb-12">
                  Ryze works with the tools you already use. Connect your stack in minutes and let our AI do the heavy lifting.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Google Ads", "Meta Ads", "TikTok Ads", "Snapchat Ads", "Shopify", "HubSpot"].map((tool) => (
                    <div key={tool} className="rounded-2xl border border-border bg-background p-4 flex items-center gap-3 hover:border-primary/50 transition-colors">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[2.5rem] border border-border p-12 bg-background relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-8">
                    <Cpu className="h-12 w-12 text-primary/20" />
                  </div>
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                        <RefreshCw className="h-7 w-7 text-primary-foreground animate-spin-slow" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">System Status</div>
                        <div className="text-2xl font-bold tracking-tight">Active Operations</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-[0.2em]">
                        <span>Optimization Level</span>
                        <span className="text-primary">94%</span>
                      </div>
                      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "94%" }}
                          className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]" 
                        />
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-muted/50 border border-border/50 font-medium text-sm text-muted-foreground leading-relaxed">
                      &quot;Deploying creative variation #482 to Meta Audience Network...&quot;
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
