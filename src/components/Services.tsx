import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  Server, 
  Cloud 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Production-ready mobile and web apps built with Flutter and Dart, backed by Firebase for realtime data, auth, and cloud features.',
      tech: 'Flutter • Dart • Firebase • State Management'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent workflow automations, agentic pipelines, and custom tool integrations that streamline complex business operations.',
      tech: 'Workflows • Tool Integrations • Agent Pipelines'
    },
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'High-performance scalable APIs, reliable database architectures, and secure server-side logic engineered for high uptime.',
      tech: 'FastAPI • Node.js • Express • REST APIs'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Automated CI/CD deployment pipelines, containerized microservices, and robust cloud infrastructure management.',
      tech: 'Docker • Kubernetes • CI/CD • Linux'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Services
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-lg max-w-2xl mx-auto">
            Building intelligent automation, scalable backends, and modern applications
          </p>
        </motion.div>

        {/* Single row of 4 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/80 rounded-2xl shadow-lg p-7 sm:p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-neutral-800 dark:text-neutral-100" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="w-full pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono text-neutral-500 dark:text-neutral-400 tracking-tight">
                {service.tech}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-neutral-50 dark:bg-neutral-900 rounded-full shadow border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-500 text-xs font-medium">Available</span>
            </div>
            <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
            <span className="text-neutral-500 dark:text-neutral-400 text-xs">
              Response time: &lt; 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;