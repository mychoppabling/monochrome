import { useState, type ReactNode } from 'react';
import { CartContext } from './cartContext';
import type { CartItem, Product, ProductSize, ProductColor } from './types';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  const add = (product: Product, size: ProductSize, color: ProductColor) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === product.id && i.size === size && i.color === color
      );
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size,
          color,
          quantity: 1,
        },
      ];
    });
  };

  const remove = (productId: string, size: ProductSize, color: ProductColor) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size && i.color === color)));
  };

  const changeQty = (productId: string, size: ProductSize, color: ProductColor, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.productId === productId && i.size === size && i.color === color) {
            const q = i.quantity + delta;
            return q <= 0 ? null : { ...i, quantity: q };
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, add, remove, changeQty, toggle, close, total, count }}>
      {children}
    </CartContext.Provider>
  );
}
