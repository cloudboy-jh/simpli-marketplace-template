"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";

interface CategoryTabsProps {
  products: Product[];
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ products, onCategoryChange }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Extract unique tech stack items to use as categories
  const allTechStacks = products.flatMap(product => product.techStack);
  const uniqueCategories = Array.from(new Set(allTechStacks)).sort();
  
  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Browse by Technology</h2>
      <Tabs defaultValue="all" value={activeCategory} onValueChange={handleCategoryChange} className="w-full overflow-auto">
        <TabsList className="inline-flex w-auto h-auto bg-transparent p-0 space-x-2">
          <TabsTrigger 
            value="all" 
            className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            All
          </TabsTrigger>
          {uniqueCategories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}