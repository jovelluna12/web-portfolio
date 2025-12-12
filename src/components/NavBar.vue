<template>
  <header class="site-nav bg-white shadow-sm">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4">
      <div class="logo text-lg font-bold">
        <router-link to="/">Jovel</router-link>
      </div>
      <nav class="flex gap-4 items-center">
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contact" class="green">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.site-nav { position: sticky; top: 0; z-index: 40; }
.site-nav a { color: #0b6; text-decoration: none; }
</style>
