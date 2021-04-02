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

<style lang="css" scoped>

.error {
  display: inline-block;
  color: brown;
  margin-bottom: 5px;
}

</style>
