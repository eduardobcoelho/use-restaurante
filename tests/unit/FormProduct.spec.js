import { shallowMount, createLocalVue } from '@vue/test-utils';
import FormProduct from '@/views/product/FormProduct.vue';
import Mixin from '@/mixin';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.mixin(Mixin);
Vue.use(Vuetify);

describe('FormProduct.vue', () => {
  it('Step 1 mostra o componente FormProductInfo', () => {
    const wrapper = shallowMount(FormProduct, {
      localVue,
      data: () => ({
        step: 1,
      }),
    });
    const formInfo = wrapper.findComponent({ name: 'FormProductInfo' });
    expect(formInfo.exists()).toBe(true);
  });

  it('Step 2 mostra o componente FormProductPictures', () => {
    const wrapper = shallowMount(FormProduct, {
      localVue,
      data: () => ({
        step: 2,
      }),
    });
    const formInfo = wrapper.findComponent({ name: 'FormProductPictures' });
    expect(formInfo.exists()).toBe(true);
  });

  it('Componente troca na mudança do step', async () => {
    const wrapper = shallowMount(FormProduct, {
      localVue,
      data: () => ({
        step: 1,
      }),
    });
    let currentForm = wrapper.findComponent({ name: 'FormProductInfo' });
    expect(currentForm.exists()).toBe(true);
    await wrapper.setData({ step: 2 });
    currentForm = wrapper.findComponent({ name: 'FormProductPictures' });
    expect(currentForm.exists()).toBe(true);
  });
});
