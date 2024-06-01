const Account = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    // console.log("init data Account");
  },

  _initialListener() {
    // console.log("init listener Account");
  },
};

export default Account;
