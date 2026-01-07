import { Hero } from "@/components/ryze/hero";
import { Features } from "@/components/ryze/features";
import { HowItWorks } from "@/components/ryze/how-it-works";
import { Testimonials } from "@/components/ryze/testimonials";
import { PricingCards } from "@/components/ryze/pricing-cards";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingCards />
      
      {/* Final CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-border" />
        
        <div className="mx-auto max-w-[1400px]">
          <div className="relative border-4 border-foreground p-12 md:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Zap className="h-12 w-12 text-primary fill-current" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
                Ready to <br />
                <span className="text-primary">Dominate</span> <br />
                The Market?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-xl">
                Join 230+ companies using Ryze AI to outpace their competition. Get your autonomous audit today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="h-20 px-12 text-2xl font-black uppercase italic tracking-tighter rounded-none group">
                  Get Free Audit
                  <ArrowUpRight className="ml-2 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-20 px-12 text-2xl font-black uppercase italic tracking-tighter rounded-none border-2 hover:bg-foreground hover:text-background transition-colors">
                  Talk to AI Ops
                </Button>
              </div>
            </div>

            {/* Background Text Overlay */}
            <div className="absolute bottom-[-10%] right-[-5%] text-[15rem] font-black uppercase italic tracking-tighter text-foreground/5 pointer-events-none whitespace-nowrap">
              RYZE NOW
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
