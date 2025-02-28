"use client";

import { Product } from "@/types/product";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, ExternalLinkIcon, Package, CheckSquare, PieChart, Cloud, ShoppingCart, Palette, FileText } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  // Determine which icon to use based on the product's icon name
  const getIconComponent = () => {
    const iconStyle = { color: product.iconColor || "#94a3b8" };
    
    switch (product.icon) {
      case "CheckSquare":
        return <CheckSquare className="h-8 w-8" style={iconStyle} />;
      case "PieChart":
        return <PieChart className="h-8 w-8" style={iconStyle} />;
      case "Cloud":
        return <Cloud className="h-8 w-8" style={iconStyle} />;
      case "ShoppingCart":
        return <ShoppingCart className="h-8 w-8" style={iconStyle} />;
      case "Palette":
        return <Palette className="h-8 w-8" style={iconStyle} />;
      case "FileText":
        return <FileText className="h-8 w-8" style={iconStyle} />;
      default:
        return <Package className="h-8 w-8" style={iconStyle} />;
    }
  };

  // Create a gradient background based on the product's color
  const getIconBackground = () => {
    const baseColor = product.iconColor || "#f1f5f9";
    
    return {
      background: `radial-gradient(circle, ${baseColor} 0%, ${baseColor}30 70%, ${baseColor}10 100%)`,
      boxShadow: `0 0 20px ${baseColor}40`
    };
  };

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-md overflow-hidden group">
      <div className="flex items-center justify-center pt-6 pb-2">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={getIconBackground()}
        >
          {getIconComponent()}
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          {product.isFree ? (
            <Badge variant="secondary">Free</Badge>
          ) : (
            <Badge variant="default">${product.price?.toFixed(2)}</Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{product.shortDescription}</p>
        
        <div className="mt-4 flex flex-wrap gap-1">
          {product.techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">{tech}</Badge>
          ))}
          {product.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">+{product.techStack.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => onOpenDetails(product)}
        >
          <InfoIcon className="h-4 w-4 mr-2" />
          Details
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => window.open(product.githubUrl, "_blank")}
          className="shrink-0"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          <span className="sr-only">View on GitHub</span>
        </Button>
      </CardFooter>
    </Card>
  );
}