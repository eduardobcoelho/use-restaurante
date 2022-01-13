<template>
  <header
    class="app-header w-100 pl-5 pr-5 d-flex justify-content-between align-items-center orange"
  >
    <div @click="toProducts" class="d-flex align-items-center app-header__logo">
      <img src="@/assets/images/logo.svg" min-width="80" min-height="68" />
      <span class="ml-6 font-size-20">Olá, {{ user.name }}!</span>
    </div>

    <div class="app-header__btn-exit d-flex flex-column">
      <v-icon size="25" color="black" class="app-header__btn-exit--icon">
        mdi-exit-to-app
      </v-icon>
      <span class="app-header__btn-exit--span black--text font-size-17"
        >Sair</span
      >
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'TheHeader',
    computed: {
      ...mapGetters(['user']),
    },
  };
</script>

<style lang="scss">
  .app-header {
    min-height: 117px;
    position: relative;
    top: 0px;
    left: 0px;

    &__logo {
      cursor: pointer;
    }

    &__btn-exit {
      cursor: pointer;

      &:hover {
        .app-header__btn-exit--icon,
        .app-header__btn-exit--span {
          color: #f53117 !important;
        }
      }
    }
  }
</style>
