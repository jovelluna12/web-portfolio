<template>
  <aside class="sidebox">
    <section class="about-excerpt mb-6">
      <h3 class="text-lg font-semibold">About</h3>
      <p class="text-sm text-gray-700 mt-2">I'm a web developer building accessible and performant websites. This sidebar mirrors a classic Jekyll sidebar.</p>
      <router-link to="/about" class="block mt-3 green">Read more →</router-link>
    </section>

    <section class="recent-posts">
      <h4 class="text-sm font-medium">Recent posts</h4>
      <ul class="mt-2 text-sm space-y-2">
        <li v-for="p in recent" :key="p.slug">
          <router-link :to="`/blog/${p.slug}`">{{ p.title }}</router-link>
          <div class="text-xs text-gray-500">{{ p.date }}</div>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { getPosts } from '../utils/posts'

export default {
  name: 'Sidebar',
  data() {
    return { recent: [] }
  },
  created() {
    this.recent = getPosts().slice(0, 5)
  }
}
</script>

<style scoped>
.sidebox { border-left: 1px solid #eee; padding-left: 18px }
.about-excerpt h3 { margin-bottom: 0.25rem }
.recent-posts a { color: inherit }
</style>
