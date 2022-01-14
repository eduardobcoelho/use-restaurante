const mutations = {
  setProductsPaginated(state, payload) {
    state.productsPaginated = payload;
  },
  setCurrentProduct(state, payload) {
    state.currentProduct = payload;
  },
  setCategory(state, payload) {
    state.category = payload;
  },
  setFreeSearch(state, payload) {
    state.freeSearch = payload;
  },
  setOrderBy(state, payload) {
    state.orderBy = payload;
  },
  resetFilters(state) {
    state.category = null;
    state.freeSearch = null;
    state.orderBy = null;
  },
  filterProducts(state) {
    state.products = new Array(...state.allProducts);
    if (state.category)
      state.products = state.products.filter(
        (product) => product.category === state.category,
      );
    if (state.freeSearch)
      state.products = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.freeSearch.toLowerCase()),
      );
    if (state.orderBy) {
      state.products.sort((a, b) => a.value - b.value);
      if (state.orderBy === 1) state.products.sort().reverse();
    }
  },
  addProduct(state, payload) {
    state.allProducts.push(payload);
  },
  updateProduct(state, payload) {
    state.allProducts.map((product) => {
      if (product.id === payload.id) Object.assign(product, payload);
    });
  },
  removeProduct(state, payload) {
    state.allProducts = state.allProducts.filter(
      (product) => product.id != payload,
    );
    state.products = state.products.filter((product) => product.id != payload);
  },
};

export default mutations;
