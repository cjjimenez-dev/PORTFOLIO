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
    iconKey: ['globe', 'server', 'smartphone', 'desktop', 'shield'][idx] || 'globe',
  })),
  softSkills: [...defaultSoftSkills],
  languages: [...defaultLanguages],
  affiliations: [...defaultAffiliations],
  companyProjects: [...defaultCompanyProjects],
  selfProjects: [...defaultSelfProjects],
  primaryExperiences: defaultPrimaryExperiences.map((item, idx) => ({
    ...omitIcons(item),
    iconKey: ['code', 'building', 'briefcase'][idx] || 'briefcase',
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

  // Ensure new Desktop Applications pillar is present if saved config predates it
  if (
    Array.isArray(merged.capabilityPillars) &&
    !merged.capabilityPillars.some((p) => p.title === 'Desktop Applications')
  ) {
    const desktopPillar = defaults.capabilityPillars.find((p) => p.title === 'Desktop Applications');
    if (desktopPillar) {
      merged.capabilityPillars = [...merged.capabilityPillars, desktopPillar];
    }
  }

  // Upgrade older localStorage Atelier entry to the 7-screen Atelier 01 gallery
  const defaultAtelier = defaults.selfProjects.find((p) => p.id === 'atelier-photobooth');
  if (defaultAtelier && Array.isArray(merged.selfProjects)) {
    const hasAtelier = merged.selfProjects.some(
      (p) => p.id === 'atelier-photobooth' || p.title?.trim().toLowerCase() === 'atelier'
    );
    if (hasAtelier) {
      merged.selfProjects = merged.selfProjects.map((p) => {
        const isOldAtelier =
          (p.id === 'atelier-photobooth' || p.title?.trim().toLowerCase() === 'atelier') &&
          (p.gallery?.length || 0) < defaultAtelier.gallery.length;
        return isOldAtelier ? { ...p, ...defaultAtelier } : p;
      });
    } else {
      merged.selfProjects = [defaultAtelier, ...merged.selfProjects];
    }
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
