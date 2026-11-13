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

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...buildDefaultConfig(), ...parsed };
      }
    } catch {
      // Fallback to default config if localStorage is unavailable or corrupted
    }
    return buildDefaultConfig();
  });

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
    <PortfolioContext.Provider value={{ config, updateConfig, resetConfig, importConfig }}>
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
