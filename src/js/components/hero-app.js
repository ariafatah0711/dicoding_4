import { html, css, LitElement } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HeroAppShadow extends LitElement {
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
    // const imgClass = "rounded mx-auto d-block py-3";
    // const textClass = "text-center pb-2";

    const imgClass = 'hero-img';
    const textClass = 'hero-title';

    let content;
    switch (this.type) {
      case 'home':
        content = html`<h1 class="${textClass}">
          ${msg(`aku ingin denger cerita kamu hari ini`)}
        </h1>`;
        break;
      case 'add':
        content = html`<h1 class="${textClass}">${msg(`tambahkan ceritamu`)}</h1>`;
        break;
      case 'dashboard':
        content = html`<h1 class="${textClass}">${msg(`dasbor`)}</h1>`;
        break;
      case 'setting':
        content = html`<h1 class="${textClass}">${msg(`pengaturan`)}</h1>`;
        break;
      case 'account':
        content = html`<h1 class="${textClass}">${msg(`akun`)}</h1>`;
        break;
      default:
        content = html``;
    }

    return html`
      <img src="${this.img}" class="${imgClass}" style="max-width: 10rem;" alt="..." />
      ${content}
    `;
  }
}

customElements.define('hero-app', HeroAppShadow);
