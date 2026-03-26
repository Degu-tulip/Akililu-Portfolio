import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Globe, Award, Users, TrendingUp, Phone, Mail, Linkedin, Facebook, Edit3 } from 'lucide-react';

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
    <section id="profile" className="relative py-16 overflow-hidden flex flex-col items-center w-full">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(0,180,255,0.04),transparent)] pointer-events-none" />

      <div className="w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Section header */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: '-60px' }}
           variants={fadeUp}
           className="mb-12 flex flex-col items-center text-center w-full"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-electric-blue circuit-line inline-block"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            01 / PROFESSIONAL PROFILE
          </h2>
        </motion.div>

        {/* Single-column centered layout */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-16">
          
          {/* Image-Style Banner Layout */}
        <div className="w-full max-w-5xl mx-auto mt-6 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] rounded-xl">
          
          <div className="bg-white rounded-xl overflow-hidden w-full text-[#1b3a5a] relative">
            
            {/* Dark Blue Header Banner */}
            <div className="bg-[#1b3a5a] text-white pt-10 pb-10 px-6 md:px-12 relative flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
                
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                  <div className="flex-1 md:border-r border-white/20 pb-6 md:pb-0 pr-0 md:pr-8 w-full">
                    <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Akililu Tesfaye
                    </h3>
                    <p className="text-[#aabfd3] font-bold tracking-widest text-[11px] md:text-xs uppercase w-full border-b border-white/20 md:border-none pb-4 md:pb-0">
                      Engineer & Contractor
                    </p>
                  </div>

                  {/* Social Icons row */}
                  <div className="flex items-center justify-center gap-3 text-white flex-wrap w-full md:w-auto">
                    <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                      <Globe size={18} />
                    </a>
                    <a href="tel:+251911745604" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                      <Phone size={18} />
                    </a>
                    <a href="mailto:danidegu960@gmail.com" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                      <Mail size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-blue-300 transition-all">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-blue-300 transition-all">
                      <Linkedin size={24} />
                    </a>
                    <span className="text-sm font-light tracking-wide ml-2 hidden lg:block">Contact</span>
                  </div>
                </div>

            </div>

            {/* Bottom White Area (Experience Line) */}
            <div className="pt-12 pb-16 px-6 md:px-12 relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full">
              
              <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 mx-auto md:mx-0">
                <div className="w-12 h-12 rounded bg-[#1b3a5a] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Edit3 size={24} />
                </div>
                <div className="flex-1 w-full">
                  <h4 className="text-3xl font-black text-[#1b3a5a] mb-2 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                    EXPERIENCE
                  </h4>
                  <div className="border-b-2 border-[#aabfd3] pb-3 mb-8 w-full md:w-auto">
                    <p className="font-bold text-[#1b3a5a] tracking-widest uppercase text-xs md:text-sm">
                      Electrical | Construction
                    </p>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-10 w-full">
                    Engineering Specialist with a <strong className="text-[#1b3a5a]">Master's Degree</strong>. <br className="hidden md:block"/>
                    Leading huge EPC projects across East Africa in Substations & Industrial Construction.
                  </p>

                  {/* Desktop Stats Grid in White Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                    <div className="bg-[#f0f4f8] border border-[#aabfd3]/30 p-5 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-black text-[#1b3a5a]">M.Sc.</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-semibold">Degree Level</div>
                    </div>
                    <div className="bg-[#f0f4f8] border border-[#aabfd3]/30 p-5 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-black text-[#1b3a5a]">132kV</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-semibold">HV Experience</div>
                    </div>
                    <div className="bg-[#f0f4f8] border border-[#aabfd3]/30 p-5 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-black text-[#1b3a5a]">EPC</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-semibold">Delivery Model</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

          {/* Bottom: Highlight cards */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
