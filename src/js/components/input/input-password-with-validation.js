import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class InputPasswordWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
    this.type = 'password';
    this.required = true;
    updateWhenLocaleChanges(this);
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('inputId')) {
      throw new Error(`Atribut "inputId" harus diterapkan pada elemen  ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="position-relative d-flex flex-wrap">
        <input
          id=${this.inputId || nothing}
          class="form-control"
          minlength="8"
          maxlength="20"
          type=${this.type}
          value=${this.value || nothing}
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        />

        <button
          class="position-absolute start-100"
          style="margin-left: -35px; border: none; background: none;"
          type="button"
          @click=${() => (this.type = this.type === 'password' ? 'text' : 'password')}
        >
          <i
            class=${this.type === 'password' ? 'bi bi-eye' : 'bi bi-eye-fill'}
            style="font-size: 1.5rem;"
          ></i>
        </button>

        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('input-password-with-validation', InputPasswordWithValidation);
