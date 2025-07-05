'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaNodeJs, FaGithub, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

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

export default function AboutMe() {
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
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 flex items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{ top: pos.top, left: pos.left }}
            variants={highlightVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-y-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-cyan-500">About Me</h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Hi! I'm <span className="font-semibold text-gray-800">Andes Agnestio</span>, a passionate Computer Science student who loves crafting beautiful and user-friendly web applications. I enjoy working with <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Node.js</strong> to turn complex problems into elegant digital experiences.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Currently, I'm focusing on full-stack development with <strong>Next.js</strong>, constantly exploring better ways to build performant and scalable web apps.
          </p>

          {/* Highlight */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '🚀', title: 'Fast Learner', desc: 'Quick to adapt and eager to explore new tech.' },
              { emoji: '💡', title: 'Problem Solver', desc: 'Enjoys tackling complex challenges logically.' },
              { emoji: '🎨', title: 'UI/UX Enthusiast', desc: 'Passionate about clean and intuitive design.' },
              { emoji: '🤝', title: 'Team Player', desc: 'Loves collaborating and growing with others.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md hover:border-cyan-400 transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{item.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex space-x-6 text-3xl mt-6 text-cyan-500 justify-center lg:justify-start">
            <FaReact title="React" className="hover:text-cyan-600 transition" />
            <FaJsSquare title="JavaScript" className="hover:text-yellow-400 transition" />
            <FaNodeJs title="Node.js" className="hover:text-green-600 transition" />
            <FaGithub title="GitHub" className="hover:text-gray-700 transition" />
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="/cv-andes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium shadow transition"
            >
              <FaDownload /> Download CV
            </Link>
          </div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center lg:justify-end lg:w-1/2"
        >
          <div className="relative w-72 h-72 rounded-xl border-4 border-cyan-400 p-2 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img
              src="/avatar.jpg"
              alt="Andes Agnestio"
              className="w-full h-full object-cover rounded-xl group-hover:brightness-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-500 text-white text-sm text-center py-2 rounded-b-xl">
              Web Developer & Student
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
