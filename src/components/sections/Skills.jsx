import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Wrench, Layout } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import TechTag from '../common/TechTag';
import { portfolioData } from '../../data/portfolioData';

const skillCategories = [
  {
    key: 'languages',
    title: 'Programming Languages',
    icon: Code,
    accent: 'cyan',
    description: 'Core languages used for application logic, scripting, and data queries.'
  },
  {
    key: 'backend',
    title: 'Backend Engineering',
    icon: Terminal,
    accent: 'blue',
    description: 'Server architectures, RESTful API design, and authentication flows.'
  },
  {
    key: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    accent: 'violet',
    description: 'Dynamic user interfaces, styling libraries, and data visualization.'
  },
  {
    key: 'databases',
    title: 'Databases',
    icon: Database,
    accent: 'cyan',
    description: 'Relational and document storage solutions for structured datasets.'
  },
  {
    key: 'tools',
    title: 'Tools & Ecosystem',
    icon: Wrench,
    accent: 'blue',
    description: 'Version control, developer tooling, API testing, and build bundlers.'
  }
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="Tools &amp; Technologies I Work With"
          subtitle="Proficiencies across full-stack software development, API design, and database engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const items = skills[category.key] || [];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {items.map((skill) => (
                    <TechTag
                      key={skill}
                      name={skill}
                      variant={category.accent}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

