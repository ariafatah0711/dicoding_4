const Add = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    console.log("init listener Add");
  },

  _initialListener() {
    console.log("init listener Add");
  },
};

export default Add;
