import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud } from 'lucide-react';

const TechStack: React.FC = () => {
  const stacks = [
    {
      icon: Code2,
      title: 'Frontend & Mobile',
      technologies: ['Flutter', 'React', 'TypeScript', 'TailwindCSS'],
    },
    {
      icon: Server,
      title: 'Backend & AI',
      technologies: ['Python', 'FastAPI', 'Node.js', 'Express.js'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Infrastructure',
      technologies: ['Docker', 'Kubernetes', 'Linux', 'Git & GitHub'],
    },
  ];

  const databases = ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-4">
            Technology Stack
          </h2>
          <div className="w-16 h-px bg-blue-900 dark:bg-blue-300 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              className="text-center p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-900/20 dark:hover:border-blue-300/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <stack.icon className="w-12 h-12 mx-auto mb-4 text-blue-900 dark:text-blue-300" />
              <h3 className="text-xl font-medium text-black dark:text-white mb-4">
                {stack.title}
              </h3>
              <ul className="space-y-2">
                {stack.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-black dark:text-white mb-6">
            Databases
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {databases.map((db, index) => (
              <motion.span
                key={db}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {db}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;