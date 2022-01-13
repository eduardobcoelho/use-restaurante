<template>
  <div class="d-flex justify-content-between w-100">
    <v-btn icon color="black">
      <v-icon color="black"> mdi-chevron-left </v-icon>
    </v-btn>

    <div class="d-flex flex-column">
      <div class="d-flex align-items-center">
        <v-img
          src="@/assets/images/products/shopping_bag.svg"
          title="Bolsa de compras"
          max-width="23px"
        />
        <span class="font-size-20 blackLight--text ml-3"
          >Cadastrar novo produto</span
        >
      </div>
      <span class="font-size-17 grayDark--text mt-2"
        >Etapa {{ step }} de 2</span
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewProductHeader',
    props: {
      step: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style lang="scss">
  .new-product-header {
    max-width: 586px;
  }
</style>
