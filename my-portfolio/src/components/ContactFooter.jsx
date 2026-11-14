import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function ContactFooter() {
  const { config } = usePortfolio();
  const { profile } = config;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="bg-black/80 py-14 border-t border-slate-800 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="text-3xl font-display font-bold text-white mb-3">Let&apos;s Work Together</h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Open to full-time software engineering roles, internships, and freelance full-stack or mobile projects.
        </p>

        {/* Primary Contact Action */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/20"
          >
            <Mail className="w-4 h-4" /> Send Email
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-medium text-sm transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> Copied Email!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" /> Copy {profile.email}
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm text-slate-400">
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center justify-center gap-2 hover:text-white transition"
          >
            <Phone className="w-4 h-4 text-blue-400" /> {profile.phone}
          </a>
          <span className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" /> {profile.location}
          </span>
        </div>

        <div className="flex justify-center gap-6 text-slate-400">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
