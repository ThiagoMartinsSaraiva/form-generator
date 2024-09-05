<template>
  <div class="form-container">
    <div class="form-container-input-container">
      <div v-for="(formField, index) in formFields" :key="formField.slug">
        <AppInput :formField="formField" v-if="index === currentField" />
      </div>
    </div>
    <div class="form-container-button-container">
      <button @click="previousQuestion"><i class="fa-solid fa-arrow-up"></i></button>
      <button @click="nextQuestion"><i class="fa-solid fa-arrow-down"></i></button>
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
  methods: {
    async previousQuestion() {
      await this.$store.dispatch('FormStore/previousQuestion')
    },
    async nextQuestion() {
      await this.$store.dispatch('FormStore/nextQuestion')
    }
  },
  mounted() {
    console.log(this.$store.getters["FormStore/getCurrentField"])
    console.log(this.$store.getters["FormStore/getFieldCount"])
  },
  computed: {
    currentField() {
      return this.$store.getters["FormStore/getCurrentField"]
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
        color: #673AB7;
        background: #673AB733; 
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
