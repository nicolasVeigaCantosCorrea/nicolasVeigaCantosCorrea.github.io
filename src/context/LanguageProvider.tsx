import { useState, useEffect } from 'react';
import { LanguageContext, type Language } from './LanguageContext';
import { en } from '@/locales/en';
import { fr } from '@/locales/fr';

const translations = {
  en,
  fr,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return savedLanguage === 'en' || savedLanguage === 'fr'
      ? savedLanguage
      : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
