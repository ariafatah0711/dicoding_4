import { html, css, LitElement } from 'lit';

const text = `class Data:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def Data(self):
        print('nama saya : ', self.name)
        print('email saya : ', self.email)


data = Data('Aria Fatah', 'ariafatah999@gmail.com')

data.Data()`;

class CardProfile extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
    };
  }

  constructor() {
    super();
    this.theme = this._checkTheme();
  }

  _checkTheme() {
    const KEY = 'theme';
    const theme = localStorage.getItem(KEY) ? localStorage.getItem(KEY) : 'light';
    return theme;
  }

  _applyTheme() {
    const root = this.shadowRoot.host;
    if (this.theme === 'dark') {
      root.style.setProperty('--card-bg-color', '#212529');
      root.style.setProperty('--card-border-color', 'rgba(255, 255, 255, 0.25)');
      root.style.setProperty('--card-shadow-color', 'rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--card-footer-color', '#ccc');
      root.style.setProperty('--card-text-color', 'white');
    } else if (this.theme === 'blue') {
      root.style.setProperty('--card-bg-color', '#0dcaf0');
      root.style.setProperty('--card-border-color', 'rgba(255, 255, 255, 0.25)');
      root.style.setProperty('--card-shadow-color', 'rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--card-footer-color', '#ccc');
      root.style.setProperty('--card-text-color', 'white');
    } else {
      root.style.setProperty('--card-bg-color', 'rgba(255, 255, 255, 0.45)');
      root.style.setProperty('--card-border-color', 'rgba(255, 255, 255, 0.25)');
      root.style.setProperty('--card-shadow-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--card-footer-color', '#446');
      root.style.setProperty('--card-text-color', '#224');
    }
  }

  firstUpdated() {
    this._applyTheme();
  }

  static styles = css`
    :host {
      font-size: 20px;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    p {
      margin: 0;
      cursor: pointer;
    }

    p:not(:last-child) {
      margin-bottom: 1.5em;
    }

    .card {
      width: 100%;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 35px;
      border: 0.1rem solid var(--card-border-color);
      background-color: var(--card-bg-color);
      box-shadow: 0 3px 6px 0 var(--card-shadow-color);
      border-radius: 5px;
      backdrop-filter: blur(15px);
      color: var(--card-text-color);
    }

    .card-footer {
      font-size: 0.65em;
      color: var(--card-footer-color);
    }

    /* Media Queries for Mobile */
    @media (max-width: 768px) {
      :host {
        font-size: 17px;
      }
    }

    /* Media Queries for Mobile */
    @media (max-width: 600px) {
      :host {
        font-size: 14px;
      }

      .card {
        padding: 20px;
      }

      .card-footer {
        font-size: 0.5em;
      }
    }
  `;

  render() {
    return html`
      <div class="card">
        <p @click=${() => this._goToLink('https://github.com/ariafatah0711')}>
          <strong>ariafatah0711</strong>/README.md
        </p>
        <pre class="card-footer">${text}</pre>
      </div>
    `;
  }

  _goToLink(url) {
    window.location.href = url;
  }

  // <button @click="${this._toggleTheme}">Toggle Theme</button>
  _toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this._applyTheme();
  }
}

customElements.define('card-profile', CardProfile);
