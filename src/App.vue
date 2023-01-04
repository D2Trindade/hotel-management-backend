<template>
  <MainHeader />
  <MainNavBar />
  
  <router-view/>
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainNavBar from '@/components/MainNavBar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainNavBar,
    MainFooter
  }
}
</script>

<style>
#app {
  font: "Quicksand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  min-height: 100vh;
}

nav a {
  font-weight: bold;
}
</style>
