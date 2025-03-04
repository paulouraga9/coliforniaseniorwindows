import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residence: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      residence: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Keep Your Windows Sparkling!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional service with professionalism and care. Schedule a free consultation and see how we can help keep your living space bright, clean, and welcoming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="residence" className="block text-sm font-medium text-gray-700 mb-1">Residence/Community</label>
                  <input
                    type="text"
                    id="residence"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">888-41-STOUT</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">booking@californiaschoolwindows.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Office Location</p>
                  <p className="text-gray-600">1401 21st Street, Sacramento, CA 95811</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Weekend service available by appointment</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-700 text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3">Service Area</h4>
              <p className="mb-4">We proudly serve senior communities throughout California, including:</p>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> San Francisco</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> Los Angeles</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> San Diego</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> Sacramento</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> San Jose</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> Oakland</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;