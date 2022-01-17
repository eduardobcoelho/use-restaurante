import Vue from 'vue';
import router from '@/router';

Vue.mixin({
  methods: {
    toProducts: () => {
      if (router.currentRoute.name != 'Products')
        router.push({ name: 'Products' });
    },
    currencyFormat: (value) => {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
});
