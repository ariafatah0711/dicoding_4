import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class AddStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.name = "aria";
  }

  render() {
    return html`
      <form class="was-validated padded-20">
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="${msg(`masukan deskripsi disini`)}"
            id="floatingTextarea2"
            style="height: 100px"
            minlength="10"
            maxlength="125"
            required
          ></textarea>
          <label for="floatingTextarea2">${msg(`deskripsi`)}</label>
          <div class="invalid-feedback">${msg(`masukan text minimal 10-125 huruf`)}</div>
        </div>
        <div class="input-group">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            class="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            required
          />
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >${msg(`kirim sebagai`)} ${this.name}/${msg(`tamu`)}?</label
          >
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/'">${msg(`kirim`)}</button>
        </div>
      </form>
    `;
  }
}

customElements.define("add-story", AddStory);
