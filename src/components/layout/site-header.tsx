"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { BookDemoModal } from "@/components/ryze/book-demo-modal";

// Muted navbar - HMR Cache Clear
export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "How it Works", href: "/#how-it-works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Zap className="relative h-5 w-5 fill-current" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">Ryze</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <BookDemoModal>
                <Button className="rounded-full px-6 font-semibold transition-all">
                  Book a Demo
                </Button>
              </BookDemoModal>
            </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 top-20 bg-background z-40 p-8 flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <BookDemoModal>
              <Button size="lg" className="mt-auto h-16 text-xl rounded-full font-semibold" onClick={() => setIsOpen(false)}>
                Book a Demo
              </Button>
            </BookDemoModal>
          </motion.div>
        )}
    </nav>
  );
}
