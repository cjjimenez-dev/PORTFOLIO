import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, X, Github, Linkedin, Mail, Code2, Brain, 
  Medal, Gamepad2, Bike, Truck, Building2, Briefcase, 
  IdCard, Award, Phone, MapPin, Heart, Layers, Smartphone,
  GitBranch, Database, TestTube, FileCode
} from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, 
  SiLaravel, SiFlutter, SiDart, SiGit, SiGithub, 
  SiAndroidstudio 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Aurora from './Aurora';
import BlurText from './BlurText';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const techStack = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
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
  ];

  return (
    <div className="antialiased min-h-screen text-slate-200 bg-[#020617] relative">

      {/* FULL PAGE AURORA BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={["#7cff67","#B19EEF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
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

              {/* Soft Skills */}
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-3">
                  <div className="bg-teal-500/10 p-2 rounded-lg"><Brain className="w-6 h-6" /></div>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
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

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Affiliations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span>PH Army Reserve (RESCOM) — 1302nd Btn</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Gamepad2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span>QCU Kyusi Esports Player (2023)</span>
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
                    { label: 'DevOps', items: 'Git, GitHub, VS Code', Icon: GitBranch, color: 'text-orange-400' },
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
                  date: 'Feb 9 – Apr 10, 2025', 
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
                  date: 'Sep 9 – Nov 13, 2025', 
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
                  date: 'July 2025 – Present', 
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
                  { title: "Professional Driver's License", org: "Land Transportation Office (LTO) Philippines", Icon: IdCard, color: 'text-blue-400 bg-blue-500/10' },
                  { title: "Basic ROTC Completer", org: "Quezon City University — A.Y. 2022–2023", Icon: Award, color: 'text-yellow-400 bg-yellow-500/10' },
                  { title: "AI in Education Webinar", org: "NCBA Fairview — Certificate of Participation, Feb 5, 2026", Icon: Brain, color: 'text-purple-400 bg-purple-500/10' },
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

        {/* ── FOOTER / CONTACT ── */}
        <footer id="contact" className="bg-black/80 py-12 border-t border-slate-800 backdrop-blur-md">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Let's Work Together</h2>
            <p className="text-slate-500 text-sm mb-8">Open to freelance, remote, and full-time opportunities.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-slate-400">
              <a href="tel:09476157499" className="flex items-center justify-center gap-2 hover:text-white transition">
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
    </div>
  );
}

export default App;