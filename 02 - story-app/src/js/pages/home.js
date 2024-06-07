import Crud from '../network/crud';

const Home = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  _chunkArrayUser(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  },

  async _initialData() {
    try {
      const postListElement = document.querySelector('post-list');

      const storyList = (await Crud.getAllStory()).data.listStory;
      const chunkedData = this._chunkArrayUser(storyList, 6);

      this.chunk = sessionStorage.getItem('home') ? sessionStorage.getItem('home') : 0;
      this.totalChunk = chunkedData.length;
      this.data = chunkedData[this.chunk];

      postListElement.setAttribute('chunk', this.chunk);
      postListElement.setAttribute('totalChunk', this.totalChunk);
      postListElement.setAttribute('data', JSON.stringify(this.data));

      this._checkStatus();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  _checkStatus() {
    const postListElement = document.querySelector('post-list');

    if (!this.data) {
      sessionStorage.setItem('home', 0);
      window.location.reload();
    }

    if (this.totalChunk == 1) {
      this.status = 'both';
    } else if (parseInt(this.chunk) + 1 == this.totalChunk) {
      this.status = 'next';
    } else if (this.chunk == 0) {
      this.status = 'prev';
    } else {
      this.status = 'normal';
    }

    postListElement.setAttribute('status', this.status);
  },

  _initialListener() {},
};

export default Home;
