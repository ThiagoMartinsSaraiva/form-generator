<template>
  <div class="submitted-form-container">
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
</template>
<script>
export default {
  name: "AppThankyouInput",
  data() {
    return {};
  },
  computed: {
    thankyouFields() {
      return this.$store.getters["FormStore/getThankyouFields"]
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
<style scoped lang="scss">
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
