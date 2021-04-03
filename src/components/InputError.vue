<template>
  <span class="error">
    {{ errorText }}
  </span>
</template>

<script>
export default {
  name: 'InputError',

  props: {
    errorText: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>

.error {
  display: inline-block;
  margin-bottom: 5px;
  font-size: 12px;
  color: brown;
}

</style>
