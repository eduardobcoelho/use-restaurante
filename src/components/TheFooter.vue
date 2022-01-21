<template>
  <footer
    class="app-footer w-100 grayLight d-flex justify-content-center align-items-center"
  >
    <span data-test="footer-message" class="grayDark--text font-size-17">
      {{ year }} | Todos os direitos reservados.
    </span>
  </footer>
</template>

<script>
  import { ref } from '@vue/composition-api';

  export default {
    name: 'TheFooter',
    setup() {
      return {
        year: ref(new Date().getFullYear()),
      };
    },
  };
</script>

<style lang="scss">
  .app-footer {
    min-height: 93px;
    position: relative;
    left: 0px;
    bottom: 0px;
  }
</style>
