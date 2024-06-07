import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Crud from '../../network/crud';
import Utils from '../../utils/utils';

class AddStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    guest: { type: Boolean },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);

    this.name = Utils.getUserName();
    this.guest = false;
  }

  render() {
    return html`
      <form class="was-validated padded-20">
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="${msg(`masukan deskripsi disini`)}"
            id="descriptionInput"
            style="height: 100px"
            minlength="10"
            maxlength="125"
            required
          ></textarea>
          <label for="floatingTextarea2">${msg(`deskripsi`)}</label>
          <div class="invalid-feedback">${msg(`masukan text minimal 10-125 huruf`)}</div>
        </div>
        <div class="input-group">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            class="form-control"
            id="imageInput"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            required
          />
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            @change=${this._toggleGuestMode}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >${msg(`kirim sebagai`)} ${this.name}/${msg(`tamu`)}?</label
          >
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-outline-primary" @click=${this._sendPost}>
            ${msg(`kirim`)}
          </button>
        </div>
      </form>
    `;
  }

  _toggleGuestMode(event) {
    this.guest = event.target.checked;
  }

  async _sendPost() {
    const formData = this._getFormData();
    let lat, lon;

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
      try {
        if (!this.guest) {
          const response = await Crud.createStory({
            description: formData.description,
            photo: formData.image,
            lat,
            lon,
          });
          console.log(response);
        } else {
          const response = await Crud.createGuestStory({
            description: formData.description,
            photo: formData.image,
            lat,
            lon,
          });
          console.log(response);
        }
        window.alert('New transaction added successfully');
      } catch (error) {
        console.error(error);
      }
    }
  }

  _getFormData() {
    const descriptionInput = document.querySelector('#descriptionInput');
    const imageInput = document.querySelector('#imageInput');

    return {
      name: this.name,
      date: new Date().toISOString(),
      image: imageInput.files[0],
      description: descriptionInput.value,
    };
  }

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  }
}

customElements.define('add-story', AddStory);
