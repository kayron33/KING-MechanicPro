import React, { useState, useEffect } from 'react';
import { Menu, X, WrenchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <WrenchIcon className="h-8 w-8 text-orange-500" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              MechanicPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/chat"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Chat
            </Link>
            <Link
              to="/login"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Register
            </Link>
            <Link
              to="/booking"
              className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-5 animate-fade-in-down">
            <div className="flex flex-col space-y-6 mt-4">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-slate-800 font-medium text-lg hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/chat"
                className="text-slate-800 font-medium text-lg hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chat
              </Link>
              <Link
                to="/login"
                className="text-slate-800 font-medium text-lg hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-slate-800 font-medium text-lg hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/booking"
                className="bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;