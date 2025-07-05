// Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Certificate', href: '#certificate' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = menuItems.map(item => item.href.replace('#', ''));

    // Deteksi ukuran layar untuk mobile
    const isMobile = window.innerWidth <= 768;
    
    const observer = new IntersectionObserver(
      entries => {
        let currentSection = null;
        let maxVisibility = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              currentSection = entry.target.id;
            }
          }
        });

        if (currentSection) {
          setActive(`#${currentSection}`);
        }
      },
      {
        root: null,
        // Margin berbeda untuk mobile dan desktop
        rootMargin: isMobile ? '-5% 0px -30% 0px' : '-10% 0px -50% 0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Update observer saat resize
    const handleResize = () => {
      observer.disconnect();
      const newIsMobile = window.innerWidth <= 768;
      
      const newObserver = new IntersectionObserver(
        entries => {
          let currentSection = null;
          let maxVisibility = 0;

          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const visibility = entry.intersectionRatio;
              if (visibility > maxVisibility) {
                maxVisibility = visibility;
                currentSection = entry.target.id;
              }
            }
          });

          if (currentSection) {
            setActive(`#${currentSection}`);
          }
        },
        {
          root: null,
          rootMargin: newIsMobile ? '-5% 0px -30% 0px' : '-10% 0px -50% 0px',
          threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        }
      );

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) newObserver.observe(el);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
              <motion.div
        className={`
          flex items-center justify-center
          px-4 md:px-6 py-2 md:py-3 rounded-full
          backdrop-blur-md bg-white/20 border border-white/30
          shadow-lg transition-all duration-300
          ${scrolled ? 'bg-white/30 shadow-xl' : ''}
          max-w-4xl w-auto mx-auto
        `}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <nav className="flex items-center">
          <ul className="flex space-x-4 md:space-x-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.href);
                    const element = document.getElementById(item.href.replace('#', ''));
                    if (element) {
                      const elementPosition = element.offsetTop;
                      
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`
                    relative text-sm font-medium transition-all duration-300
                    ${active === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                    }
                  `}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
}