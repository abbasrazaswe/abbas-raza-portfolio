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
            I'm <strong className="font-semibold text-black dark:text-white">Abbas Raza</strong>, a <strong className="font-semibold text-black dark:text-white">Flutter Mobile App Developer</strong> and software engineer. I am currently a <strong className="font-semibold text-black dark:text-white">final year student at COMSATS University Islamabad</strong> with 1 year of experience building high-performance cross-platform mobile applications, intuitive user interfaces, and reliable backend integrations.
          </p>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            I specialize in engineering <strong className="font-semibold text-black dark:text-white">major Flutter apps</strong> using <strong className="font-semibold text-black dark:text-white">Dart</strong>, <strong className="font-semibold text-black dark:text-white">Firebase</strong>, reactive state management, and clean architecture. My focus is on crafting smooth mobile experiences with rich animations, offline-first reliability, and seamless API integrations.
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