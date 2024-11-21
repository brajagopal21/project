import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MenuItem, OrderItem } from './types';

interface CartStore {
  items: OrderItem[];
  addItem: (item: MenuItem, quantity: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (menuItem, quantity) => {
        const items = get().items;
        const existingItem = items.find(item => item.menuItem.id === menuItem.id);
        
        if (existingItem) {
          const updatedItems = items.map(item =>
            item.menuItem.id === menuItem.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ items: updatedItems });
        } else {
          set({ items: [...items, { id: crypto.randomUUID(), menuItem, quantity, price: menuItem.price }] });
        }
        
        set({ total: calculateTotal(get().items) });
      },
      removeItem: (itemId) => {
        set(state => ({
          items: state.items.filter(item => item.id !== itemId),
          total: calculateTotal(state.items.filter(item => item.id !== itemId))
        }));
      },
      updateQuantity: (itemId, quantity) => {
        set(state => ({
          items: state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          ),
          total: calculateTotal(state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          ))
        }));
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

function calculateTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}