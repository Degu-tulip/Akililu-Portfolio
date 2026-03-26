import { motion } from 'framer-motion';
import {
  ShieldCheck, Globe, Award, Users, Cpu, CheckCircle,
  Flag, HandshakeIcon, Star, BookOpen
} from 'lucide-react';

const certifications = [
  { icon: ShieldCheck, label: 'HSE Certified', sub: 'Health, Safety & Environment', color: 'blue' },
  { icon: Award, label: 'ISO 45001', sub: 'Occupational Safety Management', color: 'amber' },
  { icon: BookOpen, label: 'IEC 61850', sub: 'Substation Automation Standard', color: 'blue' },
  { icon: Cpu, label: 'IEC 60909', sub: 'Short-Circuit Current Calculations', color: 'amber' },
  { icon: Star, label: 'IEEE Standards', sub: 'Power Systems Engineering', color: 'blue' },
  { icon: CheckCircle, label: 'OHSAS 18001', sub: 'Occupational Health & Safety', color: 'amber' },
  { icon: Globe, label: 'EPC Certified', sub: 'Engineering, Procurement & Construction', color: 'blue' },
  { icon: Award, label: 'FIDIC', sub: 'International Contract Standards', color: 'amber' },
];

const chinesePartners = [
  'CGGC (China Gezhouba Group)',
  'CCCC (China Communications Construction)',
  'SinoSteel Engineering',
  'China State Construction (CSCEC)',
  'POWERCHINA International',
  'SEPCO III Electric Power',
];

const globalCapabilities = [
  {
    icon: Globe,
    title: 'International EPC Delivery',
    desc: 'Proven capability to manage full EPC project lifecycles aligned with international standards and cross-border partnerships.',
  },
  {
    icon: Users,
    title: 'Chinese Firm Collaboration',
    desc: 'Extensive firsthand experience working with major Chinese SOE contractors on large-scale infrastructure projects across East Africa.',
  },
  {
    icon: ShieldCheck,
    title: 'HSE & Compliance',
    desc: 'Zero-compromise approach to Health, Safety and Environmental compliance across all project phases and jurisdictions.',
  },
  {
    icon: Flag,
    title: 'East Africa Market Expert',
    desc: 'Deep local knowledge combined with international engineering standards — bridging global firms with regional project realities.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Standards() {
  return (
    <section id="standards" className="py-16 relative overflow-hidden">
      {/* Bg gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(245,158,11,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="mb-16 flex flex-col items-center text-center w-full"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-electric-blue circuit-line inline-block" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            04 / GLOBAL STANDARDS & PARTNERSHIPS
          </h2>
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20"
        >
          {certifications.map(({ icon: Icon, label, sub, color }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-5 rounded-sm border group cursor-default transition-all duration-300
                ${color === 'blue'
                  ? 'border-electric-blue/15 hover:border-electric-blue/45 bg-electric-blue/3 hover:bg-electric-blue/6'
                  : 'border-amber/15 hover:border-amber/45 bg-amber/3 hover:bg-amber/6'
                }`}
            >
              <div className={`mb-3 ${color === 'blue' ? 'text-electric-blue' : 'text-amber'}`}>
                <Icon size={22} />
              </div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1rem' }}>
                {label}
              </div>
              <div className="text-xs text-slate-text/70 mt-1 leading-snug">{sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column: Chinese Partners + Global Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chinese Partner Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 font-bold text-sm">中</span>
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Chinese Firm Partnership Experience
              </h3>
            </div>
            <p className="text-slate-text text-sm mb-6 leading-relaxed">
              Partnering with Chinese SOEs for seamless EPC execution.
            </p>
            <div className="space-y-3">
              {chinesePartners.map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 border border-red-500/10 rounded-sm bg-red-500/3 hover:border-red-500/25 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-white-text text-sm font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Global Capabilities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Global Partnership Capabilities
            </h3>
            <div className="space-y-4">
              {globalCapabilities.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex gap-4 p-4 border border-white/5 rounded-sm bg-white/2 hover:border-electric-blue/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-sm bg-electric-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Icon size={18} className="text-electric-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem' }}>
                      {title}
                    </div>
                    <div className="text-slate-text text-xs leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
