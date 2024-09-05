<template>
  <div>
    <input type="email" placeholder="exemplo@exemplo.com" class="email-input" v-model="data">
  </div>
</template>
<script>
export default {
  name: "AppEmailInput",
  data() {
    return {
      data: '',
    }
  },
  props: {
    field: { type: Object, default: () => ({}) },
    value: { type: String, default: '' },
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
.email-input {
  border: none;
  border-bottom: 1px solid v-bind('styles.color');
  width: 100%;
  padding: 10px 0;
  font-size: 22px;
  color:  v-bind('styles.color');
  font-weight: 400;

  &::placeholder {
    color: v-bind(faded);
  }
}
</style>
