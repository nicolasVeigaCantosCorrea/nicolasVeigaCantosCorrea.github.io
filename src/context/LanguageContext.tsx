import { createContext } from 'react';
import { en } from '@/locales/en';

export type Language = 'en' | 'fr';

export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof en;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
