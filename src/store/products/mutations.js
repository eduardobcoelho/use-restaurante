const mutations = {
  setCategory(state, payload) {
    state.category = payload;
  },
  setFreeSearch(state, payload) {
    state.freeSearch = payload;
  },
  setOrderBy(state, payload) {
    state.orderBy = payload;
  },
  filterProducts(state) {
    state.products = state.allProducts;
    let products = state.allProducts;
    if (state.category)
      products = products.filter(
        (product) => product.category === state.category
      );
    if (state.freeSearch)
      products = products.filter((product) =>
        product.name.toLowerCase().includes(state.freeSearch.toLowerCase())
      );
    if (state.orderBy) {
      products.sort((a, b) =>
        state.orderBy === 1 ? a.value + b.value : a.value - b.value
      );
    }
    state.products = products;
  },
};

export default mutations;
