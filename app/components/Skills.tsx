'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush2, Code2 } from 'lucide-react';
import { HiSparkles } from 'react-icons/hi';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaRocket,
  FaPalette,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaHeart,
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
  gradient?: string;
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

const techSkills: Skill[] = [
  { 
    name: 'HTML5', 
    icon: <FaHtml5 className="text-orange-500" />, 
    category: 'Frontend',
    gradient: 'from-orange-500 to-red-500'
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt className="text-blue-500" />, 
    category: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJsSquare className="text-yellow-400" />, 
    category: 'Programming',
    gradient: 'from-yellow-400 to-orange-400'
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-cyan-400" />, 
    category: 'Framework',
    gradient: 'from-cyan-400 to-blue-400'
  },
  { 
    name: 'Next.js', 
    icon: <SiNextdotjs className="text-gray-300" />, 
    category: 'Framework',
    gradient: 'from-gray-400 to-gray-600'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss className="text-sky-400" />, 
    category: 'CSS Framework',
    gradient: 'from-sky-400 to-cyan-400'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-500" />, 
    category: 'Backend',
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Git', 
    icon: <FaGitAlt className="text-orange-500" />, 
    category: 'Version Control',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Laravel',
    icon: (
      <img
        src="https://api.iconify.design/simple-icons/laravel.svg?color=%23FF2D20"
        alt="Laravel"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Backend Framework',
    gradient: 'from-red-600 to-orange-600'
  },
  {
    name: 'MySQL',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Database',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Vue.js',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        alt="Vue.js"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Framework',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    name: 'Bootstrap',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        alt="Bootstrap"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'CSS Framework',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Python',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Programming',
    gradient: 'from-blue-500 to-yellow-500'
  },
  {
    name: 'C++',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        alt="C++"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Programming',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Vite',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
        alt="Vite"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    ),
    category: 'Build Tool',
    gradient: 'from-purple-500 to-yellow-500'
  },
];

const softwareSkills: Skill[] = [
  {
    name: 'Figma',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'UI/UX Design',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'VS Code',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Code Editor',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Canva',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
        alt="Canva"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Graphic Design',
    gradient: 'from-cyan-400 to-purple-500'
  },
  {
    name: 'Microsoft Word',
    icon: (
      <img
        src="https://api.iconify.design/vscode-icons/file-type-word.svg"
        alt="Microsoft Word"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Word Processing',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Microsoft Excel',
    icon: (
      <img
        src="https://api.iconify.design/vscode-icons/file-type-excel.svg"
        alt="Microsoft Excel"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Spreadsheet',
    gradient: 'from-green-600 to-green-800'
  },
  {
    name: 'Microsoft PowerPoint',
    icon: (
      <img
        src="https://api.iconify.design/vscode-icons/file-type-powerpoint.svg"
        alt="Microsoft PowerPoint"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Presentation',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    name: 'XAMPP',
    icon: <SiXampp className="text-orange-500 text-sm sm:text-base" />,
    category: 'Development',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Discord',
    icon: (
      <img
        // Logo Discord dari koleksi Simple Icons di Iconify
        src="https://api.iconify.design/simple-icons/discord.svg?color=%235865F2" 
        alt="Discord"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Communication',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Google Workspace',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google Workspace"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Productivity',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    name: 'Primavera',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
        alt="Primavera (Oracle)"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 brightness-0 invert"
      />
    ),
    category: 'Project Management',
    gradient: 'from-red-600 to-orange-600'
  },
  {
    name: 'Tableau',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
        alt="Tableau"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 brightness-0 invert"
      />
    ),
    category: 'Data Visualization',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Trello',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
        alt="Trello"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Project Management',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Cypress',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg"
        alt="Cypress"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Testing',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    name: 'Microsoft Teams',
    icon: (
      <img
        src="https://api.iconify.design/logos/microsoft-teams.svg"
        alt="Microsoft Teams"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Communication',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    name: 'Orange',
    icon: (
      <img
        src="https://raw.githubusercontent.com/biolab/orange3/master/distribute/icon-48.png"
        alt="Orange Data Mining"
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      />
    ),
    category: 'Data Mining',
    gradient: 'from-orange-500 to-orange-700'
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => (
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
      className={`absolute inset-0 bg-gradient-to-r ${skill.gradient || 'from-indigo-500 to-purple-500'} rounded-lg blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
    />
    
    {/* Skill Card */}
    <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-lg p-2 sm:p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-opacity-0 aspect-square flex flex-col justify-center">
      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${skill.gradient || 'from-indigo-500 to-purple-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '1px' }}>
        <div className="w-full h-full bg-gray-800/80 rounded-lg" />
      </div>
      
      <div className="relative flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2 h-full">
        <motion.div 
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-gray-700/40 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-600/40 group-hover:to-gray-700/40 transition-all border border-gray-600/20 flex-shrink-0"
          animate={{
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
        >
          <div className="text-base sm:text-lg">
            {skill.icon}
          </div>
        </motion.div>
        
        <div className="space-y-0.5 sm:space-y-1 flex-grow flex flex-col justify-center">
          <h3 className="text-[10px] sm:text-xs font-medium text-white group-hover:text-gray-100 transition-colors leading-tight px-1">
            {skill.name}
          </h3>
          {skill.category && (
            <span className="text-[9px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight px-1">
              {skill.category}
            </span>
          )}
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

export default function Skills() {
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
      id="skills"
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
            What I Can Do
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            My Skills & Tools
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive look at the technologies and tools I use to build beautiful and functional digital products.
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
            <div className="grid lg:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 lg:gap-y-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Technical Skills"
                  subtitle="Languages and frameworks for building modern applications."
                  icon={<Code2 size={20} />}
                />
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {techSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Design & Software"
                  subtitle="Creative and productivity tools I use every day."
                  icon={<Paintbrush2 size={20} />}
                />
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {softwareSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}