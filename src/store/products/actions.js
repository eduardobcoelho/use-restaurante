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
    this.commit('setNotification', {
      type: 'success',
      message: 'Produto cadastrado',
    });
  },
  updateProduct({ commit, state }, data) {
    const newProduct = new Object(state.currentProduct);
    delete newProduct.path;
    delete newProduct.images;
    commit('updateProduct', {
      ...newProduct,
      ...data,
    });
    commit('filterProducts');
    this.commit('setNotification', {
      type: 'success',
      message: 'Dado(s) do produto atualizado(s)',
    });
  },
  removeProduct({ commit }, data) {
    commit('removeProduct', data);
    this.commit('setNotification', {
      type: 'success',
      message: 'Produto removido',
    });
  },
};
export default actions;
