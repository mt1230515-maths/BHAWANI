import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: 'BSBK Group',
    role: 'Construction Partner',
    content: 'Asian Tiles has been our trusted partner for premium quality tiles. Their reliability and product durability are unmatched.',
    rating: 5
  },
  {
    name: 'Mor Raipur',
    role: 'Residential Client',
    content: 'Exceptional quality and timely delivery. The tiles have transformed our space beautifully.',
    rating: 5
  },
  {
    name: 'Raheja Group',
    role: 'Commercial Developer',
    content: 'Outstanding project coordination and seamless execution. Asian Tiles delivers on every promise.',
    rating: 5
  },
  {
    name: 'Mosh Varaya',
    role: 'Interior Designer',
    content: 'The contemporary designs and modern aesthetics make Asian Tiles our go-to choice for all projects.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied clients say about our quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 card-hover scroll-reveal"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;