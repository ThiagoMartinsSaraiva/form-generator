<template>
  <div class="form-container">
    <div class="form-container-input-container">
      <div v-for="(formField, index) in formFields" :key="formField.slug">
        <AppInput :formField="formField" v-if="index === currentField" />
      </div>
    </div>
  </div>
</template>
<script>
import AppInput from "./AppInput.vue";

export default {
  name: "AppForm",
  components: {
    AppInput,
  },
  props: {
    formFields: { type: [], default: () => ([]) }
  },
  data() {
    return {};
  },
  computed: {
    currentField() {
      return this.$store.getters["FormStore/getCurrentField"]
    },
    styles() {
      const state = this.$store.getters['FormStore/getState']
      return state.style
    },
    faded() {
      return `${this.styles.color}33`
    }
  }
};
</script>
<style lang="scss">
.form-container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;

  &-button-container {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    gap: 10px;
    
    button {
      border: none;
      outline: none;
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background: transparent;
      transition: color,background-color .2s linear;

      &:hover {
        color: v-bind('styles.color');
        background: v-bind(faded); 
      }

      i {
        font-size: 22px;
      }
    }
  }

  &-input-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
