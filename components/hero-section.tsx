import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Discover Premium Digital Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our curated collection of high-quality templates, tools, and resources to accelerate your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Browse Products <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
    </div>
  );
}