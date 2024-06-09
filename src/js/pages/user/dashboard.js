const dashboardApp = document.querySelector('dashboard-app');

const Dashboard = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    this._checkTab();
  },

  _checkTab() {
    if (!sessionStorage.getItem('tab')) {
      const tab = sessionStorage.getItem('tab') ? sessionStorage.getItem('tab') : 'user';
      sessionStorage.setItem('tab', tab);
    }
    const tab = sessionStorage.getItem('tab') ? sessionStorage.getItem('tab') : 'user';
    dashboardApp.setAttribute('tab', tab);
  },

  _changeTab(tab) {
    sessionStorage.setItem('tab', tab);
  },
};

export default Dashboard;
