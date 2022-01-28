import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// Composition API
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);

// Toast notification
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
Vue.use(Toast);

import '@/assets/css/main.css';
import '@/mixin';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});
app.$mount('#app');

if (window.Cypress) window.app = app;
