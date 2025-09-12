'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Target, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  const features = [
    { icon: CheckCircle, title: 'Government Certified', description: 'All courses approved by regulatory authorities' },
    { icon: Users, title: 'Expert Faculty', description: 'Learn from experienced industry professionals' },
    { icon: Award, title: 'Industry Recognition', description: 'Certificates recognized by top employers' },
    { icon: Target, title: '100% Placement', description: 'Guaranteed job placement assistance' }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-[#000058] to-[#000070] bg-clip-text text-transparent">Miracle Care Campus</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, Miracle Care Campus has been Sri Lanka's premier institution for healthcare and language training. We've successfully trained over 500 students who now work in prestigious positions locally and internationally.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between education and employment by providing practical, industry-relevant training that prepares our students for successful careers in healthcare, caregiving, and international opportunities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="h-6 w-6 text-[#000058] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-gradient-to-r from-[#000058] to-[#000070] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#000070] hover:to-[#000088] transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Healthcare training"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Student training"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-8"
              >
                <img
                  src="https://images.pexels.com/photos/8636677/pexels-photo-8636677.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Language class"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Campus facilities"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#000058] to-[#000070] rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Part of Miracle Care Healthcare Group</h3>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Miracle Care Campus is a proud subsidiary of Miracle Care Hospital, bringing together 
            decades of healthcare excellence and professional training expertise.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Miracle Care Campus Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-center"
            >
              
                <Image src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757487969/Image_21_1_1_hzmuyy.png" alt='' width={150} height={150} />
              
              <h4 className="text-xl font-bold mb-2">Miracle Care Campus</h4>
              <p className="text-sm opacity-80">Professional Training Institute</p>
              <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-xs">
                Training Division
              </div>
            </motion.div>

            {/* Connection Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <div className="flex items-center">
                <div className="w-16 h-0.5 bg-white/50"></div>
                <div className="mx-2 text-white/70">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div className="w-16 h-0.5 bg-white/50"></div>
              </div>
              <p className="text-xs opacity-70 mt-2 text-center">Subsidiary of</p>
            </motion.div>

            {/* Miracle Care Hospital Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-center"
            >
                <Image src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757662225/WhatsApp_Image_2025-09-10_at_10.22.26_1b6c528d_fnfhq3.png" alt='' width={150} height={150} />
              <h4 className="text-xl font-bold mb-2">Miracle Care Hospital</h4>
              <p className="text-sm opacity-80">Healthcare Excellence Since 2008</p>
              <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-xs">
                Mother Company
              </div>
            </motion.div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">1000+</div>
              <p className="text-sm opacity-80">Lives Touched</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">2</div>
              <p className="text-sm opacity-80">Divisions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}