<template>
  <v-row class="app-products ma-0">
    <v-col cols="12" class="d-flex justify-content-center">
      <AppProductsCategories />
    </v-col>
    <v-col cols="12">
      <AppProductsSearch />
    </v-col>
    <v-col cols="12">
      <AppProductsList />
    </v-col>
  </v-row>
</template>

<script>
  import AppProductsCategories from './AppProductsCategories';
  import AppProductsSearch from './AppProductsSearch';
  import AppProductsList from './AppProductsList';

  export default {
    name: 'AppProducts',
    components: {
      AppProductsCategories,
      AppProductsSearch,
      AppProductsList,
    },
  };
</script>
