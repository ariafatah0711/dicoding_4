import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class InputAccount extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
  };

  render() {
    const user = html`
      <form class="row g-3 account-username">
        <div class="col-auto">
          <label for="inputUsername" class="col-form-label">ganti nama</label>
        </div>
        <div class="col-auto">
          <label for="inputUsername" class="visually-hidden">username</label>
          <input type="username" class="form-control" id="inputUsername" placeholder="username" minlength="4" maxlength="15" />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">kirim</button>
        </div>
      </form>
    `;

    const password = html`
      <form class="row g-3 account-password">
        <div class="col-auto">
          <label for="inputPassword" class="col-form-label">ganti password</label>
        </div>
        <div class="col-auto">
          <label for="inputPassword" class="visually-hidden">username</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="password" minlength="4" maxlength="15" />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">kirim</button>
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
