import { createContext } from 'react';
import type { CartItem, Product, ProductSize, ProductColor } from './types';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  add: (product: Product, size: ProductSize, color: ProductColor) => void;
  remove: (id: string, size: ProductSize, color: ProductColor) => void;
  changeQty: (id: string, size: ProductSize, color: ProductColor, delta: number) => void;
  toggle: () => void;
  close: () => void;
  total: number;
  count: number;
}

export const CartContext = createContext<CartContextType>(null!);
