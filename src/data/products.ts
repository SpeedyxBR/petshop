import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Dog Food',
    description: 'High-quality dog food with all essential nutrients for your furry friend.',
    price: 39.99,
    imageUrl: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food'
  },
  {
    id: 2,
    name: 'Cat Scratching Post',
    description: 'Durable scratching post to keep your cat entertained and your furniture safe.',
    price: 29.99,
    imageUrl: 'https://images.pexels.com/photos/6957506/pexels-photo-6957506.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'toys'
  },
  {
    id: 3,
    name: 'Dog Chew Toy',
    description: 'Tough and durable chew toy for hours of fun.',
    price: 12.99,
    imageUrl: 'https://images.pexels.com/photos/6343786/pexels-photo-6343786.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'toys'
  },
  {
    id: 4,
    name: 'Premium Cat Food',
    description: 'Nutritious cat food made with real ingredients.',
    price: 34.99,
    imageUrl: 'https://images.pexels.com/photos/6568661/pexels-photo-6568661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food'
  },
  {
    id: 5,
    name: 'Pet Carrier',
    description: 'Comfortable and secure carrier for transporting your pet.',
    price: 49.99,
    imageUrl: 'https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories'
  },
  {
    id: 6,
    name: 'Dog Collar',
    description: 'Stylish and comfortable collar for your dog.',
    price: 18.99,
    imageUrl: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories'
  },
  {
    id: 7,
    name: 'Small Animal Bedding',
    description: 'Soft and absorbent bedding for small pets.',
    price: 15.99,
    imageUrl: 'https://images.pexels.com/photos/6957589/pexels-photo-6957589.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories'
  },
  {
    id: 8,
    name: 'Fish Food',
    description: 'Balanced nutrition for freshwater and saltwater fish.',
    price: 8.99,
    imageUrl: 'https://images.pexels.com/photos/6957591/pexels-photo-6957591.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food'
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'food', name: 'Food' },
  { id: 'toys', name: 'Toys' },
  { id: 'accessories', name: 'Accessories' }
];