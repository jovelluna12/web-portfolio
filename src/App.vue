<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/jovelluna.svg" width="125" height="125" />
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style lang="css" scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>