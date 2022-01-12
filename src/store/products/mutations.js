const mutations = {
  setCategory(state, payload) {
    state.category = payload;
  },
  filterProducts(state, slug) {
    state.products = !slug
      ? state.allProducts
      : state.allProducts.filter((product) => product.category === slug);
  },
};

export default mutations;
