import { useState } from 'react';
import { Building2, ExternalLink, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import { getTagIcon } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

function ProjectCard({ project, onSelect, delay = 0 }) {
  return (
    <article
      className={`glass-card rounded-2xl border ${project.border} relative overflow-hidden group flex flex-col cursor-pointer hover:-translate-y-1.5 transition-all duration-300`}
      data-aos="fade-up"
      data-aos-delay={delay}
      onClick={() => onSelect(project)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image Header */}
      <div className="h-56 sm:h-64 w-full overflow-hidden relative bg-slate-900/90 flex items-center justify-center p-5 border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-0"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/600x400/1e293b/334155?text=' + project.title.replace(/ /g, '+');
          }}
        />
        {project.gallery && project.gallery.length > 1 && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[11px] font-medium text-slate-200">
            <Layers className="w-3 h-3 text-blue-400" />
            {project.gallery.length} Screens
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
            {project.categoryLabel}
          </span>
          <span className="text-xs text-slate-400">{project.role}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => {
            const Icon = getTagIcon(tag);
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/80 border border-white/10 rounded-full text-xs font-medium text-slate-300"
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Card Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
            View Case Study <ArrowUpRight className="w-4 h-4" />
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-2">
            Portfolio Work
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Shipped Systems & Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-5">
            Separated into production software built for company operations and independent self-initiated projects.
          </p>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14" role="tablist" aria-label="Filter projects">
          {tabs.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900/70 text-slate-300 border border-white/10 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 1. Company & Production Programs */}
        {showCompany && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Company & Production Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Commercial software engineered for Lucky Boba Food & Beverage Trading Corp
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {companyProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        )}

        {/* 2. Self & Independent Projects */}
        {showSelf && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Self & Independent Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Personal SaaS tools, serverless utilities, and full-stack web applications
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selfProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
