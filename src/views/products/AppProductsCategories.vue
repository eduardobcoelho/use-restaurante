<template>
  <v-row class="app-categories ma-0">
    <v-col
      v-for="category in categories"
      :key="category.id"
      cols="12"
      md="3"
      class="d-flex justify-content-center"
    >
      <div
        class="app-categories__category pt-2 pr-3 pb-2 pl-3 d-flex justify-content-center"
        :class="[
          category.slug === categorySelected
            ? 'app-categories__category--selected'
            : '',
        ]"
        @click="
          filterProducts(category.slug, category.slug === categorySelected)
        "
      >
        <span class="font-size-17">{{ category.name }}</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import store from '@/store';
  import { mapGetters } from 'vuex';

  export default {
    name: 'AppProductsCategories',
    computed: {
      ...mapGetters(['categories']),
      categorySelected() {
        return store.getters.category;
      },
    },
    methods: {
      filterProducts(slug, isEqual) {
        store.commit('setCategory', !isEqual ? slug : null);
        store.commit('filterProducts');
      },
    },
  };
</script>

<style lang="scss">
  .app-categories {
    &__category {
      width: 100%;
      cursor: pointer;
      border: 1px solid #595555;
      border-radius: 12px;
      color: #262626;
      transition: all 0.1s ease-in;

      &--selected {
        box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
        border-color: #72bc54;
        color: #72bc54;
      }

      &:hover {
        box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
        border-color: #f29c46;
        color: #f29c46;
      }
    }
  }
</style>
