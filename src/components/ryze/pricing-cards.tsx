"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PricingCards() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small businesses looking to optimize their first $5k in ad spend.",
      features: [
        "Up to $5,000 Monthly Spend",
        "Google & Meta Audit",
        "24/7 Bid Management",
        "Weekly Performance Reports",
        "Email Support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "$1,499",
      description: "Ideal for growing teams managing up to $25k in monthly ad spend.",
      features: [
        "Up to $25,000 Monthly Spend",
        "AI Creative Generation",
        "Wasted Spend Guard",
        "Perplexity & ChatGPT Beta",
        "Priority Support",
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
        "SLA & Premium Support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your growth stage. No hidden fees.
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
              className={`relative flex flex-col p-8 rounded-3xl border ${
                tier.popular ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                className={`w-full rounded-full h-12 text-base font-semibold ${
                  tier.popular ? "" : "hover:bg-primary hover:text-primary-foreground transition-colors"
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
