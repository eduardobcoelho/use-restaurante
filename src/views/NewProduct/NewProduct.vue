<template>
  <div class="w-100 d-flex justify-content-center">
    <v-row class="new-product ma-0">
      <v-col cols="12" md="6">
        <NewProductHeader :step="step"></NewProductHeader>
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
  import NewProductHeader from './NewProductHeader';
  import NewProductFormInfo from './NewProductFormInfo';
  import NewProductFormPictures from './NewProductFormPictures';

  export default {
    name: 'NewProduct',
    components: {
      NewProductHeader,
      NewProductFormInfo,
      NewProductFormPictures,
    },
    setup() {
      const step = ref(1);
      const setStep = (val) => (step.value = val);
      return {
        step,
        setStep,
        forms: {
          1: 'NewProductFormInfo',
          2: 'NewProductFormPictures',
        },
      };
    },
  };
</script>

<style lang="scss">
  .new-product {
    max-width: 639px;
  }
</style>
