export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  discount?: string;
  colors: string[];
  tags: string[];
  category: string;
  rating?: number;
  reviews?: number;
  
};
