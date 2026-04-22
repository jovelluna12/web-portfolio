<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A collection of projects I&apos;ve worked on, from WordPress sites to full-stack applications
        </p>
      </div>
      
      <div class="projects-grid">
        <article 
          v-for="(project, index) in projects" 
          :key="project.id" 
          class="project-card card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="project-image">
            <div class="project-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-tags">
              <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tag">{{ tech }}</span>
            </div>
            
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <a 
              v-if="project.link" 
              :href="project.link" 
              target="_blank" 
              rel="noreferrer"
              class="project-link"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '../data/projects'

export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.section {
  background: var(--background);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.section-subtitle {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.project-image {
  position: relative;
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, var(--card) 0%, rgba(59, 130, 246, 0.1) 100%);
  overflow: hidden;
}

.project-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
}

.project-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  line-height: 1.3;
}

.project-description {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  flex: 1;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: auto;
  padding-top: 8px;
  transition: gap 0.2s ease;
}

.project-link:hover {
  gap: 12px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-content {
    padding: 20px;
  }
}
</style>
