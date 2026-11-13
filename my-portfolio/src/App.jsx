import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import ContactFooter from './components/ContactFooter';
import ProjectModal from './components/ProjectModal';
import ConfigPage from './components/ConfigPage';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isConfigOpen, setIsConfigOpen] = useState(() => {
    return window.location.hash === '#config' || window.location.pathname === '/config';
  });

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 700,
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsConfigOpen(window.location.hash === '#config' || window.location.pathname === '/config');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeConfig = () => {
    if (window.location.hash === '#config') {
      window.history.replaceState(null, '', window.location.pathname === '/config' ? '/' : window.location.pathname);
    }
    setIsConfigOpen(false);
  };

  if (isConfigOpen) {
    return <ConfigPage onBack={closeConfig} />;
  }

  return (
    <div className="antialiased min-h-screen text-slate-200 bg-[#020617] relative">
      {/* Subtle Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <EducationCerts />
        <ContactFooter />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}

export default App;
