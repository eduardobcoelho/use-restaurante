import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from '@/App';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
Vue.use(Vuetify);

describe('App', () => {
  let store;
  let router;

  beforeEach(() => {
    store = new Vuex.Store({
      mutations: {
        setUser: jest.fn(),
      },
      getters: {
        notification: () => ({
          type: 'info',
          message: 'Vocêe está no App.vue',
        }),
      },
    });
    router = new VueRouter();
  });

  it('Contém os elementos de única instância', () => {
    const wrapper = shallowMount(App, { localVue, store, router });
    const header = wrapper.findComponent({ name: 'TheHeader' });
    expect(header.exists()).toBe(true);
    const main = wrapper.findComponent({ name: 'VMain' });
    expect(main.exists()).toBe(true);
    const footer = wrapper.findComponent({ name: 'TheFooter' });
    expect(footer.exists()).toBe(true);
  });

  it('Contém o router-view', () => {
    const wrapper = shallowMount(App, { localVue, store, router });
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
