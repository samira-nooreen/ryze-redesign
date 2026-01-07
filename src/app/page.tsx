import { Hero } from "@/components/ryze/hero";
import { Features } from "@/components/ryze/features";
import { HowItWorks } from "@/components/ryze/how-it-works";
import { Testimonials } from "@/components/ryze/testimonials";
import { PricingCards } from "@/components/ryze/pricing-cards";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";
import { BookDemoModal } from "@/components/ryze/book-demo-modal";

// Force refresh for HMR consistency
export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingCards />
      
      {/* Final CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-background relative border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative rounded-2xl bg-secondary p-12 md:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap className="h-24 w-24 fill-current" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Ready to Scale Your <br />
                Ad Operations?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium mb-12 max-w-xl">
                Join 230+ companies using Ryze AI to automate their growth. Get your autonomous audit today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <BookDemoModal>
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-full group">
                    Get Free Audit
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </BookDemoModal>
                <BookDemoModal>
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold rounded-full border-border hover:bg-background transition-colors">
                    Talk to Sales
                  </Button>
                </BookDemoModal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
