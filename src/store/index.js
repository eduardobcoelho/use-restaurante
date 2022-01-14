import Vue from 'vue';
import Vuex from 'vuex';
import moduleAuth from './auth';
import modulePagination from './pagination';
import moduleProducts from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: moduleAuth,
    pagination: modulePagination,
    products: moduleProducts,
  },
});
