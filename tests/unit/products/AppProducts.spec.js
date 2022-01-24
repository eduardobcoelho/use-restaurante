import { shallowMount } from '@vue/test-utils';
import AppProducts from '@/views/products/AppProducts';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('AppProducts.vue', () => {
  const wrapper = shallowMount(AppProducts, {
    data: () => ({
      products: [],
    }),
  });

  it('Deve renderizar todos os components de filtro', () => {
    expect(
      wrapper.findComponent({ name: 'AppProductsCategories' }).exists(),
    ).toBe(true);
    expect(wrapper.findComponent({ name: 'AppProductsSearch' }).exists()).toBe(
      true,
    );
  });

  it('Deve renderizar os componentes AppProductsList e VPagination apenas quando o array "Products" tiver pelo menos 1 elemento', () => {
    expect(wrapper.findComponent({ name: 'AppProductsList' }).exists()).toBe(
      false,
    );
    expect(wrapper.findComponent({ name: 'VPagination' }).exists()).toBe(false);
  });
});
