"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/product-card";
import { ProductModal } from "@/components/product-modal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterIcon, SlidersHorizontal } from "lucide-react";
import { CategoryTabs } from "@/components/category-tabs";
import { Button } from "@/components/ui/button";
import ActionSearchBar from "@/components/action-search-bar";

interface MarketplaceProps {
  products: Product[];
}

export function Marketplace({ products }: MarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === "all" || 
                         (priceFilter === "free" && product.isFree) || 
                         (priceFilter === "paid" && !product.isFree);
    
    const matchesCategory = categoryFilter === "all" || 
                           product.techStack.includes(categoryFilter);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Sort products based on selected order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortOrder === "price-asc") {
      const priceA = a.isFree ? 0 : a.price || 0;
      const priceB = b.isFree ? 0 : b.price || 0;
      return priceA - priceB;
    } else if (sortOrder === "price-desc") {
      const priceA = a.isFree ? 0 : a.price || 0;
      const priceB = b.isFree ? 0 : b.price || 0;
      return priceB - priceA;
    }
    return 0; // Default order (as in the original array)
  });

  return (
    <div>
      <CategoryTabs products={products} onCategoryChange={handleCategoryChange} />
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <ActionSearchBar products={products} />
        </div>
        
        <div className="flex gap-2 sm:self-end">
          <div className="w-full sm:w-48">
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <FilterIcon className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="free">Free Only</SelectItem>
                <SelectItem value="paid">Paid Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger>
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm("");
            setPriceFilter("all");
            setCategoryFilter("all");
          }}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">Showing {sortedProducts.length} of {products.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        </>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}