import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Download, Linkedin, Send,
  Zap, Globe, MessageSquare, CheckCircle
} from 'lucide-react';

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'akililu.tesfaye@engineer.com', href: 'mailto:akililu.tesfaye@engineer.com' },
  { icon: Phone, label: 'Phone', value: '+251 911 000 000', href: 'tel:+251911000000' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
  { icon: Globe, label: 'Availability', value: 'Open to International Projects', href: '#' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(0,180,255,0.06),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-mono text-electric-blue text-xs tracking-[0.3em] uppercase mb-3 block">
              05 / Contact & CV
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Let's Build Something{' '}
              <span className="text-electric-blue">Powerful.</span>
            </h2>
            <p className="text-slate-text mt-4 max-w-xl">
              Open to international EPC projects, consultancy, and global engineering partnerships.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left: Contact info + CV download */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* CV Download card */}
              <div className="mb-10 p-7 border border-electric-blue/30 rounded-sm bg-navy-700/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-electric-blue/3 rounded-full -translate-y-4 translate-x-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-electric-blue/10 rounded-sm flex items-center justify-center">
                    <Download size={20} className="text-electric-blue" />
                  </div>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem' }}>
                      CV & Capability Statement
                    </div>
                    <div className="text-xs text-slate-text">Full engineering credentials & project portfolio</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/Akililu_Tesfaye_CV.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-electric-blue text-navy font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-electric-blue-dark transition-all duration-300 shadow-lg shadow-electric-blue/20"
                  >
                    <Download size={15} />
                    Download CV
                  </a>
                  <a
                    href="/Akililu_Capability_Statement.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-electric-blue/40 text-electric-blue font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-electric-blue/10 transition-all duration-300"
                  >
                    <Zap size={15} />
                    Capability Statement
                  </a>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 border border-white/5 rounded-sm bg-white/2 hover:border-electric-blue/25 hover:bg-electric-blue/3 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-electric-blue/10 flex-shrink-0 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                      <Icon size={16} className="text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-text/60 uppercase tracking-wider">{label}</div>
                      <div className="text-white-text text-sm font-medium">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/akililu-tesfaye"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-3 px-5 py-3 border border-[#0077B5]/30 rounded-sm bg-[#0077B5]/5 hover:bg-[#0077B5]/10 hover:border-[#0077B5]/50 transition-all text-sm text-white font-medium"
              >
                <Linkedin size={18} className="text-[#0A66C2]" />
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-electric-blue" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Send a Message
                </h3>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 border border-green-500/30 rounded-sm bg-green-500/5 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Message Sent!</h4>
                  <p className="text-slate-text text-sm">Thank you for reaching out. I will respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-text/60 uppercase tracking-wider block mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-navy-700/60 border border-white/10 rounded-sm text-white text-sm placeholder:text-slate-text/40 focus:outline-none focus:border-electric-blue/50 focus:bg-navy-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-text/60 uppercase tracking-wider block mb-1.5">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-navy-700/60 border border-white/10 rounded-sm text-white text-sm placeholder:text-slate-text/40 focus:outline-none focus:border-electric-blue/50 focus:bg-navy-700 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-text/60 uppercase tracking-wider block mb-1.5">Company / Organization</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="POWERCHINA International"
                      className="w-full px-4 py-3 bg-navy-700/60 border border-white/10 rounded-sm text-white text-sm placeholder:text-slate-text/40 focus:outline-none focus:border-electric-blue/50 focus:bg-navy-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-text/60 uppercase tracking-wider block mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project or partnership opportunity..."
                      className="w-full px-4 py-3 bg-navy-700/60 border border-white/10 rounded-sm text-white text-sm placeholder:text-slate-text/40 focus:outline-none focus:border-electric-blue/50 focus:bg-navy-700 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-electric-blue text-navy font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-electric-blue-dark transition-all duration-300 shadow-lg shadow-electric-blue/20 disabled:opacity-60"
                  >
                    {sending ? (
                      <div className="w-4 h-4 border-2 border-navy/40 border-t-navy rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-white/5 bg-navy-800/80 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-electric-blue/50 rounded flex items-center justify-center">
              <Zap size={12} className="text-electric-blue" />
            </div>
            <span className="text-slate-text/60 text-sm font-mono">
              Eng. Akililu Tesfaye Dikaso — M.Sc. Engineering
            </span>
          </div>
          <span className="text-slate-text/40 text-xs font-mono tracking-wider">
            Electrical Substation · Industrial Construction · EPC
          </span>
          <span className="text-slate-text/30 text-xs">
            © {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
}
