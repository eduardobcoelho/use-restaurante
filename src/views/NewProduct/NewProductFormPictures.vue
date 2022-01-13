<template>
  <v-row class="ma-0 w-100">
    <v-col cols="12">
      <span class="font-size-20 orangeDark--text"
        >Selecione a foto do produto</span
      >
    </v-col>
    <v-col cols="12">
      <NewProductUploaderPicture
        :minHeight="296"
        isCover
      ></NewProductUploaderPicture>
    </v-col>
    <v-col cols="12" md="6">
      <NewProductUploaderPicture></NewProductUploaderPicture
    ></v-col>
    <v-col cols="12" md="6">
      <NewProductUploaderPicture></NewProductUploaderPicture>
    </v-col>
    <v-col cols="12" class="text-end">
      <v-btn min-width="224px" color="orangeDark">
        <span class="white--text">Cadastrar produto</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  import NewProductUploaderPicture from './NewProductUploaderPicture';

  export default {
    name: 'NewProductFormPictures',
    components: {
      NewProductUploaderPicture,
    },
  };
</script>
