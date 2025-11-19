'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Palette, Smartphone, Database, Cloud } from 'lucide-react';
import { HiSparkles } from 'react-icons/hi';
import { FaRocket, FaCode, FaPalette, FaLightbulb, FaUsers, FaHeart } from 'react-icons/fa';

interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  gradient?: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

const services: Service[] = [
  {
    name: 'Web Development',
    icon: <Code className="text-blue-400" />,
    description: 'Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="text-purple-400" />,
    description: 'Creating intuitive and visually appealing user interfaces with tools like Figma and Adobe XD.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Mobile App Development',
    icon: <Smartphone className="text-green-400" />,
    description: 'Developing cross-platform mobile applications using React Native and Flutter.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    name: 'Backend Development',
    icon: <Database className="text-orange-400" />,
    description: 'Designing robust server-side architectures and APIs with Node.js, Laravel, and databases.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Cloud Solutions',
    icon: <Cloud className="text-indigo-400" />,
    description: 'Implementing scalable cloud-based solutions using AWS, Azure, and Google Cloud.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Consulting & Strategy',
    icon: <Briefcase className="text-yellow-400" />,
    description: 'Providing expert advice on technology strategy, project management, and digital transformation.',
    gradient: 'from-yellow-500 to-orange-500'
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      y: -3,
      transition: { duration: 0.3 }
    }}
    className="relative group cursor-pointer"
  >
    {/* Glowing Background Effect */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${service.gradient || 'from-indigo-500 to-purple-500'} rounded-lg blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
    />

    {/* Service Card */}
    <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-opacity-0 min-h-[200px] flex flex-col">
      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.gradient || 'from-indigo-500 to-purple-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '1px' }}>
        <div className="w-full h-full bg-gray-800/80 rounded-lg" />
      </div>

      <div className="relative flex flex-col items-center text-center space-y-4 h-full">
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-gray-700/40 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-600/40 group-hover:to-gray-700/40 transition-all border border-gray-600/20"
          animate={{
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
        >
          <div className="text-xl sm:text-2xl">
            {service.icon}
          </div>
        </motion.div>

        <div className="space-y-2 flex-grow flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon }) => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    className="text-center mb-6 sm:mb-8"
  >
    <motion.div
      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-3 sm:mb-4 shadow-md text-white"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed px-2">
      {subtitle}
    </p>
  </motion.div>
);

export default function Services() {
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setSparkles(generated);
  }, []);

  const floatingIcons = [
    { Icon: FaRocket, color: 'text-blue-400', delay: 0 },
    { Icon: FaCode, color: 'text-green-400', delay: 1 },
    { Icon: FaPalette, color: 'text-purple-400', delay: 2 },
    { Icon: FaLightbulb, color: 'text-yellow-400', delay: 3 },
    { Icon: FaUsers, color: 'text-indigo-400', delay: 4 },
    { Icon: FaHeart, color: 'text-pink-400', delay: 5 },
  ];

  return (
    <motion.section
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden py-12 sm:py-16 md:py-20"
      id="services"
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

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Main Header */}
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
            What I Offer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            My Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Professional services tailored to bring your ideas to life with cutting-edge technology and creative design.
          </p>
        </motion.div>

        {/* Transparent Container */}
        <motion.div
          className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-6xl mx-auto"
          whileHover={{ scale: 1.01, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
