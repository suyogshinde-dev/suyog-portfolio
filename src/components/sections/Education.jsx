import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import TechTag from '../common/TechTag';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { education, training, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academics &amp; Credentials"
          title="Education &amp; Certifications"
          subtitle="Formal academic qualifications, specialized full-stack development training, and verified certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education & Training */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>Formal Education</span>
            </h3>

            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-white">
                    {item.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                </div>

                <p className="text-sm text-slate-300 font-medium mb-3">
                  {item.institution}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{item.grade}</span>
                </div>
              </motion.div>
            ))}

            {/* Specialized Training */}
            {training && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-blue-500/20 bg-blue-950/20 relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Professional Training Program</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {training.title}
                </h4>

                <p className="text-sm text-slate-300 font-medium mb-3">
                  {training.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  {training.focus}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {training.technologies.map((t) => (
                    <TechTag key={t} name={t} variant="blue" />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <Award className="w-6 h-6 text-violet-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">
                        Issued by: <span className="text-slate-300">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-violet-400">{cert.domain}</span>
                    <span className="text-slate-400 font-sans">Verified Credential</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

