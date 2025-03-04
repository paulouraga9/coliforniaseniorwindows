import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "California Senior Windows has been maintaining the windows in our retirement community for years. Their attention to detail and respectful service is exactly what our residents appreciate.",
      author: "Satisfied Client",
      position: "California Senior Living Community"
    },
    {
      quote: "Working with a service provider that understands the unique needs of senior living makes all the difference. Their flexible scheduling and courteous staff give us peace of mind.",
      author: "Satisfied Client",
      position: "California Senior Living Community"
    },
    {
      quote: "The difference in natural light after their service is remarkable. Our residents comment on how much brighter and more cheerful their apartments feel.",
      author: "Satisfied Client",
      position: "California Senior Living Community"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to serve senior communities throughout California.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;