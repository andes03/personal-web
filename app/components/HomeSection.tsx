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
    const generated = [...Array(8)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-gray-900 text-white flex items-center overflow-hidden py-8 sm:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
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
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {sparkles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-70"
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
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-full text-xs sm:text-sm font-medium ring-1 ring-white/10 hover:ring-white/20 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="text-sm sm:text-base text-indigo-400" />
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" variants={itemVariants}>
            Hello, It's Me
          </motion.h1>

          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1 sm:pb-2" variants={itemVariants}>
            Andes Agnestio
          </motion.h2>

          <motion.div className="text-base sm:text-lg md:text-xl lg:text-2xl" variants={itemVariants}>
            <span className="text-gray-400 mr-2">I'm a</span>
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'UI/UX Designer', 2000,
                'Creative Technologist', 2000,
              ]}
              speed={50}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p className="text-gray-400 leading-relaxed max-w-full sm:max-w-md lg:max-w-lg text-sm sm:text-base lg:text-lg" variants={itemVariants}>
            Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology. Let's build something amazing together.
          </motion.p>


        </div>

        {/* Right Avatar */}
        <motion.div className="relative lg:w-1/2 flex justify-center order-1 lg:order-2" variants={avatarVariants}>
          <motion.div className="relative" variants={floatingVariants} animate="animate">
            {/* Orbit Rings */}
            <motion.div
              className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border border-white/20"
              variants={orbitalVariants}
              animate="animate"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1 shadow-lg" />
            </motion.div>

            <motion.div
              className="absolute inset-4 sm:inset-6 md:inset-8 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full border border-purple-500/30"
              variants={orbitalVariants}
              animate="animate"
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform translate-y-0.5 shadow-lg" />
            </motion.div>

            {/* Avatar Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-gray-800/80 via-gray-700/60 to-gray-800/80 border-2 border-white/20 shadow-2xl p-1.5 sm:p-2 md:p-3 overflow-hidden backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 border border-white/10 shadow-inner">
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
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl p-2 sm:p-2.5 md:p-3 shadow-xl border border-white/20 backdrop-blur-sm"
              whileHover={{ scale: 1.15, rotate: 5 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <FaCode className="text-sm sm:text-base md:text-lg text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-2 sm:p-2.5 md:p-3 shadow-xl border border-white/20 backdrop-blur-sm"
              whileHover={{ scale: 1.15, rotate: -5 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <FaPalette className="text-sm sm:text-base md:text-lg text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-1.5 sm:-right-2 md:-right-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-1.5 sm:p-2 md:p-2.5 shadow-xl border border-white/20 backdrop-blur-sm transform -translate-y-1/2"
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