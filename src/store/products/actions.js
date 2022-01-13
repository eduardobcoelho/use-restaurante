const actions = {
  saveProduct({ commit, state }) {
    commit('addProduct', {
      id: 'ba74b331-d412-40e2-8830-6b1ff484021b',
      path: '@/assets/images/products/salada_de_polvo.svg',
      ...state.currentProduct,
    });
    commit('filterProducts');
  },
  updateProduct({ commit, state }, data) {
    commit('updateProduct', { id: data, ...state.currentProduct });
    commit('filterProducts');
  },
};
export default actions;
