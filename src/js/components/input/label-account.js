import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class LabelAccount extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    // <input type="text" readonly class="form-control" id="staticUser" value="Aria" />;
    const user = html`
      <div class="mb-3 row account-header">
        <label for="staticUser" class="col-sm-2 col-form-label">${msg(`username`)}</label>
        <div class="col-sm-10 col-form-value w-100">
          <input type="text" readonly class="form-control" id="staticUser" value="${this.value}" />
        </div>
      </div>
    `;

    const email = html`
      <div class="mb-3 row account-header">
        <label for="staticEmail" class="col-sm-2 col-form-label">${msg(`alamat email`)}</label>
        <div class="col-sm-10 col-form-value w-100">
          <input type="text" readonly class="form-control" id="staticEmail" value="${this.value}" />
        </div>
      </div>
    `;

    const password = html`
      <div class="mb-3 row account-header">
        <label for="staticEmail" class="col-sm-2 col-form-label">${msg(`password`)}</label>
        <div class="col-sm-10 col-form-value w-100">
          <input type="text" readonly class="form-control" id="staticPassword" value="********" />
        </div>
      </div>
    `;

    if (this.type == 'user') {
      return user;
    }
    if (this.type == 'email') {
      return email;
    }
    return password;
  }
}

customElements.define('label-account', LabelAccount);
