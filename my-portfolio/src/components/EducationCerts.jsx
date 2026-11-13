import { Award, Brain, Briefcase, Mail, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const CERT_ICONS = {
  brain: Brain,
  mail: Mail,
  briefcase: Briefcase,
  award: Award,
};

export default function EducationCerts() {
  const { config } = usePortfolio();
  const { educationList, certificationsList, characterReferences } = config;

  return (
    <>
      <section id="education" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-blue-500 pl-4">
              Education
            </h3>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={edu.school + idx}
                  className={`glass-card p-5 rounded-xl border-l-4 ${
                    edu.active ? 'border-l-blue-500' : 'border-l-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.school}</h4>
                      <p className="text-slate-400 text-sm mt-0.5">{edu.degree}</p>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded font-mono whitespace-nowrap ${
                        edu.active
                          ? 'text-green-400 bg-green-500/10'
                          : 'text-slate-400 bg-slate-800'
                      }`}
                    >
                      {edu.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-teal-500 pl-4">
              Certifications & Training
            </h3>
            <div className="grid gap-3.5">
              {certificationsList.map((cert, idx) => {
                const IconComponent = CERT_ICONS[cert.iconKey] || Award;
                return (
                  <div key={cert.title + idx} className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        cert.color || 'text-blue-400 bg-blue-500/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{cert.title}</p>
                      <p className="text-xs text-slate-400">{cert.org}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Professional & Character References
            </h2>
            <p className="text-slate-400 text-sm">
              Direct contact details are available upon interview or formal request.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {characterReferences.map((ref, i) => (
              <div
                key={ref.name + i}
                className="glass-card p-6 rounded-2xl text-center"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                  <span className="text-lg font-bold text-blue-400">{ref.name.charAt(0)}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{ref.name}</h3>
                <p className="text-sm text-blue-400 mb-1">{ref.role}</p>
                <p className="text-xs text-slate-400 mb-4">{ref.company}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/70 px-3 py-1.5 rounded-full border border-white/10 transition"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Available Upon Request
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
