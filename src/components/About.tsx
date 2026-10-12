import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: "150px 0px 0px 0px" }}
        >
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            I'm <strong className="font-semibold text-black dark:text-white">Abbas Raza</strong>, a <strong className="font-semibold text-black dark:text-white">software engineer</strong> focused on scalable systems, resilient architectures, and end-to-end product engineering across web, mobile, and automation.
          </p>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            My approach centers on <strong className="font-semibold text-black dark:text-white">domain-driven design, modular service boundaries, and workflow orchestration</strong>, with an emphasis on data integrity, fault tolerance, observability, and operational scalability.
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
