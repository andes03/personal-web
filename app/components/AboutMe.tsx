'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaRocket, FaCode, FaPalette, FaLightbulb, FaUsers } from 'react-icons/fa';
import { HiSparkles, HiOutlineAcademicCap } from 'react-icons/hi';
import Link from 'next/link';

// Define interface for tech stack items
interface TechStackItem {
  name: string;
  Icon: React.ComponentType<any>;
  color: string;
  hoverColor: string;
  bgGradient: string;
}

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

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

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

export default function AboutMe() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);
  const [isHoveredTech, setIsHoveredTech] = useState<number | null>(null);

  useEffect(() => {
    const generated = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  // Fixed: Explicitly typed empty array
  const techStack: TechStackItem[] = [];

  const floatingIcons = [
    { Icon: FaRocket, color: 'text-blue-400', delay: 0 },
    { Icon: FaCode, color: 'text-green-400', delay: 1 },
    { Icon: FaPalette, color: 'text-purple-400', delay: 2 },
    { Icon: FaLightbulb, color: 'text-yellow-400', delay: 3 },
    { Icon: FaUsers, color: 'text-indigo-400', delay: 4 },
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen bg-gray-900 text-white flex items-center overflow-hidden py-20"
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

      {/* Multiple Floating Background Elements */}
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

        {/* Orbital Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-cyan-500/30"
          variants={orbitalVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-purple-500/30"
          variants={orbitalVariants}
          animate="animate"
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        {/* Enhanced Sparkles */}
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

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, color, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 sm:w-10 sm:h-10 ${color} opacity-20`}
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 15}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: delay }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center relative z-10">
        
        {/* Main Content Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl w-full"
        >
          {/* Transparent Container */}
          <motion.div 
            className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500"
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />
            
            <div className="relative">
              {/* Combined Content */}
              <div className="flex flex-col items-center">
                
                {/* Main Text Content */}
                <div className="w-full max-w-3xl space-y-8 text-center">
                  {/* Header with Badge */}
                  <motion.div className="mb-6" variants={itemVariants}>
                    <motion.span
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-full text-sm font-medium shadow-lg ring-1 ring-white/10 hover:ring-white/20 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      variants={pulseVariants}
                      animate="animate"
                    >
                      <HiSparkles className="text-lg text-indigo-400" />
                      Get to know me
                    </motion.span>
                  </motion.div>

                  <motion.h2 
                    className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                    variants={itemVariants}
                  >
                    About Me
                  </motion.h2>

                  <motion.p
                    className="text-lg leading-relaxed text-gray-300"
                    variants={itemVariants}
                  >
                    Hi! I'm <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Andes Agnestio</span>, a passionate Information Systems student at <strong className="text-blue-400">Universitas Atma Jaya Yogyakarta</strong> who loves crafting beautiful and user-friendly web applications. I specialize in developing cutting-edge web applications that deliver exceptional user experiences.
                  </motion.p>

                  <motion.p
                    className="text-lg leading-relaxed text-gray-300"
                    variants={itemVariants}
                  >
                    Currently, I'm focusing on full-stack development with <strong className="text-purple-400">Next.js</strong> and <strong className="text-orange-400">Laravel</strong>, constantly exploring better ways to build performant and scalable web apps. ✨
                  </motion.p>

                  {/* Enhanced Tech Stack Icons */}
                  {techStack.length > 0 && (
                    <motion.div 
                      className="flex flex-wrap gap-6 justify-center"
                      variants={itemVariants}
                    >
                      {techStack.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className="relative group"
                          onMouseEnter={() => setIsHoveredTech(idx)}
                          onMouseLeave={() => setIsHoveredTech(null)}
                        >
                          {/* Glowing Background Effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${tech.bgGradient} rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                            animate={{
                              scale: isHoveredTech === idx ? 1.3 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Tech Icon */}
                          <motion.div
                            className={`relative w-16 h-16 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group hover:bg-gradient-to-r ${tech.bgGradient}`}
                            whileHover={{ 
                              y: -8, 
                              scale: 1.1,
                              rotate: [0, -5, 5, -5, 0],
                              transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <tech.Icon className={`text-3xl transition-all duration-300 ${tech.color} ${tech.hoverColor}`} />
                          </motion.div>

                          {/* Tech Name Label */}
                          <motion.div
                            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ 
                              y: isHoveredTech === idx ? 0 : 10,
                              opacity: isHoveredTech === idx ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-xs font-medium text-gray-300 whitespace-nowrap bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-700/50">
                              {tech.name}
                            </span>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}



                  {/* Enhanced Download Button */}
                  <motion.div 
                    className="mt-8"
                    variants={itemVariants}
                  >
                    <motion.div className="relative group">
                      {/* Glowing Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <Link
                        href="https://drive.google.com/drive/folders/1cFIRbFTnItmzVoQfSqZP121dkZWCVhKF?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <motion.div
                          animate={{
                            rotate: [0, -10, 10, -10, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FaDownload className="text-lg" />
                        </motion.div>
                        Download CV
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>


              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}