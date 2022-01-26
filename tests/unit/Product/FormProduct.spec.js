import { shallowMount, createLocalVue } from '@vue/test-utils';
import FormProduct from '@/views/product/FormProduct.vue';
import Mixin from '@/mixin';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.mixin(Mixin);
Vue.use(Vuetify);

describe('FormProduct.vue', () => {
  const wrapper = shallowMount(FormProduct, {
    localVue,
    data: () => ({
      step: 1,
    }),
  });

  it('Possui header informativo', () => {
    expect(wrapper.findComponent({ name: 'FormProductHeader' }).exists()).toBe(
      true,
    );
  });

  it('Step 1 mostra apenas o componente de formulário FormProductInfo', () => {
    expect(wrapper.findComponent({ name: 'FormProductInfo' }).exists()).toBe(
      true,
    );
    expect(
      wrapper.findComponent({ name: 'FormProductPictures' }).exists(),
    ).toBe(false);
  });

  it('Step 2 mostra apenas o componente de formulário FormProductPictures', async () => {
    await wrapper.setData({ step: 2 });
    expect(
      wrapper.findComponent({ name: 'FormProductPictures' }).exists(),
    ).toBe(true);
    expect(wrapper.findComponent({ name: 'FormProductInfo' }).exists()).toBe(
      false,
    );
  });

  it('Componente troca na mudança do step', async () => {
    await wrapper.setData({ step: 1 });
    expect(wrapper.findComponent({ name: 'FormProductInfo' }).exists()).toBe(
      true,
    );
    expect(
      wrapper.findComponent({ name: 'FormProductPictures' }).exists(),
    ).toBe(false);
    await wrapper.setData({ step: 2 });
    expect(
      wrapper.findComponent({ name: 'FormProductPictures' }).exists(),
    ).toBe(true);
    expect(wrapper.findComponent({ name: 'FormProductInfo' }).exists()).toBe(
      false,
    );
  });
});
