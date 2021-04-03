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

<style scoped>

.button {
  display: flex;
  justify-content: center;
  padding: 7px 30px;
  margin-bottom: 3px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 3px;
  font-size: 16px;
  background-color: #70c1ff;
  border: 1px solid #70c1ff;
  text-align: center;  
  transition: all .1s ease-in-out;
}

.button.button-wide {
  width: 100%;
}

.button:hover {
  cursor: pointer;
  background-color: #61aee8;
  border-color: #61aee8;
}

</style>
