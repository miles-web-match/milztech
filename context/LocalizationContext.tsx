
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../constants/locales';

type Language = 'en' | 'ja';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const t = translations[language];

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
