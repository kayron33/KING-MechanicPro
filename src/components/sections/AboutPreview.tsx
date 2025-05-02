import React from 'react';
import { Award, ThumbsUp, Clock, Shield } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Certified Mechanics',
      description: 'Our team consists of ASE-certified mechanics with years of experience.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive service warranties.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timely Service',
      description: 'We respect your time and strive to complete all repairs promptly.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Honest Pricing',
      description: 'Transparent pricing with no hidden fees or unnecessary services.'
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-500/5 transform -translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.pexels.com/photos/4489796/pexels-photo-4489796.jpeg" 
                alt="Mechanics working on car" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Experience Quality Auto Repair Since 2010
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-slate-600 mb-6">
                For over a decade, MechanicPro has been the trusted choice for vehicle repairs and maintenance in the community. 
                We combine technical expertise with personalized service to keep your car running at its best.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="flex items-start space-x-4 opacity-0 animate-fade-in-right"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex-shrink-0 bg-orange-100 p-2 rounded-md text-orange-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button variant="primary" className="animate-bounce-subtle">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;