import { html, css, LitElement } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeroAppShadow extends LitWithoutShadowDom {
  static properties = {
    img: { type: String, reflect: true },
    type: { type: String, reflect: true },
  };

  static styles = css`
    .hero-img {
      border-radius: 0.375rem;
      display: block;
      margin: auto;
      max-width: 10rem;
      margin-top: 0.3rem;
      margin-bottom: 1rem;
    }
    .hero-title {
      text-align: center;
      margin: 5px auto;
      line-height: 1.2;
      font-weight: 300;
      font-size: calc(1.375rem + 1.5vw);
      padding-bottom: 0.5rem !important;
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    const imgBoostrap = "rounded mx-auto d-block py-3";
    const textBoostrap = "text-center pb-2";

    let content;
    switch (this.type) {
      case "home":
        content = html`<h1 class="${textBoostrap}">${msg(`aku ingin denger cerita kamu hari ini`)}</h1>`;
        break;
      case "add":
        content = html`<h1 class="${textBoostrap}">${msg(`tambahkan ceritamu`)}</h1>`;
        break;
      case "dashboard":
        content = html`<h1 class="${textBoostrap}">${msg(`dasbor`)}</h1>`;
        break;
      case "setting":
        content = html`<h1 class="${textBoostrap}">${msg(`pengaturan`)}</h1>`;
        break;
      case "account":
        content = html`<h1 class="${textBoostrap}">${msg(`akun`)}</h1>`;
        break;
      default:
        content = html``; // Jika type tidak dikenali, tidak menampilkan apa pun
    }

    return html`
      <img src="${this.img}" class="${imgBoostrap}" style="max-width: 10rem;" alt="..." />
      ${content}
    `;
  }
}

customElements.define("hero-app", HeroAppShadow);
