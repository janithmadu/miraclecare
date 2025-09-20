"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { certificationsGov, features, stats } from "../data/statics";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000058] via-[#000070] to-[#000088]">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Empowering students with professional healthcare and language skills
            for over 15 years
          </p>
        </motion.div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-[#000058] to-[#000070] bg-clip-text text-transparent">
                  Miracle Care Campus
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 15 years, Miracle Care Campus has been Sri Lanka's
                premier institution for healthcare and language training. We've
                successfully trained over 500 students who now work in
                prestigious positions locally and internationally.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence in education has made us a trusted
                name in professional training. We combine theoretical knowledge
                with practical skills to ensure our graduates are job-ready and
                competitive in the global market.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, index) => (
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
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Grid */}
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
                  src="https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto,w_1200,c_fill,g_auto,e_sharpen/v1758353168/thumbnail_IMG_0684_jxz3pv.jpg"
                  alt="Healthcare training"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto,w_1200,c_fill,g_auto,e_sharpen/v1758354136/thumbnail_IMG_0236_duprbr.jpg"
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
                  src="https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto,w_1200,c_fill,g_auto,e_sharpen/v1758354303/thumbnail_IMG_0331_wboup6.jpg"
                  alt="Language class"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto,w_1200,c_fill,g_auto,e_sharpen/v1758354445/thumbnail_IMG_0683_toukqj.jpg"
                  alt="Campus facilities"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-20"
          >
            {stats.slice(0, 4).map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="h-12 w-12 text-[#000058] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#000058] mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#000058] to-[#000070] bg-clip-text text-transparent">
                Vision & Mission
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#000058] to-[#000070] rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                To be the leading educational institution in Sri Lanka,
                recognized globally for excellence in healthcare and language
                training. We envision a future where our graduates become
                leaders in their respective fields, contributing to the
                betterment of society both locally and internationally.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                To provide world-class professional training that bridges the
                gap between education and employment. We are committed to
                nurturing skilled professionals through innovative teaching
                methods, practical training, and continuous support for career
                development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Certifications */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Government{" "}
              <span className="bg-gradient-to-r from-[#000058] to-[#000070] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to be recognized and certified by leading government
              bodies in Sri Lanka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {certificationsGov.slice(0, 4).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-lg p-4 flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#000058] mb-2">
                  {cert.name}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {cert.fullName}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 bg-[#000058]/10 text-[#000058] px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Certified Provider
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Certifications Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#000058] to-[#000070] rounded-3xl p-8 text-center text-white"
          >
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Internationally Recognized Standards
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              Our certifications ensure that you receive education that meets
              both local and international standards, opening doors to career
              opportunities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Relationship Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#000058] to-[#000070]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-200">Healthcare Legacy</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Miracle Care Campus operates as a specialized training division of
              Miracle Health Hospital, combining healthcare excellence with
              professional education.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Campus Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white rounded-2xl p-4">
                  <Image
                    src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757487969/Image_21_1_1_hzmuyy.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Miracle Care Campus
                  </h3>
                  <p className="text-white/80">
                    Professional Training Institute
                  </p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                As the educational arm of Miracle Health Hospital, we specialize
                in providing world-class training programs in healthcare,
                caregiving, and language services. Our curriculum is designed by
                healthcare professionals with real-world experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">
                    Government Certified Programs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">
                    Industry-Experienced Faculty
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">
                    100% Job Placement Support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hospital Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white rounded-2xl p-4">
                  <Image
                    src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757662225/WhatsApp_Image_2025-09-10_at_10.22.26_1b6c528d_fnfhq3.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Miracle Health Hospital
                  </h3>
                  <p className="text-white/80">Mother Company - Est. 2008</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                Our parent organization has been providing exceptional
                healthcare services for over 15 years. The hospital's commitment
                to excellence and patient care forms the foundation of our
                training philosophy at the campus.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">
                    15+ Years Healthcare Excellence
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">
                    Advanced Medical Facilities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">
                    Trusted Healthcare Provider
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                One Vision, Two Divisions
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center flex flex-col items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757662225/WhatsApp_Image_2025-09-10_at_10.22.26_1b6c528d_fnfhq3.png"
                    alt=""
                    width={120}
                    height={120}
                  />
                  <h4 className="text-lg font-bold text-white mb-2">
                    Healthcare Services
                  </h4>
                  <p className="text-white/80 text-sm">Miracle Health Hospital</p>
                </div>

                <div className="hidden md:block">
                  <div className="flex items-center">
                    <div className="w-16 h-0.5 bg-white/50"></div>
                    <div className="mx-4 bg-white/20 rounded-full p-2">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-16 h-0.5 bg-white/50"></div>
                  </div>
                </div>

                <div className="text-center flex flex-col items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757487969/Image_21_1_1_hzmuyy.png"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <h4 className="text-lg font-bold text-white mb-2">
                    Professional Training
                  </h4>
                  <p className="text-white/80 text-sm">Miracle Care Campus</p>
                </div>
              </div>

              <p className="text-white/90 mt-6 max-w-2xl mx-auto">
                Together, we create a comprehensive ecosystem of healthcare
                excellence - from patient care to professional development,
                ensuring the highest standards in everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
