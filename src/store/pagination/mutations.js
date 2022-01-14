const mutations = {
  setPaginationLength(state) {
    let paginationLength = this.state.products.products.length / state.perPage;
    paginationLength +=
      this.state.products.products.length % state.perPage > 0 ? 1 : 0;
    state.paginationLength = Number(String(paginationLength)[0]);
  },
};

export default mutations;
