"use client";

import { motion } from "framer-motion";
import { PricingCards } from "@/components/ryze/pricing-cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, HelpCircle, Zap } from "lucide-react";

export default function PricingPage() {
  const faqs = [
    {
      question: "How does the free audit work?",
      answer: "Once you connect your accounts, our AI performs a comprehensive scan of your historical data, identifying immediate wasted spend and structural improvements. You get a full report with no obligation.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, Ryze AI is a month-to-month service. You can upgrade, downgrade, or cancel your plan at any time through your dashboard.",
    },
    {
      question: "What platforms do you support?",
      answer: "Currently, we offer full autonomous management for Google Ads and Meta Ads (Facebook/Instagram). We are also in beta for Perplexity and ChatGPT search ad surfaces.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and only access your ad accounts through official APIs. We never share your data with third parties.",
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
                  Investment Strategy
                </span>
              </div>
              <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.85] font-black uppercase italic tracking-tighter">
                Predictable <br />
                <span className="text-primary">Performance</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-md leading-tight mb-4">
              Scale your advertising performance with flat fees and massive ROI. No percentages, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingCards />

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-12 border-t border-border bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-6 w-6 text-primary fill-current" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">The Intel</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Common <br />
              <span className="text-primary">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-4 border-foreground px-8 py-4 bg-background hover:bg-secondary/20 transition-colors">
                <AccordionTrigger className="text-xl font-black uppercase italic italic tracking-tight hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium text-muted-foreground leading-tight pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Comparison CTA */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Not Sure <br />
              <span className="text-primary-foreground/50">Where to Start?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" variant="secondary" className="h-20 px-12 text-2xl font-black uppercase italic tracking-tighter rounded-none group">
                Compare Plans
                <ArrowUpRight className="ml-2 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-12 text-2xl font-black uppercase italic tracking-tighter rounded-none border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                Book AI Ops Call
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-black/5 pointer-events-none italic uppercase">RYZE</div>
      </section>
    </div>
  );
}

