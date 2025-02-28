"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">Simpli Marketplace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">
              About
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-300">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary/80 transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium hover:text-primary/80 transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium hover:text-primary/80 transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}