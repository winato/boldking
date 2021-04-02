<template>
  <div id="app">
    <div class="container">
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from './pages/Login.vue'

export default {
  name: 'App',

  components: {
    Login,
  }
}
</script>

<style>
@import './styles/normalize.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
