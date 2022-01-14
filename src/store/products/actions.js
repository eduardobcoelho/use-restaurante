const actions = {
  setProductsByPagination({ commit, state }, data) {
    commit(
      'setProductsPaginated',
      state.products.slice(
        (data - 1) * 5,
        this.state.pagination.perPage * data,
      ),
    );
  },
  saveProduct({ commit, state }, data) {
    commit('addProduct', {
      id: '128909be-bdab-4e06-b6a5-13dc40062bd0',
      ...state.currentProduct,
      ...data,
    });
    commit('filterProducts');
  },
  updateProduct({ commit, state }, productId, imagesData) {
    commit('updateProduct', {
      id: productId,
      ...state.currentProduct,
      ...imagesData,
    });
    commit('filterProducts');
  },
  removeProduct({ commit }, data) {
    commit('removeProduct', data);
  },
};
export default actions;
