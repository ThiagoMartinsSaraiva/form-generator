<template>
  <div class="full-wrapper">
    <div class="input-container">
      <div class="input-container-field">
        <div class="input-container-field-label">
          <label class="input-container-field-label-main">{{ formField.value }}</label>
          <label class="input-container-field-label-secondary" v-if="formField.description[0]">{{ formField.description[0] }}</label>
        </div>
        <component :is="inputToRender" :field="formField" v-model="data" @keypress.native.enter="nextQuestion" />
        <div class="button-container">
          <button :class="['button', { 'button--loading': isLoading }]" v-html="buttonText" @click="nextQuestion" :disabled="isLoading"></button>
        </div>
      </div>
    </div>
    <div class="form-container-button-container">
      <button @click="previousQuestion"><i class="fa-solid fa-arrow-up"></i></button>
      <button @click="nextQuestion"><i class="fa-solid fa-arrow-down"></i></button>
    </div>
  </div>
</template>
<script>

export default {
  name: "AppInput",
  components: {
  },
  props: {
    formField: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      mappedInput: {
        'text': () => import ('./AppTextInput.vue'),
        'email': () => import ('./AppEmailInput.vue'),
        'radio': () => import ('./AppRadioInput.vue'),
      },
      data: '',
    };
  },
  methods: {
    async previousQuestion() {
      await this.$store.dispatch('FormStore/previousQuestion', { field: this.formField.slug, value: this.data })
    },
    async nextQuestion() {
      if (this.formField.type == 'radio') {
        const exit = !this.formField.logic.actions[this.data] ? 'x6x10krziri5' : this.formField.logic.actions[this.data].condition[0].data.exit
        await this.$store.dispatch('FormStore/setSelectedThankyou', exit)        
      }
      await this.$store.dispatch('FormStore/submitItem', { field: this.formField.slug, value: this.data })
    },
  },
  watch: {
    formField: {
      handler(value) {
        const formData = this.$store.getters["FormStore/getFormData"]
        this.data = formData[value.slug]
      },
      immediate: true,
    }
  },
  computed: {
    isLastInput() {
      return this.$store.getters['FormStore/isLastField']
    },
    inputToRender() {
      return this.mappedInput[this.formField.type]
    },
    buttonText() {
      if (this.isLoading) {
        return '<i class="fa-solid fa-spinner"></i>'
      }
      return  this.isLastInput ? `<i class="fa-solid fa-check"></i>&nbsp; Enviar respostas` : 'Responder'
    },
    isLoading() {
      return this.$store.getters['FormStore/isLoading']
    },
    styles() {
      const state = this.$store.getters['FormStore/getState']
      return state.style
    }
  },
};
</script>
<style lang="scss">
.full-wrapper {
  display: flex;
  justify-content: space-between;
}

.input-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  &-field {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 700px;
    width: 100%;

    &-label {
      display: flex;
      flex-direction: column;
      gap: 15px;
      &-main {
        font-size: 24px;
        color: v-bind('styles.textColor');
      }
      &-secondary {
        font-size: 16px;
        color: v-bind('styles.textColor');
      }
    }
  }

  .button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    background-color: v-bind('styles.color');
    color: white;
    border: 1px solid #333;
    font-weight: 400;
    font-size: 16px;

    &--loading {
      cursor: none;
      opacity: .5;
    }
  }
}
</style>
