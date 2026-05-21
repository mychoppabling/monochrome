export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ProductColor = 'Black' | 'White' | 'Gray';
export type ProductCategory = 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories';
export type ProductGender = 'male' | 'female';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  gender: ProductGender;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  care: string[];
  images: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: ProductSize;
  color: ProductColor;
  quantity: number;
}
