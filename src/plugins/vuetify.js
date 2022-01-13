import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f29c46',
        white: '#ffffff',
        whiteDark: '#f9f9f9',
        gray: '#c0c0c0',
        grayLight: '#efefef',
        grayDark: '#595555',
        black: '#000000',
        blackLight: '#262626',
        orange: '#f29c46',
        orangeDark: '#c14d19',
        green: '#72bc54',
        greenDark: '#6c7249',
        danger: colors.red.darken1,
      },
    },
  },
});
