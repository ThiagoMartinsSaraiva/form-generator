<template>
  <div id="app">
      <AppForm :form-fields="fields" v-if="!selectedThankyou" />
      <AppThankyouInput v-else />
  </div>
</template>

<script>
import AppForm from "./components/AppForm.vue";
import AppThankyouInput from "./components/AppThankyouInput.vue";
import { getFormDataService } from './services/getFormDataService';

export default {
  name: "App",
  components: {
    AppForm,
    AppThankyouInput
  },
  async mounted() {
    const data = await getFormDataService.run()
    const { fields, head, style, options } = data
    const validFields = fields.filter(field => field.type !== 'thankyou')
    const thankyouFields = fields.filter(field => field.type === 'thankyou')
    this.$store.dispatch('FormStore/setFields', validFields)
    this.$store.dispatch('FormStore/setThankyouFields', thankyouFields)
    this.$store.dispatch('FormStore/setHead', head)
    this.$store.dispatch('FormStore/setStyle', style)
    this.$store.dispatch('FormStore/setOptions', options)
    document.title = head.title
  },
  computed: {
    fields() {
      return this.$store.getters["FormStore/getFields"]
    },
    selectedThankyou() {
      return this.$store.getters["FormStore/getSelectedThankyou"]
    },
    styles() {
      const state = this.$store.getters['FormStore/getState']
      return state.style
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  font-family: 'Lato', 'Helvetica', sans-serif;
}

button {
  cursor: pointer;
}
</style>
