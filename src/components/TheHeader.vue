<template>
  <div
    class="app-header w-100 pl-5 pr-5 d-flex justify-content-between align-items-center orange"
  >
    <div class="d-flex align-items-center">
      <img src="@/assets/images/logo.svg" min-width="80" min-height="68" />
      <span class="ml-6 font-size-20">Olá, Eduardo!</span>
    </div>

    <div class="d-flex flex-column btn-exit">
      <v-icon size="25" color="black" class="btn-exit__icon">
        mdi-exit-to-app
      </v-icon>
      <span class="btn-exit__span black--text font-size-17">Sair</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
  };
</script>

<style lang="scss">
  .app-header {
    min-height: 117px;
  }

  .btn-exit {
    cursor: pointer;

    &:hover {
      .btn-exit__icon,
      .btn-exit__span {
        color: #f53117 !important;
      }
    }
  }
</style>
