export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
}

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  user: User;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'delivering' | 'completed';
  total: number;
  joke?: string;
  createdAt: Date;
}