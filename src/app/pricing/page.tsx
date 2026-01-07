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
import { BookDemoModal } from "@/components/ryze/book-demo-modal";

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
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Investment Strategy
                  </span>
                </div>
                <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.1] font-bold tracking-tight">
                  Predictable <br />
                  <span className="text-primary">Performance</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-md leading-relaxed mb-4">
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
            <div className="mb-24 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">Support</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl px-8 py-2 bg-background hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-xl font-bold tracking-tight hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-medium text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final Comparison CTA */}
        <section className="py-32 px-6 lg:px-12 bg-muted/30 relative overflow-hidden border-t border-border">
          <div className="mx-auto max-w-[1400px] relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground font-medium mb-12 max-w-2xl mx-auto">
              Our AI specialists can help you find the perfect plan for your current scale and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookDemoModal>
                <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-full group">
                  Compare Plans
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </BookDemoModal>
              <BookDemoModal>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full border-2 transition-colors">
                  Book AI Ops Call
                </Button>
              </BookDemoModal>
            </div>
          </div>
        </section>
      </div>
    );
  }


