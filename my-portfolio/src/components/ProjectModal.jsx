import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Briefcase,
  FolderGit2,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Building2,
  Globe,
  Lock,
  Maximize2,
  RotateCw,
} from 'lucide-react';
import { getTagIcon } from '../data/portfolioData';

function getCircularOffset(index, activeIndex, total) {
  if (total <= 1) return 0;
  let diff = index - activeIndex;
  const half = total / 2;
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

function formatDisplayUrl(project, slide) {
  if (!project) return 'localhost:3000';
  if (project.liveUrl) {
    try {
      const url = new URL(project.liveUrl);
      const host = url.hostname.replace(/^www\./, '');
      const path = slide?.label
        ? `/${slide.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        : '';
      return `${host}${path}`;
    } catch {
      return project.liveUrl.replace(/^https?:\/\//, '');
    }
  }
  const base = (project.id || project.title || 'app')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
  const path = slide?.label
    ? `/${slide.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    : '';
  return `${base}.internal${path}`;
}

export default function ProjectModal({ project, onClose }) {
  const [slideState, setSlideState] = useState({ projectId: null, index: 0 });
  const [isScreenModeOpen, setIsScreenModeOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const gallery = project?.gallery?.length
    ? project.gallery
    : project
      ? [{ src: project.image, label: project.title }]
      : [];

  const activeImageIndex = slideState.projectId === project?.id ? slideState.index : 0;
  const totalSlides = gallery.length;
  const currentSlide = gallery[activeImageIndex] || gallery[0];

  const selectSlide = (nextIndex) => {
    if (!project) return;
    setSlideState({ projectId: project.id, index: nextIndex });
  };

  useEffect(() => {
    if (!project) {
      setIsScreenModeOpen(false);
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isScreenModeOpen) {
          setIsScreenModeOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && gallery.length > 1) {
        setSlideState((prev) => {
          const current = prev.projectId === project.id ? prev.index : 0;
          return { projectId: project.id, index: (current + 1) % gallery.length };
        });
      } else if (e.key === 'ArrowLeft' && gallery.length > 1) {
        setSlideState((prev) => {
          const current = prev.projectId === project.id ? prev.index : 0;
          return { projectId: project.id, index: (current - 1 + gallery.length) % gallery.length };
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, gallery.length, onClose, isScreenModeOpen]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 18 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className={`relative w-full max-w-4xl bg-slate-900 border ${project.border || 'border-slate-700/80'} rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-3.5 right-3.5 z-30 p-2 bg-black/70 hover:bg-black/90 rounded-full text-white transition-colors border border-white/15"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto custom-scrollbar flex-1">
              {/* Prism Coverflow Gallery Header in Windows Browser Screen Mode */}
              <div className="relative bg-slate-950 border-b border-white/10 pt-4 pb-3 overflow-hidden">
                {/* Ambient Prism Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent || 'from-blue-500/20 to-purple-500/20'} opacity-35`}
                />

                <div className="relative h-64 sm:h-80 md:h-[370px] flex items-center justify-center overflow-hidden select-none z-10">
                  {gallery.map((slide, idx) => {
                    const offset = getCircularOffset(idx, activeImageIndex, totalSlides);
                    const absOffset = Math.abs(offset);
                    const isCenter = offset === 0;

                    if (absOffset > 2 && totalSlides > 4) return null;

                    const xShift = offset === 0 ? 0 : offset * (absOffset === 1 ? 240 : 390);
                    const scale = isCenter ? 1 : absOffset === 1 ? 0.76 : 0.6;
                    const opacity = isCenter ? 1 : absOffset === 1 ? 0.6 : 0.22;
                    const zIndex = isCenter ? 20 : absOffset === 1 ? 10 : 5;

                    return (
                      <motion.div
                        key={slide.src + idx}
                        animate={{ x: xShift, scale, opacity, zIndex }}
                        transition={{ type: 'spring', stiffness: 240, damping: 26 }}
                        onClick={() => (!isCenter ? selectSlide(idx) : setIsScreenModeOpen(true))}
                        className={`absolute rounded-xl overflow-hidden border ${
                          isCenter
                            ? `w-[92%] sm:w-[520px] md:w-[620px] h-[235px] sm:h-[295px] md:h-[335px] ${project.border || 'border-blue-500/40'} bg-slate-900 shadow-2xl shadow-blue-500/20 cursor-zoom-in`
                            : 'w-[58%] sm:w-[300px] md:w-[350px] h-[160px] sm:h-[200px] md:h-[230px] border-white/10 bg-slate-950 cursor-pointer hover:opacity-90'
                        }`}
                        style={{
                          filter: isCenter
                            ? 'grayscale(0%) brightness(1)'
                            : 'grayscale(100%) brightness(0.48)',
                          transition: 'filter 500ms ease',
                        }}
                      >
                        {isCenter ? (
                          /* Full Windows Browser Window Frame for Center Image */
                          <div className="w-full h-full flex flex-col bg-slate-950 overflow-hidden">
                            {/* Windows Browser Title & Tab Bar */}
                            <div className="bg-slate-900/95 border-b border-white/10 px-2.5 py-1.5 flex items-center justify-between select-none">
                              {/* Left Tab */}
                              <div className="flex items-center gap-1.5 min-w-0">
                                <div className="flex items-center gap-1.5 bg-slate-800/90 border-t-2 border-t-blue-500 border-x border-white/10 px-2.5 py-1 rounded-t-md text-[11px] text-slate-100 font-medium max-w-[170px] sm:max-w-[240px] truncate shadow-sm">
                                  <Globe className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                  <span className="truncate">{slide.label || project.title}</span>
                                  <span className="text-slate-500 hover:text-slate-300 ml-1 text-xs">×</span>
                                </div>
                                <span className="text-slate-500 hover:text-slate-300 text-xs px-1 cursor-pointer">+</span>
                              </div>

                              {/* Windows Window Controls */}
                              <div className="flex items-center -mr-1">
                                <button
                                  type="button"
                                  title="Minimize"
                                  className="w-6 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 text-[10px] transition"
                                >
                                  ─
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsScreenModeOpen(true);
                                  }}
                                  title="Open Full Screen Mode"
                                  className="w-6 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 text-[10px] transition"
                                >
                                  □
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onClose();
                                  }}
                                  title="Close Window"
                                  className="w-7 h-5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 text-[10px] transition"
                                >
                                  ✕
                                </button>
                              </div>
                            </div>

                            {/* Windows Browser Toolbar & URL Address Bar */}
                            <div className="bg-slate-900/80 border-b border-white/10 px-2.5 py-1 flex items-center gap-2 select-none">
                              <div className="flex items-center gap-1 text-slate-400 text-xs">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    selectSlide((activeImageIndex - 1 + totalSlides) % totalSlides);
                                  }}
                                  title="Previous Screenshot"
                                  className="p-1 hover:text-white hover:bg-white/10 rounded transition"
                                >
                                  <ChevronLeft className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    selectSlide((activeImageIndex + 1) % totalSlides);
                                  }}
                                  title="Next Screenshot"
                                  className="p-1 hover:text-white hover:bg-white/10 rounded transition"
                                >
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  title="Reload"
                                  className="p-1 hover:text-white hover:bg-white/10 rounded transition"
                                >
                                  <RotateCw className="w-3 h-3" />
                                </button>
                              </div>

                              {/* URL Omnibox */}
                              <div className="flex-1 bg-slate-950/90 border border-white/10 rounded-full px-2.5 py-0.5 flex items-center justify-between text-[11px] font-mono text-slate-300 truncate">
                                <div className="flex items-center gap-1.5 truncate">
                                  <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                                  <span className="text-emerald-400 font-semibold">https://</span>
                                  <span className="text-slate-200 truncate">{formatDisplayUrl(project, slide)}</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsScreenModeOpen(true);
                                  }}
                                  className="text-[10px] text-blue-400 hover:text-blue-300 flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/10 hover:bg-blue-500/20 transition flex-shrink-0 ml-1 font-sans font-semibold"
                                >
                                  <Maximize2 className="w-2.5 h-2.5" />
                                  <span className="hidden sm:inline">Screen Mode</span>
                                </button>
                              </div>
                            </div>

                            {/* Browser Viewport with Image */}
                            <div className="relative w-full flex-1 bg-slate-950 flex items-center justify-center p-1.5 overflow-hidden group">
                              <img
                                src={slide.src}
                                alt={`${project.title} — ${slide.label}`}
                                draggable="false"
                                className="w-full h-full object-contain rounded-sm"
                                onError={(e) => {
                                  e.target.src =
                                    'https://placehold.co/800x400/1e293b/334155?text=' +
                                    project.title.replace(/ /g, '+');
                                }}
                              />
                              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none" />
                              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white border border-white/15 px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1.5 shadow-lg pointer-events-none backdrop-blur-sm">
                                <Maximize2 className="w-3 h-3 text-blue-400" />
                                <span>Click for Full Windows Screen Mode</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Background Windows Window Mockup */
                          <div className="w-full h-full flex flex-col bg-slate-950/90 overflow-hidden">
                            <div className="bg-slate-900/80 border-b border-white/5 px-2 py-1 flex items-center justify-between select-none">
                              <div className="flex items-center gap-1 truncate text-[10px] text-slate-400">
                                <Globe className="w-2.5 h-2.5 text-slate-500" />
                                <span className="truncate">{slide.label}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[9px] text-slate-500">
                                <span>─</span>
                                <span>□</span>
                                <span>✕</span>
                              </div>
                            </div>
                            <div className="w-full flex-1 flex items-center justify-center p-2 bg-slate-950/80">
                              <img
                                src={slide.src}
                                alt={`${project.title} — ${slide.label}`}
                                draggable="false"
                                className="w-full h-full object-contain rounded"
                                onError={(e) => {
                                  e.target.src =
                                    'https://placehold.co/800x400/1e293b/334155?text=' +
                                    project.title.replace(/ /g, '+');
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Prism Pagination + Screen Pills */}
                {totalSlides > 1 && (
                  <div className="relative z-20 mt-3 flex flex-col items-center gap-2 px-4">
                    <div className="inline-flex items-center gap-3">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous screenshot"
                        onClick={() => selectSlide((activeImageIndex - 1 + totalSlides) % totalSlides)}
                        className="p-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 transition"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </motion.button>

                      <span className="text-[11px] font-mono tracking-widest text-slate-300">
                        {String(activeImageIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                        {currentSlide?.label ? ` • ${currentSlide.label}` : ''}
                      </span>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next screenshot"
                        onClick={() => selectSlide((activeImageIndex + 1) % totalSlides)}
                        className="p-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 transition"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl">
                      {gallery.map((item, idx) => (
                        <button
                          key={item.src + idx}
                          type="button"
                          onClick={() => selectSlide(idx)}
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition ${
                            idx === activeImageIndex
                              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                      {project.categoryLabel}
                    </span>
                    <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-1">{project.subHeader}</p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Project
                    </a>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-white/5 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" /> Role
                    </h4>
                    <p className="text-sm text-slate-200 font-medium">{project.role}</p>
                  </div>

                  {project.company ? (
                    <div className="bg-slate-800/50 border border-white/5 rounded-xl p-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-orange-400" /> Organization
                      </h4>
                      <p className="text-sm text-slate-200 font-medium">{project.company}</p>
                    </div>
                  ) : (
                    <div className="bg-slate-800/50 border border-white/5 rounded-xl p-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-teal-400" /> Project Type
                      </h4>
                      <p className="text-sm text-slate-200 font-medium">Independent Self Project</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-blue-400" /> Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.details}</p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-800/40 border border-white/5 rounded-xl p-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" /> Tech Stack & Architecture
                  </h4>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => {
                        const Icon = getTagIcon(tag);
                        return (
                          <span
                            key={tag}
                            className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-200"
                          >
                            {Icon && <Icon className="w-3.5 h-3.5" />}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {project.architecture && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {Object.entries(project.architecture).map(([layer, items]) => {
                        const lower = layer.toLowerCase();
                        const isSecurity = lower.includes('security') || lower.includes('auth') || lower.includes('compliance') || lower.includes('cryptograph');
                        const isDatabase = lower.includes('database') || lower.includes('storage');
                        const isBackend = lower.includes('backend') || lower.includes('api') || lower.includes('engine') || lower.includes('service') || lower.includes('processing') || lower.includes('integration');
                        const isFrontend = lower.includes('frontend') || lower.includes('kiosk') || lower.includes('ui');
                        const isHardware = lower.includes('hardware') || lower.includes('print');
                        const isMobile = lower.includes('mobile');

                        const headerColor = isSecurity
                          ? 'text-rose-400'
                          : isDatabase
                          ? 'text-emerald-400'
                          : isBackend
                          ? 'text-green-400'
                          : isMobile
                          ? 'text-cyan-400'
                          : isFrontend
                          ? 'text-blue-400'
                          : isHardware
                          ? 'text-amber-400'
                          : 'text-purple-400';

                        const borderAccent = isSecurity
                          ? 'border-rose-500/20 bg-rose-500/5'
                          : isDatabase
                          ? 'border-emerald-500/20 bg-emerald-500/5'
                          : isBackend
                          ? 'border-green-500/20 bg-green-500/5'
                          : isMobile
                          ? 'border-cyan-500/20 bg-cyan-500/5'
                          : isFrontend
                          ? 'border-blue-500/20 bg-blue-500/5'
                          : isHardware
                          ? 'border-amber-500/20 bg-amber-500/5'
                          : 'border-white/5 bg-slate-800/40';

                        return (
                          <div key={layer} className={`border rounded-xl p-4 transition-all ${borderAccent}`}>
                            <p className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${headerColor}`}>
                              {layer}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {items.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 bg-slate-900/80 border border-white/10 rounded-md text-xs text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full Windows Screen Mode Lightbox */}
          <AnimatePresence>
            {isScreenModeOpen && (
              <div
                className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 md:p-6"
                role="dialog"
                aria-modal="true"
                aria-label="Windows Screen Mode"
              >
                {/* Desktop Wallpaper Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                  onClick={() => setIsScreenModeOpen(false)}
                />

                {/* Windows Browser Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 16 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  className={`relative ${
                    isMaximized ? 'w-full h-full rounded-none' : 'w-full max-w-6xl h-[92vh] rounded-xl'
                  } bg-slate-900 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.2)] flex flex-col overflow-hidden z-10`}
                >
                  {/* Windows Title Bar */}
                  <div className="bg-slate-950 border-b border-white/10 px-3 py-2 flex items-center justify-between select-none">
                    {/* Tabs */}
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex items-center gap-2 bg-slate-800/95 border-t-2 border-t-blue-500 border-x border-white/10 px-3 py-1.5 rounded-t-lg text-xs text-white font-medium max-w-[260px] sm:max-w-[380px] truncate shadow-sm">
                        <Globe className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 animate-pulse" />
                        <span className="truncate">{project.title} — {currentSlide?.label}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsScreenModeOpen(false);
                          }}
                          className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full w-4 h-4 flex items-center justify-center text-xs ml-1 cursor-pointer"
                        >
                          ×
                        </button>
                      </div>

                      <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-white/5">
                        Screen {String(activeImageIndex + 1).padStart(2, '0')} of {String(totalSlides).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Windows Window Controls */}
                    <div className="flex items-center -mr-2">
                      <button
                        type="button"
                        onClick={() => setIsScreenModeOpen(false)}
                        title="Minimize"
                        className="w-10 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition text-sm"
                      >
                        ─
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMaximized(!isMaximized)}
                        title={isMaximized ? 'Restore' : 'Maximize'}
                        className="w-10 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition text-sm"
                      >
                        □
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsScreenModeOpen(false)}
                        title="Close Screen Mode (ESC)"
                        className="w-11 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Windows Browser Toolbar & Omnibox */}
                  <div className="bg-slate-900 border-b border-white/10 px-3 py-2 flex items-center gap-3 select-none">
                    {/* Navigation Controls */}
                    <div className="flex items-center gap-1 text-slate-300">
                      <button
                        type="button"
                        onClick={() => selectSlide((activeImageIndex - 1 + totalSlides) % totalSlides)}
                        title="Previous Screenshot (Left Arrow)"
                        className="p-1.5 hover:text-white hover:bg-white/10 rounded-md transition"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => selectSlide((activeImageIndex + 1) % totalSlides)}
                        title="Next Screenshot (Right Arrow)"
                        className="p-1.5 hover:text-white hover:bg-white/10 rounded-md transition"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        title="Refresh Screen"
                        className="p-1.5 hover:text-white hover:bg-white/10 rounded-md transition"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Full URL Omnibox */}
                    <div className="flex-1 bg-slate-950/90 border border-white/10 hover:border-blue-500/40 rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs font-mono text-slate-300 transition-colors">
                      <div className="flex items-center gap-2 truncate">
                        <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-emerald-400 font-semibold">https://</span>
                        <span className="text-white font-medium truncate">{formatDisplayUrl(project, currentSlide)}</span>
                      </div>

                      <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold transition shadow-sm"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Open Live App</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Browser Viewport Stage */}
                  <div className="relative flex-1 bg-slate-950/95 flex items-center justify-center p-3 sm:p-5 overflow-hidden select-none">
                    {/* Previous Arrow Button */}
                    {totalSlides > 1 && (
                      <button
                        type="button"
                        onClick={() => selectSlide((activeImageIndex - 1 + totalSlides) % totalSlides)}
                        aria-label="Previous screen"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/85 hover:bg-blue-600 text-white border border-white/15 shadow-xl transition-all hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    {/* Active Screenshot Display */}
                    <motion.div
                      key={currentSlide.src}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={currentSlide.src}
                        alt={`${project.title} — ${currentSlide.label}`}
                        className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                      />
                    </motion.div>

                    {/* Next Arrow Button */}
                    {totalSlides > 1 && (
                      <button
                        type="button"
                        onClick={() => selectSlide((activeImageIndex + 1) % totalSlides)}
                        aria-label="Next screen"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/85 hover:bg-blue-600 text-white border border-white/15 shadow-xl transition-all hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Windows Browser Bottom Status Bar */}
                  <div className="bg-slate-950 border-t border-white/10 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] text-slate-400 select-none">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Windows Screen Mode Active
                      </span>
                      <span>•</span>
                      <span className="text-slate-300 font-medium">{currentSlide.label}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-slate-500 hidden sm:inline">Press ESC or ✕ to exit</span>
                      <div className="flex items-center gap-1">
                        {gallery.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => selectSlide(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === activeImageIndex ? 'w-5 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                            }`}
                            aria-label={`Go to screenshot ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
