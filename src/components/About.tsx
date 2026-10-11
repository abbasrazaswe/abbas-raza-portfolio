import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            About
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-900 dark:to-neutral-900 rounded-2xl shadow-xl p-10 md:p-14 mx-auto text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            I'm <strong className="font-semibold text-black dark:text-white">Abbas Raza</strong>, a <strong className="font-semibold text-black dark:text-white">software engineer</strong> building scalable systems across web applications, mobile applications, and automation. As a final year student at COMSATS University Islamabad, I work across the full product lifecycle, connecting intuitive user experiences with reliable backends and resilient architectures.
          </p>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            My work spans <strong className="font-semibold text-black dark:text-white">web platforms, cross-platform mobile apps, and automated workflows</strong>. I use React, Flutter, FastAPI, and PostgreSQL to build responsive interfaces, design APIs and data models, and connect services through dependable integrations. I focus on clean architecture, maintainable code, and systems that can grow with the product, from the first working feature to a reliable application.
          </p>
          <div className="pt-4 text-base text-neutral-500 dark:text-neutral-400 italic border-t border-neutral-200 dark:border-neutral-800">
            “Fate’s been written, so I’ve decided to rewrite the code.      - Abbas Raza”
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
