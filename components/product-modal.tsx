"use client";

import { Product } from "@/types/product";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, DownloadIcon, GithubIcon, Package, CheckSquare, PieChart, Cloud, ShoppingCart, Palette, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState("details");
  
  if (!product) return null;

  const hasScreenshots = product.screenshots && product.screenshots.length > 0;

  // Determine which icon to use based on the product's icon name
  const getIconComponent = () => {
    const iconStyle = { color: product.iconColor || "#94a3b8" };
    
    switch (product.icon) {
      case "CheckSquare":
        return <CheckSquare className="h-5 w-5" style={iconStyle} />;
      case "PieChart":
        return <PieChart className="h-5 w-5" style={iconStyle} />;
      case "Cloud":
        return <Cloud className="h-5 w-5" style={iconStyle} />;
      case "ShoppingCart":
        return <ShoppingCart className="h-5 w-5" style={iconStyle} />;
      case "Palette":
        return <Palette className="h-5 w-5" style={iconStyle} />;
      case "FileText":
        return <FileText className="h-5 w-5" style={iconStyle} />;
      default:
        return <Package className="h-5 w-5" style={iconStyle} />;
    }
  };

  // Create a gradient background based on the product's color
  const getIconBackground = () => {
    const baseColor = product.iconColor || "#f1f5f9";
    
    return {
      background: `radial-gradient(circle, ${baseColor} 0%, ${baseColor}30 70%, ${baseColor}10 100%)`,
      boxShadow: `0 0 10px ${baseColor}40`
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={getIconBackground()}
              >
                {getIconComponent()}
              </div>
              <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            </div>
            <div>
              {product.isFree ? (
                <Badge variant="secondary" className="ml-2">Free</Badge>
              ) : (
                <Badge variant="default" className="ml-2">${product.price?.toFixed(2)}</Badge>
              )}
            </div>
          </div>
          <DialogDescription className="text-base mt-2">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="screenshots" disabled={!hasScreenshots}>
              Screenshots
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-4 pt-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="text-sm font-medium mb-2">Features</h4>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Fully responsive design</li>
                <li>Well-documented code</li>
                <li>Easy to customize</li>
                <li>Regular updates</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="text-sm font-medium mb-2">Repository</h4>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <GithubIcon className="h-4 w-4" />
                <a 
                  href={product.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  {product.githubUrl.replace('https://github.com/', '')}
                </a>
              </div>
            </div>
          </TabsContent>
          
          {hasScreenshots && (
            <TabsContent value="screenshots" className="pt-4">
              <div className="grid gap-4">
                {product.screenshots.map((screenshot, index) => (
                  <div key={index} className="overflow-hidden rounded-md border">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={screenshot}
                        alt={`${product.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>

        <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
            onClick={() => window.open(product.githubUrl, "_blank")}
          >
            <ExternalLinkIcon className="h-4 w-4 mr-2" />
            View on GitHub
          </Button>
          <Button 
            className="w-full sm:w-auto"
            onClick={() => window.open(product.githubUrl + "/archive/refs/heads/main.zip", "_blank")}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}