<template>
  <label class="input-label">
    <span v-if="label">
      {{ label }}
    </span>
    <input
      class="input-field"
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

<style scoped>

.input-field {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 100%;
  margin-bottom: 3px;
  padding: 5px 7px;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
  font-size: 16px;
  box-shadow: none;
}

.input-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>
