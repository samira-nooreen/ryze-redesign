"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
              <Zap className="h-4 w-4 fill-current" />
              Autonomous AI Ad Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Ryze Above the <br /> 
              <span className="text-primary">Ad Noise</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Empower your marketing team with the world&apos;s first autonomous AI that manages ads across ChatGPT, Perplexity, Google, and Meta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg group">
                Get Free Ad Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg group">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: TrendingUp, label: "Managed Ad Spend", value: "$50M+" },
              { icon: ShieldCheck, label: "Active Customers", value: "230+" },
              { icon: Zap, label: "Optimization Speed", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <stat.icon className="h-8 w-8 text-primary mb-4" />
                <span className="text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
