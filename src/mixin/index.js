import Vue from 'vue';
import router from '@/router';

Vue.mixin({
  methods: {
    toProducts: () => {
      if (router.currentRoute.name != 'Products')
        router.push({ name: 'Products' });
    },
    currencyFormat: (value) => {
      if (!value) return 'RS 0,00';
      let valueString = String(value);
      valueString = valueString.slice(0, -2);
      return `R$ ${valueString},00`;
      // value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    },
  },
});
