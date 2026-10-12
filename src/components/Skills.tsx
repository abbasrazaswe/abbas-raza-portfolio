import React from 'react';
import { motion, type Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const line1 = [
    'Flutter',
    'Firebase',
    'Python',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'React',
  ];

  const line2 = [
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub',
    'Linux',
    'System Design',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  };

  const renderSkillButton = (skill: string) => (
    <motion.div
      key={skill}
      variants={itemVariants}
      className="group flex justify-center"
      whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      whileTap={{ scale: 0.96 }}
    >
      <div
        className="w-[124px] sm:w-[130px] xl:w-[134px] h-11 sm:h-12 flex items-center justify-center px-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-700 dark:text-neutral-200 font-semibold text-sm sm:text-[15px] shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-neutral-100 group-hover:dark:bg-neutral-800 cursor-pointer select-none text-center whitespace-nowrap"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
      >
        {skill}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: "200px 0px 0px 0px" }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Skills
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 sm:gap-4 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px 0px 0px 0px" }}
        >
          {/* Line 1 */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2.5 sm:gap-3 w-full">
            {line1.map(renderSkillButton)}
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2.5 sm:gap-3 w-full">
            {line2.map(renderSkillButton)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;