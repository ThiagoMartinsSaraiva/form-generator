<template>
  <div class="input-container">
    <div class="input-container-field">
      <div class="input-container-field-label">
        <label class="input-container-field-label-main">{{ formField.value }}</label>
        <label class="input-container-field-label-secondary" v-if="formField.description[0]">{{ formField.description[0] }}</label>
      </div>
      <component :is="inputToRender" :field="formField" />
      <div class="input-container-button-container">
        <button class="button-container.button" v-html="buttonText"></button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AppInput",
  props: {
    formField: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      mappedInput: {
        'text': () => import ('./AppTextInput.vue'),
        'email': () => import ('./AppEmailInput.vue'),
        'radio': () => import ('./AppRadioInput.vue'),
        'thankyou': () => import ('./AppThankyouInput.vue'),
      }
    };
  },
  computed: {
    inputToRender() {
      return this.mappedInput[this.formField.type]
    },
    buttonText() {
      // 'Responder'
      return `<i class="fa-solid fa-check"></i>&nbsp; Enviar respostas`
    },
  }
};
</script>
<style lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-field {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 700px;
    width: 100%;

    &-label {
      display: flex;
      flex-direction: column;
      gap: 15px;
      &-main {
        font-size: 24px;
      }
      &-secondary {
        font-size: 16px;
        color: #263238;
      }
    }
  }

  &-button-container button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    background-color: #673AB7;
    color: white;
    border: 1px solid #333;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
