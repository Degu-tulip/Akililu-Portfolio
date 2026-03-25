import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '#profile', label: 'Profile' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#standards', label: 'Standards' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-md border-b border-electric-blue/20 shadow-lg shadow-electric-blue/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-electric-blue rounded flex items-center justify-center pulse-blue">
              <Zap size={16} className="text-electric-blue" />
            </div>
            <span
              className="text-white font-heading font-bold text-lg tracking-widest uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              ATD<span className="text-electric-blue">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-text hover:text-electric-blue transition-colors text-sm tracking-widest uppercase font-medium relative group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-electric-blue text-electric-blue text-sm font-semibold tracking-wider uppercase hover:bg-electric-blue hover:text-navy transition-all duration-300 rounded-sm"
          >
            <ChevronRight size={14} />
            Hire Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 z-40 bg-navy-700 border-l border-electric-blue/20 flex flex-col pt-24 px-8 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white-text text-xl font-heading font-semibold tracking-widest uppercase hover:text-electric-blue transition-colors border-b border-navy-500 pb-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-electric-blue text-navy font-bold tracking-wider uppercase rounded-sm"
            >
              Hire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
