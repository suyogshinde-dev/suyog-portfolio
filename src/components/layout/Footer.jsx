import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{portfolioData.personal.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {portfolioData.personal.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.email}
              aria-label="Email Contact"
              className="p-2.5 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-violet-400 hover:border-violet-500/40 hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 ml-2 rounded-lg bg-navy-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all focus:outline-none"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-cyan-400 font-mono">React</span> &amp; <span className="text-violet-400 font-mono">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

