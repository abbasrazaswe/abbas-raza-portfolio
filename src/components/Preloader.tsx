import React from 'react';
import { motion } from 'framer-motion';

const dotCount = 4;
const radius = 36; // more spacing for Apple-like feel

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        className="relative w-28 h-28"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
      >
        {[...Array(dotCount)].map((_, i) => {
          const angle = (i / dotCount) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-3.5 h-3.5 md:w-5 md:h-5 bg-black rounded-full shadow-[0_2px_12px_0_rgba(0,0,0,0.10)]"
              style={{ x: `${x}px`, y: `${y}px`, translateX: '-50%', translateY: '-50%' }}
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  '0 2px 12px 0 rgba(0,0,0,0.10)',
                  '0 4px 16px 0 rgba(0,0,0,0.18)',
                  '0 2px 12px 0 rgba(0,0,0,0.10)'
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.22,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Preloader; 