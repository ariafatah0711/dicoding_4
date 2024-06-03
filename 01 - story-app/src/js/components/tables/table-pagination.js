import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class TablePagination extends LitWithoutShadowDom {
  static properties = {
    data: { type: Array, reflect: true },
    chunk: { type: Number, reflect: true },
    totalChunk: { type: Number, reflect: true },
    status: { type: String, reflect: true },
    tab: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    // this._changeStatus();
  }

  handleClick(event, index) {
    event.preventDefault();
    let targetElement;
    if (this.tab === 'user') {
      targetElement = this.closest('table-user-app');
    } else {
      targetElement = this.closest('table-anonim-app');
    }
    if (targetElement) {
      targetElement.setAttribute('chunk', index);
      sessionStorage.setItem(this.tab, index);
      window.location.reload();
    }
  }

  _changeStatus() {
    let chunk = parseInt(this.status);
    let totalChunk = parseInt(this.totalChunk);
    if (chunk + 1 == totalChunk) {
      this.status = 'next';
    } else if (chunk == 0) {
      this.status = 'prev';
    } else {
      this.status = 'normal';
    }
  }

  render() {
    const pages = Array.from({ length: this.totalChunk }, (_, index) => index);

    return html`
      <nav aria-label="..." class="d-flex justify-content-center">
        <ul class="pagination">
          ${this.status == 'prev' || this.status == 'both'
            ? html`
                <li class="page-item disabled">
                  <span class="page-link">${msg(`sebelumnya`)}</span>
                </li>
              `
            : html`
                <li class="page-item">
                  <a class="page-link" href="#" @click=${(e) => this.handleClick(e, this.chunk - 1)}
                    >${msg(`sebelumnya`)}</a
                  >
                </li>
              `}
          ${pages.map(
            (index) => html`
              ${this.chunk == index
                ? html`<li class="page-item active" aria-current="page">
                    <span class="page-link">${parseInt(index) + 1}</span>
                  </li>`
                : html` <li class="page-item">
                    <a class="page-link" href="#" @click=${(e) => this.handleClick(e, index)}
                      >${parseInt(index) + 1}</a
                    >
                  </li>`}
            `,
          )}
          ${this.status == 'next' || this.status == 'both'
            ? html`
                <li class="page-item disabled">
                  <span class="page-link">${msg(`berikutnya`)}</span>
                </li>
              `
            : html`
                <li class="page-item">
                  <a class="page-link" href="#" @click=${(e) => this.handleClick(e, this.chunk + 1)}
                    >${msg(`berikutnya`)}</a
                  >
                </li>
              `}
        </ul>
      </nav>
    `;
  }
}

customElements.define('table-pagination', TablePagination);
