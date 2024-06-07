const Setting = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    // console.log("init Data Setting");
  },

  _initialListener() {
    // console.log("init listener Setting");
  },
};

export default Setting;
