'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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

export default function ContactSection() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
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
      color: 'hover:bg-pink-500',
    },
    {
      Icon: HiOutlineMail,
      href: 'mailto:andessalf@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500',
    },
    {
      Icon: FaTiktok,
      href: 'https://www.tiktok.com/@pecenehyo',
      label: 'TikTok',
      color: 'hover:bg-black',
    },
    {
      Icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/andes-agnestio-228106279/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/andes03',
      label: 'GitHub',
      color: 'hover:bg-gray-800',
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-28 sm:py-36 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background sparkles & gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {sparkles.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
          style={{ top: pos.top, left: pos.left }}
          variants={sparkleVariants}
          animate="animate"
          transition={{ delay: i * 0.4 }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
          Feel free to reach out or connect with me on social media. I'm always open for collaboration or just a friendly hello 👋
        </motion.p>

        <motion.div
          className="flex justify-center gap-5 flex-wrap"
          variants={itemVariants}
        >
          {socials.map(({ Icon, href, label, color }, idx) => (
            <motion.a
              key={idx}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 sm:w-14 sm:h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all hover:text-white shadow hover:shadow-xl hover:scale-110 ${color}`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-xl sm:text-2xl" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
