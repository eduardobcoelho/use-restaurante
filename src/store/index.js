import Vue from 'vue';
import Vuex from 'vuex';
import moduleAuth from './auth';
import moduleNotification from './notification';
import modulePagination from './pagination';
import moduleProducts from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: moduleAuth,
    notification: moduleNotification,
    pagination: modulePagination,
    products: moduleProducts,
  },
});
