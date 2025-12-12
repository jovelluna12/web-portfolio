<template>
  <section class="px-6 py-12 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Projects</h1>
    <div class="projects-grid">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects'

export default {
  components: { ProjectCard },
  data() {
    return { projects }
  },
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}
</style>
