<template>
  <div class="d-flex flex-column w-100">
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
    <span class="font-size-17 grayDark--text mt-2">Etapa {{ step }} de 2</span>
  </div>
</template>

<script>
  export default {
    name: 'FormProductHeader',
    props: {
      step: {
        type: Number,
        required: true,
      },
    },
  };
</script>
