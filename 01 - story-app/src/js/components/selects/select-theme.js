import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
const KEY = "theme";
const themes = {
  light: "terang",
  dark: "gelap",
  blue: "biru",
};
const theme = sessionStorage.getItem(KEY);

class SelectTheme extends LitWithoutShadowDom {
  firstUpdated() {
    const selectElement = this.renderRoot.querySelector("#floatingSelectGrid");
    selectElement.addEventListener("change", this._handleSelectChange.bind(this));
  }

  _handleSelectChange(event) {
    const selectedValue = event.target.value;

    if (selectedValue == "light") {
      this._changeTheme("light");
    } else if (selectedValue == "dark") {
      this._changeTheme("dark");
    } else if (selectedValue == "blue") {
      this._changeTheme("blue");
    } else {
      this._light();
    }
  }

  _changeTheme(value) {
    sessionStorage.setItem(KEY, value);
    window.location.reload();
  }

  render() {
    return html`
      <div class="form-floating">
        <select class="form-select" id="floatingSelectGrid">
          ${Object.keys(themes).map(
            (item) =>
              html`
                ${item == theme
                  ? html` <option value="${item}" selected>${themes[item]}</option> `
                  : html` <option value="${item}">${themes[item]}</option> `}
              `
          )}
        </select>
        <label for="floatingSelectGrid">Ganti Thema</label>
      </div>
    `;
  }
}

customElements.define("select-theme", SelectTheme);
