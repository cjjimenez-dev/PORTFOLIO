import { createContext, useContext, useEffect, useState } from 'react';
import {
  affiliations as defaultAffiliations,
  capabilityPillars as defaultCapabilityPillars,
  certificationsList as defaultCertifications,
  characterReferences as defaultReferences,
  companyProjects as defaultCompanyProjects,
  educationList as defaultEducation,
  heroStats as defaultHeroStats,
  languages as defaultLanguages,
  primaryExperiences as defaultPrimaryExperiences,
  additionalExperiences as defaultAdditionalExperiences,
  profile as defaultProfile,
  selfProjects as defaultSelfProjects,
  softSkills as defaultSoftSkills,
} from '../data/portfolioData';

const STORAGE_KEY = 'portfolio_config_v1';
const THEME_STORAGE_KEY = 'portfolio_theme_v1';

const omitIcons = (item) =>
  Object.fromEntries(Object.entries(item).filter(([key]) => key !== 'icon' && key !== 'Icon'));

const buildDefaultConfig = () => ({
  profile: { ...defaultProfile },
  heroStats: [...defaultHeroStats],
  capabilityPillars: defaultCapabilityPillars.map((item, idx) => ({
    ...omitIcons(item),
    iconKey:
      item.iconKey ||
      ['globe', 'server', 'database', 'security', 'desktop', 'smartphone', 'devops'][idx] ||
      'globe',
  })),
  softSkills: [...defaultSoftSkills],
  languages: [...defaultLanguages],
  affiliations: [...defaultAffiliations],
  companyProjects: [...defaultCompanyProjects],
  selfProjects: [...defaultSelfProjects],
  primaryExperiences: defaultPrimaryExperiences.map((item, idx) => ({
    ...omitIcons(item),
    iconKey: ['code', 'code', 'building', 'briefcase'][idx] || 'briefcase',
  })),
  additionalExperiences: defaultAdditionalExperiences.map((item, idx) => ({
    ...omitIcons(item),
    iconKey: ['truck', 'bike'][idx] || 'truck',
  })),
  educationList: [...defaultEducation],
  certificationsList: defaultCertifications.map((item, idx) => ({
    ...omitIcons(item),
    iconKey: ['brain', 'brain', 'mail', 'briefcase', 'award'][idx] || 'award',
  })),
  characterReferences: [...defaultReferences],
});

const mergeWithDefaults = (savedConfig) => {
  const defaults = buildDefaultConfig();
  const merged = { ...defaults, ...savedConfig };

  // Ensure newly separated capability pillars (Frontend, Backend, Database, Security, etc.) are present
  const hasSeparatedPillars =
    Array.isArray(merged.capabilityPillars) &&
    merged.capabilityPillars.some((p) => p.title?.includes('Databases')) &&
    merged.capabilityPillars.some((p) => p.title?.includes('Security'));

  if (!hasSeparatedPillars || (merged.capabilityPillars || []).length < defaults.capabilityPillars.length) {
    merged.capabilityPillars = defaults.capabilityPillars;
  }

  // Ensure BCS Systems experience is present in primaryExperiences
  if (
    Array.isArray(merged.primaryExperiences) &&
    !merged.primaryExperiences.some((e) => e.company?.includes('BCS Systems') || e.company?.includes('BCS'))
  ) {
    const bcsExp = defaults.primaryExperiences.find((e) => e.company?.includes('BCS Systems'));
    if (bcsExp) {
      merged.primaryExperiences = [bcsExp, ...merged.primaryExperiences];
    }
  }

  // Upgrade company projects (e.g. Cebuana ReFind)
  const upgradeCompanyProjectIfNeeded = (defaultId, titleMatcher) => {
    const defaultProj = defaults.companyProjects.find((p) => p.id === defaultId);
    if (!defaultProj || !Array.isArray(merged.companyProjects)) return;
    const hasMatch = merged.companyProjects.some(
      (p) => p.id === defaultId || titleMatcher(p.title?.trim().toLowerCase() || '')
    );
    if (hasMatch) {
      merged.companyProjects = merged.companyProjects.map((p) => {
        const isMatch = p.id === defaultId || titleMatcher(p.title?.trim().toLowerCase() || '');
        const isPlaceholder =
          !p.subHeader ||
          p.subHeader === 'Short Project Tagline' ||
          p.description?.includes('Concise 1-2 sentence') ||
          p.details?.includes('Detailed overview');
        const needsUpgrade = isMatch && ((p.gallery?.length || 0) < defaultProj.gallery.length || isPlaceholder);
        return needsUpgrade ? { ...defaultProj, id: defaultId } : p;
      });
    } else {
      merged.companyProjects = [defaultProj, ...merged.companyProjects];
    }
  };

  upgradeCompanyProjectIfNeeded('cebuana-refind', (t) => t.includes('refind') || t.includes('cebuana'));
  upgradeCompanyProjectIfNeeded('wbox-autocount', (t) => t.includes('wbox') || t.includes('autocount'));
  upgradeCompanyProjectIfNeeded('discount-converter', (t) => t.includes('discount') || t.includes('converter'));

  // Ensure BCS Systems experience has up-to-date linkedProjects
  if (Array.isArray(merged.primaryExperiences)) {
    const bcsExp = merged.primaryExperiences.find((e) => e.company?.includes('BCS Systems'));
    if (bcsExp && Array.isArray(bcsExp.linkedProjects)) {
      if (!bcsExp.linkedProjects.includes('WBox–AutoCount Bridge Middleware')) {
        bcsExp.linkedProjects = [...bcsExp.linkedProjects, 'WBox–AutoCount Bridge Middleware'];
      }
      if (!bcsExp.linkedProjects.includes('POS Discount & VAT Converter')) {
        bcsExp.linkedProjects = [...bcsExp.linkedProjects, 'POS Discount & VAT Converter'];
      }
    }
  }

  // Deduplicate companyProjects by ID
  const seenCompanyIds = new Set();
  merged.companyProjects = merged.companyProjects.filter((p) => {
    const key = p.id || p.title;
    if (!key) return true;
    if (seenCompanyIds.has(key)) return false;
    seenCompanyIds.add(key);
    return true;
  });

  // Upgrade older localStorage entries without losing custom edits, overwriting any placeholder fields
  const upgradeProjectIfNeeded = (defaultId, titleMatcher) => {
    const defaultProj = defaults.selfProjects.find((p) => p.id === defaultId);
    if (!defaultProj || !Array.isArray(merged.selfProjects)) return;
    const hasMatch = merged.selfProjects.some(
      (p) => p.id === defaultId || titleMatcher(p.title?.trim().toLowerCase() || '')
    );
    if (hasMatch) {
      merged.selfProjects = merged.selfProjects.map((p) => {
        const isMatch = p.id === defaultId || titleMatcher(p.title?.trim().toLowerCase() || '');
        const isPlaceholder =
          !p.subHeader ||
          p.subHeader === 'Short Project Tagline' ||
          p.description?.includes('Concise 1-2 sentence') ||
          p.details?.includes('Detailed overview') ||
          (defaultId === 'wrap-up' && p.image === '/images/viderevision.png');
        const needsUpgrade = isMatch && ((p.gallery?.length || 0) < defaultProj.gallery.length || isPlaceholder);
        return needsUpgrade ? { ...defaultProj, id: defaultId } : p;
      });
    } else {
      merged.selfProjects = [defaultProj, ...merged.selfProjects];
    }
  };

  upgradeProjectIfNeeded('our-little-world', (t) => t.includes('world') || t.includes('little'));
  upgradeProjectIfNeeded('display-viewer', (t) => t.includes('display') || t.includes('viewer'));
  upgradeProjectIfNeeded('printing-kiosk', (t) => t.includes('printing') || t.includes('kiosk'));
  upgradeProjectIfNeeded('atelier-photobooth', (t) => t === 'atelier' || t.includes('atelier'));
  upgradeProjectIfNeeded('findiary', (t) => t.includes('findiary'));
  upgradeProjectIfNeeded('wrap-up', (t) => t.includes('wrap up') || t.includes('wrap-up') || t === 'wrap up');
  upgradeProjectIfNeeded('viderevision', (t) => t.includes('videre'));

  // Deduplicate selfProjects by ID
  const seenSelfIds = new Set();
  merged.selfProjects = merged.selfProjects.filter((p) => {
    const key = p.id || p.title;
    if (!key) return true;
    if (seenSelfIds.has(key)) return false;
    seenSelfIds.add(key);
    return true;
  });

  // Ensure all projects inherit separated architecture layers (Frontend, Backend, Database, Security)
  if (Array.isArray(merged.companyProjects)) {
    merged.companyProjects = merged.companyProjects.map((p) => {
      const defaultMatch = defaults.companyProjects.find((dp) => dp.id === p.id);
      if (defaultMatch?.architecture) {
        return { ...p, architecture: defaultMatch.architecture };
      }
      return p;
    });
  }

  if (Array.isArray(merged.selfProjects)) {
    merged.selfProjects = merged.selfProjects.map((p) => {
      const defaultMatch = defaults.selfProjects.find((dp) => dp.id === p.id);
      if (defaultMatch?.architecture) {
        return { ...p, architecture: defaultMatch.architecture };
      }
      return p;
    });
  }

  return merged;
};

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return mergeWithDefaults(parsed);
      }
    } catch {
      // Fallback to default config if localStorage is unavailable or corrupted
    }
    return buildDefaultConfig();
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage quota errors
    }
  }, [config]);

  const updateConfig = (section, value) => {
    setConfig((prev) => ({
      ...prev,
      [section]: typeof value === 'function' ? value(prev[section]) : value,
    }));
  };

  const resetConfig = () => {
    const fresh = buildDefaultConfig();
    setConfig(fresh);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const importConfig = (jsonObject) => {
    setConfig({ ...buildDefaultConfig(), ...jsonObject });
  };

  return (
    <PortfolioContext.Provider value={{ config, updateConfig, resetConfig, importConfig, theme, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return ctx;
}
