import { motion } from 'framer-motion';
import { Zap, ArrowDown, ChevronRight, Activity } from 'lucide-react';
import Particles from './Particles';

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const techWords = ['EPC', 'HV', 'GIS', 'SLD', 'RTU', 'SCADA', 'HSE', 'IEC', 'IEEE'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-screen flex items-center overflow-hidden blueprint-grid w-full"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,180,255,0.07),transparent)]" />

      {/* Motional Background */}
      <Particles />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-electric-blue/30" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-electric-blue/30" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-amber/30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-amber/30" />

      {/* Floating tech words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
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

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-full pt-32 md:pt-20 pb-16 md:pb-0">

        {/* LEFT — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 self-center"
        >
          {/* Glowing border frame */}
          <div className="absolute -inset-[3px] rounded-lg bg-gradient-to-b from-electric-blue/80 via-electric-blue/20 to-amber/50 blur-[2px]" />
          <div className="relative rounded-lg overflow-hidden border border-electric-blue/30 shadow-[0_0_60px_rgba(0,180,255,0.25)]">
            <img
              src="/images/profile.jpg"
              alt="Akililu Tesfaye"
              className="w-full h-auto object-cover object-top"
              style={{ aspectRatio: '3/4' }}
            />
            {/* Subtle overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* RIGHT — All text content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-2xl self-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-electric-blue/40 rounded-full bg-electric-blue/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-slate-text tracking-widest uppercase font-mono">
              Available for International Projects
            </span>
          </motion.div>

          {/* Main headline — horizontal (all on one line flow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <span className="text-white">ENGINEER </span>
              <span className="text-electric-blue text-glow-blue">AKILILU </span>
              <span className="text-white">TESFAYE</span>
            </h1>
          </motion.div>

          {/* Subtitle line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 sm:w-10 bg-amber" />
            <span className="text-amber text-[10px] sm:text-sm font-semibold tracking-[0.25em] uppercase font-mono text-center">
              Master of Engineering
            </span>
            <div className="h-px w-8 sm:w-10 bg-amber" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-base sm:text-lg md:text-xl text-slate-text mb-3 font-light leading-relaxed"
          >
            Powering Industrial Infrastructure — from Grid to Ground.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-[11px] sm:text-sm text-slate-text/60 mb-10 font-mono tracking-wide px-4 md:px-0"
          >
            Electrical Substation Engineering · Industrial Construction · EPC Project Management
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 px-7 py-3.5 bg-electric-blue text-navy font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-electric-blue-dark transition-all duration-300 shadow-lg shadow-electric-blue/25 w-full sm:w-auto justify-center"
            >
              <Zap size={16} />
              View Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white-text font-semibold text-sm tracking-widest uppercase rounded-sm hover:border-electric-blue hover:text-electric-blue transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Activity size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-md"
          >
            {[
              { value: '10+', label: 'Years Exp' },
              { value: '50+', label: 'Projects' },
              { value: '132kV', label: 'Max Voltage' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-2 sm:p-3 border border-white/5 rounded-sm bg-white/2"
              >
                <span className="text-lg sm:text-xl font-black text-electric-blue" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-text/70 tracking-wider uppercase mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Mobile-only scroll indicator in flow */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="flex md:hidden flex-col items-center gap-2 mt-12 w-full text-slate-text/40 opacity-50"
          >
            <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1.5 bg-electric-blue rounded-full" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop-only absolute scroll indicator */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-text/40 z-20 pointer-events-none"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-electric-blue rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
