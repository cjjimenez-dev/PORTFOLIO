import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar() {
  const { config } = usePortfolio();
  const { profile } = config;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = [...navLinks.map((l) => l.href.replace('#', '')), 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 glass-panel top-0 border-b border-white/5" aria-label="Primary Navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <a href="#about" className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-white">
          {profile.brand}
          <span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition relative group ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition shadow-lg shadow-blue-500/20"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-1.5 text-slate-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
