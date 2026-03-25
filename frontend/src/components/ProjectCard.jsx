import { motion } from 'framer-motion';
import { Zap, Building2, MapPin, Users, ChevronRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group relative rounded-sm border overflow-hidden transition-all duration-300
        ${project.type === 'electrical'
          ? 'border-electric-blue/20 hover:border-electric-blue/50'
          : 'border-amber/20 hover:border-amber/50'
        }`}
      style={{
        background: 'linear-gradient(135deg, rgba(6,13,26,0.95) 0%, rgba(10,22,40,0.8) 100%)',
        boxShadow: project.type === 'electrical'
          ? '0 4px 30px rgba(0,180,255,0.05)'
          : '0 4px 30px rgba(245,158,11,0.05)',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: project.type === 'electrical'
            ? 'linear-gradient(90deg, #00b4ff, transparent)'
            : 'linear-gradient(90deg, #f59e0b, transparent)',
        }}
      />

      {/* Hover glow overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          project.type === 'electrical' ? 'bg-electric-blue/3' : 'bg-amber/3'
        }`}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div
              className={`w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center
              ${project.type === 'electrical' ? 'bg-electric-blue/10' : 'bg-amber/10'}`}
            >
              {project.type === 'electrical'
                ? <Zap size={16} className="text-electric-blue" />
                : <Building2 size={16} className="text-amber" />
              }
            </div>

            {/* Title */}
            <div>
              <span
                className={`text-xs font-mono uppercase tracking-widest mb-1 block
                ${project.type === 'electrical' ? 'text-electric-blue' : 'text-amber'}`}
              >
                {project.type === 'electrical' ? 'Electrical Substation' : 'Industrial Construction'}
              </span>
              <h3
                className="text-lg font-bold text-white leading-tight"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Status badge */}
          <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 font-semibold uppercase tracking-wider
            ${project.status === 'Completed'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-amber/10 text-amber border border-amber/20'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-text text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.specs.map((spec) => (
            <div key={spec.key} className="p-2.5 border border-white/5 rounded-sm bg-white/2">
              <div className="text-xs text-slate-text/50 uppercase tracking-wider">{spec.key}</div>
              <div className="text-sm text-white font-semibold mt-0.5">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-slate-text">
              <MapPin size={11} className="text-slate-text/50" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-text">
              <Users size={11} className="text-slate-text/50" />
              {project.client}
            </span>
          </div>
          <button
            className={`flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors
            ${project.type === 'electrical'
              ? 'text-electric-blue/60 hover:text-electric-blue'
              : 'text-amber/60 hover:text-amber'
            }`}
          >
            Details <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
