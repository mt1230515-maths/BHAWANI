import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon!",
    });
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for premium quality tiles and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="scroll-reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
              >
                Send Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="scroll-reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-red-400" />
                    <span className="text-gray-300">+91 9300608532, 9669608532</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-red-400" />
                    <span className="text-gray-300">info@bhawanytiles.in</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-400 mt-1" />
                    <div className="text-gray-300">
                      <p>Marble Market, Ring Road No.1,</p>
                      <p>Raza Complex, Near HP Petrol Pump,</p>
                      <p>Shop No. 4-5, Raipur</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Location</h3>
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.317495629722!2d81.64475887503698!3d21.21925498047815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dc555f8e97f7%3A0xeab4b97e2d1a8cd0!2sBhawani%20Tiles%20Industries!5e0!3m2!1sen!2sin!4v1749045950241!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center">
                <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Our Showroom</h3>
                <p className="text-red-100">Experience our premium collection in person!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;