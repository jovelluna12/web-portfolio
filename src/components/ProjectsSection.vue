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
          @click="openProject(project)"
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
            
            <button class="project-link">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </article>
      </div>
      
      <!-- Project Modal -->
      <Teleport to="body">
        <div v-if="selectedProject" class="project-modal" @click.self="closeProject">
          <article class="project-modal-content">
            <button class="close-btn" @click="closeProject" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <header class="project-modal-header">
              <div class="project-meta">
                <span v-if="selectedProject.role" class="project-role">{{ selectedProject.role }}</span>
                <span v-if="selectedProject.duration" class="project-duration">{{ selectedProject.duration }}</span>
              </div>
              <h1 class="project-modal-title">{{ selectedProject.title }}</h1>
              <div class="project-tech-list">
                <span v-for="tech in selectedProject.tech" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </header>
            
            <div class="project-modal-body">
              <div class="project-full-description">
                <p v-for="(paragraph, idx) in formatDescription(selectedProject.fullDescription || selectedProject.description)" :key="idx">
                  {{ paragraph }}
                </p>
              </div>
              
              <div v-if="selectedProject.highlights && selectedProject.highlights.length" class="project-highlights">
                <h3 class="highlights-title">Key Highlights</h3>
                <ul class="highlights-list">
                  <li v-for="highlight in selectedProject.highlights" :key="highlight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {{ highlight }}
                  </li>
                </ul>
              </div>
              
              <div class="project-actions">
                <a 
                  v-if="selectedProject.link" 
                  :href="selectedProject.link" 
                  target="_blank" 
                  rel="noreferrer"
                  class="btn btn-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  View Project
                </a>
                <button class="btn btn-secondary" @click="closeProject">
                  Close
                </button>
              </div>
            </div>
          </article>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script>
import projects from '../data/projects'

export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects,
      selectedProject: null
    }
  },
  methods: {
    openProject(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeProject() {
      this.selectedProject = null
      document.body.style.overflow = ''
    },
    formatDescription(description) {
      if (!description) return []
      return description.split('\n\n').filter(p => p.trim())
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
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
  background: none;
  border: none;
  cursor: pointer;
}

.project-link:hover {
  gap: 12px;
}

/* Project Modal */
.project-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 24px;
  overflow-y: auto;
}

.project-modal-content {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  max-width: 720px;
  width: 100%;
  position: relative;
  animation: slide-up 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  z-index: 10;
}

.close-btn:hover {
  background: var(--card-border);
  color: var(--foreground);
}

.project-modal-header {
  padding: 40px 40px 24px;
  border-bottom: 1px solid var(--card-border);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.project-role {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

.project-duration {
  font-size: 0.8rem;
  color: var(--muted);
}

.project-duration::before {
  content: '•';
  margin-right: 12px;
}

.project-modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  color: var(--foreground);
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-modal-body {
  padding: 32px 40px 40px;
}

.project-full-description {
  margin-bottom: 32px;
}

.project-full-description p {
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 16px;
  white-space: pre-line;
}

.project-full-description p:last-child {
  margin-bottom: 0;
}

.project-highlights {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
}

.highlights-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--foreground);
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.highlights-list li svg {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 2px;
}

.project-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-secondary {
  background: var(--card-border);
  color: var(--foreground);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-content {
    padding: 20px;
  }
  
  .project-modal {
    padding: 20px 16px;
  }
  
  .project-modal-header {
    padding: 32px 24px 20px;
  }
  
  .project-modal-body {
    padding: 24px;
  }
  
  .project-modal-title {
    font-size: 1.5rem;
  }
  
  .project-highlights {
    padding: 20px;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .btn {
    justify-content: center;
    width: 100%;
  }
}
</style>
