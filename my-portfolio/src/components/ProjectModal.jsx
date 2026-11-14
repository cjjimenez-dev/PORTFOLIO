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

export default function ProjectModal({ project, onClose }) {
  const [slideState, setSlideState] = useState({ projectId: null, index: 0 });

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
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
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
  }, [project, gallery.length, onClose]);

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
            className={`relative w-full max-w-3xl bg-slate-900 border ${project.border || 'border-slate-700/80'} rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}
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
              {/* Prism Coverflow Gallery Header */}
              <div className="relative bg-slate-950 border-b border-white/10 pt-4 pb-3 overflow-hidden">
                {/* Ambient Prism Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent || 'from-blue-500/20 to-purple-500/20'} opacity-35`}
                />

                <div className="relative h-44 sm:h-56 flex items-center justify-center overflow-hidden select-none z-10">
                  {gallery.map((slide, idx) => {
                    const offset = getCircularOffset(idx, activeImageIndex, totalSlides);
                    const absOffset = Math.abs(offset);
                    const isCenter = offset === 0;

                    if (absOffset > 2 && totalSlides > 4) return null;

                    const xShift = offset === 0 ? 0 : offset * (absOffset === 1 ? 210 : 330);
                    const scale = isCenter ? 1 : absOffset === 1 ? 0.78 : 0.62;
                    const opacity = isCenter ? 1 : absOffset === 1 ? 0.65 : 0.25;
                    const zIndex = isCenter ? 20 : absOffset === 1 ? 10 : 5;

                    return (
                      <motion.div
                        key={slide.src + idx}
                        animate={{ x: xShift, scale, opacity, zIndex }}
                        transition={{ type: 'spring', stiffness: 240, damping: 26 }}
                        onClick={() => !isCenter && selectSlide(idx)}
                        className={`absolute rounded-xl overflow-hidden border ${
                          isCenter
                            ? `w-[78%] sm:w-[390px] h-40 sm:h-52 ${project.border || 'border-blue-500/40'} bg-slate-900 shadow-2xl shadow-blue-500/15`
                            : 'w-[55%] sm:w-[270px] h-32 sm:h-42 border-white/10 bg-slate-950 cursor-pointer hover:opacity-90'
                        }`}
                        style={{
                          filter: isCenter
                            ? 'grayscale(0%) brightness(1)'
                            : 'grayscale(100%) brightness(0.48)',
                          transition: 'filter 500ms ease',
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center p-2.5 sm:p-3 bg-slate-950/80">
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
                      </motion.div>
                    );
                  })}
                </div>

                {/* Prism Pagination + Screen Pills */}
                {totalSlides > 1 && (
                  <div className="relative z-20 mt-2.5 flex flex-col items-center gap-2 px-4">
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

                      <span className="text-[11px] font-mono tracking-widest text-slate-400">
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

                    <div className="flex flex-wrap justify-center gap-1.5">
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
                      {Object.entries(project.architecture).map(([layer, items]) => (
                        <div key={layer} className="bg-slate-800/40 border border-white/5 rounded-xl p-4">
                          <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
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
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
