import { setLocale, localeNames } from '../localization';

const localeStorage = localStorage.getItem('locale');

if (localeStorage && localeNames.hasOwnProperty(localeStorage)) {
  setLocale(localeStorage);
}
