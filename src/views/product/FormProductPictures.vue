<template>
  <v-row class="ma-0 w-100">
    <v-col cols="12">
      <span class="font-size-20 orangeDark--text"
        >Selecione a foto do produto</span
      >
    </v-col>
    <v-col cols="12">
      <FormProductPicturesUploader
        reference="uploader1"
        :image="productImages.path"
        :minHeight="296"
        isCover
        @setImage="(val) => (productImages.path = val)"
      ></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader
        reference="uploader2"
        :image="productImages.images[0]"
        @setImage="(val) => (productImages.images[0] = val)"
      ></FormProductPicturesUploader
    ></v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader
        reference="uploader3"
        :image="productImages.images[1]"
        @setImage="(val) => (productImages.images[1] = val)"
      ></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" class="text-end">
      <v-btn @click="submit" min-width="224px" color="orangeDark">
        <span class="white--text">Cadastrar produto</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  import { reactive, computed } from '@vue/composition-api';
  import router from '@/router';
  import store from '@/store';
  import FormProductPicturesUploader from './FormProductPicturesUploader';

  export default {
    name: 'FormProductPictures',
    components: {
      FormProductPicturesUploader,
    },
    setup() {
      const currentProduct = computed(() => store.getters.currentProduct);
      const productImages = reactive({
        path: null,
        images: [null, null],
      });
      const submit = () => {
        'id' in router.currentRoute.params
          ? store.dispatch('updateProduct', router.currentRoute.params.id)
          : store.dispatch('saveProduct', productImages);
        router.push({ name: 'Products' });
      };
      const fillImages = () => {
        productImages.path = currentProduct.value.path;
        if (
          currentProduct.value.images.length >= 1 &&
          currentProduct.value.images[0]
        )
          productImages.images[0] = currentProduct.value.images[0];
        if (
          currentProduct.value.images.length >= 2 &&
          currentProduct.value.images[1]
        )
          productImages.images[1] = currentProduct.value.images[1];
      };
      if ('id' in router.currentRoute.params) fillImages();

      return {
        submit,
        productImages,
      };
    },
  };
</script>
