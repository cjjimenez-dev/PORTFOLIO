import { useState } from 'react';
import { Bike, Briefcase, Building2, ChevronDown, ChevronUp, Code2, Truck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const EXP_ICONS = {
  code: Code2,
  building: Building2,
  briefcase: Briefcase,
  truck: Truck,
  bike: Bike,
};

function TimelineItem({ job, isLast, delay }) {
  const IconComponent = EXP_ICONS[job.iconKey] || Briefcase;
  return (
    <div className="flex gap-5 sm:gap-6 mb-10 last:mb-0" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 z-10 flex-shrink-0">
          <IconComponent className={`w-6 h-6 ${job.color || 'text-blue-400'}`} />
        </div>
        {!isLast && <div className="h-full w-0.5 bg-slate-800 my-2" />}
      </div>

      <div className="glass-card p-6 rounded-xl flex-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
          <h3 className="text-lg font-bold text-white">{job.role}</h3>
          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded self-start whitespace-nowrap">
            {job.date}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-3">{job.company}</p>

        {job.bullets && job.bullets.length > 0 && (
          <ul className="space-y-1.5">
            {job.bullets.map((b, i) => (
              <li key={i} className="text-sm text-slate-300 flex gap-2.5 leading-relaxed">
                <span className="text-blue-500 mt-1">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {job.linkedProjects && job.linkedProjects.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Shipped Systems:</span>
            {job.linkedProjects.map((name) => (
              <a
                key={name}
                href="#projects"
                className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 hover:bg-orange-500/20 transition"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const { config } = usePortfolio();
  const { primaryExperiences, additionalExperiences } = config;
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="experience" className="py-24 bg-slate-900/30 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Work & Internship Experience
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {primaryExperiences.map((job, index, arr) => (
            <TimelineItem
              key={job.role + index}
              job={job}
              isLast={!showAdditional && index === arr.length - 1}
              delay={index * 80}
            />
          ))}

          {additionalExperiences.length > 0 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAdditional(!showAdditional)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-white/10 text-xs font-medium text-slate-300 transition"
              >
                {showAdditional ? (
                  <>
                    Hide Additional Work History <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show Additional Work History ({additionalExperiences.length}){' '}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>

              {showAdditional && (
                <div className="mt-8 text-left">
                  {additionalExperiences.map((job, index, arr) => (
                    <TimelineItem
                      key={job.role + index}
                      job={job}
                      isLast={index === arr.length - 1}
                      delay={0}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
