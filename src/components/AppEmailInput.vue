<template>
  <div>
    <input type="email" placeholder="exemplo@exemplo.com" class="email-input">
  </div>
</template>
<script>
export default {
  name: "AppEmailInput",
  props: {
    field: { type: Object, default: () => ({}) }
  },
  mounted() {
    console.log("componente foi montado");
  },
};
</script>
<style scoped lang="scss">
.email-input {
  border: none;
  border-bottom: 1px solid #673AB7;
  width: 100%;
  padding: 10px 0;
  font-size: 22px;
  color: #673AB7;
  font-weight: 400;

  &::placeholder {
    color: #673AB788;
  }
}
</style>
