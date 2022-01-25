import { createLocalVue, shallowMount } from '@vue/test-utils';
import AppProductsList from '@/views/products/AppProductsList';
import Mixin from '@/mixin';
import Vuex from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.mixin(Mixin);
localVue.use(Vuex);
Vue.use(Vuetify);

describe('AppProductsList.vue', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        productsPaginated: [
          {
            id: '1fe432a9-7c15-47cf-a2dd-4ca532db9e80',
            name: 'Salada de polvo',
            capacity: '2119a4bc-5a6b-4e15-b313-cbbdcbc8cb0b',
            details:
              'Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...',
            category: 'fullDish',
            value: 149,
            path: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/salada-de-polvo-scaled.jpg',
            images: [null, null],
          },
          {
            id: '0393f3f2-1f1d-4c51-9ba4-14c57902d568',
            name: 'Carne de Sol com Fritas',
            capacity: '2119a4bc-5a6b-4e15-b313-cbbdcbc8cb0b',
            details: 'Acompanha arroz, feijão trupeiro e vinagrete.',
            category: 'fullDish',
            value: 120,
            path: 'https://big10.com.br/wp-content/uploads/2021/02/oie_20164750cCuDHCFx.jpg',
            images: [null, null],
          },
          {
            id: '103675dd-8a8c-46da-b82f-23903f5763b7',
            name: 'Filé de Salmão ao molho pesto',
            capacity: '2119a4bc-5a6b-4e15-b313-cbbdcbc8cb0b',
            details: 'Acompanha arroz e salada de espinafre.',
            category: 'fullDish',
            value: 110,
            path: 'https://img.itdg.com.br/images/recipes/000/164/816/130674/130674_original.jpg',
            images: [null, null],
          },
        ],
      },
      getters: {
        productsPaginated: (state) => state.productsPaginated,
      },
    });
    wrapper = shallowMount(AppProductsList, {
      store,
      computed: {
        products() {
          return store.getters.productsPaginated;
        },
      },
      localVue,
    });
  });

  it('A quantidade de "AppProductsCard" deve ser a mesma de "products"', () => {
    expect(wrapper.findAllComponents({ name: 'AppProductsCard' }).length).toBe(
      3,
    );
  });

  it('Deve conter um "VBtn" para cadastrar novos produtos', () => {
    expect(wrapper.findComponent({ name: 'VBtn' }).exists()).toBe(true);
    expect(wrapper.text()).toContain('Cadastrar produto');
  });
});
