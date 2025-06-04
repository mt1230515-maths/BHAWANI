import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img  alt="Bhawani Tiles factory and products showcase" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460447325427-ce3901d00a6d" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="floating-animation">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/2706f2b8a4a4756fcf4e49918e1af257.jpg" 
              alt="Bhawani Tiles Industries Logo" 
              className="h-32 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow mb-6">
              BHAWANI TILES
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          </div>
          
          <motion.p 
            className="text-2xl md:text-3xl text-white text-shadow font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Excellence in Every Tile
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Premium quality tiles and pavers for contemporary, modern, and stylish spaces. 
            Ensuring everlasting quality, innovation, and customer satisfaction.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 pulse-glow text-lg px-8 py-3"
              onClick={() => scrollToSection('products')}
            >
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;