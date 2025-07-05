'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaPalette,
  FaRocket,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const floatingVariants = {
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const orbitalVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
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

export default function HomeSection() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 flex items-center overflow-hidden py-8 sm:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {sparkles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{ top: pos.top, left: pos.left }}
            variants={sparkleVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="text-sm sm:text-base" />
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
            Hello, It's Me
          </motion.h1>

          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-1 sm:pb-2" variants={itemVariants}>
            Andes Agnestio
          </motion.h2>

          <motion.div className="text-base sm:text-lg md:text-xl lg:text-2xl" variants={itemVariants}>
            <span className="text-gray-600 mr-2">I'm a</span>
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'Frontend Developer', 2000,
                'UI/UX Designer', 2000,
                'Creative Technologist', 2000,
              ]}
              speed={50}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p className="text-gray-600 leading-relaxed max-w-full sm:max-w-md lg:max-w-lg text-sm sm:text-base" variants={itemVariants}>
            Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology. Let's build something amazing together.
          </motion.p>


        </div>

        {/* Right Avatar */}
        <motion.div className="relative lg:w-1/2 flex justify-center order-1 lg:order-2" variants={avatarVariants}>
          <motion.div className="relative" variants={floatingVariants} animate="animate">
            {/* Orbit Rings */}
            <motion.div
              className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border border-blue-200/50"
              variants={orbitalVariants}
              animate="animate"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1 shadow-lg" />
            </motion.div>

            <motion.div
              className="absolute inset-4 sm:inset-6 md:inset-8 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full border border-purple-200/40"
              variants={orbitalVariants}
              animate="animate"
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform translate-y-0.5 shadow-lg" />
            </motion.div>

            {/* Avatar Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-blue-100/50 via-white to-purple-100/50 border-2 border-white/80 shadow-2xl p-1.5 sm:p-2 md:p-3 overflow-hidden backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-white border border-gray-200/50 shadow-inner">
                <Image
                  src="/andes.png"
                  alt="Andes Agnestio"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-2 sm:p-2.5 md:p-3 shadow-xl border border-white/50"
              whileHover={{ scale: 1.15, rotate: 5 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <FaCode className="text-sm sm:text-base md:text-lg text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-2 sm:p-2.5 md:p-3 shadow-xl border border-white/50"
              whileHover={{ scale: 1.15, rotate: -5 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <FaPalette className="text-sm sm:text-base md:text-lg text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-1.5 sm:-right-2 md:-right-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-1.5 sm:p-2 md:p-2.5 shadow-xl border border-white/50 transform -translate-y-1/2"
              whileHover={{ scale: 1.15, rotate: 10 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 3 }}
            >
              <FaRocket className="text-sm sm:text-base text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}