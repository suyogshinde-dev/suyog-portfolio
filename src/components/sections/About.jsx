import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const highlights = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Developing scalable web architectures and RESTful APIs using Python, Django, and Django REST Framework.',
    accent: 'border-cyan-500/30 text-cyan-400'
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    desc: 'Creating dynamic, responsive, and component-driven user interfaces with React.js, modern JavaScript, and Tailwind CSS.',
    accent: 'border-blue-500/30 text-blue-400'
  },
  {
    icon: Database,
    title: 'Database Architecture',
    desc: 'Designing efficient relational schemas, writing optimized SQL queries, and managing MySQL & MongoDB storage systems.',
    accent: 'border-violet-500/30 text-violet-400'
  },
  {
    icon: Layers,
    title: 'System Integration',
    desc: 'Implementing secure JWT authentication, API consumption, data visualization, and full-stack software lifecycle integration.',
    accent: 'border-cyan-500/30 text-cyan-300'
  }
];

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Engineering Solutions from Backend to Frontend"
          subtitle="A computer science engineering graduate driven by practical software development and modern web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>Developer Profile</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {personal.bio}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-mono">Location</span>
                <span className="font-semibold text-slate-200">{personal.location}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-mono">Specialization</span>
                <span className="font-semibold text-cyan-400">Full Stack Python &amp; React</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-mono">Education</span>
                <span className="font-semibold text-slate-200">B.Tech in CSE (2022–2025)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-mono">Availability</span>
                <span className="font-semibold text-emerald-400">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-4 border ${item.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

