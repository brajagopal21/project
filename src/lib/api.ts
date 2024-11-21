import { MenuItem, Order, User } from './types';

const API_URL = 'http://localhost:3000/api';

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'API request failed');
  }
  
  return data;
}

export const api = {
  auth: {
    login: (email: string, password: string) =>
      fetchWithAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    register: (user: Partial<User> & { password: string }) =>
      fetchWithAuth('/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
      }),
  },
  menu: {
    getAll: () => fetchWithAuth('/menu'),
    getById: (id: string) => fetchWithAuth(`/menu/${id}`),
  },
  orders: {
    create: (items: { menuItemId: string; quantity: number }[]) =>
      fetchWithAuth('/orders', {
        method: 'POST',
        body: JSON.stringify({ items }),
      }),
    getAll: () => fetchWithAuth('/orders'),
    getById: (id: string) => fetchWithAuth(`/orders/${id}`),
  },
  user: {
    getProfile: () => fetchWithAuth('/user/profile'),
    updateProfile: (data: Partial<User>) =>
      fetchWithAuth('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
  },
};