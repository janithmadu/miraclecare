"use client";

import { certifications, stats } from "@/app/data/statics";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to be recognized and certified by leading government
            and international bodies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gray-100 group-hover:scale-110 transition-transform duration-300 mb-6`}
                >
                  <cert.icon className={`h-8 w-8 ${cert.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#000058] to-[#000070] rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Our Certified Programs?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Our certifications ensure that you receive the highest quality
            education that meets industry standards and is recognized by
            employers worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">{stats[1].number}</div>
              <p className="opacity-90">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{stats[3].number}</div>
              <p className="opacity-90">Government Approved</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{stats[0].number}</div>
              <p className="opacity-90">Certified Graduates</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
