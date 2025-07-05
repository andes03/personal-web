'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiSparkles } from 'react-icons/hi';

const certificates = [
  {
    title: 'Frontend Developer - Dicoding',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    image: '/certificate1.png',
  },
  {
    title: 'React & Next.js Mastery',
    issuer: 'BuildWithAngga',
    year: '2024',
    image: '/certificate2.png',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2024',
    image: '/certificate3.png',
  },
  {
    title: 'Creative Coding Workshop',
    issuer: 'Open Source Lab',
    year: '2024',
    image: '/certificate4.png',
  },
];

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  return (
    <motion.section
      id="certificate"
      className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg text-white mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HiSparkles className="text-2xl" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4">
            My Certificates
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Recognitions and proof of learning from courses and training programs I’ve completed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border bg-white p-4 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {cert.issuer} &mdash; {cert.year}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 shadow-xl max-w-3xl w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={700}
                  className="rounded-lg object-contain mx-auto"
                />
                <h3 className="text-xl font-bold mt-4 text-center text-gray-800">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  Issued by {selectedCert.issuer} &mdash; {selectedCert.year}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}