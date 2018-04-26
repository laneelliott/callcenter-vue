<template>
  <div id="app">
    <route-toggle></route-toggle>
    <router-view></router-view>
  </div>
</template>

<script>
import RouteToggle from './components/RouteToggle'

export default {
  name: 'App',
  components: {
    'route-toggle': RouteToggle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
