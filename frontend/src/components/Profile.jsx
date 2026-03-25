import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Globe, Award, Users, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const highlights = [
  {
    icon: GraduationCap,
    color: 'blue',
    title: "Master's in Engineering",
    desc: 'Advanced degree in Industrial Engineering and Electrical Power Systems',
  },
  {
    icon: Briefcase,
    color: 'amber',
    title: 'EPC Project Management',
    desc: 'Full lifecycle Engineering, Procurement & Construction delivery',
  },
  {
    icon: Globe,
    color: 'blue',
    title: 'International Exposure',
    desc: 'Collaborated with Chinese and global industrial firms on large-scale infrastructure',
  },
  {
    icon: Award,
    color: 'amber',
    title: 'HSE Certified',
    desc: 'Health, Safety & Environment compliance across all project phases',
  },
  {
    icon: Users,
    color: 'blue',
    title: 'Cross-Cultural Leadership',
    desc: 'Led multi-disciplinary, multinational engineering teams on complex projects',
  },
  {
    icon: TrendingUp,
    color: 'amber',
    title: 'Proven Track Record',
    desc: '10+ years delivering HV substations and heavy industrial facilities',
  },
];

function ProfileHighlight({ icon: Icon, color, title, desc, index }) {
  const isBlue = color === 'blue';
  return (
    <motion.div
      variants={fadeUp}
      className={`group p-5 rounded-sm border transition-all duration-300 cursor-default
        ${isBlue
          ? 'border-electric-blue/20 hover:border-electric-blue/60 hover:bg-electric-blue/5 border-glow-blue'
          : 'border-amber/20 hover:border-amber/60 hover:bg-amber/5 border-glow-amber'
        }`}
    >
      <div className={`mb-3 w-10 h-10 rounded-sm flex items-center justify-center ${isBlue ? 'bg-electric-blue/10' : 'bg-amber/10'}`}>
        <Icon size={20} className={isBlue ? 'text-electric-blue' : 'text-amber'} />
      </div>
      <h4 className="text-white font-semibold mb-1 text-sm tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1rem' }}>
        {title}
      </h4>
      <p className="text-slate-text text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Profile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="profile" className="relative py-40 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(0,180,255,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="font-mono text-electric-blue text-xs tracking-[0.3em] uppercase mb-3 block">
            01 / Professional Profile
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-6 circuit-line"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Engineering Excellence,<br />
            <span className="text-electric-blue">Delivered Globally.</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            {/* Name card */}
            <div className="mb-8 p-6 border border-electric-blue/30 rounded-sm bg-navy-700/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue via-transparent to-transparent" />
              <p className="text-xs text-electric-blue font-mono tracking-widest uppercase mb-2">Lead Engineer</p>
              <h3
                className="text-3xl font-black text-white mb-1"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Akililu Tesfaye Dikaso
              </h3>
              <p className="text-amber text-sm font-semibold tracking-wider">
                M.Sc. Industrial & Electrical Power Engineering
              </p>
            </div>

            <div className="space-y-5 text-slate-text leading-relaxed">
              <p>
                I am an engineering specialist with a Master's degree, bringing over a decade of expertise in <strong className="text-white">Electrical Substation Systems</strong> and <strong className="text-white">Industrial Construction Management</strong>.
              </p>
              <p>
                I lead large-scale EPC projects across East Africa — partnering with <strong className="text-electric-blue">Chinese firms</strong> to deliver high-standard infrastructure. My dual expertise bridges electrical precision with heavy industrial logistics.
              </p>
            </div>

            {/* Key metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { val: 'M.Sc.', label: 'Degree Level' },
                { val: '132kV', label: 'HV Experience' },
                { val: 'EPC', label: 'Delivery Model' },
              ].map((m) => (
                <div key={m.label} className="text-center p-3 border border-white/5 rounded-sm bg-white/2">
                  <div className="text-xl font-black text-amber font-heading" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{m.val}</div>
                  <div className="text-xs text-slate-text/60 tracking-wider uppercase mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <ProfileHighlight key={h.title} {...h} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
