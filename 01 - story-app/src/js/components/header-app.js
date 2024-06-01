import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeaderApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
    logo: { type: String, reflect: true },
    home: { type: String, reflect: true },
    add: { type: String, reflect: true },
    dashboard: { type: String, reflect: true },
    setting: { type: String, reflect: true },
    account: { type: String, reflect: true },
    logout: { type: String, reflect: true },
    login: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.home = "/";
    this.add = "/user/add-story.html";
    this.dashboard = "/user/dashboard.html";
    this.setting = "/user/setting.html";
    this.account = "/user/account.html";

    this._login();
  }

  _login() {
    const key = "login";
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, false);
    }

    const login = JSON.parse(localStorage.getItem(key));
    this.login = login;
  }

  _loginUser() {
    const key = "login";
    localStorage.setItem(key, true);
  }

  _logoutUser() {
    const key = "login";
    localStorage.setItem(key, false);
  }

  render() {
    const loginNav = html`
      <ul class="dropdown-menu position-absolute">
        <li><a class="dropdown-item" href="${this.dashboard}">Dasbor</a></li>
        <li><a class="dropdown-item" href="${this.setting}">Pengaturan</a></li>
        <li><a class="dropdown-item" href="${this.account}">Akun</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="/" @click=${this._logoutUser}>Keluar</a></li>
      </ul>
    `;

    const logoutNav = html`
      <ul class="dropdown-menu position-absolute">
        <li><a class="dropdown-item" href="${this.setting}">Pengaturan</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="/" @click=${this._loginUser}>Masuk</a></li>
      </ul>
    `;

    const loginNavOffCanvas = html`
      <ul class="dropdown-menu w-100 ms-auto">
        <li><a class="dropdown-item" href="${this.dashboard}">Dasbor</a></li>
        <li><a class="dropdown-item" href="${this.setting}">Pengaturan</a></li>
        <li><a class="dropdown-item" href="${this.account}">Akun</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="/" @click=${this._logoutUser}>Keluar</a></li>
      </ul>
    `;

    const logoutNavOffCanvas = html`
      <ul class="dropdown-menu w-100 ms-auto">
        <li><a class="dropdown-item" href="${this.setting}">Pengaturan</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="/" @click=${this._loginUser}>Masuk</a></li>
      </ul>
    `;

    const loginTrueAdd = html`
      <li class="nav-item">
        <a class="nav-link" href="${this.add}">Tambah Cerita</a>
      </li>
    `;

    return html`
      <nav class="navbar bg-body-tertiary px-md-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="${this.logo}" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
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
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-lg-block">
              <ul class="nav justify-content-end row">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="${this.home}">Beranda</a>
                </li>
                ${this.login ? loginTrueAdd : null}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/user/profile.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    profile
                  </a>
                  ${this.login ? loginNavOffCanvas : logoutNavOffCanvas}
                </li>
              </ul>
            </div>
          </div>

          <!-- Nav items for larger screens -->
          <div class="collapse d-none d-md-flex flex-row ms-auto ">
            <ul class="navbar-nav container-fluid flex-row gap-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${this.home}">Beranda</a>
              </li>
              ${this.login ? loginTrueAdd : null}
              <li class="nav-item dropdown pe-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                ${this.login ? loginNav : logoutNav}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-app", HeaderApp);
