<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="css" scoped>
main {
  min-height: calc(100vh - 160px);
}

</style>