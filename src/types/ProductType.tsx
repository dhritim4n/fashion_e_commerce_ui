export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice: number;
  discount?: string;
  colors: { name: string; hex: string }[];
  tags: string[];
  category: string;
  rating?: number;
  reviews?: number;
  quantity?: number;
  
};
