import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The grooming service was exceptional! My dog looks amazing and the staff was so gentle with him. He's usually anxious during grooming, but he was relaxed the entire time.",
    author: "Amanda Peters",
    petName: "Max",
    petType: "Golden Retriever",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    content: "I've been buying pet food from PetPals for months now. The quality is top-notch, and my cat's health has improved significantly. The prices are reasonable too!",
    author: "Michael Johnson",
    petName: "Luna",
    petType: "Maine Coon",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    content: "The veterinary care here is outstanding. Dr. Wilson took her time with my rabbit and explained everything clearly. I appreciate the thorough and compassionate approach.",
    author: "Sarah Williams",
    petName: "Thumper",
    petType: "Holland Lop Rabbit",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-teal-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers and their pets.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500">Owner of {testimonial.petName} ({testimonial.petType})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;