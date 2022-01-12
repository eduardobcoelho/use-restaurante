import Vue from 'vue';
import Vuex from 'vuex';
import moduleProducts from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: moduleProducts,
  },
});
