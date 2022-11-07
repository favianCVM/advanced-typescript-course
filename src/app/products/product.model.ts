export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type userId = string | number;

export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}
