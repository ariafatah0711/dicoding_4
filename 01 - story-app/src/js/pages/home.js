const postList = document.querySelector("main-app post-list");
console.log(postList);

const Home = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {},

  _initialListener() {},
};

export default Home;
