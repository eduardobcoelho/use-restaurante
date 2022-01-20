import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import FormProductPictures from '@/views/product/FormProductPictures.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueCompositionAPI);

describe('FormProductPictures.vue', () => {
  let actions;
  let store;
  let router;
  beforeEach(() => {
    actions = {
      updateProduct: jest.fn(),
      saveProduct: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    router = new VueRouter({
      mode: 'history',
      base: '/',
      routes: [
        {
          name: 'UpdateProduct',
          path: '/products/update-product/:id',
          component: () => import('@/views/product/UpdateProduct.vue'),
        },
      ],
    });
  });

  it('Possui os três componentes de uploader', () => {
    const wrapper = shallowMount(FormProductPictures);
    const uploaders = wrapper.findAllComponents({
      name: 'FormProductPicturesUploader',
    });
    expect(uploaders).toHaveLength(3);
  });

  it('Chamar updateProduct quando id estiver na rota', async () => {
    const wrapper = shallowMount(FormProductPictures, {
      store,
      router,
      localVue,
    });
    await wrapper.vm.$router.push('/products/update-product/123456');
    await wrapper.find('[data-test="btn-submit"]').trigger('click');
    expect(actions.updateProduct).toHaveBeenCalled();
  });
});
