<template>
  <v-row class="app-products ma-0">
    <v-col cols="12" class="d-flex justify-content-center">
      <AppProductsCategories />
    </v-col>
    <v-col cols="12">
      <AppProductsSearch />
    </v-col>
  </v-row>
</template>

<script>
  import AppProductsCategories from './AppProductsCategories';
  import AppProductsSearch from './AppProductsSearch';

  export default {
    name: 'AppProducts',
    components: {
      AppProductsCategories,
      AppProductsSearch,
    },
  };
</script>
