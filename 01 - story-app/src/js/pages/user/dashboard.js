const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    console.log("init listener Dashboard");
  },

  _initialListener() {
    console.log("init listener Dashboard");
  },
};

export default Dashboard;
