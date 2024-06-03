import { setLocale, localeNames } from '../localization';

const KEY = 'locale';
const localeStorage = localStorage.getItem(KEY);

// Jika ada preferensi bahasa yang tersimpan dalam localStorage, langsung atur bahasa
if (localeStorage && localeNames.hasOwnProperty(localeStorage)) {
  setLocale(localeStorage);
}
