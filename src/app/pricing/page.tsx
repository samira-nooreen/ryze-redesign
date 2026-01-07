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
import { ArrowRight, HelpCircle } from "lucide-react";

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
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transparent <span className="text-primary">Pricing</span>
          </motion.h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Scale your advertising performance with predictable costs and a massive ROI.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingCards />

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about Ryze AI and our pricing.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Comparison CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which plan is right?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 group">
              Compare All Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Speak to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
