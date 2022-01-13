<template>
  <v-row class="ma-0 w-100">
    <v-col cols="12" class="d-flex justify-content-center">
      <v-img
        src="@/assets/images/products/leaf.svg"
        title="folha"
        max-width="144px"
      />
    </v-col>
    <v-col cols="12" class="text-center mt-2">
      <span class="font-size-20 orangeDark--text">
        Ops!<br />Nenhum produto cadastrado
      </span>
    </v-col>
    <v-col cols="12" class="d-flex justify-content-center">
      <span class="font-size-17 blackLight--text">
        Cadastre seu primeiro produto e<br />
        comece a vender agora mesmo.
      </span>
    </v-col>
    <v-col cols="12" class="text-center mt-1">
      <v-btn
        width="100%"
        max-width="336px"
        dark
        color="orangeDark"
        style="border-radius: 12px"
      >
        <span>Cadastrar produtos</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'AppProductsEmpty',
  };
</script>
