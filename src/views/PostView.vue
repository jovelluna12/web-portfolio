<template>
  <section class="px-6 py-12 max-w-3xl mx-auto">
    <div v-if="post">
      <h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
      <div class="text-sm text-gray-500 mb-6">{{ post.date }} • {{ post.tags.join(', ') }}</div>
      <article v-html="post.contentHtml" class="prose"></article>
    </div>
    <div v-else>
      <p>Post not found.</p>
    </div>
  </section>
</template>

<script>
import { getPostBySlug } from '../utils/posts'

export default {
  name: 'PostView',
  data() { return { post: null } },
  created() {
    const slug = this.$route.params.slug
    this.post = getPostBySlug(slug)
  }
}
</script>

<style scoped>
.prose img { max-width: 100%; }
</style>
