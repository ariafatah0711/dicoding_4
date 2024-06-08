import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class BtnSetting extends LitWithoutShadowDom {
  render() {
    return html`
      <button
        class="btn btn-primary position-absolute bottom-0 end-0 mb-3 me-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <i class="bi bi-gear"></i>
      </button>

      <div
        class="offcanvas offcanvas-start w-75"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Setting</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <setting-app></setting-app>
        </div>
      </div>
    `;
  }
}

customElements.define('btn-setting', BtnSetting);
