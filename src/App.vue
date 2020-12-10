<template>
  <div id="app">
    <CounterMouse />
  </div>
</template>

<script>
import CounterMouse from './components/CounterMouse.vue'

export default {
  name: 'App',
  components: {
    CounterMouse
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
