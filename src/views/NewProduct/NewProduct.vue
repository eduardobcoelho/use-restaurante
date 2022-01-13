<template>
  <v-row class="ma-0">
    <v-col cols="12" md="6">
      <NewProductHeader :step="step"></NewProductHeader>
    </v-col>
    <v-col cols="12"> </v-col>
  </v-row>
</template>

<script>
  import { ref } from '@vue/composition-api';
  import NewProductHeader from './NewProductHeader';

  export default {
    name: 'NewProduct',
    components: {
      NewProductHeader,
    },
    setup() {
      const step = ref(1);

      return {
        step,
        forms: {
          1: 'NewProductFormInfo',
          2: 'NewProductFormInfo',
        },
      };
    },
  };
</script>
