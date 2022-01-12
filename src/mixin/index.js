import Vue from 'vue';

Vue.mixin({
  methods: {
    currencyFormat: (value) => {
      if (!value) return 'RS 0,00';
      let valueString = String(value);
      valueString = valueString.slice(0, -2);
      return `R$ ${valueString},00`;
    },
  },
});
