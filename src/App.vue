<template>
  <div id="app">
    <router-link to="/">Helow</router-link>
    <router-link to="/Component1">List User</router-link>
    <router-link to="/Ujian">Ujian</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
