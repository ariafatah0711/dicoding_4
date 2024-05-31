import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class PostItem extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    img: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.classList.add("col");
  }

  render() {
    return html`
      <div class="card h-100">
        <img src="${this.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">${this.date}</small>
        </div>
      </div>
    `;
  }
}

customElements.define("post-item", PostItem);

/*
<div class="col">
<div class="card h-100">
  <img src="./image/example.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a short card.</p>
  </div>
  <div class="card-footer">
    <small class="text-body-secondary">Last updated 3 mins ago</small>
  </div>
</div>
</div>
*/
