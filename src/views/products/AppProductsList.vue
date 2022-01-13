<template>
  <v-row class="w-100 ma-0" justify="center">
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
    <v-col
      v-if="products.length > 0"
      cols="12"
      style="max-width: 640px"
      class="pr-0 pl-0 d-flex justify-content-end"
    >
      <v-btn
        @click="$router.push({ name: 'NewProduct' })"
        dark
        color="orangeDark"
        style="border-radius: 12px"
      >
        <span>Cadastrar produto</span>
      </v-btn>
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
