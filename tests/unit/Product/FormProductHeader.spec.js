import { shallowMount } from '@vue/test-utils';
import FormProductHeader from '@/views/product/FormProductHeader';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FormProductHeader.vue', () => {
  const wrapper = shallowMount(FormProductHeader, {
    propsData: {
      step: 1,
      title: 'Título',
    },
  });

  it('Mostra o título corretamente', () => {
    expect(wrapper.text()).toContain('Título');
  });

  it('Step 1 mostra "Etapa 1 de 2"', () => {
    expect(wrapper.text()).toContain('Etapa 1 de 2');
  });

  it('Step 2 mostra "Etapa 2 de 2"', async () => {
    await wrapper.setProps({ step: 2 });
    expect(wrapper.text()).toContain('Etapa 2 de 2');
  });

  it('Texto informativo da etapa muda de acordo com o Step', async () => {
    await wrapper.setProps({ step: 1 });
    expect(wrapper.text()).toContain('Etapa 1 de 2');
    await wrapper.setProps({ step: 2 });
    expect(wrapper.text()).toContain('Etapa 2 de 2');
  });
});
