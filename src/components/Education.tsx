import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Education
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-10 md:p-14 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/comsats.png"
                  alt="COMSATS University Islamabad" 
                  className="w-full h-full object-contain bg-white dark:bg-black"
                />
              </div>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-3">
                COMSATS University Islamabad
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-4 h-4" />
                <span>Final Year Student (2022 — 2026)</span>
              </div>
              <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
                Specializing in AI automation, agentic workflows, and backend system architecture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Education;
