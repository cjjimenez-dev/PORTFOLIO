// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import BlurText from '../BlurText';
import { techStack } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function Hero() {
  const { config } = usePortfolio();
  const { profile, heroStats } = config;
  return (
    <>
      <header id="about" className="min-h-[85vh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 relative overflow-hidden">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 lg:gap-12 items-center my-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {profile.badge}
            </motion.div>

            <BlurText
              text={profile.name}
              delay={90}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-display font-bold text-white mb-3 leading-[1.12]"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-lg sm:text-xl text-blue-400 font-medium mb-1"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="text-xs sm:text-sm text-slate-400 font-light mb-5"
            >
              {profile.educationBadge}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed max-w-lg border-l-2 border-blue-500 pl-4"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition shadow-lg shadow-white/10"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm glass-card text-white font-medium rounded-lg hover:bg-white/10 transition"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-7 flex items-center gap-5 text-slate-400"
            >
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative flex justify-center md:justify-end items-center w-full"
          >
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-xs sm:max-w-sm">
              {heroStats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 sm:p-5 rounded-2xl text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm mt-1">{stat.label}</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-8 bg-slate-900/40 backdrop-blur-sm border-y border-white/5" aria-label="Tech Stack">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-5">
            Core Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`p-3 rounded-full border ${tech.bg} ${tech.color} backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-lg group relative`}
                title={tech.name}
              >
                <tech.icon className="w-5 h-5" />
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
