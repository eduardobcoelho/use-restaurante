import { createLocalVue, shallowMount } from '@vue/test-utils';
import AppProductsCategories from '@/views/products/AppProductsCategories';
import Vuex from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe('AppProductsCategories.vue', () => {
  let $store;
  let wrapper;
  beforeEach(() => {
    $store = new Vuex.Store({
      state: {
        category: null,
        categories: [
          {
            id: 'f89d781f-7331-4858-87b3-d056cb9f7202',
            name: 'Bebidas',
            slug: 'drink',
          },
        ],
      },
      mutations: {
        setCategory(state, payload) {
          state.category = payload;
        },
      },
      getters: {
        categories: (state) => state.categories,
        category: (state) => state.category,
      },
    });

    wrapper = shallowMount(AppProductsCategories, {
      computed: {
        categorySelected() {
          return $store.getters.category;
        },
        categories() {
          return $store.getters.categories;
        },
      },
      localVue,
    });
  });

  it('Deve chamar filterProducts ao clicar em alguma das categorias', async () => {
    const spy = jest.spyOn(wrapper.vm, 'filterProducts');
    await wrapper.find('.app-categories__category').trigger('click');
    expect(spy).toHaveBeenCalled();
  });

  it('O componente deve ter o nome de todas as categorias cadastradas', () => {
    $store.getters.categories.map((category) => {
      expect(wrapper.text()).toContain(category.name);
    });
  });
});
