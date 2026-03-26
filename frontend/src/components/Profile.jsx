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
          <div className="w-full mt-6 relative shadow-2xl shadow-black/50">
            
            {/* Main White Card Body */}
          <div className="bg-white rounded-lg overflow-hidden w-full text-[#1b3a5a]">
            
            {/* Dark Blue Header Banner */}
            <div className="bg-[#1b3a5a] text-white pt-6 pb-6 pr-8 pl-40 md:pl-56 relative min-h-[140px] flex flex-col justify-center">
              
              {/* Overlapping Profile Circle */}
              <div className="absolute -left-6 md:left-8 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full border-[10px] border-[#1b3a5a] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl overflow-hidden flex items-center justify-center z-20">
                {/* Fallback avatar shape if no image */}
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff,#d1d5db)] flex items-center justify-center border border-gray-200 rounded-full">
                  <div className="w-20 h-20 rounded-full bg-white/20 blur-xl absolute" />
                </div>
              </div>

              {/* Text & Socials container inside banner */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 w-full">
                
                {/* Name and Title */}
                <div className="flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 pr-0 md:pr-6">
                  <h3 className="text-3xl md:text-5xl font-bold mb-1 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Akililu Tesfaye
                  </h3>
                  <p className="text-[#aabfd3] font-medium tracking-widest text-xs md:text-sm uppercase">
                    Engineer & Contractor
                  </p>
                </div>

                {/* Social Icons row */}
                <div className="flex items-center gap-4 text-white">
                  <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                    <Globe size={14} />
                  </a>
                  <a href="tel:+251911745604" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                    <Phone size={14} />
                  </a>
                  <a href="mailto:danidegu960@gmail.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1b3a5a] transition-all">
                    <Mail size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-blue-300 transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-blue-300 transition-all">
                    <Linkedin size={18} />
                  </a>
                  <span className="text-sm font-light tracking-wide ml-2">Contact</span>
                </div>
              </div>

            </div>

            {/* Bottom White Area (Experience Line) */}
            <div className="pt-20 pb-16 px-8 md:pl-56 md:pr-12 relative">
              {/* Contact indicator below circle */}
              <div className="absolute left-8 md:left-20 top-4 w-24 text-center">
                <span className="text-[#1b3a5a] font-bold text-sm tracking-widest uppercase border-b-2 border-[#1b3a5a] pb-1">
                  Contact
                </span>
              </div>

              <div className="w-full flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded bg-[#1b3a5a] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <Edit3 size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#1b3a5a] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    EXPERIENCE
                  </h4>
                  <div className="border-b-2 border-[#aabfd3] pb-2 mb-6">
                    <p className="font-bold text-[#1b3a5a] tracking-widest uppercase text-sm">
                      Electrical | Construction
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6">
                    Engineering Specialist with a <strong className="text-[#1b3a5a]">Master's Degree</strong>. <br />
                    Leading huge EPC projects across East Africa in Substations & Industrial Construction.
                  </p>

                  {/* Desktop Stats Grid in White Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded text-center shadow-sm">
                      <div className="text-xl font-black text-[#1b3a5a]">M.Sc.</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Degree Level</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded text-center shadow-sm">
                      <div className="text-xl font-black text-[#1b3a5a]">132kV</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">HV Experience</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded text-center shadow-sm">
                      <div className="text-xl font-black text-[#1b3a5a]">EPC</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Delivery Model</div>
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
