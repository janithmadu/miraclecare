"use client";

import { ContactInformation } from "@/app/data/statics";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPreview() {
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'd like to know more about Miracle Care Campus courses and admissions.";
    const whatsappUrl = `https://wa.me/+94767338419?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#000058] to-[#000070]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Take the first step towards a successful career in healthcare or
              language services. Our admissions team is ready to guide you
              through the enrollment process.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="opacity-90">{ContactInformation.LanNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="opacity-90">
                    {ContactInformation.EmailAddressNormal}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="opacity-90">
                    {ContactInformation.AddressOne}{" "}
                    {ContactInformation.AddressTow}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </button>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                Contact Form
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Inquiry
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all">
                  <option value="" className="text-gray-800">
                    Select Course Interest
                  </option>
                  <option value="nursing" className="text-gray-800">
                    Nursing Courses
                  </option>
                  <option value="caregiver" className="text-gray-800">
                    Care Giver Courses
                  </option>
                  <option value="firstaid" className="text-gray-800">
                    First Aid
                  </option>
                  <option value="japanese" className="text-gray-800">
                    Japanese Language
                  </option>
                  <option value="pharmacy" className="text-gray-800">
                    Pharmacy Assistant
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#000058] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
