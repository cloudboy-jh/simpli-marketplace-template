import Link from "next/link";
import { ShoppingBag, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-12 bg-muted/40">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xl font-bold">Simpli Marketplace</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover and download high-quality digital products for your next project.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Premium Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Popular Items
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Simpli Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}