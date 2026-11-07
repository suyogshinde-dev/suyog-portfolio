import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, ExternalLink, FileText, Send } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      title: 'Email Address',
      value: personal.email,
      href: personal.socials.email,
      icon: Mail,
      accent: 'cyan',
      actionLabel: 'Send an Email',
      canCopy: true
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/suyogshinde72',
      href: personal.socials.linkedin,
      icon: Linkedin,
      accent: 'blue',
      actionLabel: 'Connect on LinkedIn',
      external: true
    },
    {
      title: 'GitHub',
      value: 'github.com/suyogshinde-dev',
      href: personal.socials.github,
      icon: Github,
      accent: 'violet',
      actionLabel: 'Explore Repositories',
      external: true
    },
    {
      title: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[^0-9+]/g, '')}`,
      icon: Phone,
      accent: 'cyan',
      actionLabel: 'Call Directly'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect &amp; Collaborate"
          subtitle="Direct, verified contact channels for full-time opportunities, software development projects, or technical conversations."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-2xl relative overflow-hidden mb-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active &amp; Responsive
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Have an opportunity or project in mind?
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                I am actively seeking software development positions where I can contribute my expertise in Python, Django, and React.js. Reach out directly via email or social platforms.
              </p>

              {/* Direct email quick action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={personal.socials.email}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:via-blue-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-navy-900 border border-white/10 hover:border-cyan-500/40 hover:bg-navy-850 transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={personal.resumeUrl}
                  download="Suyog_Shinde_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-950/70 hover:border-cyan-400 transition-all duration-200"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Grid of Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactChannels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

