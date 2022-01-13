<template>
  <v-form
    v-model="valid"
    @submit.prevent="submitForm"
    ref="formProductInfo"
    lazy-validation
    class="w-100"
  >
    <v-row class="ma-0 w-100">
      <v-col cols="12">
        <v-text-field
          v-model="model.name"
          color="orange"
          label="Nome do produto"
          class="border-radius-12"
          outlined
          hide-details
          :rules="[requiredField]"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="model.details"
          color="orange"
          label="Descrição"
          class="border-radius-12"
          outlined
          hide-details
          :rules="[requiredField, max200]"
        ></v-text-field>
        <div class="text-end">
          <span
            class="orange--text font-size-14"
            :class="[model.details.length > 200 ? 'danger--text' : '']"
            >{{ model.details.length }}/200</span
          >
        </div>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="model.value"
          type="number"
          color="orange"
          label="Valor (R$)"
          class="border-radius-12"
          outlined
          hide-details
          :rules="[requiredField]"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="model.category"
          color="orange"
          :items="categories"
          item-text="name"
          item-value="slug"
          label="Categoria"
          outlined
          class="border-radius-12"
          hide-details
          :rules="[requiredField]"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <span
          class="blackLight--text font-size-20"
          :class="[!valid && !model.capacity ? 'danger--text' : '']"
          >Para quantas pessoas?</span
        >
        <div v-if="!valid && !model.capacity" class="danger--text font-size-12">
          (Campo obrigatório)
        </div>
        <v-radio-group v-model="model.capacity">
          <v-radio
            v-for="capacity in capacities"
            :key="capacity.id"
            :label="capacity.description"
            :value="capacity.id"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" class="text-end">
        <v-btn
          type="submit"
          :disabled="!valid"
          min-width="224px"
          color="orangeDark"
        >
          <span class="white--text">Próximo</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  import { ref, computed } from '@vue/composition-api';
  import store from '@/store';

  export default {
    name: 'FormProductInfo',
    setup(_, { emit }) {
      const formProductInfo = ref(null);
      const valid = ref(true);
      const model = ref({
        name: '',
        capacity: '',
        details: '',
        category: '',
        value: null,
      });
      const requiredField = (v) => !!v || 'Campo obrigatório';
      const max200 = (v) =>
        v.length <= 200 || 'Não pode ter mais de 200 caracteres';

      const submitForm = () => {
        if (formProductInfo.value.validate()) emit('setStep', 2);
      };

      return {
        formProductInfo,
        valid,
        model,
        requiredField,
        max200,
        submitForm,
        categories: computed(() => store.getters.categories),
        capacities: computed(() => store.getters.capacities),
      };
    },
  };
</script>
