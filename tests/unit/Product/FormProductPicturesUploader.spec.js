import { mount } from '@vue/test-utils';
import FormProductPicturesUploader from '@/views/product/FormProductPicturesUploader';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FormProductPicturesUploader.vue', () => {
  const wrapper = mount(FormProductPicturesUploader, {
    propsData: {
      reference: 'uploader1',
      isCover: false,
    },
  });

  it('Deve mostrar uma tag "Capa" quando isCover for true', async () => {
    await wrapper.setProps({ isCover: true });
    expect(wrapper.find('.uploader__isCover-tag').exists()).toBe(true);
    expect(wrapper.find('.uploader__isCover-tag').text()).toMatch('Capa');
  });

  it('O componente deve ser renderizado com o id de acordo com a referência passado como props', () => {
    expect(wrapper.find(`#${wrapper.vm.$props.reference}`).element.id).toMatch(
      wrapper.vm.$props.reference,
    );
    expect(wrapper.find(`#${wrapper.vm.$props.reference}`).exists()).toBe(true);
  });

  it('A informação para anexar a imagem só deve aparecer caso a propriedade "image" não seja passada por parâmetro', () => {
    expect(wrapper.vm.$props.image).toBeNull();
    expect(wrapper.find('.uploader__content').exists()).toBe(true);
  });

  /*it('O método setBackgroundUploader deve ser chamado caso a propriedade "image" tenha um valor válido', () => {
    const wrapper = mount(FormProductPicturesUploader, {
      propsData: {
        reference: 'uploader1',
        image:
          'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/salada-de-polvo-scaled.jpg',
      },
      localVue,
    });
    jest.spyOn(wrapper.vm, 'setBackgroundUploader');
    expect(wrapper.vm.setBackgroundUploader).toHaveBeenCalledTimes(1);
  });*/
});
