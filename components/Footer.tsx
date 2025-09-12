"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { ContactInformation, courses, quickLinks, socialLinks } from "@/app/data/statics";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="https://res.cloudinary.com/dwml3axwl/image/upload/f_auto/q_auto/v1757487969/Image_21_1_1_hzmuyy.png"
                width={60}
                height={60}
                alt="Miracle Care Logo"
              />
              <div>
                <h3 className="text-xl font-bold">Miracle Care Campus</h3>
                <p className="text-sm text-gray-300">Professional Training</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering students with professional healthcare and language
              skills for successful careers locally and internationally.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-lg transition-colors ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">{ContactInformation.LanNumber}</p>
                  <p className="text-gray-300">{ContactInformation.MobileNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-300">
                    {ContactInformation.EmailAddressNormal}
                  </p>
                  <p className="text-gray-300">
                    {ContactInformation.EmailAddressAdmition}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-300">{ContactInformation.AddressOne}</p>
                  <p className="text-gray-300">{ContactInformation.AddressTow}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 mb-6 md:mb-0">
              <div className="text-center  flex flex-col justify-center items-center ">
                 <Image src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757487969/Image_21_1_1_hzmuyy.png" alt='' width={100} height={100} />
                <p className="text-sm text-gray-400">Miracle Care Campus</p>
              </div>
              <div className="text-center flex flex-col justify-center items-center gap-y-3">
                <Image src="https://res.cloudinary.com/dwml3axwl/image/upload/v1757662225/WhatsApp_Image_2025-09-10_at_10.22.26_1b6c528d_fnfhq3.png" alt='' width={80} height={80} />
                <p className="text-sm text-gray-400">Miracle Care Hospital</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Miracle Care Campus. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Government Certified Training Institute
              </p>

              <p className="text-gray-500 text-xs mt-1">
                Powerd by SSDM Solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
