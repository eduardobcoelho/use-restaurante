import { shallowMount } from '@vue/test-utils';
import UpdateProduct from '@/views/product/UpdateProduct';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('UpdateProduct.vue', () => {
  it('Deve renderizar o componente FormProduct', () => {
    const wrapper = shallowMount(UpdateProduct);
    expect(wrapper.findComponent({ name: 'FormProduct' }).exists()).toBe(true);
  });

  it('FormProduct deve ter o parâmetro "update" com valor true', () => {
    const wrapper = shallowMount(UpdateProduct);
    const formProduct = wrapper.findComponent({ name: 'FormProduct' });
    expect(formProduct.vm.$props.update).toBe(true);
  });
});
