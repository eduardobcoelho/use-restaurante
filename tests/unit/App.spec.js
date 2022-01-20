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

describe('App.vue', () => {
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
          message: 'Você está no App.vue',
        }),
      },
    });
    router = new VueRouter();
  });

  it('Contém os elementos de única instância', () => {
    const wrapper = shallowMount(App, { localVue, store, router });
    expect(wrapper.findComponent({ name: 'TheHeader' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'VMain' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'TheFooter' }).exists()).toBe(true);
  });

  it('Contém o router-view', () => {
    const wrapper = shallowMount(App, { localVue, store, router });
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
