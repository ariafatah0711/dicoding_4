import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class HeaderApp extends LitWithoutShadowDom {
  static properties = {
    brandName: "",
  };

  render() {
    return html`
      <nav class="navbar bg-body-tertiary px-lg-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./favicon.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
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
                  <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tambah Cerita</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    profile
                  </a>
                  <ul class="dropdown-menu w-100 ms-auto">
                    <li><a class="dropdown-item" href="#">Dasbord</a></li>
                    <li><a class="dropdown-item" href="#">Setting</a></li>
                    <li><a class="dropdown-item" href="#">Account</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Keluar</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- Nav items for larger screens -->
          <div class="collapse d-none d-md-flex flex-row ms-auto ">
            <ul class="navbar-nav container-fluid flex-row gap-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Beranda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tambah Cerita</a>
              </li>
              <li class="nav-item dropdown pe-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul class="dropdown-menu position-absolute">
                  <li><a class="dropdown-item" href="#">Dashboard</a></li>
                  <li><a class="dropdown-item" href="#">Setting</a></li>
                  <li><a class="dropdown-item" href="#">Account</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Keluar</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-app", HeaderApp);
