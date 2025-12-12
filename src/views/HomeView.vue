<template>
  <section class="hero px-6 py-12 text-center">
    <HomeBanner />
  </section>

  <section class="featured px-6 py-10">
    <h2 class="text-2xl font-semibold mb-4">Featured Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in featured"
        :key="project.id"
        :project="project"
      />
    </div>
    <div class="mt-6 text-center">
      <router-link to="/projects" class="green">View all projects</router-link>
    </div>
  </section>
</template>

<script>
import HomeBanner from '../components/HomeBanner.vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects'

export default {
  components: { HomeBanner, ProjectCard },
  data() {
    return {
      featured: projects.slice(0, 3),
    }
  },
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
</style>