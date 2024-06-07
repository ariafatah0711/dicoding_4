import TableApp from './table-app';

class TableUserApp extends TableApp {
  constructor() {
    super();
    this.tab = 'user';
  }
}

customElements.define('table-user-app', TableUserApp);
