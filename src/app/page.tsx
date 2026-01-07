import { Hero } from "@/components/ryze/hero";
import { Features } from "@/components/ryze/features";
import { HowItWorks } from "@/components/ryze/how-it-works";
import { Testimonials } from "@/components/ryze/testimonials";
import { PricingCards } from "@/components/ryze/pricing-cards";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingCards />
      
      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to Ryze Above?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Join 230+ companies using Ryze AI to dominate their advertising performance. Get your free ad audit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg group">
                Get Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
                Speak with an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
