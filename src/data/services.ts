import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Basic Dog Grooming',
    description: 'Full bath, brush, nail trim, and ear cleaning for your furry friend.',
    price: 45.00,
    imageUrl: 'https://images.pexels.com/photos/6568537/pexels-photo-6568537.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1 hour'
  },
  {
    id: 2,
    name: 'Premium Cat Grooming',
    description: 'Complete grooming service for your feline, including bath, fur trimming, and nail clipping.',
    price: 55.00,
    imageUrl: 'https://images.pexels.com/photos/7210263/pexels-photo-7210263.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '45 minutes'
  },
  {
    id: 3,
    name: 'Veterinary Check-up',
    description: 'Basic health check-up including vaccinations and wellness exam.',
    price: 75.00,
    imageUrl: 'https://images.pexels.com/photos/6235112/pexels-photo-6235112.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '30 minutes'
  },
  {
    id: 4,
    name: 'Pet Training Session',
    description: 'One-on-one training to teach your pet basic commands and behaviors.',
    price: 60.00,
    imageUrl: 'https://images.pexels.com/photos/6131084/pexels-photo-6131084.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1 hour'
  },
  {
    id: 5,
    name: 'Pet Boarding',
    description: 'Safe and comfortable overnight stay for your pet.',
    price: 40.00,
    imageUrl: 'https://images.pexels.com/photos/7210694/pexels-photo-7210694.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'per night'
  },
  {
    id: 6,
    name: 'Pet Dental Cleaning',
    description: 'Professional dental cleaning to keep your pet\'s teeth healthy.',
    price: 85.00,
    imageUrl: 'https://images.pexels.com/photos/6568619/pexels-photo-6568619.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '45 minutes'
  }
];