import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-gray-950 py-16 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-gray-700 h-full" />
            ))}
          </div>
        </div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <p className="text-white font-serif text-lg">
              Crafted with precision and clarity
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-64 mx-auto" />
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Abbas Raza. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;