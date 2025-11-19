'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiSparkles } from 'react-icons/hi';
import { Award, X, ChevronRight } from 'lucide-react';

const certificates = [
  {
    title: 'ISO/IEC 27001:2022 - Information Security Management Systems',
    issuer: 'CBOA Global - Foundation Level',
    year: '2025',
    date: 'Active Status',
    image: '/certificate3.png',
    featured: true,
  },
  {
    title: 'Tableau Fundamentals',
    issuer: 'Salesforce - Tableau eLearning',
    year: '2024',
    date: '2024',
    image: '/certificate1.png',
  },
  {
    title: 'Intro to Software Engineering',
    issuer: 'RevoU - Fundamental Course',
    year: '2024',
    date: 'August 16, 2024',
    image: '/certificate2.png',
  },
  {
    title: 'Certified Secure Computer User (CSCU)',
    issuer: 'EC-Council',
    year: '2023',
    date: 'June 15, 2023',
    image: '/certificate4.png',
  },
];

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  const featuredCert = certificates.find(cert => cert.featured) || certificates[0];
  const otherCerts = certificates.filter(cert => cert !== featuredCert);

  return (
    <motion.section
      id="certificate"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Abstract Background Shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Sparkles */}
        {sparkles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
            style={{ top: pos.top, left: pos.left }}
            variants={sparkleVariants}
            animate="animate"
            transition={{ delay: i * 0.3 }}
          />
        ))}

        {/* Floating Award Icons */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 opacity-20"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i }}
          >
            <Award className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-full text-xs sm:text-sm font-medium shadow-lg ring-1 ring-white/10 hover:ring-white/20 transition-colors duration-200 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            variants={pulseVariants}
            animate="animate"
          >
            <HiSparkles className="text-base sm:text-lg text-indigo-400" />
            My Achievements
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            Certificates & Recognition
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Recognitions and proof of learning from courses and training programs I've completed.
          </p>
        </motion.div>

        {/* Featured Certificate */}
        <motion.div 
          className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-5xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          <div className="relative">
            {/* Featured Badge */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-xs sm:text-sm">Featured Certificate</span>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mt-4">
              {/* Certificate Image */}
              <motion.div
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCert(featuredCert)}
              >
                <div className="relative aspect-[4/3] bg-gray-800/50 rounded-xl overflow-hidden">
                  <Image 
                    src={featuredCert.image} 
                    alt={featuredCert.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-indigo-500/90 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 shadow-xl">
                      <span>View Certificate</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500/50 transition-colors duration-300" />
              </motion.div>

              {/* Certificate Details */}
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {featuredCert.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-400">
                    Issued by <span className="text-indigo-400 font-semibold">{featuredCert.issuer}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {featuredCert.date}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-300 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Verified
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(featuredCert)}
                  className="group mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>View Full Certificate</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/60 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>{showAll ? 'Show Less' : `View All Certificates`}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </button>
        </motion.div>

        {/* All Certificates Grid */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-8"
            >
              <motion.div 
                className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-6xl mx-auto"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {otherCerts.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="group relative rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => setSelectedCert(cert)}
                    >
                      {/* Gradient Border on Hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '1px' }}>
                        <div className="w-full h-full bg-gray-800/80 rounded-xl" />
                      </div>

                      <div className="relative">
                        {/* Image Container */}
                        <div className="relative w-full h-40 sm:h-48 mb-3 rounded-lg overflow-hidden bg-gray-700/50">
                          <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-xs font-medium text-white bg-indigo-500/80 px-3 py-1 rounded-full">
                              View Certificate
                            </span>
                          </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="space-y-1">
                          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                              <Award className="w-3 h-3" />
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-gray-800/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl w-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Certificate Image */}
              <div className="relative w-full max-h-[60vh] sm:max-h-[70vh] mb-4 rounded-xl overflow-hidden bg-gray-700/50">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={700}
                  className="rounded-lg object-contain mx-auto w-full h-auto"
                />
              </div>

              {/* Certificate Info */}
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Issued by <span className="text-indigo-400 font-semibold">{selectedCert.issuer}</span>
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  {selectedCert.date}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}