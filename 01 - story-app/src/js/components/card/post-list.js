import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays } from "date-fns";

class PostList extends LitWithoutShadowDom {
  static properties = {
    data: { type: String, reflect: true },
    currentTime: { type: Number },
  };

  constructor() {
    super();
    this.currentTime = Date.now();
    this.data = [];
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await fetch("DATA.json");
      const responseJson = await response.json();
      const data = responseJson.listStory;
      this.data = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return html`
      <div class="row row-cols-1 row-cols-md-3 g-4">
        ${this.data.map(
          (item) =>
            html`<post-item
              name="${item.name}"
              img="${item.photoUrl}"
              ,
              description="${item.description}"
              ,
              datePostAgo="Last updated ${this._timePostAgo(new Date(item.createdAt).getTime())}"
              date="${this._time(item.createdAt)}"
            ></post-item>`
        )}
      </div>
    `;
  }

  _time(time) {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const withSlashes = [day, month, year].join("/");
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
      result = `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} ago`;
    } else if (monthsDifference >= 1) {
      result = `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
    } else if (weeksDifference >= 1) {
      result = `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
    } else {
      result = `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    }

    return result;
  }
}

customElements.define("post-list", PostList);
