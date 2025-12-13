<template>
  <header class="site-nav bg-white border-b">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-6 relative">
      <div class="logo">
        <router-link to="/" class="site-title">Jovel Christer</router-link>
      </div>

      <button class="mobile-toggle" @click="toggleMobile" :aria-expanded="mobileOpen" aria-label="Toggle navigation">
        <span v-if="!mobileOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <nav :class="['nav-links', { open: mobileOpen }]">
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
  data() {
    return { mobileOpen: false }
  },
  methods: {
    toggleMobile() { this.mobileOpen = !this.mobileOpen }
  }
}
</script>

<style scoped>
.site-nav { position: sticky; top: 0; z-index: 50; }
.site-title { font-family: Georgia, 'Times New Roman', serif; font-size: 1.15rem; color: #111 }
.nav-links { display: flex; gap: 16px; align-items: center }
.nav-links a { color: #555; text-decoration: none; font-size: 0.95rem }
.nav-links a.green { color: #0b6 }
.nav-links a:hover { color: #000 }

.mobile-toggle { display: none; background: transparent; border: 1px solid transparent; padding: 6px; font-size: 18px }

@media (max-width: 900px) {
  .nav-links { gap: 12px }
}

@media (max-width: 640px) {
  .mobile-toggle { display: inline-flex; align-items: center; justify-content: center }
  .nav-links { display: none; position: absolute; right: 12px; top: 64px; background: white; padding: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); border-radius: 6px; flex-direction: column; min-width: 160px }
  .nav-links.open { display: flex }
  .nav-links a { padding: 6px 0 }
}
</style>
