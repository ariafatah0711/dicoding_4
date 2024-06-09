import { css, html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoadingElement extends LitWithoutShadowDom {
  static styles = css`
    .min-vh-50 {
      min-height: 100rem !important;
      font-size: 100rem;
    }

    .spinner-border {
      width: 5rem;
      height: 5rem;
      border-width: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="d-flex justify-content-center align-items-center" style="height: 500px;">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-element', LoadingElement);
