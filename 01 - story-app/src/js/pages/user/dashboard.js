const dashboardApp = document.querySelector("dashboard-app");

const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    // this._fetchData("user");
    // this._fetchData("anonim");
  },

  _initialListener() {
    this._checkTab();
  },

  _checkTab() {
    if (!sessionStorage.getItem("tab")) {
      const tab = sessionStorage.getItem("tab") ? sessionStorage.getItem("tab") : "user";
      sessionStorage.setItem("tab", "user");
    }
    const tab = sessionStorage.getItem("tab") ? sessionStorage.getItem("tab") : "user";
    dashboardApp.setAttribute("tab", tab);
  },

  _changeTab(tab) {
    sessionStorage.setItem("tab", tab);
    console.log(tab);
  },

  // async _fetchData(tab) {
  //   const tablePagination = document.querySelector("table-pagination");
  //   dashboardApp.addEventListener("show.bs.modal", (event) => {
  //     const tableUserApp = dashboardApp.querySelector("#myTabContent");
  //     const TableAppAnonim = document.querySelector("table-anonim-app");
  //     console.log(tableUserApp);
  //   });

  //   try {
  //     const response = await fetch("/DATA.json");
  //     const responseJson = await response.json();
  //     const dataJson = responseJson.listStory;
  //     let chunkedData, chunk, totalChunk, data;

  //     if (tab == "user") {
  //       chunkedData = this._chunkArrayUser(dataJson, 9);
  //       chunk = sessionStorage.getItem(this.tab) ? sessionStorage.getItem(this.tab) : 0;
  //       totalChunk = chunkedData.length;
  //       data = chunkedData[chunk];
  //       TableAppUser.setAttribute("chunk", chunk);
  //       TableAppUser.setAttribute("totalChunk", totalChunk);
  //       TableAppUser.setAttribute("data", totalChunk[chunk]);
  //     } else {
  //       chunkedData = this._chunkArrayAnonym(dataJson, 9);
  //       chunk = sessionStorage.getItem(this.tab) ? sessionStorage.getItem(this.tab) : 0;
  //       totalChunk = chunkedData.length;
  //       data = chunkedData[chunk];
  //       TableAppAnonim.setAttribute("chunk", chunk);
  //       TableAppAnonim.setAttribute("totalChunk", totalChunk);
  //       TableAppAnonim.setAttribute("data", totalChunk[chunk]);
  //     }

  //     // this._checkStatus();
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // },

  // _chunkArrayUser(array, chunkSize) {
  //   const result = [];
  //   for (let i = 0; i < array.length; i += chunkSize) {
  //     result.push(array.slice(i, i + chunkSize));
  //   }

  //   this.data = result[this.chunk];
  //   return result;
  // },

  // _chunkArrayAnonym(arrays, chunkSize) {
  //   const result = [];
  //   const filteredArrays = arrays.filter((array) => array.name == "anonim");

  //   for (let i = 0; i < filteredArrays.length; i += chunkSize) {
  //     result.push(filteredArrays.slice(i, i + chunkSize));
  //   }

  //   this.chunk = 0;
  //   return result;
  // },
};

export default Dashboard;
