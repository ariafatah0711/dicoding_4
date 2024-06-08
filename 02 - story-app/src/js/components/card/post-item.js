import { html, css } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class PostItem extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    img: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
    datePostAgo: { type: String, reflect: true },
    loading: { type: Boolean, reflect: true },
    id: { type: String, reflect: true },
  };

  static styles = css`
    .hidden {
      visibility: hidden;
    }
  `;

  constructor() {
    super();
    this.classList.add('col');
  }

  firstUpdated() {
    setTimeout(() => {
      this.loading = false;
      this.requestUpdate();
    }, 1000);
  }

  render() {
    const withLoading = html`
      ${this.loading
        ? html`
            <svg
              class="bd-placeholder-img img-thumbnail"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>
          `
        : html` <img src="${this.img}" class="card-img-top" alt="..." /> `}
    `;

    const withoutLoading = html`
      <div class="card-image">
        <img src="${this.img}" class="card-img-top" alt="..." />
      </div>
    `;

    return html`
      <div class="card h-100 pointer" data-bs-toggle="modal" data-bs-target="#modal_${this.id}">
        ${withoutLoading}
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <small class="text-body-secondary p-md-wrap">${this.datePostAgo}</small>
          <div>
            <i class="bi bi-calendar-check"></i>
            <small class="text-body-secondary"> ${this.date}</small>
          </div>
        </div>
      </div>
      <modal-item
        target="modal_${this.id}"
        name="${this.name}"
        date="${this.date}"
        img="${this.img}"
        description="${this.description}"
      ></modal-item>
    `;
  }
}

customElements.define('post-item', PostItem);
