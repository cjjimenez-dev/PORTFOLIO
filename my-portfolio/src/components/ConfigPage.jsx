import { useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Building2,
  Download,
  GraduationCap,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  Upload,
  User,
  Briefcase,
  Wrench,
  Users,
  Check,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const TABS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'company', label: 'Company Projects', icon: Building2 },
  { id: 'self', label: 'Self Projects', icon: Sparkles },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education & Certs', icon: GraduationCap },
  { id: 'references', label: 'References', icon: Users },
];

const inputClass =
  'w-full bg-slate-950/80 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition';
const labelClass = 'block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1';

const moveItem = (list, index, delta) => {
  const target = index + delta;
  if (target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
};

const compressImageToDataUrl = (file, maxWidth = 1200, quality = 0.82) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/webp', quality));
      };
      img.onerror = reject;
      img.src = ev.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

function ProjectEditor({ projects, category, onChange }) {
  const isCompany = category === 'company';

  const handleAdd = () => {
    const newProject = {
      id: `${category}-${Date.now()}`,
      category,
      categoryLabel: isCompany ? 'Company Production System' : 'Self Project • Web App',
      ...(isCompany ? { company: 'Company Name' } : {}),
      title: 'New Project Title',
      subHeader: 'Short Project Tagline',
      role: 'Full-Stack Developer',
      description: 'Concise 1-2 sentence summary of what the project does and its impact.',
      details: 'Detailed overview of the architecture, problem solved, and outcomes.',
      features: ['Key feature 1', 'Key feature 2'],
      tags: ['React', 'Tailwind CSS'],
      architecture: {
        Frontend: ['React', 'Tailwind CSS'],
        Backend: ['Node.js'],
      },
      accent: isCompany ? 'from-orange-500/20 to-red-500/20' : 'from-blue-500/20 to-purple-500/20',
      border: isCompany ? 'border-orange-500/30' : 'border-blue-500/30',
      image: '/images/viderevision.png',
      gallery: [{ src: '/images/viderevision.png', label: 'Main Screen' }],
      liveUrl: '',
    };
    onChange([...projects, newProject]);
  };

  const handleUpdate = (index, field, value) => {
    const next = projects.map((p, i) => (i === index ? { ...p, [field]: value } : p));
    onChange(next);
  };

  const handleRemove = (index) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-white">
            {isCompany ? 'Company & Production Systems' : 'Self & Independent Projects'}
          </h2>
          <p className="text-xs text-slate-400">
            Add, edit, or remove projects shown in the {isCompany ? 'Company' : 'Self Projects'} section.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {projects.length === 0 && (
        <div className="glass-card p-8 rounded-2xl text-center text-slate-400 text-sm">
          No projects in this section yet. Click &ldquo;Add Project&rdquo; to create one.
        </div>
      )}

      {projects.map((project, idx) => (
        <div key={project.id || idx} className="glass-card p-4 sm:p-5 rounded-xl space-y-3.5">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white">
              #{idx + 1} — {project.title || 'Untitled Project'}
            </h3>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={idx === 0}
                onClick={() => onChange(moveItem(projects, idx, -1))}
                title="Move Up"
                aria-label="Move project up"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-white/10 transition"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                disabled={idx === projects.length - 1}
                onClick={() => onChange(moveItem(projects, idx, 1))}
                title="Move Down"
                aria-label="Move project down"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-white/10 transition"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold transition"
              >
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className={labelClass}>Title</label>
              <input
                type="text"
                className={inputClass}
                value={project.title || ''}
                onChange={(e) => handleUpdate(idx, 'title', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Category Label</label>
              <input
                type="text"
                className={inputClass}
                value={project.categoryLabel || ''}
                onChange={(e) => handleUpdate(idx, 'categoryLabel', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Sub-header / Tagline</label>
              <input
                type="text"
                className={inputClass}
                value={project.subHeader || ''}
                onChange={(e) => handleUpdate(idx, 'subHeader', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Your Role</label>
              <input
                type="text"
                className={inputClass}
                value={project.role || ''}
                onChange={(e) => handleUpdate(idx, 'role', e.target.value)}
              />
            </div>
            {isCompany && (
              <div>
                <label className={labelClass}>Company / Organization</label>
                <input
                  type="text"
                  className={inputClass}
                  value={project.company || ''}
                  onChange={(e) => handleUpdate(idx, 'company', e.target.value)}
                />
              </div>
            )}
            <div>
              <label className={labelClass}>Live Demo URL (optional)</label>
              <input
                type="url"
                className={inputClass}
                placeholder="https://..."
                value={project.liveUrl || ''}
                onChange={(e) => handleUpdate(idx, 'liveUrl', e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Thumbnail Image</label>
              <div className="flex items-center gap-2">
                {project.image && (
                  <img
                    src={project.image}
                    alt="Thumbnail preview"
                    className="w-9 h-9 rounded-lg object-cover bg-slate-950 border border-white/10 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <input
                  type="text"
                  className={inputClass}
                  placeholder="/images/... or upload from folder"
                  value={project.image?.startsWith('data:') ? 'Uploaded image (stored in browser)' : project.image || ''}
                  readOnly={project.image?.startsWith('data:')}
                  onChange={(e) => handleUpdate(idx, 'image', e.target.value)}
                />
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer flex-shrink-0 transition">
                  <Upload className="w-3.5 h-3.5" /> Choose File
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const dataUrl = await compressImageToDataUrl(file);
                      handleUpdate(idx, 'image', dataUrl);
                      e.target.value = '';
                    }}
                  />
                </label>
              </div>
            </div>
            <div>
              <label className={labelClass}>Tech Stack Tags (comma-separated)</label>
              <input
                type="text"
                className={inputClass}
                value={(project.tags || []).join(', ')}
                onChange={(e) =>
                  handleUpdate(
                    idx,
                    'tags',
                    e.target.value
                      .split(',')
                      .map((t) => t.trim())
                      .filter(Boolean)
                  )
                }
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Card Summary</label>
            <textarea
              rows={2}
              className={inputClass}
              value={project.description || ''}
              onChange={(e) => handleUpdate(idx, 'description', e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Modal Detailed Overview</label>
            <textarea
              rows={3}
              className={inputClass}
              value={project.details || ''}
              onChange={(e) => handleUpdate(idx, 'details', e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Key Features (one per line)</label>
            <textarea
              rows={4}
              className={inputClass}
              value={(project.features || []).join('\n')}
              onChange={(e) =>
                handleUpdate(
                  idx,
                  'features',
                  e.target.value.split('\n').filter((line) => line.trim() !== '')
                )
              }
            />
          </div>

          {/* Multi-Image Gallery Editor */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <label className={`${labelClass} mb-0`}>Gallery Screens (Multiple Modal Images)</label>
                <p className="text-[11px] text-slate-500">
                  Add multiple screenshots with labels to show a carousel inside the project modal.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleUpdate(idx, 'gallery', [
                    ...(project.gallery || []),
                    { src: project.image || '/images/', label: `Screen ${(project.gallery || []).length + 1}` },
                  ])
                }
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold transition flex-shrink-0"
              >
                <Plus className="w-3.5 h-3.5" /> Add Screen
              </button>
            </div>

            {(project.gallery || []).map((slide, sIdx) => (
              <div
                key={sIdx}
                className="grid sm:grid-cols-[1fr_1.4fr_auto] gap-2.5 items-center bg-slate-950/60 border border-white/5 rounded-xl p-3"
              >
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Screen label (e.g. Dashboard)"
                  value={slide.label || ''}
                  onChange={(e) => {
                    const nextGallery = (project.gallery || []).map((item, i) =>
                      i === sIdx ? { ...item, label: e.target.value } : item
                    );
                    handleUpdate(idx, 'gallery', nextGallery);
                  }}
                />
                <div className="flex items-center gap-2">
                  {slide.src && (
                    <img
                      src={slide.src}
                      alt={slide.label || 'Screen preview'}
                      className="w-9 h-9 rounded-lg object-cover bg-slate-950 border border-white/10 flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="/images/... or choose file"
                    value={slide.src?.startsWith('data:') ? 'Uploaded image (stored in browser)' : slide.src || ''}
                    readOnly={slide.src?.startsWith('data:')}
                    onChange={(e) => {
                      const nextGallery = (project.gallery || []).map((item, i) =>
                        i === sIdx ? { ...item, src: e.target.value } : item
                      );
                      handleUpdate(idx, 'gallery', nextGallery);
                    }}
                  />
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer flex-shrink-0 transition">
                    <Upload className="w-3.5 h-3.5" /> Choose File
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const dataUrl = await compressImageToDataUrl(file);
                        const nextGallery = (project.gallery || []).map((item, i) =>
                          i === sIdx ? { ...item, src: dataUrl } : item
                        );
                        handleUpdate(idx, 'gallery', nextGallery);
                        e.target.value = '';
                      }}
                    />
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleUpdate(
                      idx,
                      'gallery',
                      (project.gallery || []).filter((_, i) => i !== sIdx)
                    )
                  }
                  className="text-red-400 hover:text-red-300 text-xs font-semibold px-2 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ConfigPage({ onBack }) {
  const { config, updateConfig, resetConfig, importConfig } = usePortfolio();
  const [activeTab, setActiveTab] = useState('profile');
  const [statusMessage, setStatusMessage] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');
  const fileInputRef = useRef(null);

  const flashStatus = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 2500);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-config.json';
    a.click();
    URL.revokeObjectURL(url);
    flashStatus('Exported portfolio-config.json');
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        importConfig(parsed);
        flashStatus('Imported configuration!');
      } catch {
        flashStatus('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    if (window.confirm('Reset all portfolio content back to defaults?')) {
      resetConfig();
      flashStatus('Reset to defaults.');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 pb-16">
      {/* Compact Sticky Top Bar + Tabs */}
      <header className="sticky top-0 z-40 glass-panel border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-white/10 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <div>
              <h1 className="text-sm sm:text-base font-display font-bold text-white leading-tight">
                Portfolio Config Studio
              </h1>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Auto-saved to browser • Export JSON to back up
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {statusMessage && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                <Check className="w-3 h-3" /> {statusMessage}
              </span>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={handleImportFile}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition"
            >
              <Upload className="w-3.5 h-3.5" /> Import
            </button>
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" /> Export
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/20 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-2.5 flex items-center gap-1.5 overflow-x-auto">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 border border-white/5'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        {/* Main Editor Area */}
        <main className="space-y-6">
          {/* 1. PROFILE & STATS */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h2 className="text-xl font-bold text-white">Profile & Contact Info</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    ['brand', 'Brand Logo Text'],
                    ['name', 'Full Name'],
                    ['role', 'Headline Role'],
                    ['educationBadge', 'Education Subtitle'],
                    ['email', 'Email Address'],
                    ['phone', 'Phone Number'],
                    ['location', 'Location'],
                    ['githubUrl', 'GitHub URL'],
                    ['linkedinUrl', 'LinkedIn URL'],
                  ].map(([field, label]) => (
                    <div key={field}>
                      <label className={labelClass}>{label}</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={config.profile[field] || ''}
                        onChange={(e) =>
                          updateConfig('profile', { ...config.profile, [field]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className={labelClass}>Hero Bio / Summary</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={config.profile.summary || ''}
                    onChange={(e) =>
                      updateConfig('profile', { ...config.profile, summary: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* 2. COMPANY PROJECTS */}
          {activeTab === 'company' && (
            <ProjectEditor
              projects={config.companyProjects}
              category="company"
              onChange={(next) => updateConfig('companyProjects', next)}
            />
          )}

          {/* 3. SELF PROJECTS */}
          {activeTab === 'self' && (
            <ProjectEditor
              projects={config.selfProjects}
              category="self"
              onChange={(next) => updateConfig('selfProjects', next)}
            />
          )}

          {/* 4. SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Engineering Capability Pillars</h2>
                  <button
                    type="button"
                    onClick={() =>
                      updateConfig('capabilityPillars', [
                        ...config.capabilityPillars,
                        {
                          title: 'New Capability',
                          description: 'Describe what you build in this area.',
                          items: ['Tool 1', 'Tool 2'],
                          iconKey: 'globe',
                          accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                        },
                      ])
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Pillar
                  </button>
                </div>

                {config.capabilityPillars.map((pillar, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400">Pillar #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateConfig(
                            'capabilityPillars',
                            config.capabilityPillars.filter((_, i) => i !== idx)
                          )
                        }
                        className="text-red-400 hover:text-red-300 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      className={inputClass}
                      value={pillar.title}
                      onChange={(e) =>
                        updateConfig(
                          'capabilityPillars',
                          config.capabilityPillars.map((p, i) =>
                            i === idx ? { ...p, title: e.target.value } : p
                          )
                        )
                      }
                    />
                    <textarea
                      rows={2}
                      className={inputClass}
                      value={pillar.description}
                      onChange={(e) =>
                        updateConfig(
                          'capabilityPillars',
                          config.capabilityPillars.map((p, i) =>
                            i === idx ? { ...p, description: e.target.value } : p
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Comma-separated technologies"
                      value={(pillar.items || []).join(', ')}
                      onChange={(e) =>
                        updateConfig(
                          'capabilityPillars',
                          config.capabilityPillars.map((p, i) =>
                            i === idx
                              ? {
                                  ...p,
                                  items: e.target.value
                                    .split(',')
                                    .map((x) => x.trim())
                                    .filter(Boolean),
                                }
                              : p
                          )
                        )
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {config.softSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-sm text-slate-200"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() =>
                          updateConfig(
                            'softSkills',
                            config.softSkills.filter((_, i) => i !== idx)
                          )
                        }
                        className="text-red-400 hover:text-red-300 text-xs font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Add a soft skill..."
                    value={newSoftSkill}
                    onChange={(e) => setNewSoftSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newSoftSkill.trim()) {
                        updateConfig('softSkills', [...config.softSkills, newSoftSkill.trim()]);
                        setNewSoftSkill('');
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newSoftSkill.trim()) return;
                      updateConfig('softSkills', [...config.softSkills, newSoftSkill.trim()]);
                      setNewSoftSkill('');
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 5. EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {[
                { key: 'primaryExperiences', title: 'Primary Work & Internship Experience' },
                { key: 'additionalExperiences', title: 'Additional Work History' },
              ].map(({ key, title }) => (
                <div key={key} className="glass-card p-6 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <button
                      type="button"
                      onClick={() =>
                        updateConfig(key, [
                          ...config[key],
                          {
                            role: 'New Role',
                            company: 'Company Name',
                            date: '2026',
                            iconKey: 'briefcase',
                            color: 'text-blue-400',
                            bullets: ['Describe your impact and key responsibilities.'],
                          },
                        ])
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Role
                    </button>
                  </div>

                  {config[key].map((job, idx) => (
                    <div key={idx} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 space-y-3">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">#{idx + 1} — {job.role}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => updateConfig(key, moveItem(config[key], idx, -1))}
                            title="Move Up"
                            aria-label="Move role up"
                            className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-white/10 transition"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === config[key].length - 1}
                            onClick={() => updateConfig(key, moveItem(config[key], idx, 1))}
                            title="Move Down"
                            aria-label="Move role down"
                            className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-white/10 transition"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              updateConfig(
                                key,
                                config[key].filter((_, i) => i !== idx)
                              )
                            }
                            className="text-red-400 hover:text-red-300 text-xs px-1.5"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Role"
                          value={job.role}
                          onChange={(e) =>
                            updateConfig(
                              key,
                              config[key].map((item, i) =>
                                i === idx ? { ...item, role: e.target.value } : item
                              )
                            )
                          }
                        />
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Company"
                          value={job.company}
                          onChange={(e) =>
                            updateConfig(
                              key,
                              config[key].map((item, i) =>
                                i === idx ? { ...item, company: e.target.value } : item
                              )
                            )
                          }
                        />
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Date Range"
                          value={job.date}
                          onChange={(e) =>
                            updateConfig(
                              key,
                              config[key].map((item, i) =>
                                i === idx ? { ...item, date: e.target.value } : item
                              )
                            )
                          }
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Bullet Points (one per line)</label>
                        <textarea
                          rows={3}
                          className={inputClass}
                          value={(job.bullets || []).join('\n')}
                          onChange={(e) =>
                            updateConfig(
                              key,
                              config[key].map((item, i) =>
                                i === idx
                                  ? {
                                      ...item,
                                      bullets: e.target.value
                                        .split('\n')
                                        .filter((line) => line.trim() !== ''),
                                    }
                                  : item
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* 6. EDUCATION & CERTS */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Education</h2>
                  <button
                    type="button"
                    onClick={() =>
                      updateConfig('educationList', [
                        ...config.educationList,
                        { school: 'School / University', degree: 'Degree / Strand', date: '2026', active: false },
                      ])
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Education
                  </button>
                </div>
                {config.educationList.map((edu, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="inline-flex items-center gap-2 text-xs text-slate-300">
                        <input
                          type="checkbox"
                          checked={!!edu.active}
                          onChange={(e) =>
                            updateConfig(
                              'educationList',
                              config.educationList.map((item, i) =>
                                i === idx ? { ...item, active: e.target.checked } : item
                              )
                            )
                          }
                        />
                        Currently Studying
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          updateConfig(
                            'educationList',
                            config.educationList.filter((_, i) => i !== idx)
                          )
                        }
                        className="text-red-400 hover:text-red-300 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="School"
                        value={edu.school}
                        onChange={(e) =>
                          updateConfig(
                            'educationList',
                            config.educationList.map((item, i) =>
                              i === idx ? { ...item, school: e.target.value } : item
                            )
                          )
                        }
                      />
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                          updateConfig(
                            'educationList',
                            config.educationList.map((item, i) =>
                              i === idx ? { ...item, degree: e.target.value } : item
                            )
                          )
                        }
                      />
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Date"
                        value={edu.date}
                        onChange={(e) =>
                          updateConfig(
                            'educationList',
                            config.educationList.map((item, i) =>
                              i === idx ? { ...item, date: e.target.value } : item
                            )
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Certifications & Training</h2>
                  <button
                    type="button"
                    onClick={() =>
                      updateConfig('certificationsList', [
                        ...config.certificationsList,
                        {
                          title: 'New Certification',
                          org: 'Issuing Organization — Date',
                          iconKey: 'award',
                          color: 'text-blue-400 bg-blue-500/10',
                        },
                      ])
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Certification
                  </button>
                </div>
                {config.certificationsList.map((cert, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-center">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Certification Title"
                      value={cert.title}
                      onChange={(e) =>
                        updateConfig(
                          'certificationsList',
                          config.certificationsList.map((item, i) =>
                            i === idx ? { ...item, title: e.target.value } : item
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Organization & Date"
                      value={cert.org}
                      onChange={(e) =>
                        updateConfig(
                          'certificationsList',
                          config.certificationsList.map((item, i) =>
                            i === idx ? { ...item, org: e.target.value } : item
                          )
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateConfig(
                          'certificationsList',
                          config.certificationsList.filter((_, i) => i !== idx)
                        )
                      }
                      className="text-red-400 hover:text-red-300 text-xs px-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. REFERENCES */}
          {activeTab === 'references' && (
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Character References</h2>
                <button
                  type="button"
                  onClick={() =>
                    updateConfig('characterReferences', [
                      ...config.characterReferences,
                      { name: 'Reference Name', role: 'Job Title', company: 'Company Name' },
                    ])
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Reference
                </button>
              </div>
              {config.characterReferences.map((ref, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 grid sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 items-center">
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Name"
                    value={ref.name}
                    onChange={(e) =>
                      updateConfig(
                        'characterReferences',
                        config.characterReferences.map((item, i) =>
                          i === idx ? { ...item, name: e.target.value } : item
                        )
                      )
                    }
                  />
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Role"
                    value={ref.role}
                    onChange={(e) =>
                      updateConfig(
                        'characterReferences',
                        config.characterReferences.map((item, i) =>
                          i === idx ? { ...item, role: e.target.value } : item
                        )
                      )
                    }
                  />
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Company"
                    value={ref.company}
                    onChange={(e) =>
                      updateConfig(
                        'characterReferences',
                        config.characterReferences.map((item, i) =>
                          i === idx ? { ...item, company: e.target.value } : item
                        )
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      updateConfig(
                        'characterReferences',
                        config.characterReferences.filter((_, i) => i !== idx)
                      )
                    }
                    className="text-red-400 hover:text-red-300 text-xs px-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
