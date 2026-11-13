import { Brain, Globe, Layers, Medal, Monitor, Server, ShieldCheck, Smartphone } from 'lucide-react';
import { toolGroups } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

const PILLAR_ICONS = {
  globe: Globe,
  server: Server,
  smartphone: Smartphone,
  desktop: Monitor,
  shield: ShieldCheck,
};

export default function Skills() {
  const { config } = usePortfolio();
  const { capabilityPillars, softSkills, languages, affiliations } = config;

  return (
    <section id="skills" className="py-14 md:py-18 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-1.5">
            Capabilities
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2.5">
            Technical Arsenal
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Engineering Capability Pillars — Compact & Centered */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {capabilityPillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[pillar.iconKey] || Globe;
            return (
              <div
                key={pillar.title + idx}
                className="glass-card p-4 sm:p-5 rounded-xl flex flex-col w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${pillar.accent}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3 flex-1">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(pillar.items || []).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 bg-slate-900/80 border border-white/10 rounded text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills, Languages, Affiliations & Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-5 sm:p-6 rounded-xl" data-aos="fade-up">
            <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2.5">
              <div className="bg-teal-500/10 p-1.5 rounded-lg">
                <Brain className="w-5 h-5" />
              </div>
              Professional Skills & Languages
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-900/70 border border-slate-700/80 rounded-lg text-slate-300 text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 mb-5">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-slate-900/50 rounded-lg p-2.5 border border-white/5">
                  <p className="font-semibold text-white text-xs sm:text-sm">{lang.name}</p>
                  <p className="text-[11px] text-teal-300 mt-0.5">{lang.level}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-[11px] font-bold text-slate-400 mb-2.5 uppercase tracking-widest">
                Service & Affiliations
              </h4>
              <div className="space-y-2">
                {affiliations.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Medal className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-200 font-medium">{item.title}</p>
                      <p className="text-[11px] text-slate-500">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2.5">
              <div className="bg-purple-500/10 p-1.5 rounded-lg">
                <Layers className="w-5 h-5" />
              </div>
              Tools & Platforms
            </h3>
            <div className="space-y-3.5">
              {toolGroups.map((group) => (
                <div key={group.label} className="flex gap-3 items-start">
                  <div className="p-1.5 rounded-lg bg-slate-900/70 border border-white/5">
                    <group.Icon className={`w-4 h-4 ${group.color}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {group.label}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 mt-0.5">{group.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
