import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Particles() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Initialize dimensions
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Generate random nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 30), 40); // responsive count
    const nodes = Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage string
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    setParticles(nodes);

    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-electric-blue/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 ${p.size * 2}px rgba(0, 180, 255, 0.5)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Subtle glowing orbs in corners to add volumetric feel */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-electric-blue/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-amber/5 blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
