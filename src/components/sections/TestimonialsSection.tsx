import React, { useState } from 'react';
import TestimonialCard from '../common/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      rating: 5,
      comment: "Best auto repair shop in town! They fixed my brake issues quickly and at a fair price. The mechanics explained everything clearly.",
      date: "June 15, 2023",
      service: "Brake Repair"
    },
    {
      name: "Sarah Williams",
      rating: 5,
      comment: "I've been coming here for years and they never disappoint. Honest, reliable service every time. Highly recommend their AC repair services!",
      date: "July 22, 2023",
      service: "AC Repair"
    },
    {
      name: "David Thompson",
      rating: 4,
      comment: "Great service and very knowledgeable staff. They diagnosed my engine problem quickly and had me back on the road the same day.",
      date: "May 3, 2023",
      service: "Engine Diagnostics"
    },
    {
      name: "Emily Parker",
      rating: 5,
      comment: "Excellent service! They were able to accommodate my emergency tire replacement and did it at a reasonable price.",
      date: "August 9, 2023",
      service: "Tire Services"
    },
    {
      name: "Robert Wilson",
      rating: 4,
      comment: "Very professional and thorough. They took the time to explain the electrical issues with my car and fixed it right the first time.",
      date: "September 18, 2023",
      service: "Electrical Systems"
    },
    {
      name: "Jennifer Adams",
      rating: 5,
      comment: "The team here is amazing! They always treat me fairly and do excellent work. My car runs better than ever after their tune-up.",
      date: "October 5, 2023",
      service: "Regular Maintenance"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  // Overall statistics
  const stats = {
    totalClients: 1250,
    satisfactionRate: 98,
    completedRepairs: 3450,
    certifiedMechanics: 12
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-slate-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about our auto repair services.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Happy Clients', value: stats.totalClients, symbol: '+' },
            { label: 'Satisfaction Rate', value: stats.satisfactionRate, symbol: '%' },
            { label: 'Repairs Completed', value: stats.completedRepairs, symbol: '+' },
            { label: 'Certified Mechanics', value: stats.certifiedMechanics, symbol: '' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-orange-500">{stat.value}</span>
                <span className="text-3xl md:text-4xl font-bold text-orange-500">{stat.symbol}</span>
              </div>
              <p className="text-slate-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="opacity-0 animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-10 space-x-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-md text-slate-600 hover:text-orange-500 transition-colors focus:outline-none"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentPage ? 'bg-orange-500' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md text-slate-600 hover:text-orange-500 transition-colors focus:outline-none"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;