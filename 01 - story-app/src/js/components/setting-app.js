import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class SettingApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="row g-2 text-capitalize">
        <select-theme class="col-md"></select-theme>
        <select-language class="col-md"></select-language>
        <card-profile class="d-flex justify-content-center"></card-profile>
        <button type="button" class="btn btn-danger" @click="${this._resetStorage}">${msg(`setel ulang pengaturan`)}</button>
      </div>
    `;
  }

  _resetStorage() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}

customElements.define("setting-app", SettingApp);
