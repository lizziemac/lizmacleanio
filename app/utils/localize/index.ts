// Locale and Language Code files will live in files in this directory
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import es from './locales/es';

await i18n.use(LanguageDetector).init({
  debug: true,
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  fallbackLng: ['en']
});

export * from './keys';
export * from './tools';

export default i18n;
