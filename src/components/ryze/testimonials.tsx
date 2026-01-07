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
              <Zap className="h-6 w-6 text-primary fill-current" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">The Proof</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Loved By <br />
              <span className="text-primary">Ops Teams</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-12 border-2 border-border hover:border-primary transition-colors group"
            >
              <Quote className="h-12 w-12 text-primary mb-8" />
              <p className="text-2xl font-black uppercase italic tracking-tight mb-12 leading-tight">
                &ldquo;{t.content}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 rounded-none border-2 border-foreground">
                  <AvatarImage src={t.image} alt={t.name} className="rounded-none" />
                  <AvatarFallback className="rounded-none bg-primary text-primary-foreground font-black">{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-black uppercase tracking-wider">{t.name}</div>
                  <div className="text-xs font-bold uppercase text-muted-foreground">{t.role}</div>
                </div>
              </div>

              {/* Decorative block */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-border group-hover:bg-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
