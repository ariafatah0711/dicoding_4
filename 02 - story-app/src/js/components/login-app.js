import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class LoginApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <h1 class="text-center">${msg(`Masuk`)}</h1>

          <form id="loginForm" novalidate>
            <div id="div-alert"></div>

            <div class="mb-3">
              <label for="validationCustomRecordEmail" class="form-label">${msg(`email`)}</label>
              <input-with-validation
                type="text"
                inputId="validationCustomRecordEmail"
                invalidFeedbackMessage="email incorrect"
                required
              ></input-with-validation>
            </div>

            <div class="mb-3">
              <label for="validationCustomPassword" class="form-label">${msg(`kata sandi`)}</label>
              <input-with-validation
                type="password"
                inputId="validationCustomPassword"
                invalidFeedbackMessage="Enter a minimum of 8 letters"
                required
              ></input-with-validation>
            </div>

            <div class="col-12 text-end">
              <btn-submit type="login"></btn-submit>
            </div>
          </form>

          <div class="mt-4 text-center">
            ${msg(`Belum punya akun?`)} <a href="/auth/register.html">${msg(`daftar`)}</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('login-app', LoginApp);
