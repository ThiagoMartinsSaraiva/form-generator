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
  data() {
    return {
      fields: [
        {
          description: [''],
          items: [],
          logic: {},
          options: {},
          position: 0,
          slug: '',
          type: '',
          validation: { required: false },
          value: '',
        }
      ],
      head: {
        title: '',
        description: '',
      },
      style: {
        background: [],
        bgColor: '',
        color: '',
        questionColor: '',
        textColor: ''
      },
      options: {}
    }
  },
  mounted() {
    const [data] = getFormDataService.run()
    const { fields, head, style, options } = data
    console.log(fields)
    console.log(head)
    console.log(style)
    console.log(options)
    this.fields = fields
    document.title = head.title
  },
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
