import { createLocalVue, shallowMount } from '@vue/test-utils';
import AppProductsSearch from '@/views/products/AppProductsSearch';
import Vuex from 'vuex';
import { mapGetters } from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe('AppProductsSearch.vue', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        freeSearch: null,
        orderBy: false,
        ordersBy: [
          { value: 1, name: 'Maior preço' },
          { value: 2, name: 'Menor preço' },
        ],
      },
      mutations: {
        setFreeSearch(state, payload) {
          state.freeSearch = payload;
        },
        setOrderBy(state, payload) {
          state.orderBy = payload;
        },
        filterProducts: jest.fn(),
      },
      getters: {
        freeSearch: (state) => state.freeSearch,
        orderBy: (state) => state.orderBy,
        ordersBy: (state) => state.ordersBy,
      },
    });

    wrapper = shallowMount(AppProductsSearch, {
      store,
      data: () => ({
        debounce: null,
        ordersByMap: {
          1: 'Maior preço',
          2: 'Menor preço',
        },
      }),
      computed: {
        ...mapGetters(['freeSearch', 'orderBy', 'ordersBy']),
      },
      localVue,
    });
  });

  it('Deve conter o componente "VTextField" para submeter o filtro "freeSearch"', () => {
    expect(wrapper.findComponent({ name: 'VTextField' }).exists()).toBe(true);
  });

  it('O objeto mapeador de "ordersByMap" deve retornar "Maior preço" caso "orderBy" seja "1"', () => {
    wrapper.vm.$store.commit('setOrderBy', 1);
    expect(wrapper.vm.$data.ordersByMap[wrapper.vm.orderBy]).toEqual(
      'Maior preço',
    );
  });

  it('O objeto mapeador de "ordersByMap" deve retornar "Menor preço" caso "orderBy" seja "2"', () => {
    wrapper.vm.$store.commit('setOrderBy', 2);
    expect(wrapper.vm.$data.ordersByMap[wrapper.vm.orderBy]).toEqual(
      'Menor preço',
    );
  });

  it('O valor de "freeSearch" deve ser definido através valor passado pela função "setFreeSearch"', async () => {
    const spy = jest.spyOn(wrapper.vm, 'setFreeSearch');
    const freeSearchNewValue = 'teste';
    wrapper.vm.setFreeSearch(freeSearchNewValue);
    wrapper.vm.$store.commit('setFreeSearch', freeSearchNewValue);
    expect(wrapper.vm.freeSearch).toEqual(freeSearchNewValue);
    expect(spy).toHaveBeenCalled();
  });

  it('O valor de "orderBy" deve ser definido através valor passado pela função "setOrderBy"', async () => {
    const spy = jest.spyOn(wrapper.vm, 'setOrderBy');
    const orderByNewValue = 1;
    wrapper.vm.setOrderBy(orderByNewValue);
    wrapper.vm.$store.commit('setOrderBy', orderByNewValue);
    expect(wrapper.vm.orderBy).toEqual(orderByNewValue);
    expect(spy).toHaveBeenCalled();
  });
});
