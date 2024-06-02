import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class InputAccount extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    const user = html`
      <form class="row g-3 account-username">
        <div class="col-auto">
          <label for="inputUsername" class="col-form-label">${msg(`ganti nama`)}</label>
        </div>
        <div class="col-auto">
          <label for="inputUsername" class="visually-hidden">${msg(`username`)}</label>
          <input
            type="username"
            class="form-control"
            id="inputUsername"
            placeholder="${msg(`username`)}"
            minlength="4"
            maxlength="15"
          />
          <button type="submit" class="btn btn-primary mb-3">${msg(`kirim`)}</button>
        </div>
      </form>
    `;

    const password = html`
      <form class="row g-3 account-password">
        <div class="col-auto">
          <label for="inputPassword" class="col-form-label">${msg(`ganti kata sandi`)}</label>
        </div>
        <div class="col-auto">
          <label for="inputPassword" class="visually-hidden">${msg(`password`)}</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="${msg(`password`)}"
            minlength="4"
            maxlength="15"
          />
          <button type="submit" class="btn btn-primary mb-3">${msg(`kirim`)}</button>
        </div>
      </form>
    `;

    if (this.type == "user") {
      return user;
    } else {
      return password;
    }
  }
}

customElements.define("input-account", InputAccount);
