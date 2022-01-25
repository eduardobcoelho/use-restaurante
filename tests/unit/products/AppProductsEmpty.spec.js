import { mount } from '@vue/test-utils';
import AppProductsEmpty from '@/views/products/AppProductsEmpty';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('AppProductsEmpty.vue', () => {
  const wrapper = mount(AppProductsEmpty);

  it('Deve conter o titulo', () => {
    expect(wrapper.text()).toContain('Ops!Nenhum produto cadastrado');
  });

  it('Deve conter a mensagem', () => {
    const text = wrapper.text();
    expect(text).toContain('Cadastre seu primeiro produto e');
    expect(text).toContain('comece a vender agora mesmo.');
  });

  it('Deve conter o botão para direcionar ao cadastro de produtos', () => {
    expect(wrapper.findComponent({ name: 'VBtn' }).exists()).toBe(true);
    expect(wrapper.text()).toContain('Cadastrar produtos');
  });
});
