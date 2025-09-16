"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  ArrowLeft,
  Calendar,
  FileText,
  DollarSign,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { courses } from "../../data/cources";
import { ContactInformation } from "@/app/data/statics";

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Course not found</p>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the ${course.title} at Miracle Care Campus. Could you please provide more information about admission requirements, fees, and upcoming batches?`;
    const whatsappUrl = `https://wa.me/${
      ContactInformation.WhatsAppNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `url('${course.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Courses
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {course.title}
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            {course.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our comprehensive program prepares students for successful
                careers in healthcare. The course combines theoretical knowledge
                with practical training, ensuring graduates can provide quality
                patient care in various healthcare settings, including
                international opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With government certification, our graduates have strong
                placement opportunities with competitive salary packages.
              </p>
            </motion.div>

            {/* Course Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Course Content
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.courseContent.map((content, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#000058]/5 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#000058]" />
                    <span className="text-gray-700">{content}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Career Opportunities
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {course.careerOpportunities.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors"
                  >
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{career}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Course Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#000058] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Age Limit</p>
                    <p className="text-gray-600">
                      {course.courseDetails.ageLimit}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#000058] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Qualifications
                    </p>
                    <p className="text-gray-600 text-sm">
                      {course.courseDetails.qualifications}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#000058] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Duration</p>
                    <p className="text-gray-600">
                      {course.courseDetails.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[#000058] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Daily Lectures
                    </p>
                    <p className="text-gray-600">
                      {course.courseDetails.lectureHours}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-[#000058] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Course Fee</p>
                    <p className="text-gray-600 text-sm">
                      {course.courseDetails.courseFee}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Documents Required
              </h3>
              <div className="space-y-3">
                {course.courseDetails.documentsNeeded.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-[#000058]" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificate Award */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[#000058] to-[#000070] rounded-3xl p-6 text-white"
            >
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Certificate Award</h3>
                <p className="text-sm opacity-90">
                  {course.courseDetails.certificateAward}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }} // small delay so it animates after certificate card
              className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-6 text-white"
            >
              <div className="text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Israel Job Granted</h3>
                <p className="text-sm opacity-90">
                  Guaranteed job opportunities in Israel upon successful course
                  completion.
                </p>
              </div>
            </motion.div>

            {/* Inquiry Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Interested in This Course?
              </h3>
              <p className="opacity-90 mb-6">
                Get detailed information about admission requirements, fees, and
                career opportunities.
              </p>
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-white text-green-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Inquire on WhatsApp
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
