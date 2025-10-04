'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Users, Building, Award, Heart, Globe } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'campus', label: 'Campus', icon: Building },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'training', label: 'Training', icon: Award },
    { id: 'facilities', label: 'Facilities', icon: Heart },
    { id: 'events', label: 'Events', icon: Globe }
  ];

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561149/IMG_4565_lewcxw.jpg",
    title: "Nursing Batch Training 1",
    description: "Students engaged in hands-on learning session.",
    category: "training"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561148/IMG_1092_jxhcqh.jpg",
    title: "Nursing Batch Training 2",
    description: "Collaborative practice on clinical equipment.",
    category: "training"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561144/IMG_1089_o9tvhm.heic",
    title: "Nursing Batch Training 3",
    description: "Instructors guiding students through procedures.",
    category: "training"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561140/IMG_1103_rdjvuj.heic",
    title: "Nursing Batch Training 4",
    description: "Group discussion on patient care techniques.",
    category: "training"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561133/IMG_1096_rrfyfc.heic",
    title: "Nursing Batch Training 5",
    description: "Students practicing emergency response drills.",
    category: "training"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561123/IMG_1094_flpiex.heic",
    title: "Nursing Batch Training 6",
    description: "Hands-on skill development in a controlled lab.",
    category: "training"
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561114/IMG_1069_w2ll6g.heic",
    title: "Nursing Batch Training 7",
    description: "Instructor demonstrating patient care techniques.",
    category: "training"
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561114/IMG_1083_f2viqg.heic",
    title: "Nursing Batch Training 8",
    description: "Teamwork and communication exercises.",
    category: "training"
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561110/IMG_1080_npwgfi.heic",
    title: "Nursing Batch Training 9",
    description: "Students observing advanced medical procedures.",
    category: "training"
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561108/IMG_1073_sa0jiw.heic",
    title: "Nursing Batch Training 10",
    description: "Simulation of patient interactions and assessments.",
    category: "training"
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561105/IMG_1061_b0p2tj.heic",
    title: "Nursing Batch Training 11",
    description: "Practicing vital signs and monitoring techniques.",
    category: "training"
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561105/IMG_1085_a6iktb.heic",
    title: "Nursing Batch Training 12",
    description: "Hands-on patient care with clinical tools.",
    category: "training"
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561102/IMG_1082_gs2hfy.heic",
    title: "Nursing Batch Training 13",
    description: "Students learning proper hygiene protocols.",
    category: "training"
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561099/IMG_1063_qhlile.heic",
    title: "Nursing Batch Training 14",
    description: "Simulation lab with interactive exercises.",
    category: "training"
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561096/IMG_1081_mzxkl0.heic",
    title: "Nursing Batch Training 15",
    description: "Instructors assisting with patient simulations.",
    category: "training"
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561091/IMG_1060_kiilsl.heic",
    title: "Nursing Batch Training 16",
    description: "Students practicing medication administration.",
    category: "training"
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561087/IMG_1071_oskjac.heic",
    title: "Nursing Batch Training 17",
    description: "Team-based patient care exercises.",
    category: "training"
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561089/IMG_1066_aseoin.heic",
    title: "Nursing Batch Training 18",
    description: "Monitoring and recording vital signs practice.",
    category: "training"
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561082/IMG_4510_zssu1h.heic",
    title: "Nursing Batch Training 19",
    description: "Interactive session on patient safety protocols.",
    category: "training"
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561079/IMG_1058_lt3epj.heic",
    title: "Nursing Batch Training 20",
    description: "Practicing CPR and emergency response drills.",
    category: "training"
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561078/IMG_4519_jqbkjy.heic",
    title: "Nursing Batch Training 21",
    description: "Students learning patient mobility techniques.",
    category: "training"
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561074/IMG_1077_hb7oyg.heic",
    title: "Nursing Batch Training 22",
    description: "Demonstration of proper bandaging methods.",
    category: "training"
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561066/IMG_1057_pmjwyf.heic",
    title: "Nursing Batch Training 23",
    description: "Students reviewing clinical case studies.",
    category: "training"
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561057/IMG_1065_r13cnl.heic",
    title: "Nursing Batch Training 24",
    description: "Hands-on learning in patient care simulations.",
    category: "training"
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561055/IMG_4497_gblv7g.heic",
    title: "Nursing Batch Training 25",
    description: "Team exercises on medical procedures.",
    category: "training"
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/dwml3axwl/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_auto,dpr_auto/v1759561043/IMG_1093_x96wz8.heic",
    title: "Nursing Batch Training 26",
    description: "Students practicing patient assessment techniques.",
    category: "training"
  }
];


  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-gradient-to-br from-[#000058] to-[#000070]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-xl">
              <Camera className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Gallery
            </h1>
          </div>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Explore our modern campus, training facilities, and student life through our photo gallery
          </p>
        </motion.div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#000058] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <category.icon className="h-5 w-5" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#000058] mb-2">{images.length}+</div>
            <p className="text-gray-600">Photos</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#000070] mb-2">6</div>
            <p className="text-gray-600">Categories</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#000088] mb-2">15+</div>
            <p className="text-gray-600">Years Documented</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#0000a0] mb-2">500+</div>
            <p className="text-gray-600">Memories Captured</p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-[700px] object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent  rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {filteredImages[selectedImage].description}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}