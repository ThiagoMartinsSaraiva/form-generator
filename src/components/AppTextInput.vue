<template>
  <div class="wrapper">
    <input type="text" :placeholder="placeholer" :class="['text-input', { 'text-input--hide-border': hideBorder } ]" v-model="data">
  </div>
</template>
<script>
export default {
  name: "AppTextInput",
  data() {
    return {
      data: '',
    };
  },
  props: {
    field: { type: Object, default: () => ({}) },
    placeholer: { type: String, default: 'Sua resposta...' },
    hideBorder: { type: Boolean, default: false },
    value: { type: String, default: '' }
  },
  watch: {
    value: {
      handler(value) {
        this.data = value
      },
      immediate: true,
    },
    data(data) {
      this.$emit('input', data)
    }
  },
  computed: {
    styles() {
      const state = this.$store.getters['FormStore/getState']
      return state.style
    },
    faded() {
      return `${this.styles.color}88`
    }
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  flex: 1;
}
.text-input {
  border: none;
  border-bottom: 1px solid v-bind('styles.questionColor');
  width: 100%;
  font-size: 22px;
  color: v-bind('styles.questionColor');
  font-weight: 400;
  flex: 1;
  background: transparent;

  &--hide-border {
    border-color: transparent;
  }

  &:focus {
    border-color: v-bind('styles.questionColor');
  }

  &::placeholder {
    color: v-bind(faded);
  }

  
}
</style>
