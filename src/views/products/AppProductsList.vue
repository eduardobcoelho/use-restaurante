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
        :capacityId="product.capacity"
        :details="product.details"
        :value="currencyFormat(Number(product.value))"
      ></AppProductsCard>
    </v-col>
    <v-col
      cols="12"
      style="max-width: 640px"
      class="pr-0 pl-0 d-flex justify-content-end"
    >
      <v-btn
        @click="$router.push({ name: 'NewProduct' })"
        dark
        color="orangeDark"
        class="border-radius-12"
        data-test="cadaster-product"
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
        products: computed(() => store.getters.productsPaginated),
      };
    },
  };
</script>
