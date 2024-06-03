import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays } from "date-fns";

class PostList extends LitWithoutShadowDom {
  static properties = {
    data: { type: Array, reflect: true },
    currentTime: { type: Number },
    chunk: { type: Number, reflect: true },
    totalChunk: { type: Number, reflect: true },
    status: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.currentTime = Date.now();
    this.data = [];
    this.chunk = 3;
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await fetch("DATA.json");
      const responseJson = await response.json();
      const data = responseJson.listStory;
      const chunkData = this._chunkArrayUser(data, 9);
      this.chunk = sessionStorage.getItem("home") ? sessionStorage.getItem("home") : 0;
      this.totalChunk = chunkData.length;
      this.data = chunkData[this.chunk];
      this._checkStatus();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  _checkStatus() {
    if (!this.data) {
      sessionStorage.setItem("home", 0);
      window.location.reload();
    }

    if (parseInt(this.chunk) + 1 == this.totalChunk) {
      this.status = "next";
    } else if (this.chunk == 0) {
      this.status = "prev";
    } else {
      this.status = "normal";
    }
  }

  _chunkArrayUser(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }

    this.data = result[this.chunk];
    return result;
  }

  render() {
    const withValid = html`
      <div class="row row-cols-1 row-cols-md-3 g-4 pb-4">
        ${this.data
          ? html`
              ${this.data.map(
                (item) =>
                  html`<post-item
                    name="${item.name}"
                    img="${item.photoUrl}"
                    ,
                    description="${item.description}"
                    ,
                    datePostAgo="${msg(`last updated`)} ${this._timePostAgo(new Date(item.createdAt).getTime())}"
                    date="${this._time(item.createdAt)}"
                  ></post-item>`
              )}
            `
          : html` <data-not-found>${msg(`data tidak ditemukan`)}</data-not-found> `}
      </div>
      ${this.status != "abonormal"
        ? html`
          <post-pagination
          chunk=${this.chunk}
          totalChunk=${this.totalChunk}
          status=${this.status}
          tab="home"
          ></-pagination>
          `
        : html` <pagination-reset type="home"></pagination-reset> `}
    `;

    const withoutValid = html`
      <div class="row row-cols-1 row-cols-md-3 g-4 pb-4">
      ${this.data.map(
        (item) =>
          html`<post-item
            name="${item.name}"
            img="${item.photoUrl}"
            ,
            description="${item.description}"
            ,
            datePostAgo="${msg(`last updated`)} ${this._timePostAgo(new Date(item.createdAt).getTime())}"
            date="${this._time(item.createdAt)}"
            id="${item.id}"
          ></post-item> `
      )}
      </div>
      <post-pagination
      chunk=${this.chunk}
      totalChunk=${this.totalChunk}
      status=${this.status}
      tab="home"
      ></-pagination>
    `;

    return withoutValid;
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

  _timePostAgo(time) {
    // this.currentTime - new Date(item.createdAt).getTime()

    const now = this.currentTime;
    const past = new Date(time).getTime();
    const yearsDifference = differenceInYears(now, past);
    const monthsDifference = differenceInMonths(now, past);
    const weeksDifference = differenceInWeeks(now, past);
    const daysDifference = differenceInDays(now, past);

    let result;

    if (yearsDifference >= 1) {
      result = `${yearsDifference} year${yearsDifference > 1 ? "s" : ""}`;
    } else if (monthsDifference >= 1) {
      result = `${monthsDifference} month${monthsDifference > 1 ? "s" : ""}`;
    } else if (weeksDifference >= 1) {
      result = `${weeksDifference} week${weeksDifference > 1 ? "s" : ""}`;
    } else {
      result = `${daysDifference} day${daysDifference > 1 ? "s" : ""}`;
    }

    return result;
  }
}

customElements.define("post-list", PostList);
