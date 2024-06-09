import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ModalItem extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    img: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
    target: { type: String, reflect: true },
  };

  render() {
    return html`
      <div
        class="modal fade"
        id="${this.target}"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src="${this.img}" class="card-img-top" alt="..." />
              <p class="card-text">${this.description}</p>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <small class="text-body-secondary p-md-wrap">${this.datePostAgo}</small>
              <div>
                <i class="bi bi-calendar-check"></i>
                <small class="text-body-secondary"> ${this.date}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-item', ModalItem);
