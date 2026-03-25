import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ExpertiseToggle from './components/ExpertiseToggle';
import Projects from './components/Projects';
import Standards from './components/Standards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white-text antialiased">
      {/* Scanline animation overlay */}
      <div className="scanline" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Profile />
        <ExpertiseToggle />
        <Projects />
        <Standards />
        <Footer />
      </main>
    </div>
  );
}
