"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, Play, Globe, Shield, BarChart3 } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute inset-0 glow-mesh pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Autonomous Ad Operations
                  </span>
                </div>
                
                <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[1] font-display font-extrabold tracking-tight mb-8">
                  Autonomous <br />
                  <span className="text-muted-foreground/40">Performance</span> <br />
                  Marketing.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full group">
                  Start Free Audit
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full border-2 transition-colors">
                  View Demo
                </Button>
              </motion.div>
            </div>

          <div className="lg:col-span-4 lg:mb-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium leading-tight mb-8"
            >
              The world&apos;s first autonomous AI that manages ads across ChatGPT, Perplexity, Google, and Meta.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-4 border-l-4 border-primary pl-6"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider">Multi-Platform Mastery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider">Secure Data Pipeline</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold uppercase tracking-wider">Real-time Optimization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating UI Elements / Stats */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute bottom-20 right-[-10%] hidden xl:block w-[400px] h-[300px] border-2 border-border bg-background/80 backdrop-blur-xl p-8"
      >
        <div className="flex justify-between items-start mb-12">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg">
              <Zap className="h-8 w-8 fill-current" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Live Sync</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Managed Spend</span>
            <div className="text-5xl font-bold tracking-tight">$50M+</div>
          </div>
      </motion.div>
    </section>
  );
}
