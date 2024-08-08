import { Category } from "./category.model";

export interface Product {
  id : string;
  title: string;
  price: number;
  images: string [];
  description: string;
  category: Category;
}

