import React from 'react';

export default function TechTag({ name, variant = 'default' }) {
  const variants = {
    default: 'bg-navy-850/80 text-slate-300 border-white/10 hover:border-cyan-500/40 hover:text-cyan-300',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/60',
    violet: 'bg-violet-950/40 text-violet-300 border-violet-500/30 hover:border-violet-400 hover:bg-violet-950/60',
    blue: 'bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/60'
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors duration-200 select-none ${variants[variant] || variants.default}`}
    >
      {name}
    </span>
  );
}

