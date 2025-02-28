"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductIconProps {
  iconName?: string;
  iconColor?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductIcon({ 
  iconName = "Package", 
  iconColor, 
  size = "md",
  className
}: ProductIconProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Package;
  
  // Size mappings
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };
  
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-8 w-8"
  };
  
  // Custom CSS variable for the color
  const style = {
    "--icon-bg-color": iconColor
  } as React.CSSProperties;

  return (
    <div 
      className={cn(
        "rounded-full flex items-center justify-center flex-shrink-0 product-icon-bg",
        sizeClasses[size],
        className
      )}
      style={style}
    >
      <IconComponent className={cn("text-white", iconSizes[size])} />
    </div>
  );
}