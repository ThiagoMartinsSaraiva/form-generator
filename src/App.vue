<template>
  <div id="app">
     <AppForm :form-fields="fields"  v-if="!selectedThankyou" />
     <div v-else class="submitted-form-container">
       <div v-for="thankyouField in thankyouFields" :key="thankyouField.slug">
        <div v-if="thankyouField.slug === selectedThankyou" class="submitted-form-container-label">
          <div class="submitted-form-container-label-main">
            <i class="fa-solid fa-paper-plane submitted-form-container-label-main-icon"></i>
          </div>
          <div class="submitted-form-container-label-main">
            {{  thankyouField.value  }}
          </div>
          <div class="submitted-form-container-label-secondary">
            {{ thankyouField.description[0] }}
          </div>
        </div>
      </div>
     </div>
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
    thankyouFields() {
      return this.$store.getters["FormStore/getThankyouFields"]
    },
    selectedThankyou() {
      return this.$store.getters["FormStore/getSelectedThankyou"]
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

.submitted-form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;

  &-label {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &-main {
      font-size: 24px;
      color: v-bind('styles.textColor');
      &-icon {
        font-size: 62px;
      }
    }
    &-secondary {
      font-size: 16px;
      color: v-bind('styles.textColor');
    }
  }
}

</style>
