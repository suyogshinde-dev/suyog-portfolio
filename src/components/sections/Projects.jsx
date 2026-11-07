import React from 'react';
import { motion } from 'framer-motion';
import { Github, Database, Layers, CheckCircle, Code, ShieldCheck, PieChart, Clock } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import TechTag from '../common/TechTag';
import { portfolioData } from '../../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Full Stack Software Applications"
          subtitle="Real-world applications engineered with Python, Django backend architectures, and interactive React frontends."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="relative p-6 sm:p-7 bg-gradient-to-br from-navy-900 to-navy-950 border-b border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-xs text-slate-500">
                        {isFirst ? 'student-mgmt-api.py' : 'expense-analytics.py'}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                      {isFirst ? <Database className="w-3 h-3" /> : <PieChart className="w-3 h-3" />}
                      Full Stack
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Key Architectural Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <TechTag key={tech} name={tech} variant="default" />
                      ))}
                    </div>
                  </div>

                  {/* Action Button: View on GitHub */}
                  <div className="pt-4 border-t border-white/5 flex items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-navy-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-navy-850 hover:text-cyan-300 shadow-sm hover:shadow-glow-cyan/20 transition-all duration-200 active:scale-95 group/btn"
                    >
                      <Github className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

