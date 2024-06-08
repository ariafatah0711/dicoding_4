import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AlertWrapper extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    message: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    let message,
      messgaeAlert = this.message;
    if (this.type == 'login') {
      message = msg(`Akun tidak ditemukan!`);
    } else if (this.type == 'login-success') {
      message = msg(`Berhasil Login`);
      messgaeAlert = msg(`Akan dialihkan ke home`);
    } else if (this.type == 'register') {
      message = msg(`Gagal mendaftarkan akun!`);
    } else if (this.type == 'register-success') {
      message = msg(`Berhasil mendaftarkan akun`);
      messgaeAlert = msg(`Akan dialihkan ke halaman login`);
    }

    return html`
      <div
        class="alert ${this.type == 'register-success' || this.type == 'login-success'
          ? 'alert-success'
          : 'alert-danger'}"
        role="alert"
        id="alert-error-login"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <p>${message}</p>
            <small>${messgaeAlert} <span id="alert-interval"></span></small>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            id="alert-close"
          ></button>
        </div>
      </div>
    `;
  }
}

customElements.define('alert-wrapper', AlertWrapper);
