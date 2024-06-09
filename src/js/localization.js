import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../generated/locales/${locale}.js`);
  },
});

export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('lang') || sourceLocale;

  await setLocale(locale);
};

export const setLocaleFromLocalStorage = async () => {
  const locale = localStorage.getItem('locale') || sourceLocale;

  await setLocale(locale);
};

// Call this function to save the locale to localStorage
export const saveLocaleToLocalStorage = async (locale) => {
  localStorage.setItem('locale', locale);
  await setLocale(locale);
};

export const localeNames = {
  en: 'English',
  fr: 'Français',
  id: 'Indonesia',
  ja: 'Japanese',
};
