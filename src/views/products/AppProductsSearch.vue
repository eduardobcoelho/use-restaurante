<template>
  <v-row class="ma-0">
    <v-col cols="12" md="3" class="d-flex align-items-center">
      <v-img src="@/assets/images/products/shopping_bag.svg" max-width="23px" />
      <span class="font-size-20 blackLight--text ml-2">
        Produtos cadastrados
      </span>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-content-center align-items-center"
    >
      <v-text-field
        background-color="grayLight"
        color="orange"
        label="Buscar na categoria"
        prepend-inner-icon="mdi-magnify"
        outlined
        hide-details
        dense
        class="border-radius-12"
        data-test="input-free-search"
        @input="setFreeSearch"
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="3" class="d-flex justify-content-end">
      <v-menu offset-y rounded="lg" class="order-by">
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
            class="order-by__button grayLight d-flex align-items-center"
          >
            <span
              class="font-size-17 blackLight--text ml-3"
              :class="[orderBy ? 'orange--text' : '']"
            >
              {{ !orderBy ? 'Ordernar por' : ordersByMap[orderBy] }}
            </span>
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in ordersBy"
            :key="index"
            @click="setOrderBy(item.value, item.value === orderBy)"
          >
            <span
              class="order-by__option font-size-17"
              :class="[
                orderBy === item.value ? 'order-by__option--selected' : '',
              ]"
              >{{ item.name }}</span
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'AppProductsSearch',
    data: () => ({
      debounce: null,
      ordersByMap: {
        1: 'Maior preço',
        2: 'Menor preço',
      },
    }),
    computed: {
      ...mapGetters(['freeSearch', 'orderBy', 'ordersBy']),
    },
    methods: {
      setFreeSearch(val) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.$store.commit('setFreeSearch', val);
          this.$store.commit('filterProducts');
        }, 300);
      },
      setOrderBy(value, isEqual) {
        this.$store.commit('setOrderBy', !isEqual ? value : null);
        this.$store.commit('filterProducts');
      },
    },
  };
</script>

<style lang="scss">
  .order-by {
    &__button {
      width: 100%;
      max-width: 207px;
      height: 47px;
      border-radius: 12px;
    }

    &__option {
      color: #262626;

      &--selected {
        color: #f29c46;
      }
    }
  }
</style>
