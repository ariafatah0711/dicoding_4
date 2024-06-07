import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../utils/utils';
import CheckUserAuth from '../pages/auth/check-user-auth';

class HeaderApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
    logo: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  _userLogOut() {
    event.preventDefault();

    try {
      Utils.destroyUserName();
      Utils.destroyUserToken();
      CheckUserAuth.checkLoginState();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const createNavItems = html`
      <li><a class="dropdown-item" href="/user/dashboard.html">${msg(`dasbor`)}</a></li>
      <li><a class="dropdown-item" href="/user/setting.html">${msg(`pengaturan`)}</a></li>
      <li><a class="dropdown-item" href="/user/account.html">${msg(`akun`)}</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a class="dropdown-item" href="/auth/login.html" @click=${this._userLogOut}
          >${msg(`keluar`)}</a
        >
      </li>
    `;

    return html`
      <nav class="navbar bg-body-tertiary px-md-5 text-capitalize">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="${this.logo}"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            ${this.brandName}
          </a>
          <button
            class="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end d-md-none p-3 text-center"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${this.brandName}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body d-lg-block">
              <ul class="nav justify-content-end row">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">${msg(`beranda`)}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/user/add-story.html">${msg(`tambah cerita`)}</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/user/profile.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >${msg(`profil`)}</a
                  >
                  <ul class="dropdown-menu w-100 ms-auto">
                    ${createNavItems}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="collapse d-none d-md-flex flex-row ms-auto">
            <ul class="navbar-nav container-fluid flex-row gap-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">${msg(`beranda`)}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/user/add-story.html">${msg(`tambah cerita`)}</a>
              </li>
              <li class="nav-item dropdown pe-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >${msg(`profil`)}</a
                >
                <ul class="dropdown-menu position-absolute">
                  ${createNavItems}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('header-app', HeaderApp);
