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
  let store;
  let router;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        updateProduct: jest.fn(),
        saveProduct: jest.fn(),
      },
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
    wrapper = shallowMount(FormProductPictures, {
      store,
      router,
      data: () => ({
        isUpdating: false,
      }),
      localVue,
    });
  });

  it('Possui os três componentes de uploader', () => {
    const uploaders = wrapper.findAllComponents({
      name: 'FormProductPicturesUploader',
    });
    expect(uploaders).toHaveLength(3);
  });

  it('isUpdating false quando id não estiver na rota', async () => {
    await wrapper.setData({ isUpdating: 'id' in wrapper.vm.$route.params });
    //await wrapper.find('[data-test="btn-submit"]').trigger('click');
    expect(wrapper.vm.isUpdating).toBe(false);
    //expect(actions.saveProduct).toHaveBeenCalled();
  });

  it('isUpdating true quando id estiver na rota', async () => {
    await wrapper.vm.$router.push('/products/update-product/123456');
    await wrapper.setData({ isUpdating: 'id' in wrapper.vm.$route.params });
    //await wrapper.find('[data-test="btn-submit"]').trigger('click');
    expect(wrapper.vm.isUpdating).toBe(true);
    //expect(actions.updateProduct).toHaveBeenCalled();
  });
});
