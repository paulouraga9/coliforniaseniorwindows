import React from 'react';
import { Home, Calendar, Shield, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Trusted by Senior Communities",
      description: "We specialize in working with retirement homes, assisted living facilities, and senior residences."
    },
    {
      icon: <Calendar className="h-12 w-12 text-blue-600" />,
      title: "Scheduled, Convenient Service",
      description: "Flexible scheduling that respects your routine and minimizes disruption."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Safety First Approach",
      description: "Our trained team follows strict protocols to ensure safety and security for seniors."
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Senior-Friendly Service",
      description: "Respectful, patient, and considerate service tailored to senior needs."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose California Senior Windows?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At California Senior Windows, we understand that a clean, well-maintained living environment enhances quality of life for seniors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-700 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">A Brighter View for Senior Living</h3>
          <p className="text-lg text-center">
            Natural light improves mood, sleep quality, and overall well-being. Clean windows help create a positive, uplifting environment for seniors to enjoy their golden years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;