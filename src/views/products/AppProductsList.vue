<template>
  <v-row class="ma-0">
    <v-col
      cols="12"
      v-for="product in products"
      :key="product.key"
      class="d-flex justify-content-center"
    >
      <AppProductsCard
        :id="product.id"
        :path="product.path"
        :name="product.name"
        :capacity="product.capacity"
        :details="product.details"
        :value="currencyFormat(product.value)"
      ></AppProductsCard>
    </v-col>
  </v-row>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import store from '@/store';
  import AppProductsCard from './AppProductsCard';

  export default {
    name: 'AppProductsList',
    components: {
      AppProductsCard,
    },
    setup() {
      return {
        products: computed(() => store.getters.products),
      };
    },
  };
</script>
