<template>
  <label>
    <span v-if="label">
      {{ label }}
    </span>
    <input
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      :name="name"
      v-bind="$attrs"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',

  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="css">

</style>
