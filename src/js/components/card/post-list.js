import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

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
    this.data = [];
    this.currentTime = Date.now();
  }

  render() {
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
            datePostAgo="${msg(`last updated`)} ${this._timePostAgo(
              new Date(item.createdAt).getTime(),
            )}"
            date="${this._time(item.createdAt)}"
            id="${item.id}"
          ></post-item> `,
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

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDay = day < 10 ? '0' + day : day;

    const withSlashes = [formattedDay, formattedMonth, year].join('/');
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
    const hoursDifference = differenceInHours(now, past);
    const minutesDifference = differenceInMinutes(now, past);

    let result;

    if (yearsDifference >= 1) {
      result = `${yearsDifference} year${yearsDifference > 1 ? 's' : ''}`;
    } else if (monthsDifference >= 1) {
      result = `${monthsDifference} month${monthsDifference > 1 ? 's' : ''}`;
    } else if (weeksDifference >= 1) {
      result = `${weeksDifference} week${weeksDifference > 1 ? 's' : ''}`;
    } else if (daysDifference >= 1) {
      result = `${daysDifference} day${daysDifference > 1 ? 's' : ''}`;
    } else if (hoursDifference >= 1) {
      result = `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`;
    } else {
      result = `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''}`;
    }

    return result;
  }
}

customElements.define('post-list', PostList);
