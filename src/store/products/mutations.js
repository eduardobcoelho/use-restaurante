const mutations = {
  setCategory(state, payload) {
    state.category = payload;
  },
  filterProductsByCategory(state) {
    state.products = !state.category
      ? state.allProducts
      : state.allProducts.filter(
          (product) => product.category === state.category
        );
  },
  setOrderBy(state, payload) {
    state.orderBy = payload;
  },
  filterProductsOrderBy(state) {
    if (!state.orderBy) {
      state.products = state.allProducts;
    } else {
      state.products.sort((a, b) =>
        state.orderBy === 1 ? a.value + b.value : a.value - b.value
      );
    }
  },
};

export default mutations;
