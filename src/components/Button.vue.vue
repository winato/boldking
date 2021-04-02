<template>
  <button
    :type="type"
    v-bind="$attrs"
    :disabled="loading"
    class="button"
    :class="{
      'button-wide': wide
    }"
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
    wide: {
      type: Boolean,
      default: false,
    },
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

<style lang="css" scoped>

.button {
  display: flex;
  padding: 7px 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin: 3px;
  border-radius: 3px;
  font-size: 16px;
  background-color: #70c1ff;
  border: 1px solid #70c1ff;
  text-align: center;
  justify-content: center;
}

.button.button-wide {
  width: 100%;
}

.button:hover {
  cursor: pointer;
}

</style>
