'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Award, Code, Mail, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Services', href: '#services', icon: Sparkles },
  { name: 'Projects', href: '#portfolio', icon: Briefcase },
  { name: 'Certificates', href: '#certificate', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Approximate header height for offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('#home')}
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">A</span>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Andes Agnestio
                </h1>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-indigo-400' : ''}`} />
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h2 className="text-white font-bold">Menu</h2>
                      <p className="text-xs text-gray-400">Navigation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 text-white hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                            isActive
                              ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                              : 'bg-gray-800/50'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobile"
                              className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <motion.button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </motion.button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    © 2024 Andes Agnestio
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}