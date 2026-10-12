import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/mjkogbzv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abbasrazaswe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abbasrazatxt/', label: 'LinkedIn' },
    { icon: BookOpen, href: 'https://medium.com/@abbasrazatxt', label: 'Medium' },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: "200px 0px 0px 0px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            Contact
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-sm" />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: "200px 0px 0px 0px" }}
          >
            <div>
              <h3 className="text-3xl font-semibold text-black dark:text-white mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                Get in touch
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Let's discuss how we can work together to build something remarkable. I'm always open to new opportunities and interesting conversations.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-3.5">
              <a
                href="mailto:sabbasraza001@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Email</div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:underline">
                    sabbasraza001@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+923319998839"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Phone</div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:underline">
                    +92 331 9998839
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60">
                <div className="w-11 h-11 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Location</div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Islamabad, Pakistan
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                Social Profiles
              </div>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full shadow hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "200px 0px 0px 0px" }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon className="w-5 h-5 text-neutral-700 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: "200px 0px 0px 0px" }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-600 dark:text-green-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent transition-all duration-300 text-black dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent transition-all duration-300 text-black dark:text-white resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full shadow font-semibold text-base hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;