import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Store from '@/store';
import App from '@/App';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      ...Store.state,
      ...Store.mutations,
      ...Store.actions,
      ...Store.getters,
    });
  });

  it('É um component vue', () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Contém todos os elementos necessários', () => {
    const wrapper = shallowMount(App, { store, localVue });
    const header = wrapper.findComponent({ name: 'TheHeader' });
    expect(header.exists()).toBe(true);
    const footer = wrapper.findComponent({ name: 'TheFooter' });
    expect(footer.exists()).toBe(true);
  });
});
