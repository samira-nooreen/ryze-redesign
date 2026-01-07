"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Zap, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookDemoModalProps {
  children: React.ReactNode;
  triggerAsChild?: boolean;
}

export function BookDemoModal({ children, triggerAsChild = true }: BookDemoModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <Dialog onOpenChange={(open) => { if (!open) setTimeout(() => setIsSubmitted(false), 300); }}>
      <DialogTrigger asChild={triggerAsChild}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-border bg-background rounded-[2rem]">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 md:p-12"
              >
                <DialogHeader className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                    <Zap className="h-6 w-6 fill-current" />
                  </div>
                  <DialogTitle className="text-3xl font-bold tracking-tight">Book a Demo</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground font-medium pt-2">
                    See how Ryze AI can automate your ad operations and scale your performance.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</Label>
                      <Input id="firstName" placeholder="Jane" required className="h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" required className="h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company Website</Label>
                    <Input id="website" placeholder="https://company.com" required className="h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message (Optional)</Label>
                    <Textarea id="message" placeholder="Tell us about your ad goals..." className="min-h-[100px] bg-muted/30 border-border rounded-xl focus-visible:ring-primary resize-none" />
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20" disabled={isLoading}>
                    {isLoading ? "Scheduling..." : "Book My Demo"}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="h-20 w-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-8">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">You're on the list!</h3>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-sm">
                  We've received your request. An AI specialist will reach out within 24 hours to schedule your walkthrough.
                </p>
                <Button variant="outline" className="mt-12 h-12 rounded-xl px-8" onClick={() => setIsSubmitted(false)}>
                  Back to Website
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
