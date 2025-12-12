<template>
  <div class="site-root">
    <NavBar />

    <div class="container">
      <main class="content">
        <slot />
      </main>
      <aside class="sidebar">
        <Sidebar />
      </aside>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'

export default {
  components: { NavBar, Footer, Sidebar },
}
</script>

<style scoped>
.container {
  max-width: var(--max-content-width);
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  align-items: start;
}
.content { background: transparent }
.sidebar { position: relative }

@media (max-width: 900px) {
  .container { grid-template-columns: 1fr; padding: 0 1rem }
  .sidebar { order: 2 }
}
</style>
