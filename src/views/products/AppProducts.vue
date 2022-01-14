<template>
  <v-row class="app-products ma-0">
    <v-col cols="12">
      <AppProductsCategories />
    </v-col>
    <v-col cols="12">
      <AppProductsSearch />
    </v-col>
    <v-col cols="12">
      <AppProductsList v-if="products.length > 0" />
      <AppProductsEmpty v-else />
    </v-col>
  </v-row>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import store from '@/store';
  import AppProductsCategories from './AppProductsCategories';
  import AppProductsSearch from './AppProductsSearch';
  import AppProductsList from './AppProductsList';
  import AppProductsEmpty from './AppProductsEmpty';

  export default {
    name: 'AppProducts',
    components: {
      AppProductsCategories,
      AppProductsSearch,
      AppProductsList,
      AppProductsEmpty,
    },
    setup() {
      store.commit('resetFilters');
      store.commit('setProductsInitialState');

      return {
        products: computed(() => store.getters.products),
      };
    },
  };
</script>
