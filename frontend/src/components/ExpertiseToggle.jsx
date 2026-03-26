import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building2, CheckCircle2 } from 'lucide-react';

const expertise = {
  electrical: {
    label: 'Electrical Substation',
    icon: Zap,
    accentColor: 'electric-blue',
    accentHex: '#00b4ff',
    tagline: 'High-Voltage Power Systems & Grid Infrastructure',
    description: 'Delivering full-cycle high-voltage substations (11kV to 230kV) to power critical national grids.',
    skills: [
      { label: 'HV Substation Design', level: 95 },
      { label: 'Protection & Control Systems', level: 90 },
      { label: 'Power Transformer Commissioning', level: 92 },
      { label: 'SCADA/RTU Integration', level: 85 },
      { label: 'Single Line Diagram (SLD) Engineering', level: 95 },
      { label: 'GIS & AIS Equipment', level: 88 },
    ],
    specs: [
      { key: 'Voltage Range', value: '11kV – 132kV' },
      { key: 'Standards', value: 'IEC 61850, IEC 60909' },
      { key: 'Equipment', value: 'GIS, AIS, Power Transformers' },
      { key: 'Systems', value: 'SCADA, RTU, Protection Relays' },
      { key: 'Delivery', value: 'EPC Turnkey' },
      { key: 'Testing', value: 'FAT, SAT, Commissioning' },
    ],
  },
  construction: {
    label: 'Industrial Construction',
    icon: Building2,
    accentColor: 'amber',
    accentHex: '#f59e0b',
    tagline: 'Heavy Industrial Facilities & Infrastructure Delivery',
    description: 'Managing massive industrial parks, manufacturing plants, and heavy civil construction projects.',
    skills: [
      { label: 'EPC Project Management', level: 96 },
      { label: 'Construction Planning & Scheduling', level: 93 },
      { label: 'Structural & Civil Coordination', level: 88 },
      { label: 'Procurement & Supply Chain', level: 90 },
      { label: 'HSE Management', level: 95 },
      { label: 'Cost & Budget Control', level: 87 },
    ],
    specs: [
      { key: 'Facility Types', value: 'Industrial Parks, Plants' },
      { key: 'Standards', value: 'ISO 45001, OHSAS 18001' },
      { key: 'Scale', value: 'Up to 100,000 m²' },
      { key: 'Methodology', value: 'EPC / EPCM' },
      { key: 'Software', value: 'Primavera P6, MS Project' },
      { key: 'Partners', value: 'Chinese & Global Firms' },
    ],
  },
};

function SkillBar({ label, level, accentHex }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-white-text font-medium">{label}</span>
        <span className="text-xs font-mono" style={{ color: accentHex }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentHex}88, ${accentHex})` }}
        />
      </div>
    </div>
  );
}

export default function ExpertiseToggle() {
  const [active, setActive] = useState('electrical');
  const data = expertise[active];
  const Icon = data.icon;
  const isBlue = active === 'electrical';

  return (
    <section id="expertise" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,180,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center w-full"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-electric-blue circuit-line inline-block" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            02 / DUAL EXPERTISE
          </h2>
        </motion.div>

        {/* Toggle control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-0 mb-12 max-w-2xl mx-auto w-full"
        >
          {Object.entries(expertise).map(([key, val]) => {
            const TabIcon = val.icon;
            const isActiveTab = active === key;
            const isBlueTab = key === 'electrical';
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm tracking-wider uppercase transition-all duration-300 border
                  ${isActiveTab
                    ? isBlueTab
                      ? 'bg-electric-blue text-navy border-electric-blue shadow-lg shadow-electric-blue/30'
                      : 'bg-amber text-navy border-amber shadow-lg shadow-amber/30'
                    : 'bg-transparent text-slate-text border-white/10 hover:border-white/30 hover:text-white'
                  }`}
              >
                <TabIcon size={16} />
                <span className="hidden sm:inline">{val.label}</span>
                <span className="sm:hidden">{key === 'electrical' ? 'Electrical' : 'Construction'}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className={`flex flex-col items-center text-center gap-12 p-8 md:p-14 md:px-20 rounded-sm border relative overflow-hidden w-full max-w-5xl mx-auto
              ${isBlue
                ? 'border-electric-blue/25 bg-navy-700/40 border-glow-blue'
                : 'border-amber/25 bg-navy-700/40 border-glow-amber'
              }`}
          >
            {/* Accent bar */}
            <div
              className="absolute top-0 left-0 h-1 w-full"
              style={{ background: `linear-gradient(90deg, ${data.accentHex}, transparent)` }}
            />

            {/* Top: description + specs */}
            <div className="flex flex-col items-center text-center w-full">
              <div className="flex flex-col items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center"
                  style={{ background: `${data.accentHex}15` }}
                >
                  <Icon size={32} style={{ color: data.accentHex }} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {data.label}
                  </h3>
                  <p className="text-sm md:text-base font-bold tracking-widest uppercase" style={{ color: data.accentHex }}>
                    {data.tagline}
                  </p>
                </div>
              </div>

              <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl font-light">
                {data.description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-3">
                {data.specs.map((spec) => (
                  <div key={spec.key} className="p-3 border border-white/5 rounded-sm bg-white/2">
                    <div className="text-xs text-slate-text/60 uppercase tracking-wider mb-1">{spec.key}</div>
                    <div className="text-sm text-white font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: skill bars */}
            <div>
              <h4
                className="text-lg font-bold text-white mb-6 flex items-center gap-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                <CheckCircle2 size={18} style={{ color: data.accentHex }} />
                Skill Proficiency
              </h4>
              <div className="space-y-1">
                {data.skills.map((skill) => (
                  <SkillBar key={skill.label} {...skill} accentHex={data.accentHex} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
