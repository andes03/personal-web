'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaHeart, FaRocket, FaCode, FaPalette, FaLightbulb, FaUsers, FaBolt, FaBrain, FaEye, FaHandshake } from 'react-icons/fa';
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
  const [isHoveredSkill, setIsHoveredSkill] = useState<number | null>(null);
  const [isHoveredTech, setIsHoveredTech] = useState<number | null>(null);

  useEffect(() => {
    const generated = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  const skills = [
    { 
      Icon: FaBolt, 
      title: 'Fast Learner', 
      desc: 'Quick to adapt and eager to explore new tech.',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    },
    { 
      Icon: FaBrain, 
      title: 'Problem Solver', 
      desc: 'Enjoys tackling complex challenges logically.',
      color: 'from-yellow-500 to-orange-500',
      hoverColor: 'hover:from-yellow-600 hover:to-orange-600'
    },
    { 
      Icon: FaEye, 
      title: 'UI/UX Enthusiast', 
      desc: 'Passionate about clean and intuitive design.',
      color: 'from-pink-500 to-purple-500',
      hoverColor: 'hover:from-pink-600 hover:to-purple-600'
    },
    { 
      Icon: FaHandshake, 
      title: 'Team Player', 
      desc: 'Loves collaborating and growing with others.',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600'
    },
  ];

  // Fixed: Explicitly typed empty array
  const techStack: TechStackItem[] = [];

  const floatingIcons = [
    { Icon: FaHeart, color: 'text-pink-400', delay: 0 },
    { Icon: FaRocket, color: 'text-blue-400', delay: 1 },
    { Icon: FaCode, color: 'text-green-400', delay: 2 },
    { Icon: FaPalette, color: 'text-purple-400', delay: 3 },
    { Icon: FaLightbulb, color: 'text-yellow-400', delay: 4 },
    { Icon: FaUsers, color: 'text-indigo-400', delay: 5 },
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 flex items-center overflow-hidden py-20"
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
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Multiple Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Orbital Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-cyan-200/30"
          variants={orbitalVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-purple-200/30"
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

      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-y-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8 lg:w-1/2"
        >
          {/* Header with Badge */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200/50 text-cyan-700 rounded-full text-sm font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              variants={pulseVariants}
              animate="animate"
            >
              <HiSparkles className="text-lg" />
              Get to know me
            </motion.span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p 
            className="text-lg leading-relaxed text-gray-600"
            variants={itemVariants}
          >
            Hi! I'm <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Andes Agnestio</span>, a passionate Information Systems student at <strong className="text-blue-600">Universitas Atma Jaya Yogyakarta</strong> who loves crafting beautiful and user-friendly web applications. I enjoy working with <strong className="text-cyan-600">JavaScript</strong>, <strong className="text-blue-600">React</strong>, and <strong className="text-green-600">Node.js</strong> to turn complex problems into elegant digital experiences.
          </motion.p>

          <motion.p 
            className="text-lg leading-relaxed text-gray-600"
            variants={itemVariants}
          >
            Currently, I'm focusing on full-stack development with <strong className="text-purple-600">Next.js</strong>, constantly exploring better ways to build performant and scalable web apps. ✨
          </motion.p>

          {/* Enhanced Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="relative group"
                onMouseEnter={() => setIsHoveredSkill(i)}
                onMouseLeave={() => setIsHoveredSkill(null)}
              >
                {/* Glowing Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  animate={{
                    scale: isHoveredSkill === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Skill Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-opacity-0`}
                >
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-xl" />
                  </div>
                  
                  <div className="relative flex items-start space-x-4">
                    <motion.div 
                      className={`text-2xl ${skill.Icon === FaBolt ? 'text-blue-500' : skill.Icon === FaBrain ? 'text-yellow-500' : skill.Icon === FaEye ? 'text-pink-500' : 'text-green-500'}`}
                      animate={{
                        rotate: isHoveredSkill === i ? [0, -10, 10, -10, 0] : 0,
                        scale: isHoveredSkill === i ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.Icon />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{skill.title}</h4>
                      <p className="text-sm text-gray-600">{skill.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Tech Stack Icons */}
          {techStack.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
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
                    className={`relative w-16 h-16 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group hover:bg-gradient-to-r ${tech.bgGradient}`}
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
                    <span className="text-xs font-medium text-gray-700 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200/50">
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
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <Link
                href="https://drive.google.com/drive/folders/1cFIRbFTnItmzVoQfSqZP121dkZWCVhKF?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
        </motion.div>

        {/* Enhanced Right Content - Text Focus */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center lg:justify-end lg:w-1/2"
        >
          <motion.div 
            className="relative group max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glowing Background Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
            
            {/* Content Container */}
            <motion.div 
              className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              variants={itemVariants}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
              
              {/* Content */}
              <div className="relative space-y-6">
                {/* Header */}
                <motion.div 
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <HiOutlineAcademicCap className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Information Systems Student
                  </h3>
                  <p className="text-gray-600 mt-2">Universitas Atma Jaya Yogyakarta</p>
                  <p className="text-sm text-gray-500 mt-1">Passionate Web Developer</p>
                </motion.div>

                {/* Stats/Info */}
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">Full-Stack</div>
                    <div className="text-sm text-gray-600">Development</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">Next.js</div>
                    <div className="text-sm text-gray-600">Focus</div>
                  </div>
                </motion.div>

                {/* Mission Statement */}
                <motion.div 
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <HiSparkles className="text-xl text-yellow-500" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700">Mission</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "Turning complex problems into elegant digital experiences through beautiful, user-friendly web applications."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}