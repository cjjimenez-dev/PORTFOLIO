import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, X, Github, Linkedin, Mail, Code2, Brain, 
  Medal, Gamepad2, Bike, Truck, Building2, Briefcase, 
  IdCard, Award, Phone, MapPin, Heart, Layers, Smartphone,
  GitBranch, Database, TestTube, FileCode, FolderGit2, ExternalLink,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { 
  SiHtml5, SiCss, SiJavascript, SiPhp, SiReact, 
  SiLaravel, SiFlutter, SiDart, SiGit, SiGithub, 
  SiAndroidstudio, SiTailwindcss, SiNodedotjs, SiFirebase, 
  SiFastapi, SiTypescript, SiVercel, SiPwa
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import BlurText from './BlurText';

const getTagIcon = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('react')) return SiReact;
  if (t.includes('tailwind')) return SiTailwindcss;
  if (t.includes('node.js')) return SiNodedotjs;
  if (t.includes('laravel')) return SiLaravel;
  if (t.includes('pwa')) return SiPwa;
  if (t.includes('flutter')) return SiFlutter;
  if (t.includes('firebase')) return SiFirebase;
  if (t.includes('dart')) return SiDart;
  if (t.includes('fastapi')) return SiFastapi;
  if (t.includes('typescript')) return SiTypescript;
  if (t.includes('serverless')) return SiVercel;
  if (t.includes('php')) return SiPhp;
  return null;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    if (Math.abs(walk) > 10) {
      setDragged(true); // Prevent click if dragged significantly
    }
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    });
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const techStack = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    { name: 'CSS3', icon: SiCss, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
    { name: 'Dart', icon: SiDart, color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
    { name: 'Java', icon: FaJava, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
    { name: 'Git', icon: SiGit, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
    { name: 'GitHub', icon: SiGithub, color: 'text-slate-300', bg: 'bg-slate-500/10 border-slate-500/20' },
    { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
    { name: 'Netbeans', icon: Layers, color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-500/20' },
    { name: 'Antigravity', icon: Code2, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  ];

  const featuredProjects = [
    {
      title: 'VidereVision',
      subHeader: 'Advanced Vision & Analytics Platform',
      role: 'Full-Stack Developer',
      description: 'A comprehensive vision and analytics platform built with modern technologies.',
      details: 'VidereVision is a scalable web platform designed to provide cutting-edge analytics and computer vision capabilities for businesses. The project involved creating real-time dashboards, processing high-volume visual data, and ensuring a seamless user experience across all devices.',
      tags: ['React', 'Tailwind CSS', 'Node.js'],
      techStacks: 'React.js, Node.js, Express, Tailwind CSS, PostgreSQL',
      color: 'from-blue-500/20 to-purple-500/20',
      border: 'border-blue-500/30',
      image: '/images/viderevision.png',
      liveUrl: 'https://viderevision.vercel.app'
    },
    {
      title: 'Lucky Boba POS',
      subHeader: 'Full-Stack Point of Sale & PWA',
      role: 'Full-Stack Web Developer',
      description: 'A comprehensive Point of Sale system specifically designed for bubble tea shops, featuring offline capabilities.',
      details: 'Lucky Boba POS is a full-stack Point of Sale system specifically designed for bubble tea shops. Its primary use is to handle store operations seamlessly, including real-time sales processing, inventory management across multiple locations, and role-based access control for different staff levels. Notably, it is built as a Progressive Web App (PWA), giving it offline capabilities to ensure uninterrupted service even without an active internet connection.',
      features: `• Multi-Role System: 8 distinct user roles (Super Admin, System Admin, Area Manager, Branch Manager, Supervisor, Team Leader, IT Admin, Cashier) with tailored interfaces.
• Real-time POS: Fast sales processing equipped with an offline queue.
• Inventory Management: Comprehensive stock tracking, branch transfers, raw materials, and recipes.
• Loyalty Program: Card-based customer rewards system.
• Analytics Dashboard: Detailed reports for sales, inventory, and operations.
• Audit Logging: Complete activity tracking across the system.
• Multi-Branch Support: Centralized management for multiple store locations.
• Device Management: POS device registration and authorization.
• Bundle & Discount System: Flexible pricing rules and combinations.
• Online Orders: Integration capabilities with online ordering.
• PWA Support: Installable application that works offline and syncs automatically when the connection is restored.
• Excel Export: Report export functionality.`,
      tags: ['React 19', 'Laravel 12', 'PWA'],
      techStacks: `Frontend Architecture:
• Framework: React 19 + TypeScript
• Build Tool: Vite 7
• Routing: React Router DOM 7
• Styling: TailwindCSS 4
• State Management: Zustand
• Icons: Lucide React
• Charts: Recharts
• Virtual Keyboard: React Simple Keyboard
• Excel Operations: XLSX library
• HTTP Client: Axios
• PWA: Vite Plugin PWA with Workbox

Backend Architecture:
• Framework: Laravel 12 (PHP 8.3+)
• API Authentication: Laravel Sanctum
• Database: SQLite (default) / MySQL compatible
• Caching: Redis (via Predis)
• Excel Export: Maatwebsite Excel
• Performance: Laravel Octane for high-performance serving
• Queue Processing: Laravel Queue with concurrent workers`,
      color: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      image: '/images/luckyboba-adminpanel.png'
    },
    {
      title: 'Lucky Boba APP',
      subHeader: 'Customer Mobile Application',
      role: 'Mobile Developer',
      description: 'A dedicated mobile application for customers to place orders, track loyalty points, and engage with the brand.',
      details: 'The Lucky Boba APP is the customer-facing mobile interface for the bubble tea franchise. It empowers users to seamlessly browse the menu, customize their boba orders, and participate in the integrated digital loyalty program. Orders placed through the app are directly synced with the Lucky Boba POS for real-time processing by the store staff.',
      features: `• Mobile Ordering: Intuitive interface for browsing menus, customizing drinks, and placing pickup/delivery orders.
• Digital Loyalty Card: Integrated reward system replacing physical stamp cards.
• Real-Time Order Tracking: Customers receive live updates on their order status from the POS.
• User Authentication: Secure login via Firebase Authentication.
• Push Notifications: Alerts for order updates and promotional offers.`,
      tags: ['Flutter', 'Firebase', 'Dart'],
      techStacks: `Frontend & Mobile:
• Framework: Flutter
• Language: Dart
• State Management: Provider / Riverpod

Backend & Services:
• Authentication: Firebase Auth
• Database: MySQL (synced via PHP APIs from POS)
• Backend Language: PHP`,
      color: 'from-red-500/20 to-orange-500/20',
      border: 'border-red-500/30',
      image: '/images/luckyboba-app.jpg'
    },
    {
      title: 'ResumeForge',
      subHeader: 'AI-Powered Resume Builder',
      role: 'Full-Stack Web Developer',
      description: 'A modern, AI-powered resume builder designed to create professional, ATS-friendly resumes.',
      details: 'ResumeForge is a modern, AI-powered resume builder designed to help users quickly and easily create professional, ATS-friendly (Applicant Tracking System) resumes. It allows users to either build a resume from scratch or import their existing resumes to format them using live-preview templates.',
      features: `• Resume Import: Ability to drag and drop existing resumes in PDF or DOCX format.
• Resume Creation: Option to build a new resume entirely from scratch.
• Authentication: Users can either create a dedicated account or continue using the app as a guest.
• Dynamic Live-Preview Templates: Includes different stylistic options to choose from (Classic, Modern, Creative).
• Exporting: Users can export their polished resumes/portfolios directly to Microsoft Word (DOCX) or PDF formats.`,
      tags: ['React 18', 'Tailwind', 'FastAPI'],
      techStacks: `Frontend:
• Framework: React 18 paired with Vite for fast build times
• Styling: Tailwind CSS v3 for utility-first styling
• Animations: Framer Motion for smooth UI transitions
• Icons: Lucide React
• State Management & Routing: React Hooks

Backend:
• Framework: FastAPI (Python) for building high-performance APIs
• Authentication: JSON Web Tokens (JWT)
• File Parsing: PyPDF2 for parsing PDF files, python-docx for parsing Word documents
• Database: SQLite (managed via SQLAlchemy ORM)
• Server: Uvicorn as the ASGI web server implementation`,
      color: 'from-teal-500/20 to-emerald-500/20',
      border: 'border-teal-500/30',
      image: '/images/resumeforge.png',
      liveUrl: 'https://resumeforge-builder.vercel.app'
    },
    {
      title: 'ShiftDox',
      subHeader: 'Serverless Document Conversion App',
      role: 'Full-Stack Developer',
      description: 'A fast, highly secure, and beautifully designed serverless document conversion application.',
      details: 'ShiftDox is a fast, highly secure, and beautifully designed serverless document conversion application. Its primary use is to allow users to securely upload and convert documents between various formats (such as PDF, Word, Excel, PowerPoint, and JPG) using an intuitive drag-and-drop interface and dedicated conversion tools.',
      features: `• Premium Dark UI: A stunning glassmorphism design featuring fluid micro-animations powered by Framer Motion.
• Serverless Architecture: It requires no traditional backend; all API routes run natively on Vercel Serverless Functions.
• Google Authentication: Secure, one-click login and registration using @react-oauth/google.
• Drag & Drop Conversions: Seamless file uploading tailored to specific conversion tasks.
• 8 Dedicated Conversion Tools: PDF to Word, Word to PDF, PDF to Excel, Excel to PDF, PDF to PPT, PPT to PDF, PDF to JPG, JPG to PDF.
• CloudConvert Engine: All files are securely processed in a sandboxed environment utilizing the CloudConvert API.`,
      tags: ['React 19', 'TypeScript', 'Serverless'],
      techStacks: `Frontend:
• Framework: React 19 (via Vite)
• Language: TypeScript
• Styling: Tailwind CSS v4, Vanilla CSS
• Animations: Framer Motion
• Icons: Lucide React
• Routing: React Router DOM v7
• Authentication: Google OAuth 2.0 (@react-oauth/google)

Backend & Infrastructure:
• Hosting / Platform: Vercel
• API Runtime: Vercel Serverless Functions (Node.js)
• Form Parsing: Formidable
• Conversion API: CloudConvert Node.js SDK`,
      color: 'from-indigo-500/20 to-blue-500/20',
      border: 'border-indigo-500/30',
      image: '/images/shiftdox.png',
      liveUrl: 'https://shift-dox.vercel.app/#'
    }
  ];

  return (
    <div className="antialiased min-h-screen text-slate-200 bg-[#020617] relative">

      {/* MINIMALIST BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950">
      </div>

      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 glass-panel top-0 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
            CJ<span className="text-blue-500">.</span>
          </a>

          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-white transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-lg shadow-blue-500/20">
              Contact
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block text-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* CONTENT WRAPPER */}
      <main className="relative z-10">

        {/* ── HERO SECTION ── */}
        <header id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            <div data-aos-duration="1000"> 
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
                Portfolio 2026
              </div>
              
              <BlurText
                text="Christian John G. Jimenez"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight"
              />

              <BlurText
                text="Full-Stack Web & Mobile Developer"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-blue-400 font-light mb-2"
              />

              <BlurText
                text="BS Information Technology Student — Quezon City University"
                delay={40}
                animateBy="words"
                direction="top"
                className="text-base text-slate-400 font-light mb-6"
              />

              <BlurText
                text="Motivated IT professional seeking opportunities to leverage full-stack development, mobile app, and QA skills to deliver impactful digital solutions and drive organizational growth."
                delay={25}
                animateBy="words"
                direction="top"
                className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg border-l-2 border-blue-500 pl-4"
              />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="px-8 py-3 bg-white text-slate-900 font-bold rounded hover:bg-slate-200 transition">
                  Get in Touch
                </a>
                <a href="#experience" className="px-8 py-3 glass-card text-white font-medium rounded hover:bg-white/10 transition">
                  View Work
                </a>
              </motion.div>

              <div className="mt-12 flex items-center gap-6 text-slate-400">
                <a 
                  href="https://github.com/Escaa007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jimenez-christian-john-b38b1b3a7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:jimenezchristianjohngran07@gmail.com" className="hover:text-blue-400 transition transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Stats / Info Cards */}
            <div className="relative flex justify-center items-center w-full" data-aos="fade-left" data-aos-duration="1200">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {[
                  { label: 'Years of Study', value: '4+', sub: 'BSIT at QCU' },
                  { label: 'Tech Stack', value: '12+', sub: 'Languages & Tools' },
                  { label: 'Internships', value: '3', sub: 'Gov & Private' },
                  { label: 'Availability', value: 'Open', sub: 'Freelance & Remote' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl text-center">
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-white font-semibold text-sm mt-1">{stat.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </header>

        {/* ── TECH STACK BANNER ── */}
        <section className="py-10 bg-slate-900/40 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className={`p-4 rounded-full border ${tech.bg} ${tech.color} backdrop-blur-md transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-${tech.color.split('-')[1]}-500/10 group relative`}
                  title={tech.name}
                >
                  <tech.icon className="w-6 h-6" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS SECTION ── */}
        <section id="skills" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Technical Arsenal</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hard Skills */}
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up">
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-lg"><Code2 className="w-6 h-6" /></div>
                  Hard Skills
                </h3>
                <div className="space-y-5">
                  {[
                    { name: 'Front-End Development', level: 'Intermediate', width: '70%' },
                    { name: 'Back-End (PHP/Laravel)', level: 'Intermediate', width: '65%' },
                    { name: 'Mobile Dev (Flutter)', level: 'Intermediate', width: '60%' },
                    { name: 'Manual QA Testing', level: 'Intermediate', width: '65%' },
                    { name: 'MS Office Suite', level: 'Advanced', width: '85%' },
                    { name: 'Database Management', level: 'Intermediate', width: '60%' },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-white text-sm">{skill.name}</span>
                        <span className="text-xs text-blue-300">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-1.5 rounded-full" style={{ width: skill.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills & Languages */}
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-3">
                  <div className="bg-teal-500/10 p-2 rounded-lg"><Brain className="w-6 h-6" /></div>
                  Soft Skills & Languages
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    'Active Listening', 'Critical Thinking', 'Leadership', 
                    'Task Delegation', 'Teamwork', 'Time Management',
                    'Problem Solving', 'Adaptability'
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-white text-sm">Filipino</span>
                    <span className="text-xs text-teal-300">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-white text-sm">English</span>
                    <span className="text-xs text-teal-300">Intermediate</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Affiliations & Awards</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>PH Army Reserve (RESCOM) — 1302nd Btn</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Cert. of Appreciation - Clean Up Drive</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Cert. of Attendance - GAD Seminar</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Cert. of Appreciation - Holy Trinity Procession</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dev Tools */}
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-lg"><Layers className="w-6 h-6" /></div>
                  Tools & Platforms
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Frontend', items: 'React, HTML5, CSS3, JavaScript', Icon: FileCode, color: 'text-blue-400' },
                    { label: 'Backend', items: 'PHP, Laravel, Java', Icon: Database, color: 'text-green-400' },
                    { label: 'Mobile', items: 'Flutter, Dart, Android Studio', Icon: Smartphone, color: 'text-cyan-400' },
                    { label: 'DevOps', items: 'Git, GitHub, VS Code, Netbeans, Antigravity', Icon: GitBranch, color: 'text-orange-400' },
                    { label: 'QA', items: 'Manual Testing, Alpha & Beta Testing', Icon: TestTube, color: 'text-pink-400' },
                  ].map((group) => (
                    <div key={group.label} className="flex gap-3 items-start">
                      <group.Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${group.color}`} />
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{group.label}</p>
                        <p className="text-sm text-slate-300">{group.items}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS SECTION ── */}
        <section id="projects" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Featured Projects</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative group/carousel">
              {/* Scroll Container */}
              <div 
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex overflow-x-auto gap-6 pb-8 custom-scrollbar pt-4 px-4 -mx-4 select-none cursor-grab active:cursor-grabbing ${!isDragging ? 'snap-x snap-mandatory' : ''}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Hide default scrollbar for webkit */}
                <style dangerouslySetInnerHTML={{__html: `
                  .custom-scrollbar::-webkit-scrollbar { display: none; }
                `}} />

                {featuredProjects.map((project, i) => (
                  <div 
                    key={i} 
                    className={`glass-card rounded-2xl border ${project.border} relative overflow-hidden group flex flex-col cursor-pointer flex-shrink-0 w-[85vw] md:w-[600px] hover:-translate-y-2 transition-transform duration-300 snap-center`} 
                    data-aos="fade-up" 
                    data-aos-delay={i * 100}
                    onClick={() => {
                      if (!dragged) setSelectedProject(project);
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20`}></div>
                    
                    {/* Image Container with Overlay Title */}
                    <div className="h-72 md:h-80 w-full overflow-hidden relative bg-slate-900 flex-shrink-0 flex items-center justify-center p-6">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        draggable="false"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 relative z-0"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/600x400/1e293b/334155?text=' + project.title.replace(/ /g, '+');
                        }}
                      />
                      
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 pointer-events-none"></div>
                      
                      {/* Project Title overlaying the image */}
                      <div className="absolute bottom-6 left-6 z-20 pr-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE SECTION ── */}
        <section id="experience" className="py-24 bg-slate-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center" data-aos="zoom-in">
              Work Experience
            </h2>

            <div className="max-w-4xl mx-auto">
              {[
                { 
                  role: 'IT Programmer', 
                  date: 'February – June 2026', 
                  company: 'Lucky Boba Food and Beverage Trading Corp', 
                  Icon: Code2,
                  color: 'text-blue-400',
                  bullets: [
                    'Developed and maintained IT systems and applications to support business operations.',
                    'Managed technical infrastructure and ensured system stability.',
                    'Provided technical support to staff to ensure smooth day-to-day operations.'
                  ]
                },
                { 
                  role: 'OJT Intern — Curriculum & Learning Management Division', 
                  date: 'September – December 2025', 
                  company: 'Department of Education NCR', 
                  Icon: Building2,
                  color: 'text-teal-400',
                  bullets: [
                    'Managed and maintained division database ensuring accuracy and integrity of records.',
                    'Performed systematic data encoding of curriculum-related documents.',
                    'Facilitated file routing and document management across departments.'
                  ]
                },
                { 
                  role: 'Investments Accounting Department Intern', 
                  date: 'June – Aug 2023', 
                  company: 'Social Security System (SSS) — Government Internship Program', 
                  Icon: Briefcase,
                  color: 'text-purple-400',
                  bullets: [
                    'Assisted in data encoding, document filing, and financial record management.',
                    'Gained exposure to government accounting procedures and regulatory compliance.'
                  ]
                },
                { 
                  role: 'Motorcycle Delivery Rider', 
                  date: 'Feb 2025 – Present', 
                  company: 'LALAMOVE Philippines', 
                  Icon: Truck,
                  color: 'text-amber-400',
                  bullets: []
                },
                { 
                  role: 'Motorcycle Rider Partner', 
                  date: 'July 2025 – January 2026', 
                  company: 'ANGKAS Philippines', 
                  Icon: Bike,
                  color: 'text-orange-400',
                  bullets: []
                },
              ].map((job, index, arr) => (
                <div key={index} className="flex gap-6 mb-10 last:mb-0" data-aos="fade-left" data-aos-delay={index * 80}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 z-10">
                      <job.Icon className={`w-6 h-6 ${job.color}`} />
                    </div>
                    {index !== arr.length - 1 && <div className="h-full w-0.5 bg-slate-800 my-2"></div>}
                  </div>
                  <div className="glass-card p-6 rounded-xl flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded mt-1 md:mt-0 whitespace-nowrap">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{job.company}</p>
                    {job.bullets.length > 0 && (
                      <ul className="space-y-1">
                        {job.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-slate-300 flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION & CERTS ── */}
        <section id="education" className="py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-blue-500 pl-4">Education</h3>
              <div className="space-y-4">
                {[
                  { school: 'Quezon City University', degree: 'BS in Information Technology', date: '2022 – Present', active: true },
                  { school: 'Metro Manila College', degree: 'Humanities & Social Science — Graduated with Honors', date: '2020 – 2022', active: false },
                  { school: 'Doña Rosario High School', degree: 'Junior High School', date: '2016 – 2020', active: false },
                  { school: 'Rosa L. Susano Elementary School', degree: 'Elementary Education', date: '2010 – 2016', active: false },
                ].map((edu, i) => (
                  <div key={i} className={`glass-card p-5 rounded-lg border-l-4 ${edu.active ? 'border-l-blue-500' : 'border-l-slate-700'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-base font-bold text-white">{edu.school}</h4>
                        <p className="text-slate-400 text-sm">{edu.degree}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded font-mono whitespace-nowrap ml-2 ${edu.active ? 'text-green-400 bg-green-500/10' : 'text-slate-500 bg-slate-800'}`}>
                        {edu.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-teal-500 pl-4">Licenses & Certifications</h3>
              <div className="grid gap-4">
                {[
                  { title: "Professional Driver's License", org: "October 7, 2024", Icon: IdCard, color: 'text-blue-400 bg-blue-500/10' },
                  { title: "AI for Business Professionals", org: "HP LIFE | HP Foundation — April 24, 2026", Icon: Brain, color: 'text-purple-400 bg-purple-500/10' },
                  { title: "Business Email", org: "HP LIFE | HP Foundation — April 24, 2026", Icon: Mail, color: 'text-teal-400 bg-teal-500/10' },
                  { title: "Resume Writing and Job Interviewing", org: "HP LIFE | HP Foundation — April 25, 2026", Icon: Briefcase, color: 'text-indigo-400 bg-indigo-500/10' },
                  { title: "AI in Education Webinar", org: "NCBA Fairview — Certificate of Participation, Feb 5, 2026", Icon: Brain, color: 'text-rose-400 bg-rose-500/10' },
                  { title: "Basic ROTC Completer", org: "Quezon City University — A.Y. 2022–2023", Icon: Award, color: 'text-yellow-400 bg-yellow-500/10' },
                ].map((cert, i) => (
                  <div key={i} className="glass-card p-4 rounded-lg flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${cert.color}`}>
                      <cert.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{cert.title}</p>
                      <p className="text-xs text-slate-500">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CHARACTER REFERENCES ── */}
        <section className="py-24 bg-slate-900/30 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Character References</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Ara Niña D. Legaspi', role: 'Marketing & Client Relations Specialist', company: 'FDM Training Center', contact: '0939-507-9634', email: 'araninalegaspi@gmail.com' },
                { name: 'Marlon Palces', role: 'IT Manager', company: 'IHG Hotels & Resorts', contact: '0906-522-0066', email: 'palcesm@gmail.com' },
                { name: 'Mary Margiery Capistrano', role: 'Restaurant supervisor', company: 'Cf Sharp Crew Management INC', contact: '0928-311-0222', email: 'Mhiebhie24@yahoo.com' },
              ].map((ref, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                    <span className="text-xl font-bold text-blue-400">{ref.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{ref.name}</h3>
                  <p className="text-sm text-blue-400 mb-1">{ref.role}</p>
                  <p className="text-xs text-slate-400 mb-4">{ref.company}</p>
                  <div className="space-y-2 text-sm text-slate-300">
                    <a href={`tel:${ref.contact}`} className="flex items-center justify-center gap-2 hover:text-white transition">
                      <Phone className="w-4 h-4" /> {ref.contact}
                    </a>
                    <a href={`mailto:${ref.email}`} className="flex items-center justify-center gap-2 hover:text-white transition">
                      <Mail className="w-4 h-4" /> <span className="truncate max-w-[200px]">{ref.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER / CONTACT ── */}
        <footer id="contact" className="bg-black/80 py-12 border-t border-slate-800 backdrop-blur-md">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Let's Work Together</h2>
            <p className="text-slate-500 text-sm mb-8">Open to freelance, remote, and full-time opportunities.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-slate-400">
              <a href="tel:09944966180" className="flex items-center justify-center gap-2 hover:text-white transition">
                <Phone className="w-5 h-5" /> 09944966180
              </a>
              <a href="mailto:jimenezchristianjohngran07@gmail.com" className="flex items-center justify-center gap-2 hover:text-blue-400 transition">
                <Mail className="w-5 h-5" /> jimenezchristianjohngran07@gmail.com
              </a>
              <span className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" /> Quezon City, Philippines
              </span>
            </div>
            <div className="flex justify-center gap-6 mb-8 text-slate-500">
              <a href="https://github.com/Escaa007" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jimenez-christian-john-b38b1b3a7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-600 text-sm flex items-center justify-center gap-2">
              &copy; 2026 Christian John G. Jimenez. Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
            </p>
          </div>
        </footer>
      </main>
      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="h-48 sm:h-72 w-full relative bg-slate-900 flex-shrink-0 flex items-center justify-center p-6 border-b border-white/5">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x400/1e293b/334155?text=' + selectedProject.title.replace(/ /g, '+');
                  }}
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h2>
                    <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm">{selectedProject.subHeader}</p>
                  </div>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Project
                    </a>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> Role
                    </h4>
                    <p className="text-slate-300">{selectedProject.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4" /> Details & Infos
                    </h4>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{selectedProject.details}</p>
                  </div>

                  {selectedProject.features && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4" /> Features
                      </h4>
                      <p className="text-slate-300 leading-relaxed whitespace-pre-line">{selectedProject.features}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Tech Stacks
                    </h4>
                    {selectedProject.tags && selectedProject.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tags.map((tag, j) => {
                          const Icon = getTagIcon(tag);
                          return (
                            <span key={j} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
                              {Icon && <Icon className="w-4 h-4" />}
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">{selectedProject.techStacks}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;