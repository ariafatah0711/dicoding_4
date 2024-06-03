import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class TableApp extends LitWithoutShadowDom {
  static properties = {
    data: { type: Array, reflect: true },
    chunk: { type: Number, reflect: true },
    totalChunk: { type: Number, reflect: true },
    status: { type: String, reflect: true },
    anonim: { type: String, reflect: true },
    tab: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.data = [];
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await fetch('/DATA.json');
      const responseJson = await response.json();
      const data = responseJson.listStory;
      const chunkedData =
        this.anonim == 'true' ? this._chunkArrayAnonym(data, 9) : this._chunkArrayUser(data, 9);
      if (!chunkedData.length == 0) {
        this.chunk = sessionStorage.getItem(this.tab) ? sessionStorage.getItem(this.tab) : 0;
        this.totalChunk = chunkedData.length;
        this.data = chunkedData[this.chunk];
        console.log(this.data);
        this._checkStatus();
      } else {
        this.data = chunkedData;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  _checkStatus() {
    if (!this.data) {
      sessionStorage.setItem(this.tab, 0);
      window.location.reload();
    }

    if (parseInt(this.chunk) + 1 == this.totalChunk) {
      this.status = 'next';
    } else if (this.chunk == 0) {
      this.status = 'prev';
    } else {
      this.status = 'normal';
    }
  }

  _chunkArrayUser(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }

    return result;
  }

  _chunkArrayAnonym(arrays, chunkSize) {
    const result = [];
    const filteredArrays = arrays.filter((array) => array.name == 'anonim');

    for (let i = 0; i < filteredArrays.length; i += chunkSize) {
      result.push(filteredArrays.slice(i, i + chunkSize));
    }

    this.chunk = 0;
    console.log(result);

    return result;
  }

  render() {
    return html`
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">${msg(`deskripsi`)}</th>
            <th scope="col">${msg(`tanggal`)}</th>
          </tr>
        </thead>
        <tbody>
          ${!this.data.length == 0
            ? html`
                ${this.data.map(
                  (item, index) => html`
                    <tr id="${item.description}]">
                      <th scope="row">${index + 1}</th>
                      <td class="w-75 w-md-25">
                        <p class="p-md-wrap">${item.description}</p>
                      </td>
                      <td class="d-flex justify-content-between gap-4 flex-column flex-lg-row">
                        <div class="d-flex gap-2 ">
                          <i class="bi bi-calendar-check"></i>
                          <small class="text-body-secondary"> ${this._time(item.createdAt)}</small>
                        </div>
                        <div class="d-flex justify-content-center gap-2">
                          <a
                            href="#"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modal_${index}"
                            ><i class="bi bi-eye"></i
                          ></a>
                          <a href="#" class="btn btn-primary"><i class="bi bi-pencil"></i></a>
                          <a href="#" class="btn btn-primary"><i class="bi bi-trash"></i></a>
                          <modal-item
                            target="modal_${index}"
                            name="${item.name}"
                            date="${this._time(item.createdAt)}"
                            img="${item.photoUrl}"
                            description="${item.description}"
                          ></modal-item>
                        </div>
                      </td>
                    </tr>
                  `,
                )}
              `
            : html` tidak ada data `}
        </tbody>
      </table>
      <table-pagination
        chunk=${this.chunk}
        totalChunk=${this.totalChunk}
        status="${this.status}"
        tab="${this.tab}"
      ></table-pagination>
    `;
  }

  _time(time) {
    const date = new Date(time);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let formattedMonth = month < 10 ? '0' + month : month;
    let formattedDay = day < 10 ? '0' + day : day;

    const withSlashes = [formattedDay, formattedMonth, year].join('/');
    return withSlashes;
  }
}

// customElements.define("table-app", TableApp);
export default TableApp;
