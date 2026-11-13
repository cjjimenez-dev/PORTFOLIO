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

export default function ProjectModal({ project, onClose }) {
  const [slideState, setSlideState] = useState({ projectId: null, index: 0 });

  const gallery = project?.gallery?.length
    ? project.gallery
    : project
      ? [{ src: project.image, label: project.title }]
      : [];

  const activeImageIndex = slideState.projectId === project?.id ? slideState.index : 0;

  const setActiveImageIndex = (updater) => {
    setSlideState((prev) => {
      const current = prev.projectId === project?.id ? prev.index : 0;
      const next = typeof updater === 'function' ? updater(current) : updater;
      return { projectId: project?.id ?? null, index: next };
    });
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

  const currentSlide = gallery[activeImageIndex] || gallery[0];

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/90 rounded-full text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gallery Header */}
            <div className="relative bg-slate-950 border-b border-white/10 flex-shrink-0">
              <div className="h-56 sm:h-80 w-full flex items-center justify-center p-4 sm:p-6 relative">
                {currentSlide && (
                  <img
                    src={currentSlide.src}
                    alt={`${project.title} — ${currentSlide.label}`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src =
                        'https://placehold.co/800x400/1e293b/334155?text=' +
                        project.title.replace(/ /g, '+');
                    }}
                  />
                )}

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={() => setActiveImageIndex((prev) => (prev + 1) % gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Gallery Switcher Pills */}
              {gallery.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 pb-3 px-4">
                  {gallery.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                        idx === activeImageIndex
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
