import React from 'react';
import { Heart, Store, Users, Truck, Star, Clock } from 'lucide-react';

const features = [
  {
    name: 'Quality Products',
    description: 'We source only the best products for your pets, ensuring quality and safety.',
    icon: Star
  },
  {
    name: 'Expert Care',
    description: 'Our trained professionals provide top-notch care for all types of pets.',
    icon: Heart
  },
  {
    name: 'Wide Selection',
    description: 'Find everything your pet needs in one convenient location.',
    icon: Store
  },
  {
    name: 'Fast Delivery',
    description: 'Get pet essentials delivered to your doorstep quickly and securely.',
    icon: Truck
  },
  {
    name: 'Pet Community',
    description: 'Join our community of pet lovers for tips, events, and support.',
    icon: Users
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated team is always ready to assist with your pet care questions.',
    icon: Clock
  }
];

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything your pet needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At PetPals, we're committed to providing the best products and services for your furry, feathered, or scaly companions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full transition-transform hover:scale-105">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;