import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <!-- Instagram -->
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1 rounded-circle"
            style="background-color: #ac2bac;"
            href="https://www.instagram.com/ariafatahanom"
            role="button"
            ><i class="bi bi-instagram"></i
          ></a>
          <!-- Linkedin -->
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1 rounded-circle"
            style="background-color: #0082ca;"
            href="https://www.linkedin.com/in/ariafatah"
            role="button"
            ><i class="bi bi-linkedin"></i
          ></a>
          <!-- Github -->
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1 rounded-circle"
            style="background-color: #333333;"
            href="https://github.com/ariafatah0711"
            role="button"
            ><i class="bi bi-github"></i
          ></a>
          <!-- Whatsapp -->
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1 rounded-circle"
            style="background-color: #3b5998;"
            href="https://wa.me/+6289509221496"
            role="button"
            ><i class="bi bi-whatsapp"></i
          ></a>
        </section>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2024 Copyright:
        <a class="text-body" href="https://s.id/arialink">s.id/arialink</a>
      </div>
    `;
  }
}

customElements.define("footer-app", FooterApp);
