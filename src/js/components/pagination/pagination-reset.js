import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class PaginationReset extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  handleClick() {
    sessionStorage.setItem(this.type, 0);
    window.location.reload();
  }

  render() {
    return html`
      <nav aria-label="..." class="d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" @click=${this.handleClick()}>${msg(`reset`)}</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('pagination-reset', PaginationReset);
