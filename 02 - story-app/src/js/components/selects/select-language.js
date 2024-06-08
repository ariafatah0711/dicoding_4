import { html } from 'lit';
import { allLocales } from '../../../generated/locale-codes';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { getLocale, localeNames, saveLocaleToLocalStorage } from '../../localization';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

const KEY = 'locale';

class SelectLanguage extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this._getLocaleStorage();
  }

  _getLocaleStorage() {
    const locale = localStorage.getItem(KEY) || getLocale();
    this._changeLocale(locale);
  }

  render() {
    return html`
      <div class="form-floating">
        <select class="form-select" id="floatingSelectGrid" @change=${this._localeChanged}>
          ${allLocales.map((locale) => {
            return html`
              <option value=${locale} ?selected=${locale == getLocale()}>
                ${localeNames[locale]}
              </option>
            `;
          })}
        </select>
        <label for="floatingSelectGrid">${msg(`ganti tema`)}</label>
      </div>
    `;
  }

  async _localeChanged(event) {
    const newLocale = event.target.value;
    await saveLocaleToLocalStorage(newLocale);
    this._changeLocale(newLocale);
  }

  _changeLocale(locale) {
    document.documentElement.lang = locale;
    localStorage.setItem(KEY, locale);
  }
}

customElements.define('select-language', SelectLanguage);
