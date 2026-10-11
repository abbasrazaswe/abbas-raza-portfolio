import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  MapPin, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

const Hero: React.FC = () => {
  const quickLinks = [
    { href: 'https://github.com/abbasrazaswe', label: 'GitHub', icon: Github, external: true },
    { href: 'https://www.linkedin.com/in/abbasrazaswe', label: 'LinkedIn', icon: Linkedin, external: true },
    { href: 'mailto:sabbasraza001@gmail.com', label: 'Email', icon: Mail, external: true },
    { href: '#resume', label: 'CV', icon: FileText, external: false },
  ];

  const sitePills = [
    { href: '#projects', label: '6 Featured Projects' },
    { href: '#experience', label: 'Horquva &bull; Eynvision' },
    { href: '#skills', label: 'Product &bull; Systems &bull; Software' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative overflow-hidden pt-28 pb-16">
      {/* 
        Minimalistic, ultra easy-to-render background:
        Pure CSS hardware-accelerated dot pattern + 2 soft ambient breathing orbs
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle dot matrix grid with soft radial mask */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#262626_1.2px,transparent_1.2px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_65%,transparent_100%)] opacity-80" />

        {/* Soft breathing ambient glow orb 1 (top-left) */}
        <motion.div
          className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Soft breathing ambient glow orb 2 (bottom-right) */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-80 h-80 bg-neutral-300/25 dark:bg-neutral-700/20 rounded-full blur-[90px]"
          animate={{
            scale: [1.12, 0.96, 1.12],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* MODERN PHOTO SECTION */}
        <motion.div
          className="relative flex flex-col items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Subtle outer breathing glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-500/20 via-neutral-300/30 to-blue-500/20 dark:from-cyan-400/20 dark:via-neutral-700/30 dark:to-blue-400/20 blur-xl pointer-events-none"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Profile Avatar Card with sleek double gradient border */}
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 shadow-2xl">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden p-1 bg-white dark:bg-black ring-2 ring-neutral-200 dark:ring-neutral-800">
              <img
                src="/profile.png"
                alt="Abbas Raza"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Live Status Chip anchored to avatar */}
            <motion.div
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg text-xs font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Work</span>
            </motion.div>
          </div>

          {/* Location & Quick Meta */}
          <div className="mt-5 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
            <span>Islamabad, Pakistan</span>
            <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
            <span className="text-neutral-600 dark:text-neutral-300 font-medium">COMSATS Final Year</span>
          </div>

          {/* Quick Action Links Bar */}
          <div className="mt-3.5 flex items-center gap-2 flex-wrap justify-center">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-200 shadow-sm"
              >
                <link.icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* HERO TITLE & TEXT */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Abbas Raza
          </h1>

          <div className="flex justify-center mb-5">
            <motion.div
              className="h-1 w-20 rounded-full bg-neutral-300 dark:bg-neutral-700 shadow-sm"
              animate={{
                scaleX: [0.9, 1.15, 0.9],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <h2
            className="text-2xl md:text-3xl font-normal text-neutral-600 dark:text-neutral-300 mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Polyglot Engineer
          </h2>

          <p
            className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Bridging product engineering, systems engineering, and software engineering — building resilient architectures, scalable backends, and intuitive cross-platform applications
          </p>

          {/* Quick Info Badges linking to rest of site */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-10 max-w-xl mx-auto">
            {sitePills.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="px-3.5 py-1.5 rounded-full bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/90 dark:border-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-sm"
                dangerouslySetInnerHTML={{ __html: pill.label }}
              />
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Me</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </motion.a>

            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-black dark:text-white font-semibold shadow hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;