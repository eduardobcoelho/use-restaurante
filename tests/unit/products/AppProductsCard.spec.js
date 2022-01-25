import { createLocalVue, shallowMount } from '@vue/test-utils';
import AppProductsCard from '@/views/products/AppProductsCard';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vue from 'vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
Vue.use(Vuetify);

describe('AppProductsCard.vue', () => {
  let store;
  let router;
  let wrapper;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        capacities: [
          {
            id: '2119a4bc-5a6b-4e15-b313-cbbdcbc8cb0b',
            description: 'Serve 1 pessoa',
          },
        ],
      },
      actions: {
        removeProduct: jest.fn(),
      },
      getters: {
        capacities: (state) => state.capacities,
      },
    });
    router = new VueRouter({
      mode: 'history',
      base: '/',
      routes: [
        {
          path: '/products/update-product/:id',
          name: 'UpdateProduct',
          component: () => import('@/views/product/UpdateProduct.vue'),
        },
      ],
    });
    wrapper = shallowMount(AppProductsCard, {
      store,
      router,
      propsData: {
        id: '1fe432a9-7c15-47cf-a2dd-4ca532db9e80',
        path: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/salada-de-polvo-scaled.jpg',
        name: 'Salada de polvo',
        capacityId: '2119a4bc-5a6b-4e15-b313-cbbdcbc8cb0b',
        details:
          'Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...',
        value: 'R$ 149,00',
      },
      data: () => ({
        removeDialog: false,
      }),
      computed: {
        capacities() {
          return store.state.capacities;
        },
      },
      localVue,
    });
  });

  it('A propriedade "src" do componente "VImg" deve ser igual a propriedade "path"', () => {
    expect(wrapper.findComponent({ name: 'VImg' }).vm.$props.src).toEqual(
      wrapper.vm.$props.path,
    );
  });

  it('Quando a propriedade "details" vier com um valor inválido o template deve renderizar "-"', async () => {
    await wrapper.setProps({ details: '' });
    expect(wrapper.text()).toContain('-');
  });

  it('Deve demonstrar todas as props exigidas no template do card', () => {
    const capacityDescription = wrapper.vm.getCapacity(
      wrapper.vm.$props.capacityId,
    );
    expect(wrapper.text()).toContain(wrapper.vm.$props.name);
    expect(wrapper.text()).toContain(wrapper.vm.$props.details);
    expect(wrapper.text()).toContain(wrapper.vm.$props.value);
    expect(wrapper.text()).toContain(capacityDescription);
  });

  it('Deve conter o componente "AppProductsRemoveMessage"', () => {
    expect(
      wrapper.findComponent({ name: 'AppProductsRemoveMessage' }).exists(),
    ).toBe(true);
  });

  it('Deve dar um push na rota de update quando o "doAction("update")" for chamado', async () => {
    const spy = jest.spyOn(wrapper.vm, 'doAction');
    await wrapper.vm.doAction('update');
    await router.push(`/products/update-product/${wrapper.vm.$props.id}`);
    expect(wrapper.vm.$router.currentRoute.name).toBe('UpdateProduct');
    expect(spy).toHaveBeenCalled();
  });

  it('Deve abrir o "VDialog" quando o "doAction("remove")" for chamado', async () => {
    const spy = jest.spyOn(wrapper.vm, 'doAction');
    await wrapper.vm.doAction('remove');
    expect(wrapper.findComponent({ name: 'VDialog' }).vm.$props.value).toBe(
      true,
    );
    expect(spy).toHaveBeenCalled();
  });

  it('Deve abrir o "VDialog" quando a variável "removeDialog" for igual a true', async () => {
    await wrapper.setData({ removeDialog: true });
    expect(wrapper.findComponent({ name: 'VDialog' }).vm.$props.value).toBe(
      true,
    );
  });

  it('Deve chamar a função "confirmRemove" quando o componente "AppProductsRemoveMessage" emitir o evento "submit"', async () => {
    const spy = jest.spyOn(wrapper.vm, 'confirmRemove');
    await wrapper.setData({ removeDialog: true });
    const removeMessage = wrapper.findComponent({
      name: 'AppProductsRemoveMessage',
    });
    await removeMessage.vm.$emit('submit');
    await removeMessage.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect('submit' in removeMessage.emitted()).toBe(true);
    expect(spy).toHaveBeenCalled();
  });

  it('Deve definir o valor de "removeDialog" como "false" quando o componente "AppProductsRemoveMessage" emitir o evento "closeDialog"', async () => {
    await wrapper.setData({ removeDialog: true });
    const removeMessage = wrapper.findComponent({
      name: 'AppProductsRemoveMessage',
    });
    await removeMessage.vm.$emit('closeDialog');
    await removeMessage.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect('closeDialog' in removeMessage.emitted()).toBe(true);
    expect(wrapper.vm.removeDialog).toBe(false);
  });
});
