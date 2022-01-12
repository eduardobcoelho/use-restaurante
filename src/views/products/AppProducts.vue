<template>
  <v-row class="ma-0">
    <v-col cols="12" class="d-flex justify-content-center">
      <AppProductsCategories />
    </v-col>
    <v-col cols="12"></v-col>
  </v-row>
</template>

<script>
  import AppProductsCategories from './AppProductsCategories';
  import { mapGetters } from 'vuex';

  export default {
    name: 'AppProducts',
    components: {
      AppProductsCategories,
    },
    computed: {
      ...mapGetters(['products']),
    },
  };
</script>
