<template>
  <header class="site-nav bg-white border-b">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-6">
      <div class="logo">
        <router-link to="/" class="site-title">Jovel Christer</router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
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
.site-nav { position: sticky; top: 0; z-index: 50; }
.site-title { font-family: Georgia, 'Times New Roman', serif; font-size: 1.15rem; color: #111 }
.nav-links a { margin-left: 16px; color: #555; text-decoration: none; font-size: 0.95rem }
.nav-links a.green { color: #0b6 }
.nav-links a:hover { color: #000 }
</style>
