import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Horquva LLC',
      role: 'AI Engineering Intern',
      location: 'Wyoming, USA (Remote)',
      period: 'Summer 2026',
      type: 'Internship',
      description: 'Worked with the Integration & Ecosystem engineering team on the Antares Platform and OBA Core.',
      achievements: [
        'Engineered modular integration services and pipeline workflows connecting validated AI capabilities into the core business intelligence ecosystem.',
        'Developed capability operationalization templates and risk-scoring modules, accelerating service discovery and audit verification.',
        'Collaborated on backend APIs and data flow specifications to ensure robust communication across distributed microservices.'
      ],
      tech: ['Python', 'System Design', 'Backend Integration', 'Antares Platform', 'OBA Core'],
    },
    {
      company: 'Eynvision Labs',
      role: 'Product Engineer',
      location: 'Islamabad, Pakistan',
      period: 'Jul 2026 – Sep 2026',
      type: 'Project-Based',
      description: 'Systems architecture, database design, and backend engineering for The Memoir Project.',
      achievements: [
        'Architected comprehensive relational database schema (PostgreSQL / Supabase) with Row-Level Security (RLS) for 25+ application tables.',
        'Implemented domain-driven FastAPI REST services and structured schema validations using Pydantic.',
        'Engineered responsive Next.js onboarding modules with strict type contracts and API integration endpoints.'
      ],
      tech: ['FastAPI', 'PostgreSQL', 'Supabase', 'Next.js', 'Clean Architecture', 'REST APIs'],
    },
    {
      company: 'Inter Services Public Relations (ISPR)',
      role: 'Technical Intern',
      location: 'Islamabad, Pakistan',
      period: 'Jan 2026 – Feb 2026',
      type: 'Internship',
      description: 'Assisted in monitoring and maintaining operational defense systems and IT infrastructure.',
      achievements: [
        'Assisted in monitoring and maintaining secure operational systems within a government defense environment.',
        'Gained hands-on exposure to internal security protocols, organizational workflows, and strict documentation standards.',
        'Supported day-to-day operational tasks including technical reporting and inter-departmental technical coordination.'
      ],
      tech: ['Systems Monitoring', 'Network Operations', 'Technical Reporting'],
    },
    {
      company: 'TKC Enterprises',
      role: 'Virtual Assistant & Web Operations',
      location: 'New Jersey, USA (Remote)',
      period: 'Jun 2024 – Dec 2025',
      type: 'Remote Operations',
      description: 'Digital operations and eCommerce platform management.',
      achievements: [
        'Built and managed business websites and online eCommerce stores using WordPress and BigCommerce.',
        'Optimized multiple eCommerce catalogs by managing inventory details, pricing, product descriptions, and fulfillment workflows.',
        'Coordinated digital operations and structured weekly reporting to track fulfillment efficiency.'
      ],
      tech: ['WordPress', 'BigCommerce', 'eCommerce Management', 'Web Operations'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
          >
            Experience
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-lg max-w-2xl mx-auto">
            Professional engineering internships, residencies, and technical roles
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-7 md:p-9 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 pb-5 border-b border-neutral-200/70 dark:border-neutral-800/70">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}
                    >
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-base font-semibold text-neutral-800 dark:text-neutral-200">
                    <Briefcase className="w-4 h-4 text-neutral-500" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
