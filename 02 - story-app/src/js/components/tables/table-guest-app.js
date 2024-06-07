import TableApp from './table-app';

class TableGuestApp extends TableApp {
  constructor() {
    super();
    this.tab = 'guest';
  }
}

customElements.define('table-guest-app', TableGuestApp);
