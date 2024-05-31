import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeroApp extends LitWithoutShadowDom {
  static properties = {
    img: { type: String, reflect: true },
  };

  render() {
    return html` <img src="${this.img}" class="rounded mx-auto d-block" style="max-width: 10rem;" alt="..." /> `;
  }
}

customElements.define("hero-app", HeroApp);
