const actions = {
  setProductsByPagination({ commit, state }, payload) {
    commit(
      'setProductsPaginated',
      state.products.slice(
        (payload - 1) * 5,
        this.state.pagination.perPage * payload,
      ),
    );
  },
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
  removeProduct({ commit }, data) {
    commit('removeProduct', data);
  },
};
export default actions;
