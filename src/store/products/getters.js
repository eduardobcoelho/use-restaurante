const getters = {
  currentProduct: (state) => state.currentProduct,
  capacities: (state) => state.capacities,
  category: (state) => state.category,
  categories: (state) => state.categories,
  products: (state) => state.products,
  productsPaginated: (state) => state.productsPaginated,
  freeSearch: (state) => state.freeSearch,
  orderBy: (state) => state.orderBy,
  ordersBy: (state) => state.ordersBy,
};

export default getters;
