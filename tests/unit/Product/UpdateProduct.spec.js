import { shallowMount } from '@vue/test-utils';
import UpdateProduct from '@/views/product/UpdateProduct';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('UpdateProduct.vue', () => {
  const wrapper = shallowMount(UpdateProduct);

  it('Deve renderizar o componente FormProduct', () => {
    expect(wrapper.findComponent({ name: 'FormProduct' }).exists()).toBe(true);
  });

  it('FormProduct deve ter o parâmetro "update" com valor true', () => {
    const formProduct = wrapper.findComponent({ name: 'FormProduct' });
    expect(formProduct.vm.$props.update).toBe(true);
  });
});
