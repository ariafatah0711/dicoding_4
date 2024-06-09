import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class BtnSubmit extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    let message;
    if (this.type == 'login') {
      message = msg(`Masuk`);
    } else if (this.type == 'register') {
      message = msg(`Daftar`);
    }

    return html`
      <button
        class="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
        type="submit"
      >
        <div class="spinner-border d-none" role="status" id="spinner">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="" id="btn-text-login">${message}</p>
      </button>
    `;
  }
}

customElements.define('btn-submit', BtnSubmit);
