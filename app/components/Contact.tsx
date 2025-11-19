'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub, FaRocket, FaCode, FaPalette } from 'react-icons/fa';
import { HiOutlineMail, HiSparkles } from 'react-icons/hi';

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

export default function ContactSection() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const generated = [...Array(12)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  const socials = [
    {
      Icon: FaInstagram,
      href: 'https://instagram.com/andessalf',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500',
      iconColor: 'text-pink-500 hover:text-white',
      bgGradient: 'from-pink-500 to-orange-500',
    },
    {
      Icon: HiOutlineMail,
      href: 'mailto:andes.agnestio@gmail.com',
      label: 'Email',
      color: 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500',
      iconColor: 'text-blue-500 hover:text-white',
      bgGradient: 'from-blue-500 to-cyan-500',
    },
    {
      Icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/andes-agnestio-228106279/',
      label: 'LinkedIn',
      color: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800',
      iconColor: 'text-blue-600 hover:text-white',
      bgGradient: 'from-blue-600 to-blue-800',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/andes03',
      label: 'GitHub',
      color: 'hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900',
      iconColor: 'text-gray-300 hover:text-white',
      bgGradient: 'from-gray-700 to-gray-900',
    },
  ];

  const floatingIcons = [
    { Icon: FaRocket, color: 'text-blue-400', delay: 0 },
    { Icon: FaCode, color: 'text-green-400', delay: 1 },
    { Icon: FaPalette, color: 'text-purple-400', delay: 2 },
  ];

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Multiple Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Orbital Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-indigo-500/30"
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
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
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
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: delay }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Header with Badge */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            variants={pulseVariants}
            animate="animate"
          >
            <HiSparkles className="text-lg text-indigo-400" />
            Let's work together
          </motion.span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Ready to bring your ideas to life? I'm always excited to collaborate on amazing projects and create something extraordinary together. Let's connect and make magic happen! ✨
        </motion.p>

        {/* Enhanced Social Icons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap mb-8"
          variants={itemVariants}
        >
          {socials.map(({ Icon, href, label, color, iconColor, bgGradient }, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Glowing Background Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${bgGradient} rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                animate={{
                  scale: isHovered === idx ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon Container */}
              <motion.a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group ${color}`}
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: 0,
                }}
              >
                <Icon className={`text-2xl sm:text-3xl transition-all duration-300 ${iconColor}`} />

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20"
                  style={{
                    background: `linear-gradient(45deg, ${
                      idx === 0 ? '#ec4899, #f97316' :
                      idx === 1 ? '#3b82f6, #06b6d4' :
                      idx === 2 ? '#2563eb, #1e40af' :
                      idx === 3 ? '#374151, #111827' :
                      '#374151, #111827'
                    })`,
                  }}
                />
              </motion.a>

              {/* Label */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: isHovered === idx ? 0 : 10,
                  opacity: isHovered === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-medium text-gray-300 whitespace-nowrap bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-700/50">
                  {label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </motion.section>
  );
}