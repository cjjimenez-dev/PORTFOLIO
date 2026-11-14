import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { getTagIcon } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

function getCircularOffset(index, activeIndex, total) {
  if (total <= 1) return 0;
  let diff = index - activeIndex;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

function PrismCarousel({ title, subtitle, icon: HeaderIcon, iconStyle, projects, onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = projects.length;
  const safeIndex = total > 0 ? activeIndex % total : 0;
  const activeProject = projects[safeIndex];

  useEffect(() => {
    if (total <= 1 || isHovered) return undefined;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(timer);
  }, [total, isHovered]);

  if (total === 0) return null;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="mb-14 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg border ${iconStyle}`}>
            <HeaderIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">{title}</h3>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Prism Coverflow Stage */}
      <div className="relative h-[230px] sm:h-[290px] md:h-[320px] flex items-center justify-center overflow-hidden select-none">
        {projects.map((project, index) => {
          const offset = getCircularOffset(index, safeIndex, total);
          const absOffset = Math.abs(offset);
          const isCenter = offset === 0;

          if (absOffset > 2 && total > 4) return null;

          const xShift =
            offset === 0
              ? 0
              : offset * (absOffset === 1 ? 255 : 410);

          const scale = isCenter ? 1 : absOffset === 1 ? 0.8 : 0.65;
          const opacity = isCenter ? 1 : absOffset === 1 ? 0.65 : 0.3;
          const zIndex = isCenter ? 30 : absOffset === 1 ? 20 : 10;

          return (
            <motion.div
              key={project.id || project.title}
              animate={{
                x: xShift,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 26,
              }}
              onClick={() => {
                if (isCenter) {
                  onSelectProject(project);
                } else {
                  setActiveIndex(index);
                }
              }}
              className={`absolute cursor-pointer rounded-2xl overflow-hidden border transition-shadow duration-500 ${
                isCenter
                  ? `w-[78vw] sm:w-[390px] md:w-[440px] h-[200px] sm:h-[255px] md:h-[280px] ${project.border} shadow-2xl shadow-blue-500/15 bg-slate-900`
                  : 'w-[56vw] sm:w-[270px] md:w-[300px] h-[165px] sm:h-[210px] md:h-[230px] border-white/10 bg-slate-950 hover:opacity-90'
              }`}
              style={{
                filter: isCenter
                  ? 'grayscale(0%) brightness(1)'
                  : 'grayscale(100%) brightness(0.5)',
                transition: 'filter 550ms ease',
              }}
            >
              {/* Subtle Prism Color Sweep on Active Card */}
              {isCenter && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 pointer-events-none z-10`}
                />
              )}

              <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 relative bg-slate-950/80">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain relative z-0"
                  onError={(e) => {
                    e.target.src =
                      'https://placehold.co/600x400/1e293b/334155?text=' +
                      project.title.replace(/ /g, '+');
                  }}
                />
              </div>

              {isCenter && project.gallery && project.gallery.length > 1 && (
                <span className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/85 border border-white/15 text-[11px] font-medium text-slate-200">
                  <Layers className="w-3 h-3 text-blue-400" />
                  {project.gallery.length} Screens
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Active Project Caption, Stack & Controls */}
      {activeProject && (
        <div className="mt-4 text-center max-w-xl mx-auto px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id || activeProject.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-1">
                {activeProject.categoryLabel} • {activeProject.role}
              </p>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                {activeProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2 mb-3.5">
                {activeProject.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {(activeProject.tags || []).slice(0, 5).map((tag) => {
                  const Icon = getTagIcon(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-900/90 border border-white/10 rounded-full text-[11px] font-medium text-slate-300"
                    >
                      {Icon && <Icon className="w-3 h-3" />}
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => onSelectProject(activeProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-slate-900 hover:bg-slate-200 text-xs font-bold transition"
                >
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prism Pagination Controls: <  01 / 03  > */}
          {total > 1 && (
            <div className="inline-flex items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                aria-label={`Previous ${title}`}
                className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              <span className="text-xs font-mono tracking-widest text-slate-400">
                {String(safeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                aria-label={`Next ${title}`}
                className="p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects({ onSelectProject }) {
  const { config } = usePortfolio();
  const { companyProjects, selfProjects } = config;
  const [filter, setFilter] = useState('all');

  const tabs = [
    { id: 'all', label: `All (${companyProjects.length + selfProjects.length})` },
    { id: 'company', label: `Company & Production (${companyProjects.length})` },
    { id: 'self', label: `Self Projects (${selfProjects.length})` },
  ];

  const showCompany = filter === 'all' || filter === 'company';
  const showSelf = filter === 'all' || filter === 'self';

  return (
    <section id="projects" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-1.5">
            Portfolio Work
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2.5">
            Shipped Systems & Projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-4">
            Separated into production software built for company operations and independent self-initiated projects.
          </p>
          <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {tabs.map((tab) => {
            const active = filter === tab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900/70 text-slate-300 border border-white/10 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {showCompany && (
              <PrismCarousel
                title="Company & Production Systems"
                subtitle="Production software engineered for enterprise & commercial operations"
                icon={Building2}
                iconStyle="bg-orange-500/10 border-orange-500/20 text-orange-400"
                projects={companyProjects}
                onSelectProject={onSelectProject}
              />
            )}

            {showSelf && (
              <PrismCarousel
                title="Self & Independent Projects"
                subtitle="Personal SaaS tools, serverless utilities, and full-stack web applications"
                icon={Sparkles}
                iconStyle="bg-blue-500/10 border-blue-500/20 text-blue-400"
                projects={selfProjects}
                onSelectProject={onSelectProject}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
