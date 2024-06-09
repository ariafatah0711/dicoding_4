import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class RegisterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <h1 class="text-center">${msg(`daftar`)}</h1>

          <form id="registerForm" novalidate>
            <div id="div-alert"></div>

            <div class="mb-3">
              <label for="validationCustomRecordName" class="form-label">${msg(`nama`)}</label>
              <input-with-validation
                type="text"
                inputId="validationCustomRecordName"
                invalidFeedbackMessage="Input Required"
                required
              ></input-with-validation>
            </div>

            <div class="mb-3">
              <label for="validationCustomEmail" class="form-label">${msg(`email`)}</label>
              <input-with-validation
                type="email"
                inputId="validationCustomEmail"
                invalidFeedbackMessage="Email incorrect"
                required
              ></input-with-validation>
            </div>

            <div class="mb-3">
              <label for="validationCustomPassword" class="form-label">${msg(`kata sandi`)}</label>
              <input-password-with-validation
                type="password"
                inputId="validationCustomPassword"
                invalidFeedbackMessage="Enter a minimum of 8 letters"
                required
              ></input-password-with-validation>
            </div>

            <div class="col-12 text-end">
              <btn-submit type="register"></btn-submit>
            </div>
          </form>

          <div class="mt-4 text-center">
            ${msg(`Sudah punya akun?`)} <a href="/auth/login.html">${msg(`masuk`)}</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('register-app', RegisterApp);
