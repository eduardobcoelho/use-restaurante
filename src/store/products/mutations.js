const mutations = {
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
      state.products.sort((a, b) =>
        state.orderBy === 1 ? a.value + b.value : a.value - b.value,
      );
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
};

export default mutations;
