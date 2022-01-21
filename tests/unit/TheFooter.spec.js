import { mount } from '@vue/test-utils';
import TheFooter from '@/components/TheFooter.vue';

describe('TheFooter.vue', () => {
  it('Deve renderizar a mensagem corretamente', () => {
    const wrapper = mount(TheFooter, {
      data: () => ({
        year: new Date().getFullYear(),
      }),
    });
    expect(wrapper.find('[data-test="footer-message"]').text()).toBe(
      `${wrapper.vm.year} | Todos os direitos reservados.`,
    );
  });
});
