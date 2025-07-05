'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <motion.section 
      id="portfolio" 
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
