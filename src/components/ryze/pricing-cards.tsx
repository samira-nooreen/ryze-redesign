"use client";

import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { BookDemoModal } from "./book-demo-modal";

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
    <section id="pricing" className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
              Simple <span className="text-muted-foreground/40">Flat Fees</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md font-medium leading-relaxed">
            No percentages of spend. Just flat fees for autonomous performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-10 rounded-2xl border transition-all duration-300 ${
                tier.popular ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-background">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold tracking-tight mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className={`text-sm font-medium ${tier.popular ? 'text-background/60' : 'text-muted-foreground'}`}>/mo</span>}
                </div>
                <p className={`text-sm font-medium leading-relaxed ${tier.popular ? 'text-background/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-medium">
                    <Check className={`h-5 w-5 shrink-0 ${tier.popular ? 'text-background' : 'text-foreground'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <BookDemoModal>
                <Button
                  variant={tier.popular ? "secondary" : "outline"}
                  className="h-14 text-lg font-semibold rounded-full w-full"
                >
                  {tier.cta}
                </Button>
              </BookDemoModal>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
