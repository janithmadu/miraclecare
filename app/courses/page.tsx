"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Users, Award } from "lucide-react";
import { ContactInformation, coursesMain } from "../data/statics";

export default function Courses() {
  const handleWhatsAppInquiry = (courseName: string) => {
    const message = `Hi! I'm interested in the ${courseName} at Miracle Care Campus. Could you please provide more information about admission requirements, fees, and upcoming batches?`;
    const whatsappUrl = `https://wa.me/${
      ContactInformation.WhatsAppNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
            Our Courses
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional training programs designed to launch your career in healthcare and language services
=======
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Professional training programs designed to launch your career in
            healthcare and language services
>>>>>>> 5bd0d70781efbbecb01bee56ff650d9dba7ac55b
          </p>
        </motion.div>
      </section>
      

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {coursesMain.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
                      {course.certification}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-[#000058]/10 text-[#000058] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-[#000058] mx-auto mb-1" />
                        <p className="text-sm text-gray-600">
                          {course.duration}
                        </p>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 text-[#000070] mx-auto mb-1" />
                        <p className="text-sm text-gray-600">
                          {course.students}
                        </p>
                      </div>
                      <div className="text-center">
                        <Award className="h-5 w-5 text-[#000088] mx-auto mb-1" />
                        <p className="text-sm text-gray-600">Certified</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsAppInquiry(course.title)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Inquire on WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#000058] to-[#000070]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of successful graduates who have launched their
              careers with our professional training programs.
            </p>
            <button
              onClick={() => handleWhatsAppInquiry("General Information")}
              className="bg-white text-[#000058] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
