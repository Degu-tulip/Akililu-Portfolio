import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    type: 'electrical',
    name: '132/33kV Main Grid Substation — Modjo Industrial Park',
    client: 'Ethiopian Electric Power / CGGC (China)',
    location: 'Modjo, Ethiopia',
    status: 'Completed',
    description: 'Designed and supervised the 132/33kV Modjo GIS substation with CGGC.',
    specs: [
      { key: 'Voltage Level', value: '132/33kV' },
      { key: 'Transformer', value: '2×50MVA' },
      { key: 'Type', value: 'GIS Indoor' },
      { key: 'Standard', value: 'IEC 61850' },
      { key: 'Duration', value: '24 Months' },
      { key: 'Value', value: 'USD 12M+' },
    ],
  },
  {
    id: 2,
    type: 'construction',
    name: 'Hawassa Industrial Park — Phase II Civil & MEP',
    client: 'IPDC Ethiopia / CCCC (China)',
    location: 'Hawassa, Ethiopia',
    status: 'Completed',
    description: 'Led civil and MEP construction for 80,000m² of factory sheds with CCCC.',
    specs: [
      { key: 'Floor Area', value: '80,000 m²' },
      { key: 'Sheds', value: '16 Factory Units' },
      { key: 'Standard', value: 'ISO 45001 / HSE' },
      { key: 'Partner', value: 'CCCC (China)' },
      { key: 'Duration', value: '30 Months' },
      { key: 'Value', value: 'USD 35M+' },
    ],
  },
  {
    id: 3,
    type: 'electrical',
    name: '33/11kV Distribution Substation Network Rollout',
    client: 'Ethiopian Electric Utility',
    location: 'Addis Ababa Region, Ethiopia',
    status: 'Completed',
    description: 'Managed EPC delivery of 8 distribution substations with SCADA integration.',
    specs: [
      { key: 'Voltage Level', value: '33/11kV' },
      { key: 'Substations', value: '8 Units' },
      { key: 'System', value: 'SCADA / RTU' },
      { key: 'Feeder Bays', value: '6–12 per Site' },
      { key: 'Duration', value: '18 Months' },
      { key: 'Value', value: 'USD 8M+' },
    ],
  },
  {
    id: 4,
    type: 'construction',
    name: 'Dire Dawa Cement Factory — Structural Steel & Civil',
    client: 'Habesha Cement S.C. / SinoSteel (China)',
    location: 'Dire Dawa, Ethiopia',
    status: 'Completed',
    description: 'Construction management for cement factory expansion with SinoSteel.',
    specs: [
      { key: 'Capacity', value: '3,000 TPD Clinker' },
      { key: 'Steel Work', value: '2,400 Tons' },
      { key: 'Partner', value: 'SinoSteel (China)' },
      { key: 'Standard', value: 'OHSAS 18001' },
      { key: 'Duration', value: '22 Months' },
      { key: 'Value', value: 'USD 20M+' },
    ],
  },
  {
    id: 5,
    type: 'electrical',
    name: 'Solar-Hybrid MV Substation — Tigray Region',
    client: 'GIZ / Rural Electrification Program',
    location: 'Tigray, Ethiopia',
    status: 'Completed',
    description: 'Designed a solar-hybrid MV substation for rural electrification.',
    specs: [
      { key: 'Voltage Level', value: '33/0.4kV MV' },
      { key: 'Solar PV', value: '500kWp Integrated' },
      { key: 'Storage', value: 'BESS 250kWh' },
      { key: 'Standard', value: 'IEC 62109' },
      { key: 'Duration', value: '14 Months' },
      { key: 'Value', value: 'USD 4.5M' },
    ],
  },
  {
    id: 6,
    type: 'construction',
    name: 'Bole Lemi Industrial Zone — Utility Infrastructure',
    client: 'IPDC / China State Construction',
    location: 'Bole Lemi, Addis Ababa',
    status: 'Completed',
    description: 'Managed utility infrastructure works for the Bole Lemi zone with CSCEC.',
    specs: [
      { key: 'Zone Area', value: '156 Hectares' },
      { key: 'Roads', value: '12 km Internal' },
      { key: 'Partner', value: 'China State Construction' },
      { key: 'Standard', value: 'ISO 45001' },
      { key: 'Duration', value: '20 Months' },
      { key: 'Value', value: 'USD 18M+' },
    ],
  },
];

const filters = [
  { key: 'all', label: 'All Projects', icon: Filter },
  { key: 'electrical', label: 'Electrical', icon: Zap },
  { key: 'construction', label: 'Construction', icon: Building2 },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-16 relative overflow-hidden flex flex-col items-center w-full">
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

      <div className="w-full max-w-7xl px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 flex flex-col items-center text-center w-full"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-electric-blue circuit-line inline-block" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            03 / PROJECT CASE STUDIES
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center gap-2 flex-wrap mb-10 w-full"
        >
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm border transition-all duration-300
                ${activeFilter === key
                  ? key === 'electrical'
                    ? 'bg-electric-blue text-navy border-electric-blue shadow-lg shadow-electric-blue/20'
                    : key === 'construction'
                    ? 'bg-amber text-navy border-amber shadow-lg shadow-amber/20'
                    : 'bg-white/10 text-white border-white/30'
                  : 'bg-transparent text-slate-text border-white/10 hover:border-white/30 hover:text-white'
                }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
