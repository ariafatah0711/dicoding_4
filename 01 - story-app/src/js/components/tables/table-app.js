import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class TableApp extends LitWithoutShadowDom {
  static properties = {
    data: { type: String, reflect: true },
    chunk: { type: SVGAnimatedInteger, reflect: true },
  };

  constructor() {
    super();
    this.data = [];
    this.chunk = 0;
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await fetch("/DATA.json");
      const responseJson = await response.json();
      const data = responseJson.listStory;
      const chunkedData = this._chunkArray(data, 9);
      console.log(chunkedData);

      this.data = chunkedData[this.chunk];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  _chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  render() {
    return html`
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          ${this.data.map(
            (item, index) => html`
              <tr id="${item.description}]">
                <th scope="row">${index + 1}</th>
                <td class="w-75 w-md-25">
                  <p class="flex-text">${item.description}</p>
                </td>
                <td class="d-flex justify-content-between gap-4 flex-column flex-lg-row">
                  <div class="d-flex gap-2 ">
                    <i class="bi bi-calendar-check"></i>
                    <small class="text-body-secondary"> ${this._time(item.createdAt)}</small>
                  </div>
                  <div class="d-flex justify-content-center gap-2">
                    <a href="#" class="btn btn-primary"><i class="bi bi-eye"></i></a>
                    <a href="#" class="btn btn-primary"><i class="bi bi-pencil"></i></a>
                    <a href="#" class="btn btn-primary"><i class="bi bi-trash"></i></a>
                  </div>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  _time(time) {
    const date = new Date(time);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let formattedMonth = month < 10 ? "0" + month : month;
    let formattedDay = day < 10 ? "0" + day : day;

    const withSlashes = [formattedDay, formattedMonth, year].join("/");
    return withSlashes;
  }
}

customElements.define("table-app", TableApp);
