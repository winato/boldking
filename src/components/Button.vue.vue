<template>
  <button
    :type="type"
    v-bind="$attrs"
    :disabled="loading"
  >
    <slot v-if="!loading"/>
    <span v-else>
      Loading...
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="css">

</style>
