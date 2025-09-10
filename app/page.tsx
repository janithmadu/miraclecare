'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import FeaturedCourses from '@/components/sections/FeaturedCourses';
import CampusGallery from '@/components/sections/CampusGallery';
import Testimonials from '@/components/sections/Testimonials';
import ContactPreview from '@/components/sections/ContactPreview';
import Certifications from '@/components/sections/Certifications';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <AboutPreview />
      <CampusGallery />
      <FeaturedCourses />
      <Certifications />
      <Testimonials />
      <ContactPreview />
    </motion.div>
  );
}