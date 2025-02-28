import { products } from "@/data/products";
import { Marketplace } from "@/components/marketplace";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="container mx-auto py-12 px-4">
          <Marketplace products={products} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}