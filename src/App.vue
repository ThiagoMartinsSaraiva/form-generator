<template>
  <div id="app">
     <AppForm :form-fields="fields" />
  </div>
</template>

<script>
import AppForm from "./components/AppForm.vue";
import { getFormDataService } from './services/getFormDataService';

export default {
  name: "App",
  components: {
    AppForm,
  },
  async mounted() {
    const data = await getFormDataService.run()
    const { fields, head, style, options } = data
    const validFields = fields.filter(field => field.type !== 'thankyou')
    const thankyouFields = fields.filter(field => field.type === 'thankyou')
    this.$store.dispatch('FormStore/updateFields', validFields)
    this.$store.dispatch('FormStore/setThankyouFields', thankyouFields)
    this.$store.dispatch('FormStore/updateHead', head)
    this.$store.dispatch('FormStore/updateStyle', style)
    this.$store.dispatch('FormStore/updateOptions', options)
    document.title = head.title
  },
  computed: {
    fields() {
      return this.$store.getters["FormStore/getFields"]
    },
    isThankyou() {
      return this.$store.getters["FormStore/isThankyou"]
    },
    thankyouResponse() {
      const formData = this.$store.getters["FormStore/getFormData"]
      const radio = this.fields.find(a => a.type === 'radio')

      if (radio) {
        const radioValue = formData[radio.slug]

        return radio.logic.actions[radioValue].condition[0].data.exit
      }
      return ''
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
