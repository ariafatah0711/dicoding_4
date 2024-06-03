import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class DashboardApp extends LitWithoutShadowDom {
  static properties = {
    tab: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  _changeTab(tab) {
    sessionStorage.setItem('tab', tab);
  }

  render() {
    const tabUser = sessionStorage.getItem('tab') === 'user' ? true : false;

    return html`
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link ${tabUser ? 'active' : ''}"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="${tabUser}"
            @click=${() => this._changeTab('user')}
          >
            user
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link ${tabUser ? '' : 'active'}"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="${!tabUser}"
            @click=${() => this._changeTab('anonim')}
          >
            tamu
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade ${tabUser ? 'show active' : ''}"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <table-user-app anonim="false"></table-user-app>
        </div>
        <div
          class="tab-pane fade ${tabUser ? '' : 'show active'}"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <table-anonim-app anonim="true"></table-anonim-app>
        </div>
      </div>
    `;
  }
}

customElements.define('dashboard-app', DashboardApp);
