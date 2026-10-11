import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'HireFly.ai',
      subtitle: 'AI Interview & Recruitment Platform',
      description: 'Intelligent cross-platform mobile application built with Flutter and Dart, enabling candidates to explore jobs, practice interviews, and receive AI evaluations, with Firebase auth and realtime data.',
      tech: ['Flutter', 'Dart', 'Firebase', 'State Management'],
      github: 'https://github.com/abbasrazaswe/HireFly.ai',
    },
    {
      title: 'TradeX',
      subtitle: 'Stock Trading Simulator',
      description: 'Single-page web application for simulating stock trading on the NYSE. Features user auth, dynamic pricing, and real-time portfolio analytics with interactive charts.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'TailwindCSS'],
      github: 'https://github.com/abbasrazaswe/TradeX',
      live: 'https://tradex-six-rho.vercel.app',
    },
    {
      title: 'ML Based Face Recognition Attendance System',
      subtitle: 'Facial Recognition Attendance System',
      description: 'Real-time biometric attendance system using FaceNet deep learning embeddings, OpenCV webcam capture, and automated SQLite database logging with GUI.',
      tech: ['Python', 'FaceNet', 'OpenCV', 'SQLite'],
      github: 'https://github.com/abbasrazaswe/face-rec',
    },
    {
      title: 'Memoir AI Backend',
      subtitle: 'Scalable Microservices Architecture',
      description: 'Layered FastAPI microservices backend architecture implementing clean domain-driven design and asynchronous endpoints for AI-driven memory journaling.',
      tech: ['FastAPI', 'Python', 'REST APIs', 'Clean Architecture'],
      github: 'https://github.com/abbasrazaswe/memoirproject-ai-backend',
    },
    {
      title: 'Boring Weather App',
      subtitle: 'Interactive Weather & Forecast',
      description: 'Responsive weather dashboard providing current conditions, temperature, humidity, and 5-day forecasts worldwide with persistent local search history.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      github: 'https://github.com/abbasrazaswe/Boring-Weather-App',
      live: 'https://abbasrazaswe.github.io/Boring-Weather-App/',
    },
    {
      title: 'Cash Pilot',
      subtitle: 'Personal Finance & Expense Tracker',
      description: 'Modern cross-platform mobile application built with Flutter and Dart for personal finance management. Features real-time income and expense tracking, interactive analytics with fl_chart, and reactive state management.',
      tech: ['Flutter', 'Dart', 'Provider', 'FL Chart'],
      github: 'https://github.com/abbasrazaswe/cash-pilot',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Projects
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-lg max-w-2xl mx-auto">
            Featured applications spanning product development, scalable systems, and software engineering
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl border border-neutral-200/50 dark:border-neutral-800/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                    {project.title}
                  </h3>
                </div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                  {project.subtitle}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-neutral-200/60 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link CTA */}
        <motion.div
          className="flex flex-col items-center justify-center py-8"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-8 flex items-center justify-center"
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.12, 1.12, 1] }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'loop', ease: 'easeInOut', type: 'tween' }}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 rounded-full bg-neutral-300 dark:bg-neutral-800 opacity-30 blur-2xl animate-pulse" />
              <Github className="w-16 h-16 text-neutral-700 dark:text-neutral-200 drop-shadow-lg" />
            </span>
          </motion.div>
          <motion.a
            href="https://github.com/abbasrazaswe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full shadow-lg font-bold text-xl tracking-wide border border-neutral-200 dark:border-neutral-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-neutral-300/30 hover:bg-white hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,30,80,0.10)' }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Explore all repositories on GitHub!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;