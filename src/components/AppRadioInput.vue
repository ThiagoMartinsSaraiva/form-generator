<template>
  <div class="radio-container">
    <div v-for="item in field.items" :key="item.key" class="radio-container-input">
      <input type="radio"> {{ item.label }} 
    </div>
    <div class="radio-container-input">
      <input type="radio"> Outro...
    </div>
  </div>
</template>
<script>
export default {
  name: "AppRadioInput",
  props: {
    field: { type: Object, default: () => ({}) }
  },
  mounted() {
    console.log("componente foi montado");
  },
};
</script>
<style scoped lang="scss">
.radio-container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &-input {
    border: solid 1px #673AB7;
    padding: 8px;
    border-radius: 6px;
    font-size: 19px;
    color: #673AB7;
    cursor: pointer;

    &:hover {
      background-color: #673AB722;
    }
  }
}
</style>
