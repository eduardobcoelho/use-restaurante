<template>
  <v-row class="ma-0 w-100">
    <v-col cols="12">
      <span class="font-size-20 orangeDark--text"
        >Selecione a foto do produto</span
      >
    </v-col>
    <v-col cols="12">
      <FormProductPicturesUploader
        :minHeight="296"
        isCover
      ></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader></FormProductPicturesUploader
    ></v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" class="text-end">
      <v-btn @click="submit" min-width="224px" color="orangeDark">
        <span class="white--text">Cadastrar produto</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  import router from '@/router';
  import store from '@/store';
  import FormProductPicturesUploader from './FormProductPicturesUploader';

  export default {
    name: 'FormProductPictures',
    components: {
      FormProductPicturesUploader,
    },
    setup() {
      const submit = () => {
        'id' in router.currentRoute.params
          ? store.dispatch('updateProduct', router.currentRoute.params.id)
          : store.dispatch('saveProduct');
        router.push({ name: 'Products' });
      };

      return {
        submit,
      };
    },
  };
</script>
