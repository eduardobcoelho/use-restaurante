<template>
  <v-text-field
    type="text"
    color="orange"
    label="Valor (R$)"
    class="border-radius-12"
    outlined
    hide-details
    ref="inputRef"
    :rules="rules"
  ></v-text-field>
</template>

<script>
  import { useCurrencyInput } from 'vue-currency-input';

  export default {
    name: 'CurrencyInput',
    props: {
      value: { type: Number, default: null },
      options: { type: Object, default: () => {} },
      rules: { type: Array, default: () => {} },
    },
    setup(props) {
      const { inputRef } = useCurrencyInput(props.options);

      return { inputRef };
    },
  };
</script>
