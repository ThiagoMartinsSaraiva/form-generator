<template>
  <div class="radio-container">
    <label v-for="(item) in field.items" :key="item.key" :class="['radio-container-input', {'radio-container-input--active': item.label === data}]">
      <input type="radio" v-model="data" :value="item.label"> {{ item.label }}
    </label>
    <label class="radio-container-input radio-container-input--other">
      <input type="radio" v-model="data" :value="otherData"> <AppTextInput placeholer="Outro..." hide-border v-model="otherData" />
    </label>
  </div>
</template>
<script>
import AppTextInput from './AppTextInput.vue';

export default {
  name: "AppRadioInput",
  components: {
    AppTextInput,
  },
  data() {
    return {
      data: '',
      otherData: null,
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
    },
    otherData(value) {
      this.data = value
    },
  },
  computed: {
    styles() {
      const state = this.$store.getters['FormStore/getState']
      return state.style
    },
    faded() {
      return `${this.styles.color}22`
    }
  }
};
</script>
<style scoped lang="scss">
.radio-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  &-input {
    border: solid 1px v-bind('styles.questionColor');
    padding: 8px;
    border-radius: 6px;
    font-size: 19px;
    color: v-bind('styles.questionColor');
    cursor: pointer;

    &:hover {
      background-color: v-bind(faded);
    }

    &--active {
      background-color: v-bind(faded);
      font-weight: 700;
    }

    &--other {
      display: flex;
      gap: 5px;
      flex: 1;
    }
  }
}
</style>
