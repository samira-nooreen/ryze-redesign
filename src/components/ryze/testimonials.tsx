"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Growth, TechFlow",
      content: "Ryze AI transformed our Meta campaigns. We saw a 40% reduction in CPA within the first month. The autonomous bidding is a game changer.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Director, Luxo",
      content: "The wasted spend identification alone paid for the subscription 10x over. It found thousands in inefficient keywords we had missed for months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Elena Petrova",
      role: "Marketing Manager, Zenith",
      content: "As early adopters of AI search ads, Ryze has given us a massive edge on Perplexity. Their reporting is the most transparent I've seen.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Market Leaders</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how teams are scaling their performance with Ryze AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-8 italic relative z-10 text-foreground/90">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
