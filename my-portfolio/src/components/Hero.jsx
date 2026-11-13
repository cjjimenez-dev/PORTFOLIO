// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import BlurText from '../BlurText';
import { techStack } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function Hero() {
  const { config } = usePortfolio();
  const { profile } = config;

  return (
    <>
      <header
        id="about"
        className="min-h-[88vh] flex flex-col justify-center items-center pt-24 pb-12 sm:pt-28 sm:pb-16 relative overflow-hidden"
      >
        {/* Animated Ambient Gradient Orbs */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.28, 0.18],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full bg-blue-600/30 blur-[110px]"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/3 w-[420px] h-[260px] rounded-full bg-teal-500/25 blur-[110px]"
        />

        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 text-center relative z-10 my-auto">
          <div className="flex justify-center">
            <BlurText
              text={profile.name}
              delay={85}
              animateBy="words"
              direction="top"
              className="justify-center text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-[1.1] tracking-tight"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="text-lg sm:text-2xl font-semibold text-gradient mb-1.5"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
            className="text-xs sm:text-sm text-slate-400 font-light mb-6"
          >
            {profile.educationBadge}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3.5"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition shadow-lg shadow-white/10"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm glass-card text-white font-medium rounded-xl hover:bg-white/10 transition"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-5 text-slate-400"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-slate-900/70 border border-white/10 hover:text-blue-400 hover:border-blue-500/30 transition"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-slate-900/70 border border-white/10 hover:text-blue-400 hover:border-blue-500/30 transition"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-slate-900/70 border border-white/10 hover:text-blue-400 hover:border-blue-500/30 transition"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle Scroll Cue */}
        <motion.a
          href="#skills"
          aria-label="Scroll to skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 0.9, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="mt-8 text-slate-400 hover:text-white transition relative z-10"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </header>

      <section className="py-8 bg-slate-900/40 backdrop-blur-sm border-y border-white/5" aria-label="Tech Stack">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-5">
            Core Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.025, duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.12 }}
                className={`p-3 rounded-full border ${tech.bg} ${tech.color} backdrop-blur-md transition-shadow duration-300 hover:shadow-lg group relative cursor-default`}
                title={tech.name}
              >
                <tech.icon className="w-5 h-5" />
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
