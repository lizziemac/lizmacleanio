// Locale and Language Code files will live in files in this directory
import I18n from 'i18n-js';
import en from './locales/en';
import es from './locales/es';

I18n.defaultLocale = 'en-US';
I18n.fallbacks = true;

// see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
I18n.locale = typeof window !== 'undefined' ? navigator.language : '';

I18n.translations = {
  en,
  es,
};

export const setLocale = (locale: string): void => {
  I18n.locale = locale;
};
export const getUserLocale = (): string => I18n.currentLocale();
export const getLocale = (): string => {
  const userLocale = getUserLocale();
  const fallbackLocale = userLocale.split('-')[0];

  if (Object.keys(I18n.translations).includes(userLocale)) {
    return userLocale;
  } else if (Object.keys(I18n.translations).includes(fallbackLocale)) {
    return fallbackLocale;
  } else {
    return I18n.defaultLocale;
  }
};

export * from './keys';
export * from './tools';

export { I18n };
export default I18n;