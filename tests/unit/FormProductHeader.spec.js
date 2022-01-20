import { shallowMount } from '@vue/test-utils';
import FormProductHeader from '@/views/product/FormProductHeader';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FormProductHeader', () => {
  it('Mostra o título corretamente', () => {
    const wrapper = shallowMount(FormProductHeader, {
      propsData: {
        step: 1,
        title: 'Título',
      },
    });
    expect(wrapper.text()).toContain('Título');
  });

  it('Step 1 mostra "Etapa 1 de 2"', () => {
    const wrapper = shallowMount(FormProductHeader, {
      propsData: {
        step: 1,
        title: 'Título místico',
      },
    });
    expect(wrapper.text()).toContain('Etapa 1 de 2');
  });

  it('Step 2 mostra "Etapa 2 de 2"', () => {
    const wrapper = shallowMount(FormProductHeader, {
      propsData: {
        step: 2,
        title: 'Título místico',
      },
    });
    expect(wrapper.text()).toContain('Etapa 2 de 2');
  });

  it('Texto informativo da etapa muda de acordo com o Step', async () => {
    const wrapper = shallowMount(FormProductHeader, {
      propsData: {
        step: 1,
        title: 'Título místico',
      },
    });
    expect(wrapper.text()).toContain('Etapa 1 de 2');
    await wrapper.setProps({ step: 2 });
    expect(wrapper.text()).toContain('Etapa 2 de 2');
  });
});
