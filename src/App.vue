<template>
  <div class="app" id="app">
    <div class="container">
      <TheLogin/>
    </div>
  </div>
</template>

<script>
import TheLogin from './pages/TheLogin.vue'

export default {
  name: 'App',

  components: {
    TheLogin,
  }
}
</script>

<style>
@import './styles/normalize.css';

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
}
</style>
