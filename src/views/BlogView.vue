<template>
  <section class="px-6 py-12 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>
    <div v-if="posts.length">
      <ul class="space-y-6">
        <li v-for="p in posts" :key="p.slug" class="border-b pb-4">
          <router-link :to="`/blog/${p.slug}`" class="text-xl font-semibold">{{ p.title }}</router-link>
          <div class="text-sm text-gray-500">{{ p.date }} — <span v-if="p.tags.length">{{ p.tags.join(', ') }}</span></div>
          <p class="mt-2 text-gray-700">{{ p.excerpt }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-gray-600">No posts yet — write a markdown file in <code>src/posts</code>.</p>
    </div>
  </section>
</template>

<script>
import { getPosts } from '../utils/posts'

export default {
  name: 'BlogView',
  data() {
    return { posts: [] }
  },
  created() {
    this.posts = getPosts()
  }
}
</script>

<style scoped>
</style>
