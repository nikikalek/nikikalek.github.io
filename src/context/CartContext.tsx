import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem } from '../types';

const STORAGE_KEY = 'kraniec-koszyk';

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    setItems((prev) => {
      const id = `${item.type}-${item.productId}-${item.variant}-${item.nick}-${Date.now()}`;
      return [...prev, { ...item, id }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id || item.type !== 'key') return item;
        const nextQty = Math.max(1, quantity);
        return { ...item, variant: nextQty, price: Number(item.price) };
      }),
    );
  };

  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.price || 0), 0),
    [items],
  );

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, total, clearCart, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart musi być użyte wewnątrz CartProvider');
  return context;
}
