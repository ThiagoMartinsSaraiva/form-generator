<template>
  <div class="radio-container">
    <label v-for="(item, index) in field.items" :key="item.key" class="radio-container-input">
      <input type="radio" v-model="data" :value="index"> {{ item.label }}
    </label>
    <label class="radio-container-input radio-container-input--other">
      <input type="radio" v-model="data" value="outro"> <AppTextInput placeholer="Outro..." hide-border @click.native="data = 'outro'" />
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
      data: 0
    }
  },
  props: {
    field: { type: Object, default: () => ({}) },
    value: { type: [Number, String], default: '' },
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
    isOtherSelected() {
      return this.data === 'outro'
    },
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

    &--other {
      display: flex;
      gap: 5px;
      flex: 1;
    }
  }
}
</style>
