import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ExpertiseToggle from './components/ExpertiseToggle';
import Projects from './components/Projects';
import Standards from './components/Standards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white-text antialiased overflow-x-hidden max-w-full w-full relative">
      {/* Scanline animation overlay */}
      <div className="scanline" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col items-center gap-32 pb-32 w-full">
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto w-full" />
        <Profile />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto w-full" />
        <ExpertiseToggle />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto w-full" />
        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto w-full" />
        <Standards />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto w-full" />
        <Footer />
      </main>
    </div>
  );
}
