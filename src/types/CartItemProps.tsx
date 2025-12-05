import type { ProductType } from "./ProductType";

export type CartItemProps = {
  item: ProductType;
  quantity: number;
  size?: string;
  color?: { name: string; hex: string };
  
};
