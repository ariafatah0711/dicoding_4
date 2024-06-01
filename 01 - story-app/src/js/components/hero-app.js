import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeroApp extends LitWithoutShadowDom {
  static properties = {
    img: { type: String, reflect: true },
    title: { type: String, reflect: true },
  };

  render() {
    return html`
      <img src="${this.img}" class="rounded mx-auto d-block py-3" style="max-width: 10rem;" alt="..." />
      <h1 class="text-center pb-2">${this.title}</h1>
    `;
  }
}

customElements.define("hero-app", HeroApp);
