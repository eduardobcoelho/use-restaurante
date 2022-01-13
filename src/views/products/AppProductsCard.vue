<template>
  <v-row class="product-card grayLight w-100 ma-0 pa-2">
    <v-col
      cols="12"
      md="3"
      class="product-card__image-container pa-0 pr-0 pr-md-2"
    >
      <v-img
        src="@/assets/images/products/salada_de_polvo.svg"
        :alt="name"
        title="produto"
        height="100%"
      ></v-img>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="product-card__infos mt-2 mt-md-0 pa-0 pr-3 pl-3"
    >
      <div class="font-size-20 orangeDark--text">{{ name }}</div>
      <div class="font-size-17 orange--text">{{ getCapacity() }}</div>
      <div class="font-size-17 grayDark--text">
        {{ !details ? '-' : details }}
      </div>
      <div class="product-card__infos--value font-size-17 green--text">
        {{ value }}
      </div>
    </v-col>
    <v-col
      cols="12"
      md="3"
      class="product-card__actions mt-2 mt-md-0 pa-0 pr-2 pl-2"
    >
      <div
        class="product-card__actions--action ml-3 ml-md-0"
        v-for="(action, i) in actions"
        :key="i"
        @click="doAction(action)"
      >
        <v-btn icon color="orange">
          <v-icon size="20"> {{ action.icon }} </v-icon>
        </v-btn>
        <span class="font-size-14 grayDark--text">
          {{ action.name }}
        </span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'AppProductsCard',
    props: {
      id: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      capacityId: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      actions: [
        { icon: 'mdi-pencil', name: 'Editar', action: 'update' },
        { icon: 'mdi-delete', name: 'Excluir', action: 'remove' },
      ],
    }),
    computed: {
      ...mapGetters(['capacities']),
    },
    methods: {
      getCapacity() {
        return this.capacities.filter((item) => item.id === this.capacityId)[0]
          .description;
      },
      doAction(item) {
        item.action === 'update'
          ? this.$router.push(`products/update-product/${this.id}`)
          : (this.removeDialog = true);
      },
    },
  };
</script>

<style lang="scss">
  @mixin displayFlex($flexDirection, $justifyContent, $alignItems) {
    display: flex;
    flex-direction: $flexDirection;
    justify-content: $justifyContent;
    align-items: $alignItems;
  }

  .product-card {
    max-width: 640px;
    border-radius: 11px;

    &__image-container {
      height: 155px;
      overflow: hidden;
      border-radius: 6px;
    }

    &__infos {
      position: relative;
      @include displayFlex(column, flex-start, flex-start);

      &--value {
        position: absolute;
        bottom: 0px;
      }
    }

    &__actions {
      border-left: 1px solid #707070;
      @include displayFlex(row, space-around, flex-end);

      &--action {
        cursor: pointer;
        @include displayFlex(column, center, center);

        &:hover {
          span {
            color: #f29c46 !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    .product-card {
      &__image-container {
        text-align: center;
      }

      &__actions {
        border-left: none;
        @include displayFlex(row, flex-end, flex-end);
      }

      &__infos {
        &--value {
          position: relative;
        }
      }
    }
  }
</style>
