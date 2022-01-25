import { mount } from '@vue/test-utils';
import AppProductsRemoveMessage from '@/views/products/AppProductsRemoveMessage';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('AppProductsRemoveMessage.vue', () => {
  const wrapper = mount(AppProductsRemoveMessage);
  const wrapperText = wrapper.text();

  it('Deve conter o título', () => {
    expect(wrapperText).toContain('Apagar produto');
  });

  it('Deve conter um subtítulo', () => {
    expect(wrapperText).toContain('Deseja realmente apagar este produto?');
  });

  it('Deve conter um botão para emitir o evento de "submit"', async () => {
    expect(wrapper.find('[data-test="btn-submit"]').exists()).toBe(true);
    expect(wrapperText).toContain('Sim, apagar');
  });

  it('Deve conter um botão para emitir o evento de "closeDialog"', async () => {
    expect(wrapper.find('[data-test="btn-close"]').exists()).toBe(true);
    expect(wrapperText).toContain('Não');
  });
});
