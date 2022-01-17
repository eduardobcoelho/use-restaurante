<template>
  <v-app>
    <TheHeader />
    <v-main class="pa-4 white">
      <router-view />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TheHeader from '@/components/TheHeader.vue';
  import TheFooter from '@/components/TheFooter.vue';

  export default {
    name: 'App',
    data: () => ({}),
    components: {
      TheHeader,
      TheFooter,
    },
    computed: {
      ...mapGetters(['notification']),
    },
    watch: {
      notification(val) {
        this.$toast[val.type](`${val.message}`, {
          position: 'top-right',
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: 'button',
          icon: true,
          rtl: false,
        });
      },
    },
    created() {
      this.$store.commit('setUser', {
        name: 'Luiz Eduardo',
        username: 'Edu',
        email: 'luiz.eduardo@usemobile.zyx',
      });
    },
  };
</script>
