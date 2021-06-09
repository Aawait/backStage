<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

import Login from 'views/Login'

export default {
    name: "App",
    components: {
      Login
    }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
</style>
