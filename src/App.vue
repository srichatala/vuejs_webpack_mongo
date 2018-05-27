<template>
  <div id="app">
    <lang-selector />
    <router-view/>
  </div>
</template>

<script>
import LangSelector from './components/LangSelector'
export default {
  name: 'App',
  components: {
    LangSelector
  }
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
