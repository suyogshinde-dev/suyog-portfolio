import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Briefcase } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { internships } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Internship Experience"
          title="Industry &amp; Virtual Internships"
          subtitle="Practical technical training and hands-on internship programs across web development, mobile systems, and data analytics."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l border-cyan-500/20 space-y-8">
            {internships.map((internship, idx) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-glow-cyan" />

                {/* Card */}
                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {internship.role}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {internship.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{internship.organization}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

