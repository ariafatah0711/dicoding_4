import TableApp from "./table-app";

class TableAnonimApp extends TableApp {
  constructor() {
    super();
    this.tab = "anonim";
  }
}

customElements.define("table-anonim-app", TableAnonimApp);
