import React from 'react';
import { Droplets, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl">California Senior Windows</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional window cleaning services for senior living communities throughout California.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-blue-400 transition-colors">Benefits</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Interior & Exterior Window Cleaning</li>
              <li className="text-gray-400">Screen & Track Cleaning</li>
              <li className="text-gray-400">Hard Water Stain Removal</li>
              <li className="text-gray-400">Senior-Friendly Maintenance Plans</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">888-41-STOUT</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">booking@californiaschoolwindows.com</span>
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">www.californiaschoolwindows.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>ExcelClean facility service is a DBA of www.californiaschoolwindows.com. All rights reserved. © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;