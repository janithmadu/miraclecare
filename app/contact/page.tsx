"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { ContactInformation } from "../data/statics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Miracle Care Campus! 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.course}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${
      ContactInformation.WhatsAppNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'd like to know more about Miracle Care Campus courses and admissions.";
    const whatsappUrl = `https://wa.me/${
      ContactInformation.WhatsAppNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const courses = [
    "Nursing Courses",
    "Care Giver Courses",
    "First Aid",
    "Japanese Language Courses",
    "Pharmacy Assistant Course",
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [ContactInformation.LanNumber, ContactInformation.MobileNumber],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        ContactInformation.EmailAddressNormal,
        ContactInformation.EmailAddressAdmition,
      ],
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [ContactInformation.AddressOne, ContactInformation.AddressTow],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [ContactInformation.OfficeHours],
      color: "text-orange-600",
    },
  ];

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
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get in touch with us to start your journey towards a successful
            career
          </p>
        </motion.div>
      </section>


      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your interests and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#000058] to-[#000070] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#000070] hover:to-[#000088] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message via WhatsApp
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Quick Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We're here to help you take the next step in your career.
                  Whether you have questions about our courses, admission
                  requirements, or career opportunities, our team is ready to
                  assist you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${item.color} bg-gray-50 p-3 rounded-xl`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-semibold text-gray-800 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-xl h-48 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d613.832627451884!2d80.368977625636!3d7.495980030072652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2slk!4v1757496581082!5m2!1sen!2slk"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
