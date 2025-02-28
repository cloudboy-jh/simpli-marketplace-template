export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number | null;
  techStack: string[];
  githubUrl: string;
  screenshots?: string[];
  isFree: boolean;
  icon?: string;
  iconColor?: string;
}