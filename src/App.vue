<style>
</style>

<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import CreateEvent from './components/CreateEvent'
import MyHeader from './components/MyHeader'
export default {
  created () {
    console.log('Created!')
  },
  data: () => ({
  }),
  components: {
    MyHeader
  }
}
</script>
