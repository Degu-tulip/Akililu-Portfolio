import { motion } from 'framer-motion';
import { Zap, ArrowDown, ChevronRight, Activity } from 'lucide-react';
import Particles from './Particles';

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const techWords = ['EPC', 'HV', 'GIS', 'SLD', 'RTU', 'SCADA', 'HSE', 'IEC', 'IEEE'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden blueprint-grid w-full"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,180,255,0.07),transparent)]" />
      
      {/* Motional Background */}
      <Particles />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-electric-blue/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-electric-blue/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-amber/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-amber/30" />

      {/* Floating tech words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.12, 0] }}
            transition={{ duration: 5, delay: i * 0.8, repeat: Infinity }}
            className="absolute font-mono text-electric-blue text-xs tracking-widest"
            style={{
              left: `${(i * 13) % 90}%`,
              top: `${(i * 17 + 10) % 80}%`,
              fontFamily: 'Share Tech Mono, monospace',
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
        
        {/* Profile Avatar */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-[3px] border-electric-blue/50 p-1 mb-6 shadow-[0_0_40px_rgba(0,180,255,0.3)] bg-[#03070f] z-20"
        >
          <img src="/profile.jpg" alt="Akililu Tesfaye" className="w-full h-full rounded-full object-cover" onError={(e) => { e.target.style.display='none' }} />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,180,255,0.4)] pointer-events-none" />
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.2),transparent)] flex items-center justify-center absolute top-0 left-0 -z-10 rounded-full" />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-electric-blue/40 rounded-full bg-electric-blue/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-slate-text tracking-widest uppercase font-mono">
            Available for International Projects
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-none"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            ENGINEER
            <span className="block text-electric-blue text-glow-blue">
              AKILILU
            </span>
            <span className="block text-white">TESFAYE</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-amber" />
          <span className="text-amber text-sm font-semibold tracking-[0.3em] uppercase font-mono">
            Master of Engineering
          </span>
          <div className="h-px w-12 bg-amber" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-xl md:text-2xl text-slate-text max-w-3xl mx-auto mb-4 font-light leading-relaxed"
        >
          Powering Industrial Infrastructure — from Grid to Ground.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base text-slate-text/60 max-w-2xl mx-auto mb-12 font-mono text-sm tracking-wide"
        >
          Electrical Substation Engineering  ·  Industrial Construction  ·  EPC Project Management
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 bg-electric-blue text-navy font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-electric-blue-dark transition-all duration-300 shadow-lg shadow-electric-blue/25"
          >
            <Zap size={16} />
            View Projects
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white-text font-semibold text-sm tracking-widest uppercase rounded-sm hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
          >
            <Activity size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto w-full"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Delivered' },
            { value: '132kV', label: 'Max Voltage Level' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 border border-white/5 rounded-sm bg-white/2"
            >
              <span className="text-2xl font-black text-electric-blue font-heading" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {stat.value}
              </span>
              <span className="text-xs text-slate-text/70 tracking-wider uppercase mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-text/50"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown size={16} className="text-electric-blue" />
      </motion.div>
    </section>
  );
}
