import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class AccountApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <label-account type="user"></label-account>
      <label-account type="email"></label-account>
      <label-account type="password"></label-account>
      <input-account type="user"></input-account>
      <input-account type="password"></input-account>
      <button type="button" class="btn btn-danger">${msg(`hapus akun`)}</button>
    `;
  }
}

customElements.define("account-app", AccountApp);
