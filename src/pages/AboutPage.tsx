import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About PetPals
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional care and products for your pets since 2010.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                className="h-full w-full object-cover" 
                src="https://images.pexels.com/photos/7210747/pexels-photo-7210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Pet store interior" 
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                PetPals began with a simple mission: to create a place where pets and their owners feel valued, understood, and cared for. Founded by Dr. Lisa Chen, a veterinarian with over 15 years of experience, our journey started in a small storefront in 2010.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small pet supply store has grown into a comprehensive pet care center offering a wide range of products and services. Through the years, we've maintained our commitment to quality, expertise, and compassionate care.
              </p>
              <p className="text-gray-600">
                Today, PetPals is proud to serve thousands of pet owners and their beloved companions, continuing our tradition of excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-teal-600 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Compassion</h3>
              <p className="text-gray-600 text-center">
                We treat every pet with the same care and attention we'd give to our own, ensuring they feel safe and loved.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Quality</h3>
              <p className="text-gray-600 text-center">
                We never compromise on the quality of our products and services, sourcing only the best for your beloved companions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Expertise</h3>
              <p className="text-gray-600 text-center">
                Our team of pet care professionals brings years of experience and continuous education to provide expert advice and care.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" 
                src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Lisa Chen" 
              />
              <h3 className="text-xl font-semibold text-center mb-1">Dr. Lisa Chen</h3>
              <p className="text-teal-600 text-center mb-2">Founder & Veterinarian</p>
              <p className="text-gray-600 text-center text-sm">
                With over 15 years of experience, Dr. Chen leads our veterinary services with compassion and expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" 
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mark Johnson" 
              />
              <h3 className="text-xl font-semibold text-center mb-1">Mark Johnson</h3>
              <p className="text-teal-600 text-center mb-2">Lead Groomer</p>
              <p className="text-gray-600 text-center text-sm">
                Mark's gentle approach and attention to detail make him a favorite among our furry clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sarah Williams" 
              />
              <h3 className="text-xl font-semibold text-center mb-1">Sarah Williams</h3>
              <p className="text-teal-600 text-center mb-2">Pet Nutritionist</p>
              <p className="text-gray-600 text-center text-sm">
                Sarah helps pet owners find the perfect diet for their pets' specific needs and health conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" 
                src="https://images.pexels.com/photos/6326399/pexels-photo-6326399.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Carlos Rodriguez" 
              />
              <h3 className="text-xl font-semibold text-center mb-1">Carlos Rodriguez</h3>
              <p className="text-teal-600 text-center mb-2">Dog Trainer</p>
              <p className="text-gray-600 text-center text-sm">
                Carlos specializes in positive reinforcement training to help dogs become well-behaved family members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;