import React, { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-blue-300 mr-2" />
            <span className="font-bold text-xl">California Senior Windows</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
            <a href="#benefits" className="hover:text-blue-300 transition-colors">Benefits</a>
            <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition-colors">
              Contact Us
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#benefits" 
              className="block px-3 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 bg-white text-blue-700 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;