import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../utils/utils';

class AccountApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this._getData();
  }

  _getData() {
    this.name = Utils.getUserName();
    this.email = Utils.getEmail();
  }

  render() {
    return html`
      <label-account type="user" value="${this.name}"></label-account>
      <label-account type="email" value="${this.email}"></label-account>
      <label-account type="password"></label-account>
      <input-account type="user"></input-account>
      <input-account type="password"></input-account>
      <button type="button" class="btn btn-danger">${msg(`hapus akun`)}</button>
    `;
  }
}

customElements.define('account-app', AccountApp);
