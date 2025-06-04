
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, Target, Heart, Lightbulb, HeartHandshake as Handshake, Shield } from 'lucide-react';

const valuesData = [
  { title: 'Quality', description: 'Premium grade materials and strict quality control', icon: Shield, color: 'text-red-600' },
  { title: 'Innovation', description: 'Modern manufacturing technology', icon: Lightbulb, color: 'text-orange-600' },
  { title: 'Reliability', description: 'Consistent quality and timely delivery', icon: CheckCircle, color: 'text-yellow-600' },
  { title: 'Customer Focus', description: 'Dedicated to customer satisfaction', icon: Heart, color: 'text-green-600' },
  { title: 'Partnership', description: 'Building lasting relationships', icon: Handshake, color: 'text-blue-600' }
];

const achievementsData = [
  { number: '25+', label: 'Years Experience', icon: Clock },
  { number: '1000+', label: 'Happy Clients', icon: Users },
  { number: '2000+', label: 'Projects Completed', icon: Award },
  { number: '50+', label: 'Product Varieties', icon: Target }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-red-600">Bhawani Tiles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1998, Bhawani Tiles Industries has been a pioneer in manufacturing premium quality tiles and pavers. 
            Our state-of-the-art manufacturing facility in Raipur produces a wide range of products that meet the highest standards of quality and durability.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            With over two decades of experience in paver production, we have established ourselves as a trusted name in the industry. 
            Our commitment to innovation and quality has made us a preferred choice for both residential and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {valuesData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center scroll-reveal card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 h-full">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <achievement.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;