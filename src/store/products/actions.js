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
      id: crypto.randomUUID(),
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
