'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush2, Code2 } from 'lucide-react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiXampp,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category?: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const techSkills: Skill[] = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, category: 'Programming' },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, category: 'Framework' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, category: 'Framework' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, category: 'CSS Framework' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, category: 'Backend' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, category: 'Version Control' },
  {
    name: 'SQL',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="SQL"
        className="w-6 h-6"
      />
    ),
    category: 'Database',
  },
];

const softwareSkills: Skill[] = [
  {
    name: 'Figma',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        className="w-6 h-6"
      />
    ),
    category: 'UI/UX Design',
  },
  {
    name: 'VS Code',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        className="w-6 h-6"
      />
    ),
    category: 'Code Editor',
  },
  {
    name: 'Canva',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
        alt="Canva"
        className="w-6 h-6"
      />
    ),
    category: 'Graphic Design',
  },
  {
    name: 'Microsoft Office',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg"
        alt="Microsoft Office"
        className="w-6 h-6"
      />
    ),
    category: 'Office Suite',
  },
  {
    name: 'XAMPP',
    icon: <SiXampp className="text-orange-600" />,
    category: 'Development',
  },
  {
    name: 'CapCut',
    icon: (
      <img
        src="https://seeklogo.com/images/C/capcut-logo-5BAACDD2B4-seeklogo.com.png"
        alt="CapCut"
        className="w-6 h-6"
      />
    ),
    category: 'Video Editing',
  },
  {
    name: 'Google Workspace',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google Workspace"
        className="w-6 h-6"
      />
    ),
    category: 'Productivity',
  },
  {
    name: 'Primavera',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
        alt="Primavera (Oracle)"
        className="w-6 h-6"
      />
    ),
    category: 'Project Management',
  },
  {
    name: 'Tableau',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
        alt="Tableau"
        className="w-6 h-6"
      />
    ),
    category: 'Data Visualization',
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:border-indigo-400 transition-all duration-300 ease-in-out transform group cursor-pointer"
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-indigo-50 transition-colors duration-300 text-3xl">
        {skill.icon}
      </div>
      <div className="mt-1">
        <h3 className="text-base font-semibold text-gray-800 mb-1">{skill.name}</h3>
        {skill.category && (
          <span className="text-xs font-medium text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full tracking-wide">
            {skill.category}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon }) => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: false, amount: 0.3 }}
    className="text-center mb-10"
  >
    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 max-w-md mx-auto">{subtitle}</p>
  </motion.div>
);

export default function Skills() {
  return (
    <motion.section
      className="w-full h-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-16 right-16 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-16 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto relative z-10 py-16 px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            What I Can Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4">
            My Skills & Tools
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A quick look at the tech and tools I use to build beautiful and functional digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            <SectionHeader
              title="Technical Skills"
              subtitle="Languages and frameworks for building applications."
              icon={<Code2 size={20} />}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
          >
            <SectionHeader
              title="Design & Software"
              subtitle="Creative and productivity tools I use every day."
              icon={<Paintbrush2 size={20} />}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softwareSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
