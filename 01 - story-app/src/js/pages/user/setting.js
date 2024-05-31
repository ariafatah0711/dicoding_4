const Setting = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    console.log("init listener Setting");
  },

  _initialListener() {
    console.log("init listener Setting");
  },
};

export default Setting;
