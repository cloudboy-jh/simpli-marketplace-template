"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send, Package, ShoppingCart, FileText, CheckSquare, PieChart, Cloud, Palette } from "lucide-react";
import useDebounce from "@/hooks/use-debounce";
import { Product } from "@/types/product";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
  product?: Product;
}

interface SearchResult {
  actions: Action[];
}

function ActionSearchBar({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const debouncedQuery = useDebounce(query, 200);

  // Convert products to actions format
  const productActions: Action[] = products.map(product => {
    // Get the appropriate icon component based on the product's icon name
    let icon;
    const iconStyle = { color: product.iconColor || "#94a3b8" };
    const baseColor = product.iconColor || "#f1f5f9";
    const iconBgStyle = {
      background: `radial-gradient(circle, ${baseColor}50 0%, ${baseColor}20 100%)`,
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    
    switch (product.icon) {
      case "CheckSquare":
        icon = (
          <div style={iconBgStyle}>
            <CheckSquare className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      case "PieChart":
        icon = (
          <div style={iconBgStyle}>
            <PieChart className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      case "Cloud":
        icon = (
          <div style={iconBgStyle}>
            <Cloud className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      case "ShoppingCart":
        icon = (
          <div style={iconBgStyle}>
            <ShoppingCart className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      case "Palette":
        icon = (
          <div style={iconBgStyle}>
            <Palette className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      case "FileText":
        icon = (
          <div style={iconBgStyle}>
            <FileText className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
        break;
      default:
        icon = (
          <div style={iconBgStyle}>
            <Package className="h-3.5 w-3.5" style={iconStyle} />
          </div>
        );
    }

    return {
      id: product.id,
      label: product.name,
      icon: icon,
      description: product.isFree ? "Free" : `$${product.price?.toFixed(2)}`,
      short: product.techStack[0] || "",
      end: product.techStack.length > 1 ? `+${product.techStack.length - 1}` : "",
      product: product
    };
  });

  useEffect(() => {
    if (!isFocused) {
      setResult(null);
      return;
    }

    if (!debouncedQuery) {
      setResult({ actions: productActions });
      return;
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim();
    const filteredActions = productActions.filter((action) => {
      const searchableText = action.label.toLowerCase() + 
                            (action.product?.description?.toLowerCase() || "") + 
                            (action.product?.techStack.join(" ").toLowerCase() || "");
      return searchableText.includes(normalizedQuery);
    });

    setResult({ actions: filteredActions });
  }, [debouncedQuery, isFocused, products]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
  };

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Reset selectedAction when focusing the input
  const handleFocus = () => {
    setSelectedAction(null);
    setIsFocused(true);
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-col justify-start items-center">
        <div className="w-full sticky top-0 bg-background z-10">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block" htmlFor="search">
            Search Products
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search templates, tools, resources..."
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg focus-visible:ring-offset-0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="popLayout">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full">
          <AnimatePresence>
            {isFocused && result && !selectedAction && (
              <motion.div
                className="w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-black mt-1 absolute z-50"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  {result.actions.map((action) => (
                    <motion.li
                      key={action.id}
                      className="px-3 py-2 flex items-center justify-between hover:bg-gray-200 dark:hover:bg-zinc-900 cursor-pointer rounded-md"
                      variants={item}
                      layout
                      onClick={() => setSelectedAction(action)}
                    >
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{action.icon}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{action.label}</span>
                          <span className="text-xs text-gray-400">{action.description}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{action.short}</span>
                        <span className="text-xs text-gray-400 text-right">{action.end}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-2 px-3 py-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Press ⌘K to open search</span>
                    <span>ESC to cancel</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ActionSearchBar;