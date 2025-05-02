import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedServices from '../components/sections/FeaturedServices';
import AboutPreview from '../components/sections/AboutPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  useEffect(() => {
    document.title = 'MechanicPro | Professional Auto Repair Services';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;