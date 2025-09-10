"use client";

import { features } from "@/app/data/statics";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
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
              About{" "}
              <span className="bg-gradient-to-r from-[#000058] to-[#000070] bg-clip-text text-transparent">
                Miracle Care Campus
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, Miracle Care Campus has been Sri Lanka's
              premier institution for healthcare and language training. We've
              successfully trained over 500 students who now work in prestigious
              positions locally and internationally.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between education and employment
              by providing practical, industry-relevant training that prepares
              our students for successful careers in healthcare, caregiving, and
              international opportunities.
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
      </div>
    </section>
  );
}
