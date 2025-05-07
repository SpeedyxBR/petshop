export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  duration: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  type: 'product' | 'service';
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Appointment {
  id: number;
  serviceId: number;
  petName: string;
  ownerName: string;
  date: string;
  time: string;
  notes?: string;
}