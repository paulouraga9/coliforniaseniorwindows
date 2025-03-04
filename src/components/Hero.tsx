import React from 'react';
import { CheckCircle, Droplets } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-blue-700 text-white">
      {/* Main background with opacity */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Droplets className="h-10 w-10 text-blue-300 mr-3" />
              <span className="text-2xl font-bold text-blue-100">California Senior Windows</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Crystal Clear Views for Senior Living
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional Window Cleaning for Senior Communities & Residences
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-blue-50">
              We help create bright, clean, and safe living environments through specialized window cleaning services designed with seniors in mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-bold text-center hover:bg-blue-100 transition-colors shadow-lg"
              >
                Get a Free Quote
              </a>
              <a 
                href="#services" 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-bold text-center hover:bg-blue-600 transition-colors"
              >
                Our Services
              </a>
            </div>
            
            <div className="bg-blue-800/70 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2 text-blue-100">Trusted by Senior Communities</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-2" />
                  <span className="text-blue-50">Retirement Homes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-2" />
                  <span className="text-blue-50">Assisted Living</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-2" />
                  <span className="text-blue-50">Senior Apartments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-2" />
                  <span className="text-blue-50">Private Residences</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80" 
                  alt="Senior living with clean windows" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Floating card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Senior enjoying view" 
                  className="w-full h-auto rounded mb-2"
                />
                <p className="text-blue-700 text-sm font-medium">Brighter spaces for better living</p>
              </div>
              
              {/* Floating card 2 */}
              <div className="absolute -top-6 -right-6 bg-blue-700 p-4 rounded-lg shadow-lg w-48 text-white">
                <div className="flex items-center justify-center mb-2">
                  <Droplets className="h-8 w-8 text-blue-300" />
                </div>
                <p className="text-center text-sm">Professional service with 100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;