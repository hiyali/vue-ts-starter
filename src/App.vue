<template>
  <div id="app">
    <div class="flex-box">
      <span>1</span>
      <span>2</span>
    </div>
    <img src="./assets/images/logo.png">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="stylus">
  @import './assets/styles/mixin.styl'

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top r(60)
  .flex-box
    flex-direction column
</style>
