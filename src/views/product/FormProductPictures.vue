<template>
  <v-row class="ma-0 w-100">
    <v-col cols="12">
      <span class="font-size-20 orangeDark--text"
        >Selecione a foto do produto</span
      >
    </v-col>
    <v-col cols="12">
      <FormProductPicturesUploader
        v-model="productImages.path"
        reference="uploader1"
        :image="productImages.path"
        :minHeight="296"
        isCover
      ></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader
        v-model="productImages.images[0]"
        reference="uploader2"
        :image="productImages.images[0]"
      ></FormProductPicturesUploader
    ></v-col>
    <v-col cols="12" md="6">
      <FormProductPicturesUploader
        v-model="productImages.images[1]"
        reference="uploader3"
        :image="productImages.images[1]"
      ></FormProductPicturesUploader>
    </v-col>
    <v-col cols="12" class="text-end">
      <v-btn
        @click="submit"
        min-width="224px"
        color="orangeDark"
        class="border-radius-12"
        data-test="btn-submit"
      >
        <span class="white--text">{{
          isUpdating ? 'Salvar alterações' : 'Cadastrar produto'
        }}</span>
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
          ? store.dispatch('updateProduct', {
              id: router.currentRoute.params.id,
              ...productImages,
            })
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
        isUpdating: 'id' in router.currentRoute.params,
      };
    },
  };
</script>
