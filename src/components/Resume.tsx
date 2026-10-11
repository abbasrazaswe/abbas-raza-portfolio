import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Resume
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my experience, 
            skills, and academic achievements.
          </p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full shadow-lg font-semibold text-lg hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-neutral-300/30"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 32px 0 rgba(30,30,80,0.10)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="bg-white dark:bg-black p-8 rounded-2xl max-w-md w-full shadow-xl border border-neutral-200 dark:border-neutral-800"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-black dark:text-white">
                    Download Resume
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Click the button below to download the latest version of my resume in PDF format.
                </p>
                <motion.a
                  href="/AbbasRaza-Resume.pdf"
                  download="AbbasRaza-Resume.pdf"
                  className="inline-flex items-center gap-3 w-full justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full shadow font-semibold text-base hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;