import { useEffect, useRef, useState } from 'react';
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

function ProjectCard({ project, index, onSelect, draggedRef }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.32), ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      whileTap={{ scale: 0.99 }}
      className={`glass-card rounded-2xl border ${project.border} relative overflow-hidden group flex flex-col cursor-pointer flex-shrink-0 w-[84vw] sm:w-[340px] md:w-[385px] transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}
      onClick={() => {
        if (!draggedRef.current) onSelect(project);
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image Header */}
      <div className="h-44 w-full overflow-hidden relative bg-slate-900/90 flex items-center justify-center p-3.5 border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          draggable="false"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-0"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/600x400/1e293b/334155?text=' + project.title.replace(/ /g, '+');
          }}
        />
        {project.gallery && project.gallery.length > 1 && (
          <span className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/85 border border-white/10 text-[10px] font-medium text-slate-200">
            <Layers className="w-3 h-3 text-blue-400" />
            {project.gallery.length} Screens
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 truncate">
            {project.categoryLabel}
          </span>
          <span className="text-[11px] text-slate-400 truncate max-w-[140px]">{project.role}</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(project.tags || []).slice(0, 4).map((tag) => {
            const Icon = getTagIcon(tag);
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-900/80 border border-white/10 rounded-full text-[11px] font-medium text-slate-300"
              >
                {Icon && <Icon className="w-3 h-3" />}
                {tag}
              </span>
            );
          })}
          {(project.tags || []).length > 4 && (
            <span className="inline-flex items-center px-2 py-0.5 bg-slate-900/80 border border-white/10 rounded-full text-[11px] text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
            View Case Study
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-[11px] font-semibold transition"
            >
              <ExternalLink className="w-3 h-3" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCarousel({ title, subtitle, icon: HeaderIcon, iconStyle, projects, onSelectProject }) {
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const directionRef = useRef(1);
  const virtualScrollRef = useRef(0);
  const draggedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [scrollState, setScrollState] = useState({ canPrev: false, canNext: true, progress: 0 });

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    if (isPausedRef.current || isDraggingRef.current) {
      virtualScrollRef.current = el.scrollLeft;
    }
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 2) {
      setScrollState({ canPrev: false, canNext: false, progress: 100 });
      return;
    }
    const progress = Math.min(100, Math.max(0, (el.scrollLeft / maxScroll) * 100));
    setScrollState({
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft < maxScroll - 4,
      progress,
    });
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [projects.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let rafId = 0;
    let lastTime = performance.now();
    let pauseUntil = 0;
    const speedPxPerSec = 32; // smooth visible drift

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const el = trackRef.current;
      if (el && !isPausedRef.current && !isDraggingRef.current && now >= pauseUntil) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 4) {
          virtualScrollRef.current += directionRef.current * speedPxPerSec * dt;
          if (virtualScrollRef.current >= maxScroll) {
            virtualScrollRef.current = maxScroll;
            el.scrollLeft = maxScroll;
            directionRef.current = -1;
            pauseUntil = now + 1200;
          } else if (virtualScrollRef.current <= 0) {
            virtualScrollRef.current = 0;
            el.scrollLeft = 0;
            directionRef.current = 1;
            pauseUntil = now + 1200;
          } else {
            el.scrollLeft = virtualScrollRef.current;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [projects.length]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.min(380, el.clientWidth * 0.85);
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const next = Math.min(maxScroll, Math.max(0, el.scrollLeft + direction * step));
    virtualScrollRef.current = next;
    el.scrollTo({ left: next, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    draggedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    if (trackRef.current) {
      virtualScrollRef.current = trackRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 8) draggedRef.current = true;
    const next = scrollLeftRef.current - walk;
    trackRef.current.scrollLeft = next;
    virtualScrollRef.current = trackRef.current.scrollLeft;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="mb-12 last:mb-0"
    >
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg border ${iconStyle}`}>
            <HeaderIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">{title}</h3>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <motion.button
            type="button"
            whileHover={scrollState.canPrev ? { scale: 1.1 } : undefined}
            whileTap={scrollState.canPrev ? { scale: 0.92 } : undefined}
            disabled={!scrollState.canPrev}
            onClick={() => scrollByCard(-1)}
            aria-label={`Scroll ${title} left`}
            className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none border border-white/10 text-slate-300 hover:text-white transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={scrollState.canNext ? { scale: 1.1 } : undefined}
            whileTap={scrollState.canNext ? { scale: 0.92 } : undefined}
            disabled={!scrollState.canNext}
            onClick={() => scrollByCard(1)}
            aria-label={`Scroll ${title} right`}
            className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none border border-white/10 text-slate-300 hover:text-white transition"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={trackRef}
        onScroll={updateScrollState}
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
          handleMouseUpOrLeave();
        }}
        onTouchStart={() => {
          isPausedRef.current = true;
        }}
        onTouchEnd={() => {
          isPausedRef.current = false;
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className="flex gap-5 overflow-x-auto pb-3 pt-1 px-1 -mx-1 select-none cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
            index={idx}
            onSelect={onSelectProject}
            draggedRef={draggedRef}
          />
        ))}
      </div>

      {/* Animated Scroll Progress Indicator */}
      {(scrollState.canPrev || scrollState.canNext) && (
        <div className="mt-2 h-0.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{ width: `${Math.max(18, scrollState.progress)}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
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
              <ProjectCarousel
                title="Company & Production Systems"
                subtitle="Production software engineered for enterprise & commercial operations"
                icon={Building2}
                iconStyle="bg-orange-500/10 border-orange-500/20 text-orange-400"
                projects={companyProjects}
                onSelectProject={onSelectProject}
              />
            )}

            {showSelf && (
              <ProjectCarousel
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
