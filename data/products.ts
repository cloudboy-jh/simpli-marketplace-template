import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Task Manager Pro",
    shortDescription: "A simple task management application",
    description: "Task Manager Pro is a comprehensive task management solution that helps you organize your work and personal tasks in one place. It features drag-and-drop functionality, priority levels, and deadline reminders.",
    price: null,
    isFree: true,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    githubUrl: "https://github.com/example/task-manager-pro",
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "CheckSquare",
    iconColor: "hsl(180, 70%, 45%)" // Teal
  },
  {
    id: "2",
    name: "Budget Tracker",
    shortDescription: "Track your expenses and income",
    description: "Budget Tracker helps you manage your finances by tracking your income and expenses. It provides visual reports and insights to help you make better financial decisions.",
    price: 9.99,
    isFree: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/example/budget-tracker",
    screenshots: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "PieChart",
    iconColor: "hsl(330, 70%, 60%)" // Pink
  },
  {
    id: "3",
    name: "Weather Dashboard",
    shortDescription: "Real-time weather updates",
    description: "Weather Dashboard provides real-time weather updates for any location. It features a 7-day forecast, hourly predictions, and severe weather alerts.",
    price: null,
    isFree: true,
    techStack: ["React", "JavaScript", "CSS", "OpenWeather API"],
    githubUrl: "https://github.com/example/weather-dashboard",
    screenshots: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "Cloud",
    iconColor: "hsl(210, 70%, 60%)" // Blue
  },
  {
    id: "4",
    name: "E-commerce Starter",
    shortDescription: "Complete e-commerce solution",
    description: "E-commerce Starter is a complete solution for building online stores. It includes product listings, shopping cart, checkout process, and admin dashboard.",
    price: 19.99,
    isFree: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    githubUrl: "https://github.com/example/ecommerce-starter",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "ShoppingCart",
    iconColor: "hsl(150, 70%, 45%)" // Green
  },
  {
    id: "5",
    name: "Portfolio Template",
    shortDescription: "Showcase your work beautifully",
    description: "Portfolio Template is a customizable template for showcasing your work and skills. It's perfect for developers, designers, and other creative professionals.",
    price: null,
    isFree: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/example/portfolio-template",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "Palette",
    iconColor: "hsl(270, 70%, 60%)" // Purple
  },
  {
    id: "6",
    name: "Blog Platform",
    shortDescription: "Modern blogging solution",
    description: "Blog Platform is a modern solution for creating and managing blogs. It features a rich text editor, categories, tags, and SEO optimization.",
    price: 14.99,
    isFree: false,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Contentlayer"],
    githubUrl: "https://github.com/example/blog-platform",
    screenshots: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    icon: "FileText",
    iconColor: "hsl(40, 70%, 60%)" // Yellow/Gold
  }
];