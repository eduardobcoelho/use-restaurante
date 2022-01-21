import { mount, createLocalVue } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader';
import Mixin from '@/mixin';
import Vuex from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.mixin(Mixin);
localVue.use(Vuex);
Vue.use(Vuetify);

describe('TheHeader.vue', () => {
  let getters;
  let store;
  let vuetify;

  beforeEach(() => {
    getters = {
      user: () => ({
        name: 'Luiz Eduardo',
      }),
    };
    store = new Vuex.Store({
      getters,
    });
    vuetify = new Vuetify();
  });

  it('Deve renderizar o nome do usuário correto', () => {
    const wrapper = mount(TheHeader, {
      store,
      vuetify,
      localVue,
    });
    expect(wrapper.find('[data-test="header-user-name"]').text()).toBe(
      `Olá, ${getters.user().name}!`,
    );
  });
});
