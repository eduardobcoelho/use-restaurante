<template>
  <v-card
    width="100%"
    class="remove-message border-radius-12 text-center pt-5 pr-2 pb-5 pl-2"
  >
    <div class="remove-message__title">
      <span class="font-size-20 orangeDark--text"> Apagar produto </span>
    </div>

    <div>
      <span class="remove-message__subtitle font-size-17 blackLight--text"
        >Deseja realmente apagar este produto?</span
      >
    </div>

    <v-card-actions
      tag="div"
      class="w-100 mt-2 d-flex justify-content-center align-items-center"
    >
      <v-btn
        width="100%"
        min-width="100px"
        max-width="179px"
        color="orangeDark"
        class="border-radius-12"
        @click="$emit('submit')"
      >
        <span class="white--text">Sim, apagar</span>
      </v-btn>
      <v-btn
        width="100%"
        min-width="100px"
        max-width="179px"
        color="orangeDark"
        outlined
        class="border-radius-12 ml-4"
        @click="$emit('closeDialog')"
      >
        <span class="orangeDark--text">Não</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'AppProductsRemoveMessage',
  };
</script>
