<template>
  <article class="card border rounded p-4 bg-white shadow-sm">
    <img v-if="project.image" :src="project.image" alt="" class="w-full h-40 object-cover rounded mb-3" />
    <h3 class="font-semibold text-lg">{{ project.title }}</h3>
    <p class="text-sm text-gray-600 mt-2">{{ project.description }}</p>
    <div class="mt-3 flex justify-between items-center">
      <div class="text-xs text-gray-500">{{ project.tech.join(' • ') }}</div>
      <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer" class="green">View</a>
    </div>
  </article>
</template>

<script>
export default {
  props: { project: { type: Object, required: true } },
}
</script>

<style scoped>
.card img { background: #f7f7f7 }
</style>
