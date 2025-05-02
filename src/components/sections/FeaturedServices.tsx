import React from 'react';
import { PenTool as Tool, Gauge, Thermometer, Activity, Battery, Compass } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const FeaturedServices = () => {
  const services = [
    {
      title: 'Engine Diagnostics',
      description: 'We utilize advanced diagnostic tools to identify and troubleshoot engine issues with precision.',
      icon: <Gauge className="h-6 w-6" />,
      link: '/services/engine-diagnostics',
      imageUrl: 'https://images.pexels.com/photos/8824756/pexels-photo-8824756.jpeg'
    },
    {
      title: 'Brake Repair',
      description: 'Our brake repair services ensure your vehicle stops safely and efficiently every time.',
      icon: <Activity className="h-6 w-6" />,
      link: '/services/brake-repair',
      imageUrl: 'https://images.pexels.com/photos/8824764/pexels-photo-8824764.jpeg'
    },
    {
      title: 'AC Service & Repair',
      description: 'Keep your car cool with our comprehensive air conditioning repair and maintenance services.',
      icon: <Thermometer className="h-6 w-6" />,
      link: '/services/ac-repair',
      imageUrl: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg'
    },
    {
      title: 'Electrical Systems',
      description: 'From batteries to complex electrical issues, our team can diagnose and fix all electrical problems.',
      icon: <Battery className="h-6 w-6" />,
      link: '/services/electrical-systems',
      imageUrl: 'https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg'
    },
    {
      title: 'Tire Services',
      description: 'Tire rotation, balancing, and replacement services to keep your vehicle driving smoothly.',
      icon: <Compass className="h-6 w-6" />,
      link: '/services/tire-services',
      imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg'
    },
    {
      title: 'Regular Maintenance',
      description: 'Preventative maintenance services to keep your vehicle running at its best and prevent costly repairs.',
      icon: <Tool className="h-6 w-6" />,
      link: '/services/maintenance',
      imageUrl: 'https://images.pexels.com/photos/3807455/pexels-photo-3807455.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Professional Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-slate-600">
            We offer a comprehensive range of automotive repair and maintenance services 
            to keep your vehicle running at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button 
              variant="primary" 
              className="animate-bounce-subtle"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;