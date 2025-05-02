import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, WrenchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <WrenchIcon className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">MechanicPro</span>
            </div>
            <p className="text-slate-300 mb-6">
              Providing quality auto repair services for over 15 years. Our team of certified mechanics is dedicated to keeping your vehicle running smoothly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-orange-500 pl-3">Our Services</h3>
            <ul className="space-y-3">
              {['Oil Change', 'Brake Repair', 'Engine Diagnostics', 'Tire Services', 'AC Repair', 'Transmission Service'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-orange-500 pl-3">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-slate-300">Monday - Friday:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">Saturday:</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-300">Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/booking" 
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors inline-block"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-orange-500 pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-slate-300">123 Repair Street, Auto City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-slate-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-slate-300">info@mechanicpro.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-slate-300">Quick Response Within 24hrs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} MechanicPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 text-sm hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 text-sm hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;