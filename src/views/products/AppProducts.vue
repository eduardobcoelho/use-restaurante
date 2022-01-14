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
    <v-col cols="12" class="text-center">
      <v-pagination
        v-model="page"
        :length="paginationLength"
        :total-visible="6"
        @input="setProductsByPagination"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
  import { ref, computed } from '@vue/composition-api';
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
      const page = ref(1);
      store.commit('resetFilters');
      store.commit('setPaginationLength');
      const setProductsByPagination = () => {
        store.dispatch('setProductsByPagination', page.value);
      };
      setProductsByPagination();

      return {
        page: page,
        setProductsByPagination,
        paginationLength: computed(() => store.getters.paginationLength),
        products: computed(() => store.getters.products),
      };
    },
  };
</script>
