"use client";

import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function PricingCards() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses looking to optimize their first $5k.",
      features: [
        "Up to $5,000 Monthly Spend",
        "Google & Meta Audit",
        "24/7 Bid Management",
        "Weekly Reports",
      ],
      cta: "Start Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "$1,499",
      description: "Ideal for growing teams managing up to $25k monthly.",
      features: [
        "Up to $25,000 Monthly Spend",
        "AI Creative Gen",
        "Wasted Spend Guard",
        "ChatGPT & Perplexity Beta",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Scalable solutions for high-volume advertisers and agencies.",
      features: [
        "Unlimited Ad Spend",
        "Full Multi-Channel Suite",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-6 w-6 text-primary fill-current" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">The Tiers</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Simple <br />
              <span className="text-primary">Transparent</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-md font-medium leading-tight">
            No percentages of spend. Just flat fees for autonomous performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-12 border-4 ${
                tier.popular ? "border-primary bg-primary/5" : "border-foreground bg-background"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 italic">
                  Recommended
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-3xl font-black uppercase italic tracking-tight mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black italic tracking-tighter">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-sm font-bold uppercase text-muted-foreground">/mo</span>}
                </div>
                <p className="text-muted-foreground font-medium leading-tight">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-bold uppercase tracking-wide">
                    <Check className={`h-5 w-5 shrink-0 ${tier.popular ? 'text-primary' : 'text-foreground'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className={`h-16 text-xl font-black uppercase italic tracking-tighter rounded-none border-2 ${
                  tier.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
