import { Brain, Globe, Layers, Medal, Server, ShieldCheck, Smartphone } from 'lucide-react';
import { toolGroups } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

const PILLAR_ICONS = {
  globe: Globe,
  server: Server,
  smartphone: Smartphone,
  shield: ShieldCheck,
};

export default function Skills() {
  const { config } = usePortfolio();
  const { capabilityPillars, softSkills, languages, affiliations } = config;

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Engineering Capability Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {capabilityPillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[pillar.iconKey] || Globe;
            return (
              <div
                key={pillar.title + idx}
                className="glass-card p-6 rounded-2xl flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${pillar.accent}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(pillar.items || []).map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-slate-900/80 border border-white/10 rounded-md text-xs text-slate-300"
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl" data-aos="fade-up">
            <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <div className="bg-teal-500/10 p-2 rounded-lg">
                <Brain className="w-6 h-6" />
              </div>
              Professional Skills & Languages
            </h3>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-900/70 border border-slate-700/80 rounded-lg text-slate-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-6">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                  <p className="font-semibold text-white text-sm">{lang.name}</p>
                  <p className="text-xs text-teal-300 mt-0.5">{lang.level}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">
                Service & Affiliations
              </h4>
              <div className="space-y-2.5">
                {affiliations.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 text-sm text-slate-300">
                    <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-200 font-medium">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <Layers className="w-6 h-6" />
              </div>
              Tools & Platforms
            </h3>
            <div className="space-y-5">
              {toolGroups.map((group) => (
                <div key={group.label} className="flex gap-3.5 items-start">
                  <div className="p-2 rounded-lg bg-slate-900/70 border border-white/5">
                    <group.Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {group.label}
                    </p>
                    <p className="text-sm text-slate-200 mt-0.5">{group.items}</p>
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
