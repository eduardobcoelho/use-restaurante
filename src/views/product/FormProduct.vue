<template>
  <div class="w-100 d-flex justify-content-center">
    <v-row class="form-product ma-0">
      <v-col cols="12" md="6">
        <FormProductHeader
          :title="!update ? 'Cadastrar novo produto' : 'Editar produto'"
          :step="step"
        ></FormProductHeader>
      </v-col>
      <v-col cols="12" class="d-flex justify-content-center pa-0">
        <keep-alive>
          <component :is="forms[step]" @setStep="setStep"></component>
        </keep-alive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { ref } from '@vue/composition-api';
  import FormProductHeader from './FormProductHeader';
  import FormProductInfo from './FormProductInfo';
  import FormProductPictures from './FormProductPictures';

  export default {
    name: 'FormProduct',
    props: {
      update: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      FormProductHeader,
      FormProductInfo,
      FormProductPictures,
    },
    setup() {
      const step = ref(1);
      const setStep = (val) => (step.value = val);
      return {
        step,
        setStep,
        forms: {
          1: 'FormProductInfo',
          2: 'FormProductPictures',
        },
      };
    },
  };
</script>

<style lang="scss">
  .form-product {
    max-width: 639px;
  }
</style>
