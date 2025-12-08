// Type definitions for the e-commerce store

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  weight: number; // in grams
  ingredients?: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  imageUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface ShippingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  notes?: string;
}

export interface Courier {
  id: string;
  name: string;
  service: string;
  cost: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: "bank_transfer" | "qris" | "cod";
  icon?: string;
  accountNumber?: string;
  accountName?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  courier: Courier;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shippingCost: number;
  total: number;
  status:
    | "pending"
    | "processing"
    | "packed"
    | "shipped"
    | "completed"
    | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export type FilterOptions = {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sortBy: "best-seller" | "price-low" | "price-high" | "newest";
};
