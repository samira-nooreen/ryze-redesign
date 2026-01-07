"use client";

import { motion } from "framer-motion";
import { Quote, Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Growth, TechFlow",
      content: "Ryze AI transformed our Meta campaigns. We saw a 40% reduction in CPA within the first month.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Director, Luxo",
      content: "The wasted spend identification alone paid for the subscription 10x over. Incredible tool.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      name: "Elena Petrova",
      role: "Marketing Manager, Zenith",
      content: "As early adopters of AI search ads, Ryze has given us a massive edge on the conversational web.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Zap className="h-6 w-6 fill-current" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">Social Proof</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                Loved by <span className="text-primary">Ops Teams</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 rounded-3xl bg-muted/30 border border-border hover:border-primary/50 transition-all group"
              >
                <Quote className="h-10 w-10 text-primary/40 mb-8" />
                <p className="text-xl font-medium leading-relaxed mb-12">
                  &ldquo;{t.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold">{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold tracking-tight">{t.name}</div>
                    <div className="text-sm font-medium text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
