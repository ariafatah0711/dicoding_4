const dashboardApp = document.querySelector('dashboard-app');

const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {},

  _initialListener() {
    this._checkTab();
  },

  _checkTab() {
    if (!sessionStorage.getItem('tab')) {
      const tab = sessionStorage.getItem('tab') ? sessionStorage.getItem('tab') : 'user';
      sessionStorage.setItem('tab', 'user');
    }
    const tab = sessionStorage.getItem('tab') ? sessionStorage.getItem('tab') : 'user';
    dashboardApp.setAttribute('tab', tab);
  },

  _changeTab(tab) {
    sessionStorage.setItem('tab', tab);
    console.log(tab);
  },
};

export default Dashboard;
