<template>
  <div class="full-wrapper">
    <div class="input-container">
      <div class="input-container-field">
        <div class="input-container-field-label">
          <label class="input-container-field-label-main">{{ formField.value }}</label>
          <label class="input-container-field-label-secondary" v-if="formField.description[0]">{{ formField.description[0] }}</label>
        </div>
        <component :is="inputToRender" :field="formField" v-model="data" @keypress.native.enter="nextQuestion" :hasError="hasError && dirty" />
        <span class="error" v-if="firstError && dirty">
          <template>
            {{ firstError.message }}
          </template>
        </span>
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
    formField: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      mappedInput: {
        'text': () => import ('./AppTextInput.vue'),
        'email': () => import ('./AppEmailInput.vue'),
        'radio': () => import ('./AppRadioInput.vue'),
      },
      data: '',
      dirty: false,
    };
  },
  methods: {
    async previousQuestion() {
      await this.$store.dispatch('FormStore/previousQuestion', { field: this.formField.slug, value: this.data })
    },
    async nextQuestion() {
      this.dirty = true;
      if (this.hasError) {
        return
      }

      if (this.formField.type == 'radio') {
        const { actions } = this.formField.logic
        const rules = actions.map(action => {
          const { type, data } =action.condition[0]
          return { type, enter: data.enter, exit: data.exit }
        })

        const foundRule = rules.find(rule => {
          if (rule.type === 'contain') {
            return this.data.toLowerCase().includes(rule.enter.toLowerCase())
          }
        })

        if (!foundRule) {
          return await this.$store.dispatch('FormStore/setSelectedThankyou', 'x6x10krziri5')
        }

        return await this.$store.dispatch('FormStore/setSelectedThankyou', foundRule.exit)
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
    errors() {
      const errors = {
        required: {
          condition: this.formField.options.required && (this.data === null || this.data === '' || this.data === undefined),
          message: 'Essa resposta é obrigatória.',
        },
        email: {
          condition: this.formField.type === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.data),
          message: 'Informe um E-mail válido.',
        },
      }

      return errors
    },
    hasError() {
      const errorKeys = Object.keys(this.errors)
      return errorKeys.map(key => {
        return (this.errors[key].condition)
      }).some(error => error)
    },
    firstError() {
      return Object.values(this.errors).find(error => error.condition === true);
    },
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

    &:hover {
      opacity: .9;
    }

    &--loading {
      cursor: none;
      opacity: .5;
    }
  }
}

.error {
  background: #d23;
  color: #fff;
  width: fit-content;
  padding: 3px 6px;
  margin-top: -20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 12px;
}
</style>
