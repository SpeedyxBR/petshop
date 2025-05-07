import React from 'react';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedServices from '../components/home/FeaturedServices';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <FeaturedProducts />
      <FeaturedServices />
      <Testimonials />
    </div>
  );
};

export default HomePage;