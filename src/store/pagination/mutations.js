const mutations = {
  setPaginationLength(state) {
    let paginationLength =
      this.state.products.allProducts.length / state.perPage;
    paginationLength +=
      this.state.products.allProducts.length % state.perPage > 0 ? 1 : 0;
    state.paginationLength = Number(String(paginationLength)[0]);
  },
};

export default mutations;
